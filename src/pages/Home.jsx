import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/configuration'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if(posts) setPosts(posts.documents)
        })
    },[])

    const userStatus = useSelector((state)=> state.auth.status)
  
    
    if (posts.length === 0  && userStatus) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className=" flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No posts available
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }else if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className=" flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                            Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4 '>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home