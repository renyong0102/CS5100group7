import React from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";

function Training(
    {lines}, {name}
) {


    let series = [
        {
            name: "Valid",
            data: [],
        },
        {
            name: "Predict",
            data: [],
        },
    ];
    let options = {
        title: {
            text: 'Prediction & Validation',
            align: 'left'
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                "1/22/20",
                "2/1/20",
                "2/15/20",
                "3/1/20",
                "3/15/20",
                "4/1/20",
                "4/15/20",
                "5/1/20",
                "5/7/20",
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy",
            },
        },
    };

    if (lines && lines.length> 0){
        // console.log(lines)
        let dates= []
        let closes= []
        let preds= []
        for (let i in lines){
            dates.push(lines[i].Date)
            closes.push(lines[i].Close)
            preds.push(lines[i].Predictions)
        }
        series[0].data = closes
        series[1].data = preds
        options.xaxis.categories = dates
    }
    else {
        series = [
            {
                name: "Valid",
                data: [
                    555,
                    12038,
                    69030,
                    88369,
                    167466,
                    932638,
                    2055423,
                    3343777,
                    3845718,
                ],
            },
            {
                name: "Predict",
                data: [28, 284, 9394, 42710, 76026, 191853, 501538, 1029651, 1255481],
            },
        ];
    }

    console.log(series)


    return (
        <div
            style={{
                backgroundColor: "#222222",
                color: "black",
                textAlign: "center",
            }}
        >
            <br />
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={300}
            />
        </div>
    );
}

export default Training;