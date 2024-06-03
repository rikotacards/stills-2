import { deleteDoc, doc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "./firebaseConfig"

export const follow = async (args: {myUid: string, otherUid: string}) => {
   try {
    await setDoc(doc(db, "users", args.myUid, "followings", args.otherUid), {followedOn: serverTimestamp()})
    await setDoc(doc(db, "users", args.otherUid, "followers", args.myUid), {followedOn: serverTimestamp()})

} catch (e){
    alert(e)
   }
}

export const unfollow = async (args: {myUid: string, otherUid: string}) => {
    try {
     await deleteDoc(doc(db, "users", args.myUid, "followings", args.otherUid))
     await deleteDoc(doc(db, "users", args.otherUid, "followers", args.myUid))
 
 } catch (e){
     alert(e)
    }
 }

 export const updateBio = async (args: {myUid: string, bio: string}) => {
    try {
     await setDoc(doc(db, "users", args.myUid), {bio: args.bio}, {merge: true})
 
 } catch (e){
     alert(e)
    }
 }
 export const updatePrivacy = async (args: {myUid: string, isPrivate: boolean}) => {
    try {
        console.log(args.isPrivate)
     await setDoc(doc(db, "users", args.myUid), {isPrivate: args.isPrivate}, {merge: true})
 
 } catch (e){
     alert(e)
    }
 }



 