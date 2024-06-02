import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper'

interface NewPostContextProps {
    slides: {moveSlide: (dragIndex:number, hoverIndex: number) => void, id: string}[];
    addInput: () => void;
    deleteInput:(index: number, id: string) => void;
    onCaptionChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => void;
    captions: {[id: string]: string};
    onImagePathChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    imagePaths: {[id: string]: FileList | null};
    onSaveDraft: () => Promise<void>
    slidesWithImageAndCaption: {caption: string, imagePath: FileList | null}[]
    onPost: () => Promise<string | undefined>;
}

export const NewPostContext = React.createContext({} as NewPostContextProps)

export interface Slide {
    imagePath: FileList | null;
    caption: string;
    id: string;
    moveSlide: (dragIndex: number, hoverIndex: number) => void,
}
import { v4 as uuidv4 } from 'uuid';
import { UID } from '../firebase/firebaseConfig';
import { addPost } from '../firebase/post';

interface NewPostProviderProps {
    children: React.ReactNode;
}
export const NewPostProvider: React.FC<NewPostProviderProps> = ({children}) => {
    const [captions, setCaptions] = React.useState({} as {[id: string]: string})
    const [slideFiles, setSlideFiles] = React.useState({} as {[id: string]: FileList| null})

    const onCaptionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => {
        setCaptions((prev) => ({...prev, [id]: e.target.value}))
    }
    const onImagePathChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        if(!e.target?.files?.length){
            return;
        }
        setSlideFiles((prev) => ({...prev, [id]: e.target.files}))
    }
    const moveSlide = React.useCallback((dragIndex: number, hoverIndex: number) => {
        setSlides((prevCards: {moveSlide: (dragIndex:number, hoverIndex: number) => void, id: string}[]) =>
          update(prevCards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex] as Slide],
            ],
          }),
        )
      }, [])

    const [slides, setSlides] = React.useState<{moveSlide: (dragIndex: number, hoverIndex: number) => void, id: string}[]>([{moveSlide, id: uuidv4()}])

  console.log(slides)
    //   const renderCard = React.useCallback(
    //     (card: Slide, index: number) => {
    //       return (
    //         <AddPostInput
    //           key={card.id}
    //           index={index}
    //           id={card.id}
    //           moveSlide={moveSlide}
    //         />
    //       )
    //     },
    //     [],
    //   )

    const addInput = React.useCallback(() => {
        setSlides((prev) => [...prev, {moveSlide, id: uuidv4()}])
    }, [])

    const deleteInput = (index: number, id: string) => {
        if(slides.length === 1){
            return;
        }

        setCaptions((prev) => {
            const updated = {...prev}
            delete updated[id]
            return updated
        })

        setSlides((prev) => {
            const newList: {moveSlide: (dragIndex:number, hoverIndex: number) => void, id: string}[] = []; 
            prev.map((res, i) => {
                if(i !== index){
                    newList.push(res)
                }
            })
            return newList
        })
    }
    const slidesCombined = slides.map((s) => ({caption: captions[s.id], imagePath: slideFiles[s.id]})).filter((s) => !!s.imagePath)
    
    const onSaveDraft = async() => {
        try {
         const res =   await addPost(true, {
                authorID: UID,
                slides: slidesCombined
            })
            return res
        } catch (e){
            alert(e)
        }
    }
    const onPost = async() => {
        try {
         const res =   await addPost(false, {
                authorID: UID,
                slides: slidesCombined
            })
            console.log('POSTRES', res)
            return res
        } catch (e){
            alert(e)
        }
    }

    console.log('captions', captions)

    const value = {
        slides,
        addInput, 
        captions,
        onCaptionChange,
        deleteInput,
        onSaveDraft,
        imagePaths: slideFiles,
        onImagePathChange,
        onPost,
        slidesWithImageAndCaption: slidesCombined
    }

    return (
        <NewPostContext.Provider value={value}>
            <DndProvider backend={HTML5Backend}>
            
            {children}
            </DndProvider>

        </NewPostContext.Provider>
    )
}