import { deleteDoc, getDocs, doc, addDoc, collection, serverTimestamp} from "firebase/firestore";
import {  db } from "./firebaseConfig";
import { PostResponse } from "./drafts";

export interface CommentProps {
    comment: string;
    commentAuthorId: string;
    postAuthorId: string;
    postId: string
}
export const addComment = async ( args: CommentProps) => {
    const newComment = {
        commentAuthorId: args.commentAuthorId,
        comment: args.comment,
        createdAt: serverTimestamp(),
    }
    const docRef = await addDoc(collection(db, "users", args.commentAuthorId, "posts", args.postId, "comments"), newComment)
    return docRef.id
}
interface DeleteCommentProps {
    postAuthorId: string; 
    postId: string;
    commentId: string
}
export const deleteComment = async (args: DeleteCommentProps) => {
    
    try {
        await deleteDoc(doc(db, "users", args.postAuthorId, args.postId, "comments", args.commentId))
    } catch (e) {
        alert(e)
    }
}

interface GetCommentsProps {
    postAuthorId: string;
    postId: string
}
export const getComments = async (args: GetCommentsProps) => {
    try {
        const querySnapshot = await getDocs(collection(db, "users", args.postAuthorId, "posts", args.postId))
        const res: PostResponse[] = [];
        querySnapshot.forEach((d) => {
            res.push({ ...d.data(), id: d.id } as PostResponse)
        })
        return res
    } catch (e) {
        alert(e)
    }
}