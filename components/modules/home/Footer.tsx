import { contact } from "@/constants/contact";
import { memo } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <section className="mx-5 mt-20 mb-40 flex flex-col gap-3" id="contact">
      <div className="flex flex-col gap-5 justify-center items-center">
        <p>Follow Us</p>
        <div className="flex gap-2">
          <FaFacebookF size={18} />
          <FaInstagram size={18} />
          <FaTwitter size={18} />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-xs flex-wrap">
        {contact.map((item, i) => (
          <span
            className={
              "block sm:inline-block pe-3 py-2" +
              (i === contact.length - 1 ? "" : " sm:border-e sm:border-white")
            }
            key={i}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex justify-center text-xs">
        Terms. &copy; 2025 Simone USA
      </div>
    </section>
  );
}
export default memo(Footer);
