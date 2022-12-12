import React, {useState, useEffect} from 'react';

function AllDataComponent() {
    const [allData, setAllData] = useState('');
    const [lines, setLines] = useState([]);
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "https://raw.githubusercontent.com/Dabaiee/CS5100group7/main/datasets/ETH-USD.csv", true);
    txtFile.send()
    //console.log("open")
    // console.log(txtFile)
    // console.log("txtFile.readyState = " + txtFile.readyState)
    // console.log("txtFile.status = " + txtFile.status)
    txtFile.onreadystatechange = function () {
        // console.log("txtFile.readyState = " + txtFile.readyState)
        // console.log("txtFile.status = " + txtFile.status)
        if (txtFile.readyState === 4 && txtFile.status === 200) {
            setAllData(txtFile.responseText);
            //console.log(lines)
            // allTextLines = allText.split(/\r\n|\n/);
        }
    };

    useEffect(() => {
        if (allData) {
            console.log("get all the Data");
            setLines(csvJSON(allData))
            //setLines(allData.split(/\r\n|\n/))
            //console.log(allData);
        }
    }, [allData]);

    useEffect(() => {
        if (lines) {
            console.log("getlines");
            console.log(lines);
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


//     function getData({allText}) {
//         var txtFile = new XMLHttpRequest();
//         txtFile.open("GET", "https://raw.githubusercontent.com/Dabaiee/CS5100group7/main/datasets/ETH-USD.csv", true);
//         txtFile.send()
//         console.log("open")
//         // console.log(txtFile)
//         // console.log("txtFile.readyState = " + txtFile.readyState)
//         // console.log("txtFile.status = " + txtFile.status)
//         txtFile.onreadystatechange = function () {
//             console.log("txtFile.readyState = " + txtFile.readyState)
//             console.log("txtFile.status = " + txtFile.status)
//             if (txtFile.readyState === 4 && txtFile.status === 200) {
//                 allText = txtFile.responseText;
//                 console.log(allText)
//                 // allTextLines = allText.split(/\r\n|\n/);
//             }
//         };
//     }
//
//     var allText;
//     let myPromise = new Promise(function (myResolve, myReject) {
// // "Producing Code" (May take some time)
//         var txtFile = new XMLHttpRequest();
//         txtFile.open("GET", "https://raw.githubusercontent.com/Dabaiee/CS5100group7/main/datasets/ETH-USD.csv", true);
//         txtFile.send()
//         console.log("open")
//         // console.log(txtFile)
//         // console.log("txtFile.readyState = " + txtFile.readyState)
//         // console.log("txtFile.status = " + txtFile.status)
//         txtFile.onreadystatechange = function () {
//             console.log("txtFile.readyState = " + txtFile.readyState)
//             console.log("txtFile.status = " + txtFile.status)
//             if (txtFile.readyState === 4 && txtFile.status === 200) {
//                 allText = txtFile.responseText;
//                 console.log(allText)
//                 // allTextLines = allText.split(/\r\n|\n/);
//             }
//         };
//
//
//         if (allText != null) {
//             myResolve("allText ready " + allText); // when successful
//         } else {
//             myReject("No allText");  // when error
//         }
//     });
//
// // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//         function (value) { /* code if successful */
//             console.log("allText finished ======== " + allText + " !!")
//         },
//         function (error) { /* code if some error */
//             console.log("no allText  ======== ")
//         }
//     );

    // function sleep(ms) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve('sleep for ' + ms + ' ms');
    //         }, ms);
    //     });
    // }
    //
    // sleep(5000)

    // useEffect(() => {
    //     if (allText) {
    //         console.log("update!!!!!!");
    //         console.log(allText);
    //     }
    // }, [allText]);
    // console.log("allText !!! ")
    // console.log(allText)


    return (
        <div>
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
                {/*<tr>*/}
                {/*    <th scope="table-dark">2017-11-09</th>*/}
                {/*    <td>308.644989</td>*/}
                {/*    <td>329.451996</td>*/}
                {/*    <td>307.056000</td>*/}
                {/*    <td>320.884003</td>*/}
                {/*</tr>*/}
                {lines.map((line) => (
                    <tr>
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