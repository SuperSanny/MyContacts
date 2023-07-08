import { Link } from "react-router-dom";

import contactLogo from "../assets/img/contacts-book.png";

const Header = ({ heading, paragraph, linkname, linkUrl = "#" }) => {
  return (
    <>
      <div className="mb-10">
        <div className="flex justify-center">
          <img src={contactLogo} alt="img" className="h-14 w-14" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {heading}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 mt-5">
          {paragraph}
          <Link
            to={linkUrl}
            className="font-medium text-orange-600 hover:text-orange-200"
          >
            {linkname}
          </Link>
        </p>
      </div>
    </>
  );
};

export default Header;
