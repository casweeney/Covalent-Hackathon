import { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const assetLink = useRef();
  const daoLink = useRef();
  const nftLink = useRef();
  const [active, setActive] = useState(false);

  const handleActiveLink = (type) => {
    if (type == "assets") {
      console.log((assetLink.current.style.color = "red"));
    } else if (type == "dao") {
      console.log((daoLink.current.style.color = "red"));
    } else {
      console.log((nftLink.current.style.color = "red"));
    }
  };

  return (
    <Fragment>
      {/* Side Navbar */}
      <div className="bg-indigo-900 w-64">
        <div className="bg-indigo-800">
          <div className="uppercase text-gray-200 p-5 text-xl font-bold">
            Web3Dashboard
          </div>
        </div>

        <div>
          <div className="p-5 text-gray-200 uppercase text-md font-bold">
            Tools
          </div>
        </div>

        <div className="flex m-5 mt-2 items-center">
          <div>
            <img className="h-5 w-5" src="images/campaign.png" alt="" />
          </div>
          <div className="mx-3 text-sm text-gray-100">
            <Link
              to="/"
              onClick={() => handleActiveLink("assets")}
              className={active && "nav-active"}
              ref={assetLink}
            >
              Assets
            </Link>
          </div>
        </div>

        <div className="flex m-5 mt-2 items-center">
          <div>
            <img className="h-5 w-5" src="images/dashboard.png" alt="" />
          </div>
          <div className="mx-3 text-sm text-gray-100">
            <Link
              to="/dao"
              onClick={() => handleActiveLink("dao")}
              className={active && "nav-active"}
              ref={daoLink}
            >
              DAO
            </Link>
          </div>
        </div>

        {/* <div className="flex m-5 mt-2 items-center">
          <div>
            <img className="h-5 w-5" src="images/orders.png" alt="" />
          </div>
          <div className="mx-3 text-sm text-gray-100">
            <Link
              to="/nft"
              onClick={() => handleActiveLink("nft")}
              ref={nftLink}
            >
              NFT
            </Link>
          </div>
        </div> */}
      </div>
      {/* Side Navbar */}
    </Fragment>
  );
};

export default SideNav;
