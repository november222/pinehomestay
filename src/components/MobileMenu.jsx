// src/components/MobileMenu.jsx
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

function MobileMenu({
  dropdownMenus,
  activeDropdown,
  setActiveDropdown,
  setMenuOpen,
  menuRef,
}) {
  const navigate = useNavigate();

  const handleSubItemClick = (path) => {
    navigate(path);
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div
      ref={menuRef}
      className="md:hidden bg-white shadow px-6 py-4 space-y-4 text-sm animate-fade-in-down transition-all duration-300"
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

      {/* Các mục tĩnh */}
      <button
        onClick={() => handleSubItemClick("/about")}
        className="block text-gray-700 hover:text-black w-full text-left"
      >
        Về chúng tôi
      </button>
      <button
        onClick={() => handleSubItemClick("/contact")}
        className="block text-gray-700 hover:text-black w-full text-left"
      >
        Liên hệ
      </button>
      <button
        onClick={() => handleSubItemClick("/booking")}
        className="block font-semibold text-indigo-600 w-full text-left"
      >
        Đặt phòng
      </button>
    </div>
  );
}

export default MobileMenu;
