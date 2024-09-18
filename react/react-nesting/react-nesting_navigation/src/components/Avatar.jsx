import avatar from "../assets/avatar.jpg";
import Image from "./Image.jsx";

export default Avatar;

const Avatar = () => {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src={avatar} alt="avatar" />
    </button>
  );
};
