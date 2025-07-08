import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TopBanner() {
  const [visible, setVisible] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Banner chính */}
      <div
        className="bg-red-100 text-red-800 px-4 py-2 rounded-md shadow-md text-sm flex items-center space-x-2 hover:bg-red-200 cursor-pointer transition"
        onClick={() => setShowPopup(!showPopup)}
      >
        <span>🆕 Ưu đãi tháng 7! Xem ngay</span>
        <button
          className="text-base font-bold hover:text-red-500"
          onClick={(e) => {
            e.stopPropagation(); // Ngăn không mở popup khi click nút đóng
            setVisible(false);
          }}
        >
          ×
        </button>
      </div>

      {/* Popup nổi */}
      {showPopup && (
        <div className="absolute bottom-14 right-0 w-72 bg-white shadow-xl border border-red-200 rounded-md p-4 text-sm animate-fade-in">
          <h3 className="text-red-600 font-semibold mb-2">🎉 Ưu đãi tháng 7</h3>
          <p className="text-gray-700 mb-3">
            Đặt phòng trong tháng 7 để nhận ngay ưu đãi 20% cho nhóm từ 3 người trở lên!
          </p>
          <button
            onClick={() => navigate("/booking")}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full transition"
          >
            Đặt phòng ngay
          </button>
        </div>
      )}
    </div>
  );
}

export default TopBanner;
