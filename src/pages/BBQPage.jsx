import React from "react";

function BBQPage() {
  return (
    <section className="mt-20 py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* Hình ảnh bên trái */}
      <img
        src="/images/bbq.jpg"
        alt="BBQ & Bếp riêng"
        className="w-full md:w-1/2 rounded-xl shadow-lg"
      />

      {/* Nội dung bên phải */}
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">BBQ & Bếp riêng</h2>
        <p className="text-gray-700 mb-4">
          Trải nghiệm không khí ấm cúng bên bếp lửa hồng cùng gia đình và bạn bè. Pine Homestay cung cấp khu vực BBQ ngoài trời được trang bị đầy đủ bếp nướng, bàn ghế, dụng cụ nấu ăn và than củi.
        </p>
        <p className="text-gray-700">
          Ngoài ra, nếu bạn muốn tự tay nấu nướng, chúng tôi có khu bếp riêng cho từng nhóm khách – sạch sẽ, tiện nghi, và đầy đủ vật dụng. Hãy tự tay chuẩn bị một bữa ăn thật đậm chất núi rừng!
        </p>
      </div>
    </section>
  );
}

export default BBQPage;
