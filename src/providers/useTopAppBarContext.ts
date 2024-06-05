import React from 'react';
import { TopAppBarContext } from './TopAppBarProvider';
export const useTopAppBarContext = () => React.useContext(TopAppBarContext);
