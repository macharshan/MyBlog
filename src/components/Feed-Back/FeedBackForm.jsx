import React from 'react'
import { useForm } from 'react-hook-form'
import {Input, Button, TextArea} from '../index'
import service from '../../appwrite/configuration'
import { useNavigate } from 'react-router-dom'


function FeedBackForm() {
    const {register, handleSubmit, formState:{isSubmitting},control, getValues,setValue,reset} = useForm(
        {
            defaultValues:{
                fbname:"",
                fbemail:"",
                feedback:"",
            }
        }
    )
    
    const navigate = useNavigate()

    const fbsubmit = async(data)=>{
        if(data){
            const taskCompleted = await service.createFeedBack({...data});
            if(data){
                reset(
                    {
                        fbname: "",
                        fbemail:"",
                        feedback:""
                    }
                )
            }
        }
    }

  return (
    <form onSubmit={handleSubmit(fbsubmit)}
        className='w-fit flex flex-col'>
        <div className='py-8'>
            <Input 
            label = "Name:"
            type = 'text'
            className = 'w-full mx-auto mt-1 mb-4'
            placeholder = "Enter your name"
            {...register("fbname",{
                required: true
            })}
            />
            <Input 
            label = 'Email:'
            type = 'email'
            className = 'w-full mx-auto mt-1 mb-4'
            placeholder = "Enter your name"
            {...register("fbemail",{
                required: true
            })}
            />
            <TextArea 
            label= 'Feed Back:'
            onChange = {getValues('feedback')}
            placeholder = "provide your feedback"
            className='w-full mx-auto mt-1 mb-4'
            control={control}
            />
            <Button
            type="submit"
            className=''
            disabled = {isSubmitting}
            >{isSubmitting?"Loading...":"Submit"}
            </Button>
        </div>
    </form>
  )
}

export default FeedBackForm