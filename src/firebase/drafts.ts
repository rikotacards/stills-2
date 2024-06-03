import {  updateDoc, deleteDoc, getDocs, doc, addDoc, collection, serverTimestamp, FieldValue, Timestamp } from "firebase/firestore";
import { UID, db } from "./firebaseConfig";
import { NewPostProps } from "./post";


export const addDraft = async (args: NewPostProps) => {
    const draft = {
        ...args,
        createdAt: serverTimestamp(),

    }
    const docRef = await addDoc(collection(db, "users", UID, "drafts"), draft)
    return docRef.id
}
export const deleteDraft = async (draftId: string) => {
    try {
        await deleteDoc(doc(db, "users", UID, "drafts", draftId))
    } catch (e) {
        alert(e)
    }
}

export const updateDraft = async (draftId: string, update: { caption: string, imagePath: string }[]) => {
    try {
        const docRef = await updateDoc(doc(db, "users", UID, "drafts", draftId), { slides: update, updatedAt: serverTimestamp() })
        return docRef
    } catch (e) {
        alert(e)
    }
}

export interface PostResponse {
    authorID: string;
    createdAt: Timestamp;
    id: string;
    slides: {caption: string, imagePath: string}[]
}
export const getDrafts = async (uid: string) => {
    try {
        const querySnapshot = await getDocs(collection(db, "users", uid, 'drafts'))
        const res: PostResponse[] = [];
        querySnapshot.forEach((d) => {
            res.push({ ...d.data(), id: d.id } as DraftResponse)
        })
        return res
    } catch (e) {
        alert(e)
    }
}