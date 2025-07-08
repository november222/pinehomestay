import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBed, FaSwimmer, FaImages, FaBlog, FaUtensils, FaPlane } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownMenus = [
    {
      label: "Tiện ích",
      icon: <FaUtensils className="text-gray-500 group-hover:text-black transition" />,
      links: [
        { to: "/ho-boi", text: "Hồ bơi", icon: <FaSwimmer /> },
        { to: "/nha-hang", text: "Nhà hàng & Ăn sáng", icon: <FaUtensils /> },
        { to: "/tour", text: "Tour trải nghiệm", icon: <FaPlane /> },
        { to: "/bbq", text: "BBQ & Bếp riêng", icon: <FaUtensils /> },
      ],
    },
    {
      label: "Khám phá",
      icon: <FaImages className="text-gray-500 group-hover:text-black transition" />,
      links: [
        { to: "/photos", text: "Thư viện ảnh", icon: <FaImages /> },
        { to: "/review", text: "Đánh giá", icon: <FaBlog /> },
      ],
    },
  ];

  const menuRef = useRef();

useEffect(() => {
  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
      setActiveDropdown(null);
    }
  }

  if (menuOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [menuOpen]);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="/logo/logo.png" alt="Logo" className="h-14 w-auto object-contain" />
          </Link>
          
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700 relative">
          {dropdownMenus.map((menu, idx) => (
            <div key={idx} className="relative group">
              <div className="relative px-3 py-1 rounded-full overflow-hidden cursor-pointer inline-block">
                <span className="relative z-10 flex items-center gap-1 transition-all duration-300 group-hover:text-black">
                  {menu.label}
                  <span className="transition-transform duration-300 group-hover:rotate-180">▾</span>
                </span>
                {/* Background animation */}
                <span className="absolute inset-0 bg-gray-300 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 rounded-full z-0"></span>
              </div>

              {/* Dropdown */}
              <div className="absolute left-0 top-full w-64 bg-white border border-gray-200 rounded-md shadow-xl opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto transition-all duration-500 ease-out z-40">
                {menu.links.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 text-sm transition rounded-md"
                  >
                    <span className="text-gray-500 group-hover:text-black transition">
                      {item.icon}
                    </span>
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Link to="/about" className="hover:underline underline-offset-4">
            Về chúng tôi
          </Link>
          <Link to="/contact" className="hover:underline underline-offset-4">
            Liên hệ
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex space-x-2">
          <Link
            to="/booking"
            className="px-4 py-1.5 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-700"
          >
            Đặt phòng
          </Link>
        </div>

        {/* Toggle menu on mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
    ref={menuRef}
    className="md:hidden bg-white shadow px-6 py-4 space-y-4 text-sm 
      animate-fade-in-down transition-all duration-300"
  >
          {dropdownMenus.map((menu, idx) => (
            <div key={menu.label}>
              <button
                className="flex justify-between w-full font-semibold text-left"
                onClick={() =>
                  setActiveDropdown(activeDropdown === idx ? null : idx)
                }
              >
                {menu.label}
                {activeDropdown === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {/* Dropdown items */}
              {activeDropdown === idx && (
                <div className="mt-2 pl-4 space-y-2">
                  {menu.links.map((item) => (
                    <button
                      key={item.to}
                      onClick={() => handleSubItemClick(item.to)}
                      className="block text-gray-600 hover:text-black text-left w-full"
                    >
                      {item.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          <hr />
          <button
            onClick={() => handleSubItemClick("/booking")}
            className="block font-semibold text-indigo-600 w-full text-left"
          >
            Đặt phòng
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
