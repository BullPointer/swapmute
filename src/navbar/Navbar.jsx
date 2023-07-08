import { useState } from "react";
import { Icon } from "@iconify/react";
import BigscreenNavbar from "./BigscreenNavbar";
import SmallscreenNavbar from "./SmallscreenNavbar";

function Navbar() {
  const [btnState, setBtnState] = useState(false);

  // for responsive navigation bar
  const toggle = () => {
    setBtnState(!btnState);
  };

  // end of responsive navigation bar
  return (
    <>
      {/* <!-- start of navigation --> */}

      <div className="w-full bg-black p-0 lg:p-6 relative flex flex-col lg:flex-row justify-center items-center">
        <h2 className="flex fixed top-0 left-0  justify-between w-full lg:w-auto lg:p-0 p-4 bg-black lg:bg-black lg:absolute lg:left-[20px] lg:top-[50%] lg:-translate-y-[50%] text-[20px] text-white">
          <div>© SWAPMUTE</div>
          <div className={"flex text-white lg:hidden"} onClick={() => toggle()}>
            {!btnState ? (
              <Icon icon="fluent:list-bar-16-filled" fontSize={30} />
            ) : (
              <Icon icon="mingcute:close-fill" fontSize={30} />
            )}
          </div>
        </h2>
        <BigscreenNavbar />
        {btnState && <SmallscreenNavbar />}
      </div>
      {/* <!-- end of navigation --> */}
    </>
  );
}
export default Navbar;
