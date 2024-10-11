import Candlestick from "./candlestick";
import Training from "./training";
import React, {useState, useEffect} from 'react';

function Detail() {
    const [allData, setAllData] = useState('');
    const [data, setData] = useState('');
    const [lines, setLines] = useState([]);
    var url = window.location.href;
    //console.log("url = " + url)
    var index = url.lastIndexOf("\/");
    var stockName = url.substring(index + 1, url.length);
    // console.log(stockName);

    function GetAllData(name) {
        var txtFile = new XMLHttpRequest();
        // console.log("stock name = ")
        // console.log(name)
        // txtFile.open("GET", "https://raw.githubusercontent.com/Dabaiee/CS5100group7/main/datasets/ETH-USD.csv", true);
        var newUrl = "https://raw.githubusercontent.com/Dabaiee/CS5100group7/main/datasets/" + name + ".csv";
        // console.log("newUrl = " + newUrl)
        txtFile.open("GET", newUrl, true);
        txtFile.send()
        txtFile.onreadystatechange = function () {
            // console.log("txtFile.readyState = " + txtFile.readyState)
            // console.log("txtFile.status = " + txtFile.status)
            if (txtFile.readyState === 4 && txtFile.status === 200) {
                setAllData(txtFile.responseText);
            }
        };
    }

    function getPredData(name) {
        var txtFile = new XMLHttpRequest();
        var newUrl = "https://raw.githubusercontent.com/Dabaiee/CS5100group7/main/datasets/test_predit_data/" + name + ".csv";
        txtFile.open("GET", newUrl, true);
        txtFile.send()
        txtFile.onreadystatechange = function () {
            // console.log("txtFile.readyState = " + txtFile.readyState)
            // console.log("txtFile.status = " + txtFile.status)
            if (txtFile.readyState === 4 && txtFile.status === 200) {
                // console.log(txtFile.responseText);
                const predRaw= txtFile.responseText
                const predJson = csvJSON(predRaw)
                // console.log(predJson)
                setData(predJson)
            }
        };
    }
    useEffect(() => {
        if (stockName) {
            if (stockName != "detail") {
                console.log("stock name = " + stockName)
                GetAllData(stockName)
                getPredData(stockName)
            }
        }
    }, [stockName]);


    useEffect(() => {
        if (allData) {
            //console.log("get all the Data");
            setLines(csvJSON(allData))
            //console.log(allData);
        }

    }, [allData]);

    useEffect(() => {
        if (data) {
            //console.log("get all the Data");
            // console.log(data);
        }

    }, [data]);


    function csvJSON(csv) {
        const lines = csv.split('\n')
        const result = []
        const headers = lines[0].split(',')

        for (let i = 1; i < lines.length; i++) {
            if (!lines[i])
                continue
            const obj = {}
            const currentline = lines[i].split(',')

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j]
            }
            result.push(obj)
        }
        return result
    }
    return(
        <div>

            <h1 className="text-white">Stock Details</h1>
            <h2 className="text-white">prices</h2>
            <Candlestick lines={lines} name={stockName}/>
            <Training lines={data} name={stockName}/>
        </div>


    );
}
export default Detail;