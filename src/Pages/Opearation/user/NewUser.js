import React, { useState } from "react";
import axios from 'axios'
import "./user.css";


const NewUser=(props)=> {

  const[firstName, setFirstName] = useState('')
  const[middleName, setMiddleName] = useState('')
  const[lastName, setLastName] = useState('')
  const[addressLineOne, setAddressLineOne] = useState('')
  const[addressLineTwo, setAddressLineTwo] = useState('')
  const[addressLineThree, setAddressLineThree] = useState('')
  const[email, setEmail] = useState('')
  const[phone, setPhone] = useState('')
  const[userType, setUserType] = useState('')
  const[userName, setUserName] = useState('')
  const[password, setPassword] = useState('')
  const[confirmPassword, setConfirmPassword] = useState('')
  const[client, setClient]=useState('')
  const[marcheant, setMarcheant]=useState('')
  const[vtsUser, setVtsUser]=useState('')

  const[newUserType, setNewUserType] = useState('VTS_USER')

  const userRole = ["CLIENT", "CLIENT_ADMIN","MARCHEANT", "MARCHEANT_SUPERVISOR", "VTS_USER", "VTS_USER_SUPERVISOR"]
  const clients = ["maradona", "pele", "messi"];
  const marcheants = ["barcelona", "manu"];
  const vtsUsers = [ 'ronaldo', 'naymer', 'mbape']


  const onSetFirstName=(e)=>{
    setFirstName(e.target.value)
  }
  const onSetMiddleName=(e)=>{
    setMiddleName(e.target.value)
  }
  const onSetLastName=(e)=>{
    setLastName(e.target.value)
  }
  const onSetAddressLineOne=(e)=>{
    setAddressLineOne(e.target.value)
  }
  const onSetAddressLineTwo=(e)=>{
    setAddressLineTwo(e.target.value)
  }
  const onSetAddressLineThree=(e)=>{
    setAddressLineThree(e.target.value)
  }
  const onSetEmail=(e)=>{
    setEmail(e.target.value)
  }
  const onSetPhoneNo=(e)=>{
    setPhone(e.target.value)
  }
  const onSetUserType=(e)=>{
    setUserType(e.target.value)
  }
  const onSetUserName=(e)=>{
    setUserName(e.target.value)
  }
  const onSetPassword=(e)=>{
    setPassword(e.target.value)
  }
  const onSetConfirmPassword=(e)=>{
    setConfirmPassword(e.target.value)
  }

  const onFormSubmit=(e)=>{
      console.log(firstName)
      console.log(lastName)
      console.log(middleName)
      console.log(email)
      console.log(addressLineOne)
      console.log(addressLineTwo)
      console.log(addressLineThree)
      console.log(userType)
      console.log(password)
      console.log(confirmPassword)
      console.log(userName)
      console.log(phone)
      console.log('on form submit ')
      console.log(e.name)
      axios.post('http://localhost:8080/api/v1/user/register', {
        "first_name" : firstName,
        "last_name": lastName,
        "middle_name": middleName,
        "email": email,
        "address_line_one": addressLineOne,
        "address_line_two": addressLineTwo,
        "address_line_three": addressLineThree,
        "password":password,
        "confirm_password":confirmPassword,
        "user_name":userName,
        "phone":phone,
        "client" : "messi",
        "consortium":"dmaria",
        "user_type":"VTS_USER",

      })
      .then(function (response) {
          props.cb()
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      })
      e.preventDefault();
  }
  return (
    <div className="w-full h-full mt-6  flex justify-center bg-gray-100 ">
        <form className="w-full px-6 py-3 h-auto flex flex-col gap-y-4 border border-gray-300 bg-gray-50" onSubmit={onFormSubmit}>
            <div className="flex justify-center gap-6">            
              <div className="flex-1 flex flex-col">
                    <label className="text-xs  text-green-700">First Name</label>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onSetFirstName }/>
              </div>
              <div className="flex-1 flex flex-col">
                    <span className="text-xs  text-green-700">Last Name</span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onSetLastName }/>
              </div>
              <div className="flex-1 flex flex-col">
                    <span className=" text-xs t text-green-700">Middle Name</span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onSetMiddleName }/>
              </div>
              <div className="flex-1 flex flex-col">
                    <span className="text-xs  text-green-700">Email</span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onSetEmail }/>
                </div>
            </div>
            <div className="flex justify-center gap-6">      
                <div className="flex-1 flex flex-col">
                    <label className="text-xs text-green-700">Address_Line_one</label>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onSetAddressLineOne }/>
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="text-xs  text-green-700">Address_Line_two</span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onSetAddressLineTwo }/>
                </div>
                <div className="flex-1 flex flex-col">
                    <span className=" text-xs  text-green-700">Address_Line_three</span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onSetAddressLineThree }/>
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="text-xs  text-green-700">Phone</span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onSetPhoneNo }/>
                </div> 
            </div>
            <div className="flex justify-center gap-6">  
                <div className="flex-1 flex flex-col">
                    <span className="text-xs text-green-700">User Type</span>
                      <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                        name="user_type" id="user_type" onChange={ onSetUserType }>
                        { userRole.map((item, index)=>(
                          <option value={item} key={index}>{item}</option>
                        ))}
                      </select>              
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="text-xs text-green-600">User Name</span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onSetUserName }/>
                </div>
                <div className="flex-1 flex flex-col">
                    <span className=" text-xs  text-green-700">Password</span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onSetPassword }/>
                </div>
                <div className="flex-1 flex flex-col">
                    <span className="text-xs  text-green-700">Confirm Password</span>
                    <input className="w-full text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded "
                    id="endtime" type="text" onChange={ onSetConfirmPassword }/>
                </div>

            </div>
            <div className="flex justify-center gap-6">  
                <div className="flex-1 flex flex-col">  
                  {(()=>{
                    if(userType.includes('CLIENT_ADMIN')){
                      return(
                        <div className="flex-1 flex flex-col">
                        <span className="text-xs text-green-700">User Type</span>
                          <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                            name="user_type" id="user_type" onChange={ onSetUserType }>
                            { clients.map((item, index)=>(
                              <option value={item} key={index}>{item}</option>
                            ))}
                          </select>              
                        </div>
                      )
                    }
                    else if(userType.includes('MARCHEANT')){
                      return(
                        <div className="flex-1 flex flex-col">
                        <span className="text-xs text-green-700">User Type</span>
                          <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                            name="user_type" id="user_type" onChange={ onSetUserType }>
                            { clients.map((item, index)=>(
                              <option value={item} key={index}>{item}</option>
                            ))}
                          </select>              
                        </div>
                      )
                    }
                    else if(userType.includes('MARCHEANT_SUPERVISOR')){
                      return(
                        <div className="flex-1 flex flex-col">
                        <span className="text-xs text-green-700">User Type</span>
                          <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                            name="user_type" id="user_type" onChange={ onSetUserType }>
                            { clients.map((item, index)=>(
                              <option value={item} key={index}>{item}</option>
                            ))}
                          </select>              
                        </div>
                      )
                    }
                    else if(userType.includes('VTS_USER')){
                      return(
                        <div className="flex-1 flex flex-col">
                        <span className="text-xs text-green-700">User Type</span>
                          <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                            name="user_type" id="user_type" onChange={ onSetUserType }>
                            { clients.map((item, index)=>(
                              <option value={item} key={index}>{item}</option>
                            ))}
                          </select>              
                        </div>
                      )
                    }
                    else if(userType.includes('VTS_USER_SUPERVISOR')){
                      return(
                        <div className="flex-1 flex flex-col">
                        <span className="text-xs text-green-700">User Type</span>
                          <select className="text-gray-700 text-sm bg-gray-50 border border-gray-300 focus:outline-none py-1.5 px-2 rounded cursor-pointer"
                            name="user_type" id="user_type" onChange={ onSetUserType }>
                            { clients.map((item, index)=>(
                              <option value={item} key={index}>{item}</option>
                            ))}
                          </select>              
                        </div>
                      )
                    }
                  })()}          
                </div>
            </div>
            <div className="flex justify-end gap-6"> 
                <button className="p-2 w-32  h-8 text-sm text-white bg-yellow-400 rounded-md" onClick={()=>(props.cb())}>Cancel</button>
                <input className="w-32  h-8 text-sm text-green-800 bg-yellow-400 rounded-md" type="submit" value="Submit" />
            </div>
        </form>      
    </div>
  );
}
export default NewUser;
