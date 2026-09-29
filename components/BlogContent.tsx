import Link from "next/link";
import { Post } from "../types";
import Container from "./Container";
import Image from "next/image";
import { urlFor } from "../sanity/lib/image";

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  return (
    <Container className="bg-gray-100 px-3 lg:px-20 py-10 flex flex-col gap-10">
      {posts.map((post) => (
        <Link
          href={{
            pathname: `/post/${post?.slug?.current}`,
            query: { slug: post?.slug?.current },
          }}
          key={post?._id}
        >
          <div
            className="flex flex-col lg:flex-row  gap-10 bg-white rounded-md rounded-tr-md 
          rounded-br-md hover:shadow-md duration-200"
          >
            <div
              className="w-full lg:flex-[2] group overflow-hidden rounded-md lg:rounded-tr-none   
              lg:rounded-br-none  lg:rounded-tl-md lg:rounded-bl-md relative aspect-[16/9]"
            >
              <Image
                src={urlFor(post?.mainImage).url()}
                fill
                alt="post-image"
                className="w-full object-cover group-hover:scale-105
                duration-500"
              />
              <div
                className="absolute top-0 left-0 bg-black/20 w-full h-full 
              group-hover:hidden duration-200"
              />
              <div
                className="absolute hidden group-hover:inline-flex left-0 bottom-0 w-full 
              bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg
              text-white p-5 justify-center duration-300"
              >
                <p className="text-lg font-semibol">Click To Read</p>
              </div>
            </div>
            <div className="w-full lg:flex-[1] flex flex-col justify-between gap-5 py-1 md:py-10 px-4">
              <div className="flex flex-col gap-4 justify-between">
                <div className="flex items-center gap-5">
                  {post?.categories.map((item) => (
                    <p
                      key={item?._id}
                      className="text-sm uppercase text-blue-600 font-semibold"
                    >
                      {item?.title}
                    </p>
                  ))}
                </div>

                <h2 className="text-2xl  hover:text-orange-600 duration-200 font-semibold cursor-pointer">
                  {post?.title}
                </h2>
                <p className=" text-gray-500">{post?.description}</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-500">
                  {new Date(post?._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src={urlFor(post?.author?.image).url()}
                    alt="author-image"
                    width={200}
                    height={200}
                    className="rounded-full w-10 h-10 object-cover"
                  />
                  <p className="text-sm font-medium">{post?.author?.name}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default BlogContent;
