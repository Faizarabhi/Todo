import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './lib/store'
import router from './routes/router'
import AuthProvider from './features/auth/AuthProvider'
import './index.css'

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  )
}

export default App