import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div>
      <img
        src={assets.header_img}
        alt=""
        className="w-36 h-36 rounded-full mb-6"
      />
      <h1>Hey Developer</h1>
    </div>
  );
};

export default Header;
