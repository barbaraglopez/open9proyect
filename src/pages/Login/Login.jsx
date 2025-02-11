import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      navigate("/home");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
        {/* Contenedor para el título y el texto de introducción */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-semibold">Login</h2>
          <p className="text-gray-400 mt-2 font-azeret">
            Get started today by entering just a few details
          </p>
        </div>

        {/* Contenedor del formulario (más ancho) */}
        <div className="bg-gray-900 p-8 sm:p-10 rounded-lg shadow-lg w-full max-w-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2 font-azeret">
                Email *
              </label>
              <input
                type="email"
                placeholder="mail@website.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 text-white font-azeret focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2 font-azeret">
                Password *
              </label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 text-white font-azeret focus:outline-none"
              />
            </div>

            {/* Forget Password alineado a la derecha */}
            <div className="text-right mb-4">
              <span className="text-gray-400 font-azeret cursor-pointer hover:text-[#DDF247] transition">
                Forget Password
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#DDF247] text-black font-semibold rounded mt-2 hover:bg-[#c7dd41] transition font-azeret"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="mt-6 text-center text-gray-400 font-azeret">
            or continue with
          </div>

          {/* Botones de redes sociales */}
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition font-azeret">
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition font-azeret">
              <FaFacebook className="mr-2" /> Facebook
            </button>
            <button className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition font-azeret">
              <FaApple className="mr-2" /> Apple
            </button>
          </div>

          {/* Link para registrarse */}
          <div className="mt-6 text-center text-gray-400 font-azeret">
            Don't have an account?{" "}
            <span className="text-[#DDF247] cursor-pointer hover:underline">
              Sign up
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
