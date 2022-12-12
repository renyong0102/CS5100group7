import Candlestick from "./candlestick";
import Training from "./training";

function Detail() {
    return(
        <div>
            <h1 className="text-white">Stock Details</h1>
            <Candlestick/>
            <Training/>
        </div>


    );
}
export default Detail;