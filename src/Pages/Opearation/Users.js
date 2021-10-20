import React, { useState, useEffect } from "react";
import "./opearation.css";

import NewUser from "./NewUser";
import UsersLists from "./UsersLists";


const Users=()=> {
  const[userPageContent, setUsperPageContent] = useState('user_list')

  const PAGE_CONTENT_USER_LIST = 'user_list'
  const PAGE_CONTENT_NEW_USER = 'new_user'

  const onClickCreateUser = () =>{
    setUsperPageContent(PAGE_CONTENT_NEW_USER)
  }

  const reasultFromNewUser=()=>{
    console.log('call from create user ... ')
    setUsperPageContent(PAGE_CONTENT_USER_LIST)
  }
  return (
    <div className="w-full h-full flex justify-center bg-gray-100">
      <div className="w-4/6 h-full px-6 bg-white">
        <div className="h-full px-6 mt-3 bg-gray-100 border border-gray-300 flex flex-col">
          <div className="h-20 mt-0 mx-6 flex justify-end items-start">
            <button className="h-10 w-44 bg-yellow-400 text-sm text-white rounded-bl-md rounded-br-md" onClick={ onClickCreateUser }>Create New User </button>
          </div>
          <div className="mx-6 border border-gray-200">
              {(()=>{
                  if(userPageContent.includes(PAGE_CONTENT_USER_LIST)) return <UsersLists />
                  else return <NewUser cb={reasultFromNewUser}/>
              })()}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Users;
