import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            });
      
            const data = await res.json();
      
            if (res.ok) {
              console.log("Giriş başarılı, token:", data.token);
              localStorage.setItem("token", data.token); // token'ı kaydet
              navigate("/"); // anasayfaya yönlendir
            } else {
              alert(data.message || "Giriş başarısız");
            }
          } catch (err) {
            console.error("Hata:", err);
            alert("Sunucu hatası.");
          }
    };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className="bg-white shadow-lg p-10 rounded-xl w-96">
            <h2 className="text-3xl font-bold mb-6 text-center">Giriş Yap</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brightColor"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            /> 
                </div>
                <div>
                <label className="block mb-1 font-medium">Şifre</label>
                <input
                type="password"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brightColor"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                </div>
                <button
                    type="submit"
                    className='w-full bg-brightColor text-white py-2 rounded hover:bg-opacity-90 transition'>
                        Giriş Yap
                    </button>
            </form>
            <div className='text-center mt-4'>
                <p>
                    Hesabın yok mu?{" "}
                    <button
                    onClick={handleRegisterRedirect}
                    className='text-brightColor hover:underline'
                    >
                        Kayıt ol
                    </button>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login