import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw36njMkK3smneixm2IdkhP2BE3Ht7BgM",
  authDomain: "cloud-project-54676.firebaseapp.com",
  projectId: "cloud-project-54676",
  storageBucket: "cloud-project-54676.appspot.com",
  messagingSenderId: "525776817488",
  appId: "1:525776817488:web:719897611c0acd01107055",
  measurementId: "G-9PWLBJH718",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginPg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      setSuccess(true);
    } catch (error) {
      console.error("Error logging in:", error.message);
      setError(error.message);
    }
  };

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

      <div className="min-h-screen flex items-center justify-center bg-gray-800">
        <div className="bg-stone-100 p-8 rounded shadow-lg w-96">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-blue-500 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            {success && <p className="text-green-500 text-sm mb-4">Login successful!</p>}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-gray-700 text-sm text-center mt-4">
            Don't have an account?{" "}
            <a href="/SignUp" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPg;
