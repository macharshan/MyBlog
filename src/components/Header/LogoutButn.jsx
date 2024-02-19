import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutButn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button onClick={logoutHandler}
    className='inline-block mx-1 mr-4 px-4 py-1 duration-200 hover:bg-violet-400 hover:text-black rounded-full '
    >Logout</button>
  )
}

export default LogoutButn