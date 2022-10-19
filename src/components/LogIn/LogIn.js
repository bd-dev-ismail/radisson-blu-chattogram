import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LogIn = () => {
    const [error, setError] = useState(null);
    const { logIn, googleSignIn } = useContext(AuthContext);
    const handalLogIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password) 
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('Login Successful', {autoClose: 500})
        })
        .catch(error=>{
            console.log(error.message);
            setError(error)
        })
    }
    const handalGoogle = ()=>{
        googleSignIn()
          .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success("Successfully LogIN With Google", {
              autoClose: 500,
            });
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });

    }
       return (
         <div>
           <div className="bg-gray-200 min-h-screen flex flex-col">
             <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
               <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                 <h1 className="mb-8 text-3xl text-center">Log In</h1>

                 <form onSubmit={handalLogIn}>
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
                   <div className="my-5">
                     <Link className="text-start text-error">
                       Forget password?
                     </Link>
                   </div>
                   <div>
                     <p className="text-error py-3">{error}</p>
                   </div>
                   <button
                     type="submit"
                     className="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
                   >
                     Log In
                   </button>
                 </form>
                 <button
                   onClick={handalGoogle}
                   type="submit"
                   className="w-full text-center py-3 rounded btn btn-outline btn-primary focus:outline-none my-1"
                 >
                   Sign In With Google
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