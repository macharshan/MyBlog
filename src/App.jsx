import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth.js'
import { login, logout } from './store/authSlice.js'
import { Header, Footer } from './components/index.js'
import { Outlet } from 'react-router-dom'
import './App.css'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{ 
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return !loading ? (
      <div className='min-h-screen bg-zinc-900 text-teal-200'>
          <div className=''>
            <Header />
            <main className='mt-10 flex justify-center items-center'>
              <div className='min-h-96 mb-1'>
                <Outlet />
              </div>
            </main>
            <Footer />
          </div>
      </div>
  ) : null
}

export default App
