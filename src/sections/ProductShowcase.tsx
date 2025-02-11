import productimage from "@/assets/product_image.jpg";
import pyramidImage from "@/assets/metal2.png";
import tubeImage from "@/assets/metal1.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D1D0CE] py-24 overflow-x-clip">
    <div className="container">
      <div className="max-w-[700px] mx-auto">
        <div className="flex justify-center">
          <div className="tag">Boost Your Productivity</div>
        </div>
        <h2 className="text-center text-3xl text-black md:text-[54px] md:leading-[60px] font-sans tracking-tighter bg-clip-text mt-5">
          A more effective way to track Corrosion
        </h2>
        <p className="text-center font-sans text-[20px] leading-[30px] tracking-tight text-[#000000]">
          Effortlessly track and manage corrosion with our software. Get precise,
          real-time insights to extend asset life and cut maintenance costs—simple, efficient, and effective.
        </p>
      </div>
      <div className="relative">
        <Image 
          src={productimage} 
          alt="Product Image" 
          className="mt-10"/>
        <Image 
          src={pyramidImage} 
          alt="Pyramid Image" 
          height={320}
          width={320}
          className="hidden md:block absolute -right-36 top-2"//top-32
        />
        <Image 
          src={tubeImage} 
          alt="Tube Image" 
          height={320} 
          className="hidden md:block absolute bottom-[-60px] -left-36"// bottom-24
        />
      </div>
    </div>
  </section>;
};
