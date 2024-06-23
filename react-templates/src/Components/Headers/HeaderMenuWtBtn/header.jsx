import { useState } from "react";
import { LuMenu } from "react-icons/lu";

const HeaderWithMenuBtnOnly = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prevValue) => !prevValue);
  };

  return (
    <div className="bg-[#063c52d1] px-24 py-8">
      <div className="flex items-center justify-between">
        <div>
          <img
            className="h-auto min-w-[130px] max-w-[100%]"
            src="http://boysenbsoftware.com/assets/images/logo.png"
            alt=""
            srcSet=""
          />
        </div>
        <button className="bg-white h-fit p-1" onClick={handleMenu}>
          <LuMenu color="gray" size={32} />
        </button>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          menu ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 text-white uppercase my-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Our Services</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderWithMenuBtnOnly;
