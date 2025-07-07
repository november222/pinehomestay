import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TopBanner() {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className="bg-red-100 text-red-800 px-4 py-2 rounded-md shadow-md text-sm flex items-center space-x-2 hover:bg-red-200 cursor-pointer transition"
        onClick={() => navigate("/thong-bao")}
      >
        <span>🆕 Ưu đãi tháng 7! Xem ngay</span>
        <button
          className="text-base font-bold hover:text-red-500"
          onClick={(e) => {
            e.stopPropagation();
            setVisible(false);
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default TopBanner;
