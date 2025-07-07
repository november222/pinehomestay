import { useState } from "react";

function DropdownMenu({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center space-x-1 text-sm text-gray-700">
        <span>{label}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-8 w-[700px] rounded-xl bg-white border border-gray-200 shadow-xl animate-fade-in overflow-hidden z-40">
          {/* Up arrow */}
          <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45 z-[-1]" />

          <div className="grid grid-cols-3 gap-6 p-6 text-sm text-gray-700">
            {items.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-2">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} className="flex items-start space-x-2 hover:text-black transition">
                        {item.icon && (
                          <span className="mt-1">{item.icon}</span>
                        )}
                        <span>
                          <strong>{item.label}</strong>
                          <br />
                          <span className="text-xs text-gray-500">{item.desc}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
