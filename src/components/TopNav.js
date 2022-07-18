const TopNav = () => {
    return (
        <div>
            <div className="bg-gray-900 px-2 py-0.5 h-18 flex">
                <div className="md:w-full sm:w-full flex p-3 items-center">
                    <input type="text" className="w-full py-2 px-2 border border-gray-400 rounded" placeholder="Enter wallet address" />
                    <button>
                        <img src="images/search.png" className="w-10 h-10 bg-gray-100 mx-2 rounded-full p-1" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TopNav;