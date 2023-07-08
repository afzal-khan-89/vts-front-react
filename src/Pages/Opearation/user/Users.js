import React, { useState, useEffect } from "react";
import "./user.css";

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
          <div>
              {(()=>{
                  if(userPageContent.includes(PAGE_CONTENT_USER_LIST)) return <UsersLists  cb={ onClickCreateUser }/>
                  else return <NewUser cb={reasultFromNewUser}/>
              })()}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Users;
