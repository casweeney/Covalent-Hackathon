import { useState } from "react";

const TopNav = (props) => {

    const [address, setAddress] = useState('');
    const [chainId, setChainId] = useState('');

    const addressChangeHandler = (e) => {
        setAddress(e.target.value);
    }

    const chainChangeHandler = (e) => {
        setChainId(e.target.value);
    }

    const fetchAssestsHandler = async (e) => {
        e.preventDefault();

        if(address === '' || chainId === '') {
            alert('Address and Network needed');
            return;
        }

        props.onLoading(true);

        const response = await fetch(`https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?&key=ckey_c9ceec82b70743a0b334b50ec49`);
        const data = await response.json();

        props.onLoading(false);

        props.onFetchedToken(data.data.items);
    }

    return (
        <div>
            <div className="bg-gray-900 px-2 py-0.5 h-18 flex">
                <form className='w-full' onSubmit={fetchAssestsHandler}>
                    <div className="md:w-full sm:w-full flex p-3 items-center space-x-2">
                        <input onChange={addressChangeHandler} value={address} type="text" className="w-full py-2 px-2 border border-gray-400 rounded" placeholder="Enter wallet address" />
                        <select onChange={chainChangeHandler} className="py-2 px-2 rounded">
                            <option value="">Select Network</option>
                            <option value="1">ETH</option>
                            <option value="56">BSC</option>
                            <option value="137">Polygon</option>
                        </select>
                        <button type="submit">
                            <img src="images/search.png" className="w-10 h-10 bg-gray-100 mx-2 rounded-full p-1" alt="" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TopNav;