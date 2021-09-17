import { Bar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import axios from "axios";


import { copyFileSync } from "fs";
const DynamicChart = () => {
  const [chartData, setChartData] = useState({});
  const [yeild, setYeildData] = useState({});
  const [months, setMonths] = useState({});

  const Chart = () => {
    const totalDefectTypes = [];
    const DefectCount = [];
    axios
      .get("/defectlog")
      .then((res) => {
 
        console.log(res.data);
        res.data.forEach((element) => {
          if (totalDefectTypes.includes(element.Defecttype)) {
            return;
          }
          totalDefectTypes.push(element.Defecttype);
        });
        console.log(totalDefectTypes);
        let holes = 0;
        let Scratches = 0;
        let Broken = 0;
        let otherdefect = 0;
        let foreignParticles = 0;
        let Discoloration = 0;
        let scratch = 0;
        res.data.forEach((element) => {
          if (element.Defecttype === "holes") {
            holes += 1;
          } else if (element.Defecttype === "Scratches") {
            Scratches += 1;
          } else if (element.Defecttype === "Broken") {
            Broken += 1;
          } else if (element.Defecttype === "other-defect") {
            otherdefect += 1;
          } else if (element.Defecttype === "Foreign Particles") {
            foreignParticles += 1;
          } else if (element.Defecttype === "Discoloration") {
            Discoloration += 1;
          } else if (element.Defecttype === "scratch") {
            scratch += 1;
          }
        });
        const deflog = [
          holes,
          otherdefect,
          Discoloration,
          Broken,
          Scratches,
          scratch,
          otherdefect,
        ];
        console.log(deflog);
        for (let i = 0; i <= 6; i++) {
          DefectCount.push(deflog[i]);
        }
       
       
      })
      .then(() => {
        setChartData({
          labels: [...totalDefectTypes],
          datasets: [
            {
              label: "Total Defect count",
              data: DefectCount,
              backgroudColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(221, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(221, 159, 64, 0.2)",
              ],
              borderWidth: 1,
            },
          ],
        });
      });
  };
  const newData = (e) => {
    // const fruityeild = [];
    //  axios.get("http://dummy.restapiexample.com/api/v1/employees")
    //     .then(res => {
    //         console.log(res);
    //         for(const dataObj of res.data.data){
    //             fruityeild.push(parseInt(dataObj.yeild));
    //
    //         }
    setChartData({
      labels: [
        "july",
        "august",
        "september",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Mango",
          data: [10, 50, 32, 22, 135, 321],
          backgroudColor: [],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "Apple",
          data: [50, 23, 56, 74, 85, 20.8],
          backgroudColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };
  useEffect(() => {
    Chart();
  }, []);
  return (
    <div>
      <button onClick={newData}>Change Data</button>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          title: { text: "THICCNESS SCALE", display: true },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};
export default DynamicChart;
