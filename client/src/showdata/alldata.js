import React, {useState, useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function AllDataComponent() {
    const [allData, setAllData] = useState('');
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

    useEffect(() => {
        if (stockName) {
            if (stockName != "showdata") {
                console.log("stock name = " + stockName)
                GetAllData(stockName)
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
        if (lines) {
            //console.log("getlines");
            //console.log(lines);
        }
    }, [lines]);

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

    return (
        <div>
            <p class="h1 text-white bg-dark">
                {
                    stockName === "showdata"? ("Choose a stock name") : ("The data for stock " + stockName.toString())
                }
            </p>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Pick A Stock
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/showdata/AAPL">AAPL</Dropdown.Item>
                    <Dropdown.Item href="/showdata/AMZN">AMZN</Dropdown.Item>
                    <Dropdown.Item href="/showdata/ETH-USD">ETH-USD</Dropdown.Item>
                    <Dropdown.Item href="/showdata/META">META</Dropdown.Item>
                    <Dropdown.Item href="/showdata/NFLX">NFLX</Dropdown.Item>
                    <Dropdown.Item href="/showdata/TSLA">TSLA</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Open</th>
                    <th scope="col">High</th>
                    <th scope="col">Low</th>
                    <th scope="col">Close</th>
                </tr>
                </thead>
                <tbody>
                {lines.map((line) => (
                    <tr key={line.Date}>
                        <th scope="table-dark">{line.Date}</th>
                        <td>{line.Open}</td>
                        <td>{line.High}</td>
                        <td>{line.Low}</td>
                        <td>{line.Close}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AllDataComponent;