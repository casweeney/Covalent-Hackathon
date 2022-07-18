const Token = (props) => {
    return (
        <div className="single-channel py-2">
            <div className="flex">
                <div className="w-1/3">
                    <div className="flex items-center space-x-2">
                        <div>
                            <img src={props.logo} className="w-8 h-8 rounded-full" alt="" />
                        </div>
                        <div className="">{props.name}</div>
                    </div>
                </div>

                <div className="w-3/4 flex space-x-16">
                    <div>{props.quote_rate}</div>
                    <div className="text-green-500">{props.total_liquidity}</div>
                    <div>340</div>
                    <div className="text-blue-500">4.9%</div>
                </div>
            </div>
        </div>
    );
}

export default Token;