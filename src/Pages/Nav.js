import React from 'react'

import logo from '../img/Logo/logo.png'
import { Link } from 'react-router-dom'

const Nav=()=>{
    return(
        <div className="w-full font-mono flex flex-row border-b-2 bg-green-600 ">
            <div className="w-3/12   flex flex-row justify-start items-center gap-10 bg-nav-left-1 rounded-br-3xl">
                <div className="">
                    <div className="ml-2">
                        <img src= {logo}  className="w-70 h-14" alt=""  />  
                    </div>
                </div>
                <div className=" mx-4 flex flex-col flex-wrap">
                    <a class="flex items-center text-base text-link hover:text-linkhover" href="mailto:info@test.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <span className="text-xs font-light text-white font-bold ">Call us</span>
                    </a> 
                    <div>
                        <span className="text-xs font-light text-white">017105323232</span>
                    </div>
                </div>
            </div>
            <div className="w-7/12 flex flex-col ">
                <div className ="w-full h-full flex flex-wrap content-center">
                    <Link className="px-4 text-sm font-light text-white" to="/">Home</Link>
                    <Link className="px-4 text-sm font-light text-white" to="/tracking">Tracking</Link>
                    <Link className="px-4 text-sm font-light text-white" to="/reports">Reports</Link>
                    <Link className="px-4 text-sm font-light text-white" to="/opeartion">Opearation </Link>
                    <Link className="px-4 text-sm font-light text-white" to="/opeartion">Admin</Link>
                    <Link className="px-4 text-sm font-light text-white" to="/opeartion">Account</Link>
                    <Link className="px-4 text-sm font-light text-white" to="/opeartion">Service-charge</Link>
                    <Link className="px-4 text-sm font-light text-white" to="/opeartion">Opearation</Link>
                </div>
            </div>
            <div className="w-2/12 px-4 flex items-center justify-end">
                <div><h1 className="text-sm text-white">Hello Mr. John doe </h1></div>
            </div>
        </div>
    )
}

export default Nav