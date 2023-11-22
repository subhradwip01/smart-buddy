import React, { useRef, useEffect } from "react";
import { Chart,registerables } from "chart.js";

Chart.register(...registerables)
const ChartData = ({ data,id }) => {
  useEffect(() => {
    var barChart
    (async function () { 
      barChart=new Chart(document.getElementById(id).getContext('2d'), {
        ...data
      });
    })();
    return () =>{
        if(barChart){
            barChart.destroy();
        }
    }
  }, []);

  return <canvas id={id}></canvas>;
};

export {ChartData};
