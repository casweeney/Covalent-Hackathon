import { ethers } from "ethers";

const Assets = (props) => {

    // const loading = true;

    if(props.loading) {
        return <p className="text-white text-center text-4xl mb-4">Loading...</p>
    }

    if(props.allAssets.length === 0) {
        return <p className="text-white text-center text-4xl mb-4">Search to track your assets accross multiple chains</p>
    }

    return (
        <div className="flex m-7 space-x-6">
            <div className="bg-white w-full p-4">
                <div className="font-bold text-lg pb-4">Top crypto assets</div>

                <table className="table-auto w-full">
                    <thead className="text-left bg-gray-100 text-gray-500 p-2 uppercase font-bold text-xs">
                        <tr>
                            <th>Token</th>
                            <th>Ticker</th>
                            <th>Balance</th>
                            <th>Last Transfered</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody className="multi-channel-container divide-y divide-gray-200">
                        {props.allAssets.length > 0 && props.allAssets.map((asset) => {
                            return (
                                <tr key={asset.contract_address} className="single-channel py-2">
                                    <td><img src={asset.logo_url} className="w-8 h-8 rounded-full" alt="" /> {asset.contract_name}</td>
                                    <td>{asset.contract_ticker_symbol}</td>
                                    <td>{ethers.utils.formatUnits(asset.balance, asset.contract_decimals)}</td>
                                    <td>{asset.last_transferred_at}</td>
                                    <td>{asset.type}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Assets;