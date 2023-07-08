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

const BigscreenNavbar = () => {
  const [showList, setShowList] = useState({ key: null });

  const handleShowList = (key) => {
    // toogle select list

    showList.key == key
      ? setShowList({ ...showList, key: null })
      : setShowList({ ...showList, key });
  };
  return (
    <nav className="">
      <ul className="hidden lg:flex flex-row">
        <li className="relative">
          <div
            onClick={() => handleShowList("support")}
            className="mx-[12px] text-[18px] font-[500] text-[#fff] hover:border-t-2 cursor-pointer"
          >
            <div className="flex flex-row justify-start items-center gap-2 ">
              <div>Support</div>
              <Icon icon="ep:arrow-down-bold" />
            </div>
          </div>
          {showList.key == "support" && (
            <div className="z-10 absolute bg-black w-[150px] max-h-auto shadow-2xl shadow-black rounded border-t-4 border-red-600 -left-[15%]  top-[100%]">
              {supportData.map(({ link, text }, index) => (
                <Link key={index} to={`/swapmute/${link}`}>
                  <div className="text-white p-1 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]">
                    {text}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </li>
        <li className="relative">
          <div
            onClick={() => handleShowList("currencies")}
            className="mx-[12px] text-[18px] font-[500] text-[#fff] hover:border-t-2 cursor-pointer"
          >
            <div className="flex flex-row justify-start items-center gap-2 ">
              <div>Currencies</div>
              <Icon icon="ep:arrow-down-bold" />
            </div>
          </div>
          {showList.key == "currencies" && (
            <div className="z-10 absolute bg-black w-[150px] max-h-auto shadow-2xl shadow-black rounded border-t-4 border-red-600 top-[100%]">
              {supportData.map(({ link, text }, index) => (
                <Link key={index} to={`/swapmute/${link}`}>
                  <div className="text-white p-1 mb-2 cursor-pointer hover:font-bold hover:bg-white hover:text-[#000]">
                    {text}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </li>
        <li>
          <div>
            <NavLink
              className="mx-[12px] text-[18px] font-[500] text-[#fff] hover:border-t-2"
              to="/swapmute"
            >
              Exchange
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink
            className=" mx-[12px] text-[18px] font-[500] text-[#fff] hover:border-t-2"
            to={"/swapmute/blog"}
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BigscreenNavbar;
