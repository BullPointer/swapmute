/* eslint-disable react/prop-types */
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";

const supportData = [
  { link: "how-it-works", text: "How It Works" },
  { link: "help", text: "Help Center" },
  { link: "support", text: "Contact Support" },
  { link: "faq", text: "FAQ" },
];

function SmallscreenNavbar() {
  const [showList, setShowList] = useState({ key: null });

  const handleShowList = (key) => {
    // toogle select list

    showList.key == key
      ? setShowList({ ...showList, key: null })
      : setShowList({ ...showList, key });
  };
  return (
    <nav className="z-10 absolute left-0 top-16 w-full h-screen bg-[#242222] lg:hidden animate-cool-slide-in">
      <ul className="lg:hidden w-full flex flex-col justify-start items-start">
        <li className=" bg-black-500 cursor-pointer w-full p-2 text-[22px] text-white font-[600]">
          <div
            onClick={() => handleShowList("support")}
            className="flex flex-row justify-start items-center gap-3"
          >
            <div>Support</div>
            <Icon icon="ep:arrow-down-bold" />
          </div>
          {showList.key == "support" && (
            <div className="">
              {supportData.map(({ link, text }, index) => (
                <Link key={index} to={`${link}`}>
                  <div className="text-white p-1 mx-4 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]">
                    {text}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </li>
        <li className=" bg-black-500 cursor-pointer w-full p-2 text-[22px] text-white font-[600]">
          <div
            onClick={() => handleShowList("test")}
            className="flex flex-row justify-start items-center gap-3"
          >
            <div>Test</div>
            <Icon icon="ep:arrow-down-bold" />
          </div>
          {showList.key == "test" && (
            <div className="">
              {supportData.map(({ link, text }, index) => (
                <Link key={index} to={`${link}`}>
                  <div className="text-white p-1 mx-4 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]">
                    {text}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </li>
        <li className="bg-black-500 cursor-pointer w-full p-2 text-[22px] text-white font-[600]">
          <NavLink to="/swapmute">Exchange</NavLink>
        </li>
        <li className="bg-black-500 cursor-pointer w-full p-2 text-[22px] text-white font-[600]">
          <NavLink to="/swapmute/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SmallscreenNavbar;
