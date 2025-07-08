import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TourPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className=" mt-20 pt-[var(--header-height)] px-4 md:px-10 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">
        Tour trải nghiệm bản làng
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <img
          src="/images/gallery11.png"
          alt="Tour khám phá"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          data-aos="fade-right"
        />
        <div className="md:w-1/2" data-aos="fade-left">
          <p className="text-gray-700 mb-4">
            Pine Homestay tổ chức các tour tham quan bản làng, đưa bạn khám phá những cung đường quanh co, thác nước hùng vĩ, suối mát và ruộng bậc thang bát ngát. Hướng dẫn viên là người bản địa nhiệt tình sẽ đồng hành cùng bạn.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Tham quan cây báo vụ mùa, hang hổ, cây trà cổ thụ</li>
            <li>Tắm suối thiên nhiên và dạo bộ trên ruộng bậc thang</li>
            <li>Trải nghiệm làm ruộng, hái chè cùng người dân</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <img
          src="/images/gallery17.png"
          alt="Tour địa phương"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
          data-aos="fade-left"
        />
        <div className="md:w-1/2" data-aos="fade-right">
          <p className="text-gray-700 mb-4">
            Tour được tổ chức hàng ngày, tùy theo số lượng khách. Bạn có thể đăng ký tại quầy lễ tân hoặc đặt trước qua trang đặt phòng.
          </p>
          <p className="text-gray-700">
            Mức giá ưu đãi, hướng dẫn viên thân thiện, trải nghiệm chân thực. Đây là cơ hội để bạn sống chậm lại và cảm nhận nhịp sống nơi núi rừng.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TourPage;