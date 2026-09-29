type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updateAt: string;
};

export interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends Base {
  description: string;
  slug: Slug;
  name: string;
  image: Image;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _type: "reference";
  current: string;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "bloackquote";
}

interface Span {
  _key: string;
  _type: "span";
  text: string;
  marks: string[];
}

interface Category extends Base {
  description: string;
  title: string;
}
