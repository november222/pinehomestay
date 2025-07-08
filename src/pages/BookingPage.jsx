import { useState } from "react";

function BookingPage() {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const [form, setForm] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã đặt phòng! Chúng tôi sẽ liên hệ sớm.");
    setForm({
      name: "",
      email: "",
      checkIn: "",
      checkOut: "",
      note: "",
    });
  };

  return (
    <div className="mt-[--header-height] px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">Đặt phòng tại Pine Homestay</h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Họ và tên</label>
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Ngày nhận phòng</label>
            <input
              name="checkIn"
              type="date"
              min={today}
              required
              value={form.checkIn}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ngày trả phòng</label>
            <input
              name="checkOut"
              type="date"
              min={form.checkIn || today}
              required
              value={form.checkOut}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Ghi chú (nếu có)</label>
          <textarea
            name="note"
            rows="4"
            value={form.note}
            onChange={handleChange}
            placeholder="Ví dụ: cần phòng gần view đồi chè, ăn chay..."
            className="w-full border px-4 py-2 rounded resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:opacity-90 transition"
        >
          Gửi yêu cầu đặt phòng
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
