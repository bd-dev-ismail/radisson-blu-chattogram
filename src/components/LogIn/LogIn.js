import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
       return (
         <div>
           <div className="bg-gray-200 min-h-screen flex flex-col">
             <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
               <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                 <h1 className="mb-8 text-3xl text-center">Log In</h1>

                 <input
                   type="text"
                   className="block border border-gray-400 w-full p-3 rounded mb-4"
                   name="email"
                   placeholder="Email"
                 />

                 <input
                   type="password"
                   className="block border border-gray-400 w-full p-3 rounded mb-4"
                   name="password"
                   placeholder="Password"
                 />
                 <div className='my-5'>
                   <Link className="text-start text-error">
                     Forget password?
                   </Link>
                 </div>
                 <button
                   type="submit"
                   className="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
                 >
                   Log In
                 </button>

                 <div className="text-center text-sm text-grey-dark mt-4">
                   By Login, you agree to the
                   <Link
                     className="no-underline border-b border-grey-dark text-grey-dark"
                     to="#"
                   >
                     Terms of Service
                   </Link>{" "}
                   and
                   <Link
                     className="no-underline border-b border-grey-dark text-grey-dark"
                     to="#"
                   >
                     Privacy Policy
                   </Link>
                 </div>
               </div>

               <div className="text-gray-700 mt-6">
                 New In Radisson Blu?
                 <Link
                   className="no-underline border-b border-4 text-error"
                   to="/register"
                 >
                   Please Register Now
                 </Link>
               </div>
             </div>
           </div>
         </div>
       );
};

export default LogIn;