import React from "react";
import anime from "./animeback.jpg"; // Corrected the import path

const Home = () => {
  return (
    <>
      <nav className="flex items-center p-5 bg-gray-800 text-white">
        <div>
          <p className="font-mono text-xl">AnimeRate</p>
        </div>
        <div className="ml-auto space-x-10">
          <a href="/" className="hover:text-blue-400">HOME</a>
          <a href="/Login" className="hover:text-blue-400">LOGIN</a>
          <a href="/SignUp" className="hover:text-blue-400">SIGN UP</a>
        </div>
      </nav>
        <div className="restpage flex ">
            
            <img src={anime} alt="anime" />
            <div className="right border-gray-950 border-x-8 border-y-8 bg-gray-800 text-white text-center">
                <h1 className="py-9 px-4 font-mono text-6xl">AnimeRate</h1>
                <p className=" font-mono px-4 text-2xl"> AnimeRate is a platform created for anime enthusiasts, by anime enthusiasts! Dive into a vibrant community where your opinions matter. Whether you're a seasoned otaku or a casual viewer, AnimeRate provides a space to share your thoughts, write detailed reviews, and rate your favorite anime shows.</p>
            </div>
        </div>

     
    </>
  );
};

export default Home;
