import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { BsYoutube, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <Container className="text-gray-100 bg-black p-10 flex flex-col gap-y-5 md:flex-row  justify-between items-center">
      <Logo title="Bloggers" className="text-white" />
      <div className="text-gray-300 flex items-center gap-7">
        <Link href="https://www.youtube.com/@reactjsBD">
          <BsYoutube className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href="https://www.youtube.com/@reactjsBD">
          <BsGithub className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href="https://www.youtube.com/@reactjsBD">
          <BsFacebook className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href="https://www.youtube.com/@reactjsBD">
          <BsInstagram className="text-2xl hover:text-red-500 duration-200" />
        </Link>
      </div>
      <p className="text-sm text-gray-300">
        @ All rights reserved{" "}
        <Link
          href="https://www.youtube.com/@reactjsBD"
          target="blank"
          className="hover:text-white font-semibold duration-200"
        >
          @reactjsBD
        </Link>
      </p>
    </Container>
  );
};

export default Footer;
