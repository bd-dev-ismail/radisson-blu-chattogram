import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext/UserContext";
import app from "../../firebase/firebase.init";
import './Profile.css';
const auth = getAuth(app);
const Profile = () => {
  const {user} = useContext(AuthContext);
  console.log(auth.currentUser);
  
  return (
    <div className="flex justify-center items-center my-64 lg:my-[350px]">
      <div className="holder">
        <div className="card border w-[25rem] h-48 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
          <img
            className="max-h-20 w-full opacity-80 absolute top-0"
            style={{ zIndex: "-1" }}
            src="https://unsplash.com/photos/iFPBRwZ4I-M/download?force=true&w=640"
            alt=""
          />
          <div className="profile w-full flex m-3 ml-4 text-white">
            <img
              className="w-28 h-28 p-1 bg-white rounded-full"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
              alt=""
            />
            <div className="title mt-11 ml-3 font-bold flex flex-col">
              <div className="name break-words text-black">
                Name: {user?.displayName}
              </div>

              <div className="add font-semibold text-sm italic dark">
                Email: {user?.email}
              </div>
              <div className="add font-semibold text-sm italic dark">
                Email Status:{" "}
                <span className="text-error">
                  {user.uid && user.emailVerified ? "Verified" : "Not Verified"}
                </span>
              </div>
              <div className="add font-semibold text-sm italic dark">
                User Id: {user?.uid}
              </div>
            </div>
          </div>
          <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
            <Link to="/">
              {" "}
              <div className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
                Home
              </div>
            </Link>
            <Link to="/booking">
              <div className="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
                Booking
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
