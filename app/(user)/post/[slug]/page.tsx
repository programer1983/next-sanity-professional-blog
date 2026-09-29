import { groq, PortableText } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { Post } from "../../../../types";
import Container from "../../../../components/Container";
import Image from "next/image";
import { urlFor } from "../../../../sanity/lib/image";
import {
  BsYoutube,
  BsGithub,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import Link from "next/link";
import { RichText } from "../../../../components/RichText";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export const revalidate = 30;

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  const query = groq`*[_type == 'post']{
    slug
   }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoute = slugs.map((slug) => slug?.slug?.current);

  return slugRoute
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({
      slug,
    }));
};

const SlugPage = async ({ params }: Props) => {
  const { slug } = await params;

  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
   ...,
   body,
   author->
}`;
  const post: Post = await client.fetch(query, { slug });
  console.log(post);
  return (
    <Container className="mb-10 pt-[30px]">
      <div className="flex items-center mb-10">
        <div className="w-full md:w-2/3">
          {post?.mainImage && (
            <Image
              src={urlFor(post.mainImage).url()}
              alt="post-image"
              width={500}
              height={500}
              className="object-cover w-full"
            />
          )}
        </div>
        <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
          {post?.author?.image && (
            <Image
              src={urlFor(post.author.image).url()}
              alt="author-image"
              width={200}
              height={200}
              className="object-cover w-32 h-32 rounded-full object-top"
            />
          )}
          <p className="text-3xl text-[#5442ae] font-semibold">
            {post?.author?.name}
          </p>
          <p className="text-sm tracking-wide text-center">
            {post?.author?.description}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.youtube.com/@reactjsBD"
              target="blank"
              className="w-10 h-10 bg-red-500 text-white text-xl rounded-full
              flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <BsYoutube />
            </Link>
            <Link
              href="https://www.youtube.com/@reactjsBD"
              target="blank"
              className="w-10 h-10 bg-gray-500 text-white text-xl rounded-full
              flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <BsGithub />
            </Link>
            <Link
              href="https://www.youtube.com/@reactjsBD"
              target="blank"
              className="w-10 h-10 bg-blue-900 text-white text-xl rounded-full
              flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <BsFacebook />
            </Link>
            <Link
              href="https://www.youtube.com/@reactjsBD"
              target="blank"
              className="w-10 h-10 bg-red-900 text-white text-xl rounded-full
              flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <BsInstagram />{" "}
            </Link>
            <Link
              href="https://www.youtube.com/@reactjsBD"
              target="blank"
              className="w-10 h-10 bg-blue-500 text-white text-xl rounded-full
              flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <BsLinkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="px-3">
        <PortableText value={post?.body} components={RichText} />
      </div>
    </Container>
  );
};

export default SlugPage;
