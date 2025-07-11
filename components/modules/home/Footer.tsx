import { contact } from "@/constants/contact";
import { fadeSlideDown, fadeSlideDown1, fadeSlideDown2, fadeSlideDown3 } from "@/lib/animation";
import dynamic from "next/dynamic";
import { memo } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
const Animate = dynamic(() => import("@/components/custom/Animate"));
 


function Footer() {
  return (
    <section className="mx-5 mt-20 mb-40 flex flex-col gap-3" id="contact">
      <div className="flex flex-col gap-5 justify-center items-center">
        <Animate variants={fadeSlideDown} element="p">Follow Us</Animate>
        <Animate variants={fadeSlideDown1} className="flex gap-2">
          <FaFacebookF size={18} />
          <FaInstagram size={18} />
          <FaTwitter size={18} />
        </Animate>
      </div>
      <Animate variants={fadeSlideDown2} className="flex flex-col sm:flex-row gap-3 justify-center items-center text-xs flex-wrap">
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
      </Animate>
      <Animate variants={fadeSlideDown3} className="flex justify-center text-xs">
        Terms. &copy; 2025 Simone USA
      </Animate>
    </section>
  );
}
export default memo(Footer);
