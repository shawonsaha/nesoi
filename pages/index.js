import Head from "next/head";
import { FaFacebookF, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const Home = () => {
  const [user, setUser] = useState({});

  function handleClientResponse(response) {
    // console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "436147299900-35o58gbnatlul560fbe2vemquvad0k2o.apps.googleusercontent.com",
      callback: handleClientResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      type: "icon",
      shape: "circle",
      size: "large",
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-grey-100">
      <Head>
        <title>Nesoi Life Science</title>
        <meta name="description" content="Powered by NESOI" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://accounts.google.com/gsi/client"
          async
          // defer
        ></script>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl justify-center">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-800">Nesoi</span> One
            </div>

            <div className="py-10">
              <h1 className="text-3xl font-bold text-green-800">
                Sign into Account
              </h1>
              <div className="border-2 w-10 border-green-800 inline-block mb-2" />
              <div className="flex flex-col items-center justify-center py-2">
                <div className="flex items-center justify-center">
                  <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-800"
                  >
                    <FaFacebookF className="text-sm " />
                  </a>

                  {/* <a
                    href="#"
                    className="border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-800"
                  > */}
                  <div id="signInDiv"></div>
                  {user && <h3>{user.name}</h3>}
                  {/* <FaGoogle className="text-sm" /> */}
                  {/* </a> */}
                </div>

                <p className="text-gray-400 my-3 ">or use your email account</p>

                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>

                  <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-lg">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>

                  <div className="flex justify-between w-64 mb-5">
                    <lebel className="flex items-center text-xs">
                      <input type="checkbox" name="remember" className="mr-1" />
                      Remember me
                    </lebel>
                    <a href="#" className="text-xs">
                      Forget Password ?
                    </a>
                  </div>

                  <a
                    href="#"
                    className="border-2 border-green-800 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-800 hover:text-white"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/5 bg-green-800 text-white rounded-tr-2xl rounded-br-2xl py-36">
            <h2 className="text-3xl font-bold mb-2">Welcome to Nesoi Family</h2>
            <div className="border-2 w-10 border-white inline-block mb-2" />
            <p className="mb-10">
              Fill up the information and start the journey with us...
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-800"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
