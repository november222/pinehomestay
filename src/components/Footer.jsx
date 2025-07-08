import { FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";



function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cột 1: Logo & mô tả */}
        <div>
            <img src="/logo/logo.png" alt="Pine Homestay Logo" className="h-16 w-auto mb-4 rounded-xl " />
          <h2 className="text-xl font-bold mb-2">Pine Homestay</h2>
          <p className="text-sm text-gray-400">
            Một nơi nghỉ dưỡng bình yên giữa thiên nhiên. Trải nghiệm không gian xanh và thư giãn tuyệt đối.
          </p>
        </div>

        {/* Cột 2: Mạng xã hội */}
<div>
  <h3 className="font-semibold mb-2">Liên kết</h3>
  <div className="flex items-center space-x-4 text-2xl text-gray-600 ">
    <a href="https://youtu.be/C3IsbH9A750?si=OLre144Gv6LbsEMu" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition duration-300">
      <FaYoutube />
      Youtube
    </a>
    <a href="https://www.tiktok.com/@ban_lien_pine_homestay" target="_blank" rel="noopener noreferrer" className="hover:text-black transition duration-300">
      <FaTiktok />
      Tiktok
    </a>
    <a href="https://www.facebook.com/p/B%E1%BA%A3n-Li%E1%BB%81n-Pine-Homestay-100066575389376/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition duration-300">
      <FaFacebook />
      Facebook
    </a>
  </div>
</div>

        {/* Cột 3: Thông tin liên hệ */}
        <div>
          <h3 className="font-semibold mb-2">Liên hệ</h3>
          <ul className="text-sm space-y-1 text-gray-400">
            <li>📍 Bản Liền, Bắc Hà, Lào Cai</li>
            <li>📞 0123 456 798 | Ms Thông</li>
            <li>✉️ pinehomestay@example.com</li>
          </ul>
        </div>
      </div>

      {/* Line dưới cùng */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Pine Homestay. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
