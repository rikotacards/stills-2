import { deleteDoc, getDocs, doc, collection, serverTimestamp, setDoc } from "firebase/firestore";
import { UID, db } from "./firebaseConfig";
import { PostResponse } from "./drafts";
import { uploadImage } from "./image";

export interface NewPostProps {
    authorID: string;
    slides: {
        caption: string;
        imagePath: FileList | null;
    }[]
}
export const addPost = async (isDraft: boolean, args: NewPostProps) => {
    // get the post ID first, used for storing images per post ID in storage
    const {id } = doc(collection(db, "users", args.authorID, isDraft?"drafts":"posts"))
    const docId = id
    
    // upload images
    const slidesWithFullImagePath: {caption: string, imagePath: string}[] = [];
    await Promise.all(args.slides.map(async(slide) => {
        if(!slide.imagePath || slide.imagePath.length === 0){
            return;
        }
        const path = `${args.authorID}/${docId}/${slide.imagePath[0].name}`
        
     const imageUrl = await uploadImage(path, slide.imagePath[0])
     slidesWithFullImagePath.push({caption: slide.caption || '', imagePath: imageUrl || ''})
     
    }))
    const postToUpload = {
        ...args, 
        slides: slidesWithFullImagePath,
        createdAt: serverTimestamp(),

    }
    
    await setDoc(doc(collection(db, "users", UID, isDraft? "drafts" : "posts"), docId), postToUpload)
    return
}

export const deletePost = async (isDraft: boolean, postId: string) => {
    try {
        await deleteDoc(doc(db, "users", UID, isDraft ?"drafts": "posts", postId))
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