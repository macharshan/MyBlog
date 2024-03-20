import React,{ useEffect, useState, useCallback} from 'react'
import { useSelector } from 'react-redux'
import service from '../appwrite/configuration'
import { Container, PostCard } from '../components'

function MyPosts() {
    const [post, setPost] = useState([])
    let count = 0;

    const userData = useSelector((state) => state.auth.userData);

    
    useEffect(()=>{
        service.getPosts([]).then((post)=>{
            if(post) {
                setPost(post.documents)
            }
        })
    },[])
    
    useCallback(()=>{
        post.filter((post)=>(post.userId === userData.$id)? count=count+post: null)
    },[setPost])
    console.log(count)
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {(count!=0)?
                (post.map((post)=>(
                    (post.userId === userData.$id) ? 
                        (<div key={post.$id} className='p-2 w-1/4'>
                                {/* {console.log(post)} */}
                                <PostCard {...post} />
                        </div>):
                        null
                ))):
                (<div className=" flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            No posts from you
                        </h1>
                    </div>
                </div>)
                }
            </div>
        </Container>
    </div>
  )
}

export default MyPosts