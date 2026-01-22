import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import profileImg from "../../assets/veloce.png";

const TopNav = () => {
  return (
    <div className="fixed top-0 right-0 z-[999] h-[9vh] w-[85%] bg-blue-700">
      <div className="flex h-full items-center justify-end px-8">

        <div className="flex items-center gap-8">

          <div className="relative cursor-pointer">
            <FontAwesomeIcon
              icon={faBell}
              className="text-xl text-gray-300"
            />
          </div>

            <img
              src={profileImg}
              alt="profile"
              className="h-10 w-10 rounded-full object-cover"
            />

        </div>
      </div>
    </div>
  );
};

export default TopNav;
