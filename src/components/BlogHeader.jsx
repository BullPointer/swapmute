import { useBlogContext } from "../context/BlogContext";

/* eslint-disable react/prop-types */
const BlogHeader = () => {
  const { handleCategory, active } = useBlogContext();
  const activeStyle = (cat) =>
  cat == active ? "gradient-blue-card rounded-full text-red-400" : "";
  
  return (
    <div className="flex flex-col justify-end items-center w-full h-[30vh] bg-black ">
      <div className="bg-black py-2 text-white text-5xl w-[80%] text-center rounded-t-lg">
        Blog
      </div>
      <div className="bg-black w-[80%] ">
        <ul className="flex flex-row gap-4 py-4 px-2">
          {[
            "All",
            "Latest News",
            "For You",
            "Price Predictions",
            "Crypto Updates",
          ].map((list, index) => (
            <li
              onClick={() => handleCategory(list)}
              className={`text-white text-lg cursor-pointer p-4 hover:text-red-300 ${activeStyle(
                list
              )}`}
              key={index}
            >
              {list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogHeader;
