import { Box, IconButton, TextField } from '@mui/material';
import React from 'react';
import { useNewPostContext } from '../providers/useNewPostContext';
interface AddPostInputProps {
    index: number;
    id: string;
    moveSlide: (dragIndex: number, hoverIndex: number) => void;
}
import type { Identifier, XYCoord } from 'dnd-core'

import { DragSourceMonitor, useDrag, useDrop } from 'react-dnd'
import ClearIcon from '@mui/icons-material/Clear';
interface DragItem {
    index: number
    id: string
    type: string
}
const style = {
    border: '1px solid gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    cursor: 'move',
}
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import { AddImage } from './AddImage';
export const AddPostInput: React.FC<AddPostInputProps> = ({ id, index, moveSlide }) => {
    const { deleteInput, onCaptionChange, captions } = useNewPostContext();
    const ref = React.useRef<HTMLDivElement>(null)
    const [{ handlerId }, drop] = useDrop<
        DragItem,
        void,
        { handlerId: Identifier | null }
    >({
        accept: 'card',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return
            }

            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            // Get vertical middle
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            // Determine mouse position
            const clientOffset = monitor.getClientOffset()

            // Get pixels to the top
            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            // Time to actually perform the action
            moveSlide(dragIndex, hoverIndex)

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex
        },
    })

    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: () => {
            return { id, index }
        },
        collect: (monitor: DragSourceMonitor<{
            id: string;
            index: number;
        }, unknown>) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return (
        <div ref={ref} data-handler-id={handlerId} style={{ ...style, opacity }}>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box mr={0}>
                    <DragIndicatorIcon />
                </Box>
                <AddImage slideId={id} />

                <Box>
                    <TextField value={captions[id]} onChange={(e) => onCaptionChange(e, id)} multiline />
                </Box>
                <IconButton onClick={() => deleteInput(index, id)}>
                    <ClearIcon />
                </IconButton>

            </Box>
        </div>
    )
}