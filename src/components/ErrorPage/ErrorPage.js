import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const backHome = () => {
    navigate("/");
  };
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-accent">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-error text-white px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>

        <button onClick={backHome} className="mt-5">
          <span className="relative block px-8 py-3 bg-error text-white font-semibold">
            Back To Home
          </span>
        </button>
      </main>
    </div>
  );
};

export default ErrorPage;
