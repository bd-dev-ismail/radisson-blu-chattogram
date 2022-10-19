import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext/UserContext';
 import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
const Register = () => {
    const [error, setError] = useState(null);
    const {
      register,
      googleSignIn,
      profileUpdate,
      user,
      name,
      setName,
      verifyEmail,
    } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handalRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const fullname = form.fullname.value;
        const email = form.email.value;
        const password = form.password.value;
        const confrimPassword = form.confirm_password.value;
        console.log(fullname, email, password, confrimPassword);
        if (password.length < 6) {
          return setError("Atlist Password sholud be 6 Character");
        }
        if(password !== confrimPassword){
            return setError('Password Not Matched')
        }
        
        register(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success("Successfully Create account", {autoClose: 500,}); 
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }
    useEffect(()=>{
      if(user && user.uid){
        profileUpdate(name)
          .then(() => {
            console.log("updated");
            navigate(from, { replace: true });
          })
          .catch((error) => console.log(error));
      }
    },[user, from])
    const handalGoogle = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
            toast.success('Successfully Register With Google', {autoClose: 500});
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })
    }
   return (
     <div>
       <div className="bg-gray-200 min-h-screen flex flex-col">
         <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
           <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
             <h1 className="mb-8 text-3xl text-center">Register</h1>
             <form onSubmit={handalRegister}>
               <input
                 type="text"
                 onChange={(e)=> setName(e.target.value)}
                 className="block border border-gray-400 w-full p-3 rounded mb-4"
                 name="fullname"
                 placeholder="Full Name"
                 required
               />

               <input
                 type="text"
                 className="block border border-gray-400 w-full p-3 rounded mb-4"
                 name="email"
                 placeholder="Email"
                 required
               />

               <input
                 type="password"
                 className="block border border-gray-400 w-full p-3 rounded mb-4"
                 name="password"
                 placeholder="Password"
                 required
               />
               <input
                 type="password"
                 className="block border border-gray-400 w-full p-3 rounded mb-4"
                 name="confirm_password"
                 placeholder="Confirm Password"
                 required
               />
               <div>
                 <p className="text-error py-3">{error}</p>
               </div>
               <button
                 type="submit"
                 className="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
               >
                 Create Account
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
               By signing up, you agree to the
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
             Already have an account?
             <Link
               className="no-underline border-b border-4 text-primary"
               to="/login"
             >
               Please Log in
             </Link>
           </div>
         </div>
       </div>
     </div>
   );
};

export default Register;