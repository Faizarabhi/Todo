  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import { Provider } from 'react-redux'
  import { RouterProvider } from 'react-router-dom'
  import  store  from './lib/store'
  import router from './routes/router'
  import AuthProvider from './features/auth/AuthProvider'
  import './index.css'
  import { ThemeProvider } from './layouts/ThemeProvider'

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <AuthProvider>
          <ThemeProvider>
          <RouterProvider router={router} />
          </ThemeProvider>
        </AuthProvider>
      </Provider>
    </React.StrictMode>
  )
