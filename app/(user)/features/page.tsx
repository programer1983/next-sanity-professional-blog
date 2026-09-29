import Container from "./../../../components/Container";
import { Camera, Globe, Pen, Star, Users, Zap } from "lucide-react";
import Link from "next/Link";

const features = [
  {
    icon: <Pen className="size-8 text-blue-600" />,
    title: "Easy Writing",
    description:
      "Create and publish beautiful blog posts with our intuitive editor. No technical skills required.",
  },
  {
    icon: <Camera className="size-8 text-blue-600" />,
    title: "Photo Gallery",
    description:
      "Showcase your photography with stunning galleries. Upload and organize your best shots.",
  },
  {
    icon: <Globe className="size-8 text-blue-600" />,
    title: "Travel Maps",
    description:
      "Share your travel routes and destinations with interactive maps on every post.",
  },
  {
    icon: <Users className="size-8 text-blue-600" />,
    title: "Community",
    description:
      "Connect with fellow travelers and photographers. Comment, like and share inspiration.",
  },
  {
    icon: <Star className="size-8 text-blue-600" />,
    title: "Featured Posts",
    description:
      "Get your best content highlighted on the homepage and reach a wider audience.",
  },
  {
    icon: <Zap className="size-8 text-blue-600" />,
    title: "Fast & SEO Ready",
    description:
      "Built with Next.js for lightning fast performance and optimized for search engines.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="w-full">
      <div className="bg-gray-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Features</h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Everything you need to share your story with the world
        </p>
      </div>
      <Container className="bg-gray-100 px-3 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-8 flex flex-col gap-4 hover:shadow-md duration-200"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-white py-16 px-4 text-center border-t border-gray-100">
        <h2 className="text-3xl font-bold mb-4">Ready to start blogging?</h2>
        <p className="text-gray-500 mb-8 max-w-xl mx-auto">
          Join thousands of creators sharing their stories every day.
        </p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold duration-200 inline-block"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
