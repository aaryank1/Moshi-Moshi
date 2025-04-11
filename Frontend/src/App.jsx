import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import { axiosInstance } from './config/axios'
import { useAuthStore } from './store/useAuthStore'
import { useThemeStore } from './store/useThemeStore'
import { LoaderCircle } from 'lucide-react'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const { theme } = useThemeStore();
  // console.log(authUser);
  
  if(isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
      <LoaderCircle className='size-10 animate-spin' />
    </div>
  )

  axiosInstance
  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes >
        <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
        <Route path='/signup' element={ !authUser ? <SignUp /> : <Navigate to='/' /> } />
        <Route path='/login' element={ !authUser ? <Login /> : <Navigate to='/' /> } />
        <Route path='/settings' element={<Settings />} />
        <Route path='/profile' element={authUser ? <Profile /> : <Navigate to={'/login'}  />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App