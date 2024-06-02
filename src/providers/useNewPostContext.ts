import React from 'react';
import { NewPostContext } from './NewPostProvider';
export const useNewPostContext = () => React.useContext(NewPostContext);