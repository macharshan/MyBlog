import React,{useState} from 'react'
import authService from '../appwrite/auth'
import { Link,useNavigate } from 'react-router-dom'
import { login as storeLogin } from '../store/authSlice'
import { Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [error, setError] = useState("")
    const {register, handleSubmit} = useForm()

    const create = async(data)=>{
        setError("")
        try {
            const session = await authService.createAccount(data)
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
                <span className="inline-block w-full max-w-fit mb-2 ">
                    <Logo />
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight mb-4">Sign up to create account</h2> 
            <form onSubmit={handleSubmit(create)}>
                <Input 
                label="Name:"
                type="text"
                placeholder = "Enter your name"
                className = "mb-4"
                {...register("name",{
                    required: true
                })}
                />
                <Input 
                label = "Email:"
                type = "email"
                placeholder = "Enter an email id"
                className = "mb-4"
                {...register("email",{
                    required: true,
                    validate: {
                        matchPattern: (value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Enter a valid email address"
                    }
                }
                )}
                />
                <Input 
                label = "password"
                type = "password"
                placeholder = "Create new password"
                className = "mb-4"
                {...register("password",{
                    required: true,
                    minLength: 6
                })}
                />
                <Button 
                type = "submit"
                children = "Create Account"
                className='w-full'
                />
            </form>
            {error && <p className='text-red-600 m-4 text-center'>{error}</p>}
            <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Log In
                    </Link>
                </p>
        </div>
    </div>
  )
}

export default Signup