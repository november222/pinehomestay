import { useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã liên hệ!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="mt-[--header-height] px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Liên hệ với chúng tôi</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Họ và tên
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Lời nhắn
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-200"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:opacity-90 transition"
        >
          Gửi liên hệ
        </button>
      </form>

      <div className="mt-12 text-center text-sm text-gray-600">
        <p>📍 Địa chỉ: Bản Liền, Bắc Hà, Lào Cai</p>
        <p>📞 Điện thoại: 0123 456 789</p>
        <p>📧 Email: pinehomestay@example.com</p>
      </div>
    </div>
  );
}

export default ContactPage;
