import {useEffect, useState} from "react";

function DatasetComponent() {
    const [allData, setAllData] = useState('');
    const [stockInfos, setStockInfos] = useState([]);
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "https://raw.githubusercontent.com/Dabaiee/CS5100group7/main/client/src/market/dataset.json", true);
    txtFile.send()
    txtFile.onreadystatechange = function () {
        // console.log("txtFile.readyState = " + txtFile.readyState)
        // console.log("txtFile.status = " + txtFile.status)
        if (txtFile.readyState === 4 && txtFile.status === 200) {
            setAllData(txtFile.responseText);
        }
    };

    useEffect(() => {
        if (allData) {
            //console.log("get all the Data");
            //console.log(allData);
            setStockInfos(JSON.parse(allData))
        }
    }, [allData]);

    useEffect(() => {
        if (stockInfos) {
            console.log(stockInfos)
            console.log("stockInfos !!!!!!!")
        }

    }, [stockInfos])

    return (
        <div>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Asset</th>
                    <th scope="col">MARKET CAP</th>
                    <th scope="col">AVG VOLUME</th>
                    <th scope="col">PRIMARY EXCHANGE</th>
                </tr>
                </thead>
                <tbody>
                {stockInfos.map((stockInfo) => (
                    <tr className="table-active" key={stockInfo.asset}>
                        <td><a href={"/detail/" + stockInfo.asset}>{stockInfo.asset}</a></td>
                        {/*<td>{stockInfo.asset}</td>*/}
                        <td>{stockInfo.marketCap}</td>
                        <td>{stockInfo.avgVOLUME}</td>
                        <td>{stockInfo.primaryEXCHANGE}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default DatasetComponent;