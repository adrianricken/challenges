import logo from "../assets/logo.jpg";
import Image from "./Image.jsx";

export default Logo;

const Logo = () => {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
};
