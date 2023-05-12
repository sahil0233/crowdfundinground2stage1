import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { useAddress} from '@thirdweb-dev/react';
import { useStateContext } from '../context';
import {  Loader } from '../components';
const RegisterForm = () => {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { getUserInfo,address, registerUser } = useStateContext();
    const [form2, setForm2] = useState({
    username: '',
    email: '',
    // address: ''
  });
  const handleFormFieldChange = (fieldName, e) => {
    setForm2({ ...form2, [fieldName]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // form.address=address;
    console.log(form2)
    // setIsLoading(true);
    getUserInfo('0x571c81Fc5Ae988aCEdD71B56cbDD122438D2F244')
    //const data = await registerUser('yourchoicesahil@gmail.com','sahil', address);
    //console.log(data);
    // setIsLoading(false);
  }
  return (
    <div className="absolute z-20 w-full h-full bg-[#999999] bg-opacity-50 flex justify-center items-start pt-44">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Please provide Your Information
              </h1>
              <form className="space-y-4 md:space-y-6 flex flex-col" onSubmit={handleSubmit}>
              <div>
                      <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                      <input onChange={(e) => handleFormFieldChange('username', e)} type="text" value={form2.username} name="username" id="username" placeholder="Username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input onChange={(e) => handleFormFieldChange('email', e)} type="email" value={form2.email}  name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                </div>
                  <button type="submit" className="w-[100px] h-[40px] text-white item bg-[#1DC071] self-center rounded-md">Proceed</button>
                  
              </form>
          </div>
      </div>
      </div>
  )
}

export default RegisterForm;
