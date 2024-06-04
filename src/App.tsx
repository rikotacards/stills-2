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
import { AccountPage } from './pages/AccountPage';
import { Auth0Provider } from '@auth0/auth0-react';
const router = createBrowserRouter([
  {
    path: '/',
    element: <><Layout /></>,
    children: [
      {
        path: '',
        element: <ProfilePage />
      },
      {
        path: '/create',
        element: <AddNewPostSteps />
      },
      {
        path: '/drafts',
        element: <DraftsPage />
      },
      {
        path: '/account',
        element: <AccountPage />
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
        <Auth0Provider
         domain="dev-l5gnjo4j.us.auth0.com"
         clientId="ZDJz6vicTNMhGedZoBiSURahbJ3bznup"
         authorizationParams={{
           redirect_uri: window.location.origin
         }}
        >
        <NewPostProvider>

          <DrawerProvider>

            <RouterProvider router={router} />
          </DrawerProvider>
        </NewPostProvider>
        </Auth0Provider>
      </ThemeProvider>

    </>
  )
}

export default App
