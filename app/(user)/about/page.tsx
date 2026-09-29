"use client";

import Container from "./../../../components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import {
  Camera,
  Globe,
  Pen,
  Star,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import imageBg from "./../../../public/images/image-1.jpg";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    icon: <Globe className="size-12 text-blue-600" />,
    title: "10+ Years of Traveling",
    description:
      "I have visited over 40 countries, exploring remote wilderness, vibrant megacities, and everything in between.",
    image: "/images/image-1.jpg",
  },
  {
    icon: <Camera className="size-12 text-blue-600" />,
    title: "Professional Photography",
    description:
      "Every photo on this blog is captured with professional gear, aimed at bringing the raw beauty of our planet right to your screen.",
    image: "/images/image-2.jpg",
  },
  {
    icon: <Users className="size-12 text-blue-600" />,
    title: "Sharing Experiences",
    description:
      "My goal isn't just to show pretty pictures, but to share real travel tips, cultural insights, and honest guides to help your own journeys.",
    image: "/images/image-3.jpg",
  },
  {
    icon: <Star className="size-12 text-blue-600" />,
    title: "Artistic Approach",
    description:
      "I believe that travel is an art form. Every destination teaches us something new, and I document those life-changing lessons here.",
    image: "/images/image-4.jpg",
  },
];

function Slider() {
  return (
    <div className="relative w-full max-w-6xl mx-auto select-none px-4 md:px-12">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true}
        autoHeight={false}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active",
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="overflow-hidden rounded-md shadow-sm w-full flex items-stretch"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="!h-auto !flex items-stretch">
            <div
              className="w-full h-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat px-4 md:px-16 py-12 md:py-[100px] relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="max-w-[600px] mx-auto flex flex-col items-center gap-6 text-center bg-black/60 px-[10px] py-[30px] rounded-xl">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center pointer-events-none">
                  {slide.icon}
                </div>
                <h3 className="text-2xl text-white font-bold pointer-events-none">
                  {slide.title}
                </h3>
                <p className="text-lg text-white max-w-xl leading-relaxed pointer-events-none">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev hidden md:flex absolute left-[10px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md items-center justify-center hover:bg-gray-50 duration-200 z-10">
        <ChevronLeft className="size-6 text-gray-600" />
      </button>
      <button className="custom-next hidden md:flex absolute right-[10px] top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md items-center justify-center hover:bg-gray-50 duration-200 z-10">
        <ChevronRight className="size-6 text-gray-600" />
      </button>

      <div className="custom-pagination flex items-center justify-center gap-2 mt-8" />

      <style jsx global>{`
        .swiper-bullet {
          display: inline-block;
          height: 10px;
          width: 10px;
          border-radius: 9999px;
          background-color: #d1d5db;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .swiper-bullet-active {
          background-color: #2563eb;
          width: 32px;
        }
      `}</style>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full">
      <div className="bg-gray-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Traveler, Photographer & Storyteller
        </p>
      </div>

      <Container className="bg-white px-3 lg:px-20 py-16">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl font-bold">Hi, I&apos;m Djon Dorian</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            I&apos;ve been traveling the world for over 10 years, capturing
            moments through my lens and sharing stories from every corner of the
            globe. This blog is my digital home — a place where adventure meets
            art.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            From the mountains of Patagonia to the streets of Tokyo, I believe
            every journey has a story worth telling. Join me as I explore,
            photograph and document the beauty of our world.
          </p>
        </div>
      </Container>

      <Container className="bg-gray-100 px-3 lg:px-20 py-16">
        <div className="flex flex-col items-center gap-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">Why This Blog?</h2>
            <p className="text-gray-500 text-lg">
              Everything that makes us different
            </p>
          </div>
          <Slider />
        </div>
      </Container>

      <div className="bg-white py-16 px-4 text-center border-t border-gray-100">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s explore together</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Follow my journey and get inspired for your next adventure.
        </p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold duration-200 inline-block"
        >
          Read the Blog
        </Link>
      </div>
    </div>
  );
}
