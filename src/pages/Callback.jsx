import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'

export default function Callback() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()
        
        if (error) throw error
        
        if (data.session) {
          dispatch(setUser({ user: data.session.user, session: data.session }))
          navigate('/dashboard')
        } else {
          navigate('/login')
        }
      } catch (error) {
        console.error('Authentication error:', error.message)
        navigate('/login')
      }
    }

    handleAuth()
  }, [navigate, dispatch])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Authenticating...</h2>
          <p className="mt-4 text-gray-600">Please wait while we verify your credentials</p>
          <div className="mt-6">
            <div className="w-16 h-16 mx-auto border-t-2 border-b-2 border-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  )
}