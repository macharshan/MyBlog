import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import { useId } from 'react'
import config from "../config/config"

export default function RTE({name, control, label, defaultValue = "", className=''}) {
  const id = useId()

  return (
    <div >
        {label && <label htmlFor={id}>{label}</label>}

        <div className={className}>
          <Controller 
          name = {name || "content"}
          control = {control}
          render = {({field: {onChange}})=>(
              <Editor 
              id={id}
              apiKey={config.tinymceApi}
              initialValue={defaultValue || `write your content here....`} 
              init = {{
                  branding:false,
                  height: 500,
                  menubar: true,
                  plugins:[
                      "image",
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                      "anchor",
                  ],
                  toolbar:
                  "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                  content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
              }}
              onEditorChange = {onChange}
              />
          )}
          />
        </div>
    </div>
  )
}
