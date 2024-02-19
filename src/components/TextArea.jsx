import React, { useId } from 'react'
import { Controller } from 'react-hook-form'

function TextArea({
    label,
    name,
    control,
    rows = 10,
    cols = 30,
    className = '',
    placeholder,
    ...props

},ref) {
    const id = useId()

  return (
    <div>
        <div className='mb-2'>
            { label && <label className='py-4'
                htmlFor={id}>{label}</label>
            }
            <Controller
            name={name || "feedback"}
            control={control}
            render={({field:{onChange}})=>(<textarea 
            rows={rows}
            cols={cols}
            id={id}
            className={`rounded-xl mx-auto p-4 ${className} text-black`}
            {...props}
            placeholder={placeholder||"Provide your feedback"}
            onChange={onChange}
            />)}
            />
        </div>
    </div>
  )
}

export default React.forwardRef(TextArea)