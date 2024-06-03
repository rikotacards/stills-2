import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme } from '@mui/material'

import { AddNewPostSteps } from './components/AddNewPostSteps';
import { Layout } from './components/Layout';
import { DraftsPage } from './pages/DraftsPage';
import { ProfilePage } from './pages/ProfilePage';
import { DrawerProvider } from './providers/DrawerProvider';
import { NewPostProvider } from './providers/NewPostProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Layout/></>,
    children: [
      {
        path: '',
        element: <ProfilePage/>
      },
      {
        path: '/create',
        element: <AddNewPostSteps/>
      },
      {
        path: '/drafts',
        element: <DraftsPage/>
      }
    ]
  }
])

const darkTheme = createTheme({
  typography: {
    // fontFamily: ['Roboto'].join(',')
  },
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
      paper: '#000'
    }
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <NewPostProvider>

        <DrawerProvider>

        <RouterProvider router={router} />
        </DrawerProvider>
        </NewPostProvider>
      </ThemeProvider>

    </>
  )
}

export default App
