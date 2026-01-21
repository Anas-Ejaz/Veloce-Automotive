import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import profileImg from "../../assets/veloce.png";

const TopNav = () => {
  return (
    <div className="fixed top-0 right-0 z-[999] h-[70px] w-[85%] bg-blue-700">
      <div className="flex h-full items-center justify-end px-8">

        {/* Right Section */}
        <div className="flex items-center gap-8">

          {/* Notification */}
          <div className="relative cursor-pointer">
            <FontAwesomeIcon
              icon={faBell}
              className="text-xl text-gray-300"
            />
            <span className="absolute -right-1 top-1 flex h-[13px] w-[13px] items-center justify-center rounded-full bg-blue-500 text-[10px] text-white">
              1
            </span>
          </div>

          {/* Profile */}
          <Link to="/settings">
            <img
              src={profileImg}
              alt="profile"
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default TopNav;
