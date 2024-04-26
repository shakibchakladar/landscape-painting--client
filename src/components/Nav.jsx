import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
const [theme,setTheme]=useState('light');
    const handleToggle=(e)=>{
        if(e.target.checked){
            // console.log('dark');
            setTheme('dark')
        }else{
            setTheme('light')
        }
        
    }
    // console.log(theme);
    useEffect(()=>{
        localStorage.setItem('theme',theme)
        const localTheme=localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme])
    return (
        <div className='fixed z-10 px-4 shadow-lg navbar bg-base-100 sm:px-8'>
      <div className='flex-1'>
        <Link
          to='/'
          className='gap-0 text-2xl normal-case btn btn-ghost text-secondary'
        >
          Grove<span className='text-primary'>Gallery</span>
        </Link>
      </div>
      <div className='flex-none gap-2'>
        <ul className='hidden gap-5 px-1 menu sm:flex menu-horizontal'>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'border border-green-600 btn text-primary font-bold' : ' btn font-bold'
            }
            to='/'
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? ' bg-green-500 btn text-primary font-bold' : ' btn font-bold'
            }
            to='/addCraft'
          >
            Add Craft Item
          </NavLink>
          <NavLink
            className= {({ isActive }) =>
              isActive ? ' btn text-primary bg-green-300 font-bold' : ' btn font-bold'
            }
            to='/myList'
          >
            My Art&Craft List
          </NavLink>
        </ul>

        <div className="flex items-center gap-5">
        <label className='grid cursor-pointer place-items-center'>
          <input
            type='checkbox'
            // onChange={handleToggle}
            onChange={handleToggle}
            className='col-span-2 col-start-1 row-start-1 toggle theme-controller bg-base-content'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
        <div className="dropdown dropdown-end">
<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">
    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
  <li>
    <a className="justify-between">
      Profile
      <span className="badge">New</span>
    </a>
  </li>
  <li><a>Settings</a></li>
  <li><a>Logout</a></li>
</ul>
</div>

        </div>
      </div>
    </div>
    );
};

export default Nav;