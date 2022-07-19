import { Fragment } from "react";
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <Fragment>
            {/* Side Navbar */}
            <div className="bg-indigo-900 w-64">
                <div className="bg-indigo-800">
                    <div className="uppercase text-gray-200 p-5 text-xl font-bold">Web3Dashboard</div>
                </div>

                <div>
                    <div className="p-5 text-gray-200 uppercase text-md font-bold">Tools</div>
                </div>

                <div className="flex m-5 mt-2 items-center">
                    <div>
                        <img className="h-5 w-5" src="images/campaign.png" alt="" />
                    </div>
                    <div className="mx-3 text-sm text-gray-100">
                        <NavLink activeClassName="nav-active" to="/">Assets</NavLink>
                    </div>
                </div>

                <div className="flex m-5 mt-2 items-center">
                    <div>
                        <img className="h-5 w-5" src="images/dashboard.png" alt="" />
                    </div>
                    <div className="mx-3 text-sm text-gray-100">
                        <NavLink activeClassName="nav-active" to="/dao">DAO</NavLink>
                    </div>
                </div>

                <div className="flex m-5 mt-2 items-center">
                    <div>
                        <img className="h-5 w-5" src="images/orders.png" alt="" />
                    </div>
                    <div className="mx-3 text-sm text-gray-100">
                        <NavLink activeClassName="nav-active" to="/nft">NFT</NavLink>
                    </div>
                </div>
            </div>
            {/* Side Navbar */}
        </Fragment>
    );
}

export default SideNav;