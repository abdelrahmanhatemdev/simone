import { memo } from "react";
import "swiper/css";
import "swiper/css/navigation";

const news = [
  {
    title: "Grande Villa Modern Retreat",
    author: "Isabella",
    date: "28 March 2024",
    description:
      "Step into a modern villa that redefines simplicity and luxury. Combining sleek design with inviting tones, this home offers serene elegance. Natural light floods through large windows. Every room is crafted to elevate comfort while maintaining an understated aesthetic. It's a space where modern architecture meets warm living.",
  },
  {
    title: "Loft Serenity Urban Escape",
    author: "Luca",
    date: "15 April 2024",
    description:
      "This urban loft embraces creativity and comfort with a bold industrial flair. Exposed brick and steel frames contrast soft furnishings and warm lighting. The layout flows naturally, encouraging b and relaxation. Designed for modern professionals, it offers a haven amidst the city's buzz with open space and honest textures.",
  },
  {
    title: "Casa Verde Eco Living",
    author: "Sofia",
    date: "2 May 2024",
    description:
      "Casa Verde is an oasis of calm rooted in sustainable living. Earth-toned finishes, airy spaces, and plant-filled corners celebrate nature. Built with environmental care, it promotes energy efficiency. Inside, the ambiance soothes with gentle light and organic textures. A retreat for those who seek mindful, nature-connected living.",
  },
];


function News() {
  return (
    <section className="mt-40 md:mt-[35vw] mx-5 flex flex-col items-end gap-10 md:gap-40">
      <div className="flex flex-col gap-2 font-cormorant-garamond tracking-[.2rem] text-lg uppercase md:ms-20 md:me-24">
        <p className="border-b border-neutral-600 pb-2 w-fit pe-20 md:pe-40">Our</p>
        <p>News</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:mx-[15vw]">
        {news.map((item, i) => (
          <article key={i} className="flex flex-col gap-8">
            <h3 className="text-4xl">{item.title}</h3>
            <div className="flex flex-col gap-2">
              <p className="text-neutral-500 tracking-wider text-xl">
                {item.author}, {item.date}
              </p>
              <p className="leading-6 md:leading-8 xl:leading-10">{item.description}</p>
            </div>
            <a href="#">Read more</a>
          </article>
        ))}
      </div>
      
    </section>
  );
}
export default memo(News);
