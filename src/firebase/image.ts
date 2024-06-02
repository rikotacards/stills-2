import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();
export const uploadImage = async (path: string, data: Blob | Uint8Array | ArrayBuffer) => {
    try {
        const storageRef = ref(storage, path);
        await uploadBytes(storageRef, data)
        const imageUrl = await getDownloadURL(storageRef)
        return imageUrl
    } catch (e){
        alert(e)
    }
}