import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Kayıt başarılı!");
        navigate("/login");
      } else {
        alert(data.message || "Kayıt başarısız.");
      }
    } catch (err) {
      console.error("Hata:", err);
      alert("Sunucu hatası.");
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Kayıt Ol</h2>
        <form className="space-y-4" onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-brightColor text-white py-2 rounded-md hover:bg-opacity-90"
          >
            Kayıt Ol
          </button>
        </form>

        <div className="text-center mt-4">
          <p>
            Zaten hesabın var mı?{" "}
            <button
              onClick={handleLoginRedirect}
              className="text-brightColor hover:underline"
            >
              Giriş Yap
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
