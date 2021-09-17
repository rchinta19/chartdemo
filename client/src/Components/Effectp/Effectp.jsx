import React, { useState, useEffect } from "react";
import axios from "axios";
function Effectp() {
  const [data, setData] = useState("This will be Overwritten");
  // useEffect(() => {
  //   axios.get("/defectlog").then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}

export default Effectp;
