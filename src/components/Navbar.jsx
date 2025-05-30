import React,  { useState }from "react";
import { Link, useNavigate } from "react-router-dom";
//import { Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();

  const handleLoginClick = () => {
  navigate("/login");
  };


  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer  ">
            <Link to="/" className="flex flex-row items-center gap-2">
              <BiRestaurant size={32} />
            <h1 className="text-4xl font-semibold "> UBI</h1>
            </Link>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
           
            <div className="relative group">
              <div className="flex items-center gap-1">
                <Link
                  to="/mekanlar"
                 /*  spy={true}
                  smooth={true}
                  duration={500} */
                  className=" hover:text-brightColor transition-all cursor-pointer btn-mekanlar"
                >
                Mekanlar
                </Link>
                {/* <BiChevronDown className="cursor-pointer" size={25} /> */}

                </div>
                 
              </div>
            <Link
              to="/yorumlar"
              /* spy={true}
              smooth={true}
              duration={500} */
              className=" hover:text-brightColor transition-all cursor-pointer "
            >
              Yorumlar
            </Link>

           
            <Link
              to="/about"
              /* spy={true}
              smooth={true}
              duration={500} */
              className=" hover:text-brightColor transition-all cursor-pointer "
            >
              Hakkımızda
            </Link>
            <Button title="Giriş Yap" onClick={handleLoginClick}/>
          </nav>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
           <Link
            to="/"
            /* spy={true}
            smooth={true}
            duration={500} */
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
                  to="/mekanlar"
                  /* spy={true}
                  smooth={true}
                  duration={500} */
                  className=" hover:text-brightColor transition-all cursor-pointer "
                >
                Mekanlar
                </Link>
          
                <Link
              to="/yorumlar"
             /*  spy={true}
              smooth={true}
              duration={500} */
              className=" hover:text-brightColor transition-all cursor-pointer "
              onClick={closeMenu}
            >
              Yorumlar
            </Link>
            <Link
              to="/about"
              /* spy={true}
              smooth={true}
              duration={500} */
              className=" hover:text-brightColor transition-all cursor-pointer "
              onClick={closeMenu} 
           >
              Hakkımızda 
            </Link>
            
            <Button title="Giriş Yap" onClick={handleLoginClick}/>
            
            
        </div>
      </div>
    </div>
  );
};

export default Navbar;
