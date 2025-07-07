import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

function ReviewPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [reviews, setReviews] = useState([
    {
      name: "Nguyễn Ngọc Thanh Tâm",
      avatar: "/avatars/avatar1.png",
      text: "Khu vực bếp rộng rãi, không khí trong lành. Mình sẽ quay lại!",
      date: "Tháng 6, 2025",
      stars: 5,
    },
    {
      name: "Bùi Công Nam",
      avatar: "/avatars/avatar2.png",
      text: "Chủ nhà thân thiện, không gian rất thích hợp để sáng tạo nghệ thuật",
      date: "Tháng 5, 2025",
      stars: 5,
    },
    {
      name: "Nguyễn Hữu Duy Khánh",
      avatar: "/avatars/avatar3.png",
      text: "Một trải nghiệm trên cả tuyệt vời chủa mình và gia đình. Không gian yên tĩnh khi không có mình, sạch sẽ và đầy đủ tiện nghi đặc biệt là có \" chõ đồ soy \".",
      date: "Tháng 5, 2025",
      stars: 5,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    text: "",
    stars: 0,
  });

  const handleStarClick = (i) => {
    setFormData({ ...formData, stars: i + 1 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.text && formData.stars > 0) {
      setReviews([
        ...reviews,
        {
          name: formData.name,
          text: formData.text,
          stars: formData.stars,
          date: "Vừa xong",
          avatar: "/avatars/default.jpg",
        },
      ]);
      setFormData({ name: "", text: "", stars: 0 });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">
        Đánh giá từ khách hàng
      </h1>

      {/* Danh sách đánh giá */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="bg-white shadow-xl rounded-xl p-6 border border-gray-100"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-purple-700">{review.name}</div>
                <div className="text-sm text-gray-400">{review.date}</div>
              </div>
            </div>
            <p className="text-gray-700 italic mb-3">"{review.text}"</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < review.stars ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Form gửi đánh giá */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-md" data-aos="fade-up">
        <h2 className="text-2xl font-bold mb-4 text-center">Gửi đánh giá của bạn</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Tên của bạn"
            className="w-full p-3 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <textarea
            placeholder="Cảm nhận của bạn..."
            className="w-full p-3 border rounded"
            rows="4"
            value={formData.text}
            onChange={(e) => setFormData({ ...formData, text: e.target.value })}
          ></textarea>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`cursor-pointer text-2xl transition ${
                  i < formData.stars ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleStarClick(i)}
              />
            ))}
          </div>

          <button
            type="submit"
            className="block w-full bg-purple-600 text-white font-semibold py-3 rounded hover:bg-purple-700 transition"
          >
            Gửi đánh giá
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewPage;
