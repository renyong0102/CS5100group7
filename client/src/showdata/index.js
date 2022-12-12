import AllDataComponent from "./alldata";

function ShowDataComponent() {
    return(
        <div>
            <h1 className="text-white">
                Dataset</h1>
            <div className="position-relative mb-2">
                <img src="/images/showpage.jpeg" className="w-100"/>

            </div>
            <AllDataComponent/>
        </div>
    );
}
export default ShowDataComponent;