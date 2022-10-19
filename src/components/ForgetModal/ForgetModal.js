import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/UserContext/UserContext';

const ForgetModal = () => {
      const [showModal, setShowModal] = useState(false);
      const [email, setEmail] = useState("");
      const [error, setError] = useState(null);
      const {forgetPassword} = useContext(AuthContext);
      const handalReset = () =>{
        forgetPassword(email)
        .then(()=>{
            toast.warning("Please Check Your Mail also Check Spam Folder", {autoClose: 1500});
            setShowModal(false);
        })
        .catch(error=>{
            setError(error.message);
        })
      }
      const handalEmail = (e)=>{
        setEmail(e.target.value);
        
      }
    return (
      <>
        <button
          className="text-start text-error"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Forget Password?
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Reset Your Password With Email
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p>Enter Your Email</p>
                    <input
                        onChange={handalEmail}
                      className="block border border-gray-400 w-full p-3 rounded mb-4"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="
                    Email"
                      required
                    />
                    <p className='text-error'>{error}</p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="btn btn-error mr-3"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={handalReset}
                    >
                      Reset Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    );
};

export default ForgetModal;