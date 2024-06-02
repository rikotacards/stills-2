import React from 'react';
import { getReactions } from '../firebase/reactions';

interface ReactionsProps {
    postId: string
}
export const Reactions:React.FC<ReactionsProps> = ({postId}) => {

    React.useEffect(() => {
        getReactions({postId}).then((res) => {
            console.log(res)
        })
    }, [])
    return (
        <>
        </>
    )
}