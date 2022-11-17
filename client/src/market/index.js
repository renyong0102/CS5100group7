import Search from "./search";
import DatasetComponent from "./dataset";

function MarketComponent() {
    return(
        <div>
            <div className="position-relative mb-2">
                <img src="/images/banner.jpg" className="w-100"/>

            </div>
            <h1 className="text-white">
                Market</h1>
            <Search/>
            <DatasetComponent/>
        </div>
    );
}
export default MarketComponent;