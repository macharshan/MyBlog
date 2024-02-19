import React, {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import {login as storeLogin } from '../store/authSlice'
import {Button, Logo, Input} from './index.js'
import authService from '../appwrite/auth.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState("")
  const {register, handleSubmit} = useForm()

  const login = async(data) => {
    setError("")
    try {
      const session = await authService.login(data);
      if(session){
        const userData = await authService.getCurrentUser()
        if(userData) dispatch(storeLogin(userData));
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
    }

    
  }

  return (
    <div className="flex items-center justify-center text-black">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-fit">
                        <Logo width="100%" />
                    </span>
        </div> 
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <form onSubmit={handleSubmit(login)} className='m-4'>
          <div className='space-y-5'>
            <Input 
            label = "Email:"
            type="email"
            placeholder = "Enter your Email id"
            {...register("email",{
              required: true,
              validate: {
                matchPattern: (value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Enter a valid email address"
              }
            })}
            />
            <Input 
            label = "Password"
            type = "password"
            placeholder = "Enter your password"
            {...register("password",{
              required: true,
              minLength: 6
            })}
            />
            <Button 
            // children="Sign in"
            type='submit'
            className='w-full'
            >Log in</Button>
          </div>
        </form>
        {error && <p className='text-red-600 m-4 text-center'>{error}</p>}
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
      </div>
    </div>
  )
}
