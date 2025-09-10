import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import { CartProvider } from 'contexts/CartContext.tsx'
import Modal from "react-modal";
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { ToastContainer } from 'react-toastify';

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { AuthProvider } from 'contexts/AuthContext.tsx'

Modal.setAppElement("#root");

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <AuthProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <ToastContainer/>
        </CartProvider>
      </AuthProvider>
    </StrictMode>,
  )
}
