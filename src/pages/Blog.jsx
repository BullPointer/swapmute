/* eslint-disable react-hooks/exhaustive-deps */
import BlogBody from "../components/BlogBody";
import BlogHeader from "../components/BlogHeader";

const Blog = () => {
  return (
    <>
      <BlogHeader />
      <div className="flex justify-center items-center">
        <div className="bg-white w-[50%] p-4 text-lg rounded-b-lg text-[#363535]">
          Cryptocurrency related news and most recent stories on blockchain
          tech, DeFi industry, crypto markets, and renowned coins.
        </div>
      </div>
      <BlogBody />
    </>
  );
};

export default Blog;
