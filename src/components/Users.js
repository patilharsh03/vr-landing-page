import Avatar1 from "../assets/img/avt1.png";
import Avatar2 from "../assets/img/avt2.png";
import Avatar3 from "../assets/img/avt3.png";
import Avatar4 from "../assets/img/avt4.png";

// import icons
import { BsFillCircleFill } from "react-icons/bs";

const Users = () => {
  return (
    <div className="flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start">
      <div className="flex -space-x-2">
        <div className="w-12 h-12 rounded-full">
          <img src={Avatar1} alt="" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={Avatar2} alt="" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={Avatar3} alt="" />
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src={Avatar4} alt="" />
        </div>
      </div>
      <div className="flex items-center space-x-2 font-secondary font-medium">
        <BsFillCircleFill className="text-xs text-green-500 animate-pulse" />
        <div>400k people online</div>
      </div>
    </div>
  );
};

export default Users;
