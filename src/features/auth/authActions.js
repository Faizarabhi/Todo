import { supabase } from '../../lib/supabaseClient'
import { setUser, setLoading } from './authSlice'

export const checkAuth = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const { data: { session }, error } = await supabase.auth.getSession()
    
    if (error) throw error
    if (session) {
      dispatch(setUser({ user: session.user, session }))
    }
  } catch (error) {
    console.error('Erreur auth:', error.message)
  } finally {
    dispatch(setLoading(false))
  }
}

export const signInWithEmail = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    
    if (error) throw error
    dispatch(setUser(data))
  } catch (error) {
    console.error('Login failed:', error.message)
    throw error
  } finally {
    dispatch(setLoading(false))
  }
}

export const signInWithOAuth = (provider) => async () => {
  await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: `${window.location.origin}/callback` }
  })
}

export const signOut = () => async (dispatch) => {
  await supabase.auth.signOut()
  dispatch(logout())
}