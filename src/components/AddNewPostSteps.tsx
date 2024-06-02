import React from 'react';
import { AddPostInputContainer } from './AddPostInputContainer';
import { PreviewPage } from '../pages/PreviewPage';

export const AddNewPostSteps: React.FC = () => {
    const [step, setStep] = React.useState(0);
    const onNext = () => {
        setStep((p) => p+1);
    }
    const onBack = () => {
        if(step >= 0){
            setStep((p) => p-1)
        }
    }
    const steps = [
        <AddPostInputContainer onNext={onNext} key={0}/>, 
        <PreviewPage onBack={onBack} key={1}/>
    ]
    return (
        <>
        {steps[step]}
        </>
    )
}