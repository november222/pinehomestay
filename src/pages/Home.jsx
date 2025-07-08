import { useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
  AOS.init({
    duration: 1200,   // animation kéo dài lâu hơn
    once: true,
    offset: 300       // scroll đến giữa mới bắt đầu
  });
}, []);
  return (
    <>
      <ImageSlider />
      <section className="bg-white py-12 text-center px-4 relative">
  <h2 className="text-4xl font-bold text-gray-800 mb-4">Chào mừng đến với Pine Homestay</h2>
  <p className="text-gray-600 max-w-2xl mx-auto text-lg">
    Nơi bạn tìm thấy sự bình yên giữa thiên nhiên. Một trải nghiệm lưu trú thân thiện, thoải mái và đáng nhớ giữa thiên nhiên hùng vĩ.
  </p>

  {/* Mũi tên gợi ý cuộn */}
  <div className="mt-8 flex justify-center">
    <div className="animate-bounce text-gray-500 text-3xl">&#8595;</div>
  </div>
</section>


      {/* Section 1: Image Left, Text Right */}
      <section className="py-20 px-6 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        <img
          src="/images/khonggian.png"
          alt="Relaxing Room"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
          data-aos="fade-right"
        />
        <div className="text-center md:text-left md:w-1/2" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4">Không gian yên tĩnh</h2>
          <p className="text-gray-700">
            Tận hưởng kỳ nghỉ trong không gian yên bình giữa thiên nhiên, lý tưởng cho việc thư giãn và tái tạo năng lượng.
          </p>
        </div>
      </section>

      {/* Section 2: Text Left, Image Right */}
      <section className="py-20 px-6 flex flex-col md:flex-row-reverse items-center gap-10 max-w-6xl mx-auto bg-gray-50">
        <img
          src="/images/phong.png"
          alt="Cozy Room"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
          data-aos="fade-left"
        />
        <div className="text-center md:text-left md:w-1/2" data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4">Phòng ấm cúng & đầy đủ tiện nghi</h2>
          <p className="text-gray-700">
            Mỗi phòng được thiết kế ấm áp, có view nhìn ra rừng cây hoặc vườn hoa, tạo cảm giác gần gũi với thiên nhiên.
          </p>
        </div>
      </section>

      {/* Section 3: Image Left, Text Right */}
      <section className="py-20 px-6 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        <img
          src="/images/hoatdong.jpg"
          alt="Nature Activities"
          className="w-full md:w-1/2 rounded-xl shadow-lg"
          data-aos="fade-right"
        />
        <div className="text-center md:text-left md:w-1/2" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4">Hoạt động ngoài trời hấp dẫn</h2>
          <p className="text-gray-700">
            Từ trekking rừng đến tiệc BBQ, Pine Homestay mang đến trải nghiệm đáng nhớ cho mọi lứa tuổi.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
