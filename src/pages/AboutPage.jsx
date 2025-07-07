import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Section 1: Tiêu đề và ảnh mở đầu */}
      <section className="py-40 bg-gradient-to-br from-green-100 via-white to-green-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-green-800">Hành Trình Của Pine Homestay</h2>
          <p className="text-gray-700 italic text-lg">
            "Từ một bản làng nhỏ giữa núi rừng Bắc Việt, đến một không gian kết nối con người và thiên nhiên."
          </p>
        </div>
        <img
          src="/images/banlien.jpg"
          alt="Bản Liền"
          className="mt-10 w-full max-w-5xl mx-auto rounded-xl shadow-xl object-cover"
        />
      </section>

      {/* Section 2: Cội nguồn của sự sống */}
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2" data-aos="fade-right">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Cội nguồn của sự sống</h3>
          <p className="text-gray-700 leading-relaxed">
            Giữa vùng núi hoang sơ phía Bắc Việt Nam, Bản Liền hiện lên với đồi chè xanh mướt, đồi cọ cổ thụ, và con người sống chan hòa với thiên nhiên. Dù gặp khó khăn thiên tai, họ luôn kiên cường vươn lên, gìn giữ văn hóa truyền thống như một phần máu thịt.
          </p>
        </div>
        <img
          src="/images/gallery16.png"
          alt="Đồi núi"
          className="md:w-1/2 rounded-xl shadow-lg"
          data-aos="fade-left"
        />
      </section>

      {/* Section 3: Sự ra đời của Pine Homestay */}
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 bg-gray-50">
        <div className="md:w-1/2" data-aos="fade-left">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Sự ra đời của Pine Homestay</h3>
          <p className="text-gray-700 leading-relaxed">
            Từ tình yêu quê hương chúng tôi dựng lên Pine Homestay – ngôi nhà nhỏ nép bên sườn đồi, nhìn ra ruộng bậc thang và hồ cá yên bình. Chỉ cách thị trấn Bắc Hà 20km, nơi đây là điểm dừng chân thanh lành giữa núi rừng.
          </p>
        </div>
        <img
          src="/images/gallery5.png"
          alt="Pine Homestay"
          className="md:w-1/2 rounded-xl shadow-lg"
          data-aos="fade-right"
        />
      </section>

      {/* Section 4: Kết nối văn hóa */}
      <section className="py-20 text-center px-6">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Nơi kết nối văn hóa & trải nghiệm bản địa</h3>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Pine Homestay là cầu nối để bạn khám phá: từ ẩm thực bản địa, tắm suối, đến trải nghiệm nghề truyền thống như hái chè, đi cấy, thăm hang hổ, thác nước... Những tour khám phá được tổ chức bởi chính người bản địa, để bạn sống trọn vẹn trong nhịp sống dân tộc.
        </p>
      </section>

      {/* Section 5: Trích dẫn kết thúc */}
      <section
        className="py-24 bg-cover bg-center bg-fixed text-white text-center"
        style={{ backgroundImage: "url('/images/rice-terrace.jpg')" }}
      >
        <div className="bg-black/50 p-10 max-w-3xl mx-auto rounded-xl">
          <h2 className="text-3xl font-bold mb-4">“Pine Homestay không chỉ là nơi nghỉ dưỡng”</h2>
          <p className="text-lg leading-relaxed">
            Đó là câu chuyện hồi sinh của một bản làng, là hành trình gìn giữ văn hóa, là nơi tinh thần sống đẹp được lan tỏa giữa đại ngàn Tây Bắc.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
