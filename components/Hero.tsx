import Image from "next/image";
import banner from "./../public/images/hero-bg-image.jpg";

const Hero = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Image
        src={banner}
        alt="banner-image"
        className="w-full min-h-screen object-cover object-[45%_center] md:object-center"
      />
      <div
        className="bg-black/30 absolute top-0 w-full h-full text-gray-100
      flex items-center justify-center flex-col"
      >
        <h1 className="text-5xl md:text-[100px] lg:text-[150px] font-bold">
          John Dorian
        </h1>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
          Traveler, Photographer
        </p>
      </div>
    </div>
  );
};

export default Hero;
