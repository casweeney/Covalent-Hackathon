import Token from './Token';

const Organizations = (props) => {
    
    console.log(props.tokens);

    return (
        <div className="flex m-7 space-x-6">
            <div className="bg-white w-full p-4">
                <div className="font-bold text-lg pb-4">Top Organizations</div>

                <div className="flex bg-gray-100 text-gray-500 p-2 uppercase font-bold text-xs">
                    <div className="w-1/3">
                        <div>Token</div>
                    </div>
                    <div className="w-3/4 flex space-x-14">
                        <div>Quote Rate</div>
                        <div>Liquidity</div>
                        <div>Trading Volume</div>
                        <div>Dex Name</div>
                    </div>
                </div>

                <div className="multi-channel-container divide-y divide-gray-200">
                    {props.tokens.length > 0 && props.tokens.map((token) => (
                        <Token 
                            key={token.contract_address} 
                            decimals={token.contract_decimals} 
                            name={token.contract_name} 
                            logo={token.logo_url} 
                            quote_rate={token.quote_rate}
                            swap_count={token.swap_count_24h}
                            total_liquidity={token.total_liquidity}
                            total_liquidity_quote={token.total_liquidity_quote}
                            total_volume_24h={token.total_volume_24h}
                            total_volume_24h_quote={token.total_volume_24h_quote}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Organizations;