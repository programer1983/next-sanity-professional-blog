import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity/lib/image";
import { PortableTextComponents } from "@portabletext/react";

export const RichText: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="flex items-center justify-center">
        <Image
          src={urlFor(value).url()}
          alt="post-image"
          width={700}
          height={700}
          className="object-contain py-6"
        />
      </div>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-blue-600 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-5 list-disc space-y-3">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-10 py-5 list-decimal space-y-3">{children}</ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link href={value.href} rel={rel} className="underline text-blue-600">
          {children}
        </Link>
      );
    },
  },
};
