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
  palette: {
    mode: 'dark',
    // background: {
    //   default: '#000',
    //   paper: '#000'
    // }
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>

    </>
  )
}

export default App
