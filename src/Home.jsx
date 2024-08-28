import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { SiInstacart } from "react-icons/si";
import { FaServicestack } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 relative">
      {/* Navbar Section */}
      <div className="flex justify-between p-4 md:px-10 fixed bg-white w-full z-10 shadow-md">
        <img src="./EAPMC-1.png" alt="logo" className="w-25 h-10" />

        {/* Hamburger Menu for Mobile */}
        <div className="block md:hidden">
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>

        {/* Desktop Menu */}
        <section
          className={`md:flex gap-10 justify-between items-center ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="hover:cursor-pointer flex flex-col items-center">
            <FaSearch className="text-lg md:text-2xl" />
            <h2 className="text-xs md:text-base">Search</h2>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-center">
            <FaShoppingCart className="text-lg md:text-2xl" />
            <h2 className="text-xs md:text-base">Orders</h2>
          </div>
          <div className="hover:cursor-pointer flex flex-col items-center">
            <FaUser className="text-lg md:text-2xl" />
            <h2 className="text-xs md:text-base">User</h2>
          </div>
        </section>
      </div>
      {/* Intro Section */}
      <div className="pt-20 text-center">
        <section className="text-3xl md:text-5xl uppercase p-4 font-bold pt-10">
          <h1 className="text-blue-900">Revolutionizing</h1>
          <h1 className="text-blue-900">
            Wholesale <span className="text-teal-600">Agriculture</span>
          </h1>
        </section>
        <section className="p-4 font-medium text-lg md:text-2xl text-blue-900 flex flex-col md:flex-row justify-between items-center">
          <p>
            Direct Access{" "}
            <span className="ml-5 text-gray-400"> Zero Hassles</span>
          </p>
          <span className="text-base md:text-xl font-normal underline text-blue-600 hover:cursor-pointer mt-4 md:mt-0">
            Need Samples?
          </span>
        </section>
        <button className="border-2 w-15 h-15 p-2 rounded-full bg-teal-900 fixed bottom-10 right-5 z-10">
          <HiOutlineChatBubbleBottomCenter className="text-white text-2xl" />
        </button>
      </div>

      {/* Products Section */}
      <div className="p-4">
        <section className="border-2 h-[300px] md:h-[450px] mb-10">
          <Slider {...settings}>
            <img src="./pic1.jpg" alt="" className="h-[300px] md:h-[450px]" />
            <img src="./pic2.jpg" alt="" className="h-[300px] md:h-[450px]" />
            <img src="./pic3.jpg" alt="" className="h-[300px] md:h-[450px]" />
            <img src="./pic4.jpg" alt="" className="h-[300px] md:h-[450px]" />
            <img src="./pic5.jpg" alt="" className="h-[300px] md:h-[450px]" />
          </Slider>
        </section>

        <div className="mt-10 md:mt-20">
          <h2 className="text-2xl md:text-3xl font-semibold bg-teal-800 mb-7 text-white p-2 px-4 flex items-center gap-2">
            Products <SiInstacart />
          </h2>
          <section className="flex flex-wrap gap-4 md:gap-10 uppercase">
            {[
              { src: "./rice.jpg", title: "Rice" },
              { src: "./pulses.jpg", title: "Pulses" },
              { src: "./flour.jpg", title: "Flour" },
              { src: "./salt.jpg", title: "Salt" },
              { src: "./masala.jpg", title: "Masalas" },
              { src: "./sugar.jpg", title: "Sugar" },
            ].map((product) => (
              <div
                key={product.title}
                className="border-teal-900 p-4 rounded-lg shadow-md hover:shadow-2xl w-full md:w-[30em]"
              >
                <img src={product.src} alt={product.title} className="mb-2" />
                <p className="text-xl md:text-2xl font-medium">
                  {product.title}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* Feature Section */}
      <div className="px-4 mt-10 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold bg-teal-800 mb-7 text-white p-2 px-4 flex items-center gap-2">
          Services <FaServicestack />
        </h2>
        <section className="flex flex-wrap justify-between mt-10 cursor-pointer">
          {[
            { src: "./s1.png", title: "Direct Sourcing" },
            { src: "./s2.png", title: "Zero Commission" },
            { src: "./s3.png", title: "Nationwide Delivery" },
            { src: "./s5.png", title: "Range of Products" },
            { src: "./s4.png", title: "Secure Transaction" },
          ].map((service) => (
            <div
              key={service.title}
              className="text-center w-full md:w-1/5 mb-6"
            >
              <img
                className="w-20 md:w-[15em] mx-auto"
                src={service.src}
                alt={service.title}
              />
              <h3 className="font-medium text-lg md:text-xl text-teal-700 mt-4">
                {service.title}
              </h3>
            </div>
          ))}
        </section>
      </div>

      {/* footer section */}

      <footer className="bg-teal-700 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h5 className="text-xl font-bold mb-4">EAPMC</h5>
              <img src="./EAPMC-1.png" alt="" className="w-[12em]" />
              <p className="text-sm mt-2">
                We connect buyers with farmers, <br /> offering fresh produce
                and more, <br /> delivered directly to your door.
              </p>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h5 className="text-xl font-bold mb-4">Quick Links</h5>
              <ul className="text-sm">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Products
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h5 className="text-xl font-bold mb-4">Contact Us</h5>
              <ul className="text-sm">
                <li className="mb-2">Email: support@eapmc.com</li>
                <li className="mb-2">Phone: +91 1234 567890</li>
                <li>Address: 123 Street, City, India</li>
              </ul>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
              <h5 className="text-xl font-bold mb-4">Follow Us</h5>
              <ul className="flex space-x-4 text-xl">
                <li>
                  <a href="#" className="hover:underline">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    <IoLogoWhatsapp />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-4 mt-6 border-t border-gray-700">
            <p className="text-sm">&copy; 2024 eAPMC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
