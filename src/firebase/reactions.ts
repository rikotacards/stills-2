import { setDoc,  deleteDoc, getDocs, doc, collection, increment } from "firebase/firestore";
import {  db } from "./firebaseConfig";
import { PostResponse } from "./drafts";

export interface AddReactionProps {
    reactionAuthorId: string;
    postId: string;
    postAuthorId: string;
    emojiId: string;
    emoji: string;
}
export const addReaction = async (args: AddReactionProps) => {
    const user = await setDoc(doc(db, "reactions", args.postId, 'emojis', args.emojiId, "users", args.reactionAuthorId), {})

    await setDoc(doc(db, "reactions", args.postId, 'emojis', args.emojiId), {count: increment(1)}, {merge: true})
    
    // const set = await setDoc(doc(db, "users", args.postAuthorId, "posts", args.postId,"reactions", args.emojiId ), {emoji: args.emoji})
    // await setDoc(doc(db, "users", args.postAuthorId, "posts", args.postId,"reactions", args.emojiId, "users", args.authorId), {liked: true})
    return user
}
export const removeReaction = async (args: {reactionAuthorId: string, postId: string, emojiId: string}) => {
    const user = await deleteDoc(doc(db, "reactions", args.postId, 'emojis', args.emojiId, "users", args.reactionAuthorId))

    await setDoc(doc(db, "reactions", args.postId, 'emojis', args.emojiId), {count: increment(-1)}, {merge: true})
    
    // const set = await setDoc(doc(db, "users", args.postAuthorId, "posts", args.postId,"reactions", args.emojiId ), {emoji: args.emoji})
    // await setDoc(doc(db, "users", args.postAuthorId, "posts", args.postId,"reactions", args.emojiId, "users", args.authorId), {liked: true})
    return user
}
export const getReactions = async(args: {postId: string}) => {
    try {
        const querySnapshot = await getDocs(collection(db, "reactions", args.postId, 'emojis'))
        const res: PostResponse[] = [];
        querySnapshot.forEach((d) => {
            res.push({ ...d.data(), id: d.id } as PostResponse)
        })
        return res
    } catch (e) {
        alert(e)
    }
}




export const getPosts = async (isDraft: boolean, uid: string) => {
    try {
        const querySnapshot = await getDocs(collection(db, "users", uid, isDraft ?'drafts': 'posts'))
        const res: PostResponse[] = [];
        querySnapshot.forEach((d) => {
            res.push({ ...d.data(), id: d.id } as PostResponse)
        })
        return res
    } catch (e) {
        alert(e)
    }
}