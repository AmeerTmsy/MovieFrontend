import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from "react-router-dom";
import { changeLoginStatus } from '../features/login/loginSlice';

function Root(props) {
    const loggedIn = useSelector(state => state.login.loggedIn)
    const user = useSelector(state => state.login.user)

    const dispatch = useDispatch()

    useEffect(()=> {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/verify`, {withCredentials: true})
        .then( response => {
            // console.log(response.data)
            dispatch(changeLoginStatus({
                loggedIn: true,
                user: response.data
            }))
        })
        .catch(error => {
            dispatch(changeLoginStatus({
                loggedIn: false,
                user: null
            }))
        })
    }, [])
    return (
      <>
        <header className='shadow-lg h-20'>
            <div className='container mx-auto flex flex-row justify-between items-center h-full'>
            <h1 >Ticketcraze</h1>
            <nav>
                <ul className='flex flex-row gap-6 '>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/movies'}>Movies</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                    {
                        loggedIn ? <li><Link to={'/logout'}>Logout</Link></li> : <li><Link to={'/login'}>Login</Link></li>
                    }
                </ul>
            </nav>
            {
                loggedIn && <div className='w-12 h-12 aspect-square bg-gray-200 flex flex-col items-center justify-center rounded-full'>
                    <span className='text-xl'>{user.name.charAt(0)}</span>
                </div>
            }
            </div>
        </header>
        <Outlet />
        <footer></footer>
      </>
    );
}

export default Root;