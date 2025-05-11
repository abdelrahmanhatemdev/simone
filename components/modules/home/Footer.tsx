import Image from "next/image";
import { memo } from "react";

const contact = [
  "3127 Doctors Drive",
  "Los Angeles",
  "California",
  "+1-202-555-0186",
  "+1-202-555-0111",
  "info@paolosimone.com",
];

function Footer() {
  return (
    <section className="mx-5 mt-20 mb-40 flex flex-col gap-3">
      <div className="flex justify-center">
        <p>Follow Us</p>
      </div>
      <div className="flex gap-3 justify-center text-xs">
        {contact.map((item, i) => (
          <span
            className={
              "inline-block pe-3 py-2" +
              (i === contact.length - 1 ? "" : " border-e border-white")
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
