import React from 'react'
import {Container,Logo, LogoutButn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Header() {
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name:'Home',
      slug: '/',
      active: true
    },
    {
      name:'Login',
      slug: '/Login',
      active: !authStatus
    },
    {
      name:'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name:'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name:'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ]

  return (
    <header className='fixed top-0 z-50'>
      <Container>
        <nav className='w-screen h-10 flex justify-between items-center bg-zinc-950 text-gray-400'>
          <div className='ml-6'>
            <Link to='/'>
              <Logo size={20}/>
            </Link>
          </div>
          <ul className='flex justify-between'>
            {
              navItems.map((item)=>(
                item.active?(
                  <li key={item.name}>
                    <button
                    className='inline-block mx-1 px-4 py-1 duration-200 hover:bg-violet-400 hover:text-black rounded-full '
                    onClick={()=>navigate(item.slug)}
                    >{item.name}</button>
                  </li>
                ): null
              ))
            }
            {authStatus && (
              <li>
                <LogoutButn />
              </li>
            ) }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header