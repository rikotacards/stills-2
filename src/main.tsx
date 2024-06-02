import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NewPostProvider } from './providers/NewPostProvider.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NewPostProvider>

    <App />
    </NewPostProvider>
  </React.StrictMode>,
)
