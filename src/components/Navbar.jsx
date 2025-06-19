import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Button from "../layouts/Button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
  const token = localStorage.getItem("token");
  setIsAuthenticated(!!token);
}, [localStorage.getItem("token")]);


  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setDropdownOpen(false);
    navigate("/");
  };

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer">
          <Link to="/" className="flex flex-row items-center gap-2">
            <BiRestaurant size={32} />
            <h1 className="text-4xl font-semibold">UBI</h1>
          </Link>
        </div>

        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
            to="/mekanlar"
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Mekanlar
          </Link>
          <Link
            to="/about"
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Hakkımızda
          </Link>

          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
              <FaUserCircle
                size={28}
                className="text-brightColor cursor-pointer"
                title="Kullanıcı Menüsü"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md z-50">
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate("/profil");
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Profil
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Çıkış Yap
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button title="Giriş Yap" onClick={handleLoginClick} />
          )}
        </nav>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Mobil Menü */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-black text-white left-0 top-[80px] font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full transition-transform duration-300 z-40`}
      >
        <Link
          to="/"
          className="hover:text-brightColor transition-all"
          onClick={closeMenu}
        >
          Anasayfa
        </Link>
        <Link
          to="/mekanlar"
          className="hover:text-brightColor transition-all"
          onClick={closeMenu}
        >
          Mekanlar
        </Link>
        <Link
          to="/about"
          className="hover:text-brightColor transition-all"
          onClick={closeMenu}
        >
          Hakkımızda
        </Link>
        {isAuthenticated ? (
          <>
            <button
              onClick={() => {
                closeMenu();
                navigate("/profil");
              }}
              className="hover:text-brightColor transition"
            >
              Profil
            </button>
            <button
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
              className="hover:text-brightColor transition"
            >
              Çıkış Yap
            </button>
          </>
        ) : (
          <Button
            title="Giriş Yap"
            onClick={() => {
              closeMenu();
              handleLoginClick();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
