import React from 'react'
import logo from '../img/Logo/logo.png'
import { Link } from 'react-router-dom'



const Nav = ()=>{
    return(
        <div className="bg-white border-b">
            <div className="mx-auto flex flex-wrap p-0 flex-col md:flex-row px-2 border-b bg-yellow-1200">
                <a href="#" className="flex title-font font-medium items-center  md:mb-0 ">
                    <img className="w-90 h-70" src={logo}  alt=""  />    
                </a>
                <div class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="flex items-center text-base ml-5 text-link hover:text-linkhover" href="mailto:info@test.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <span class="ml-2">info@test.com</span>
                    </a>
                    <a class="flex items-center text-base ml-5 text-link hover:text-linkhover" href="tel:010101">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>                                        
                        </svg> 
                        <span class="ml-2">0101 0101 0101</span>
                    </a>
                </div>
            </div>
            <div class="mx-auto  px-3 py-1 flex  flex-row items-center  sm:flex-nowrap flex-wrap "> 
                <div className="w-1/3 flex flex-row justify-items-stretch">
                    <div className="w-1/2">
                        <span class="w-full text-2xltext-base text-green-800">Hi Mr asdfasfdsdf sdfdsa John Doe</span>
                    </div>
                    <div className="w-1/2 mr-12">
                        <select class="w-full mx-8 h-8 text-sm bg-white border border-green-500 rounded cursor-pointer">
                            <option selected>---Select Dealer---</option>
                            <option value="1">Badsha</option>
                            <option value="2">Raja</option>
                            <option value="3">Nobab</option>
                            <option value="4">Gulam</option>
                            <option value="5">Iskapon</option>
                        </select> 
                    </div>
                </div>
                <div className="w-2/3 flex flex-row justify-between mx-5">
                    <div> 
                        <ul className="flex flex-row justify-start gap-x-12" >
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/tracking">
                                <li>Tracking</li>
                            </Link>
                            <Link to="/reports">
                                <li>Reports</li>
                            </Link>
                        </ul>
                    </div>
                    <div> 
                        <ul className ="flex flex-row justify-end gap-x-12" >
                            <li>Admin</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>      
    )

}
export default Nav