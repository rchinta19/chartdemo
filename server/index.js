const express = require("express");
const cors = require("cors")
const app = express();
const sqlite3 = require("sqlite3");
const cdata = require("./routes/getDataroute")
const port = process.env.PORT || 1919;
const {
  performance,
} = require('perf_hooks');

app.use(express.json())
app.use(express.urlencoded({
  extended:true,
}))
app.use("/data",cdata)
app.use(cors({
  origin:"*"
}));

const db = new sqlite3.Database("./db/nfpcdb.db", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to db");
});





app.get("/defectlog", (req, res) => {
  const t0 = performance.now()
  db.all(`SELECT * FROM Defectlog`, [], (err, rows) => {
    if (err) {
      console.log(err.message);
    }
    res.send(rows)
  });
  const t1 = performance.now()
  console.log(`time take for the request is ${t1-t0}`)
  
});
app.listen(port, () => {
  console.log("Server is sucessfully established");
});





// db.all(`SELECT * FROM Defectlog WHERE Sno>?;`, [1005], (err, rows) => {
//   if (err) {
//     console.log(err);
//   }
//   rows.forEach((row) => {
//     console.log(row);
//   });
// });

// const damageType = [
//   "Broken",
//   "Scratches",
//   "holes",
//   "Discoloration",
//   "Foreign Particles",
//   "other-defect",
//   ""

// ];
// for (let i = 1000; i<= 1050; i++) {
//   let x;
//   let checkdef = damageType[x]
  
//   let dmgtype = Math.floor(Math.random() * 10) > 5 ? "yes" : "no"

//   if(dmgtype==="yes"){
//     let x = Math.floor(Math.random()*6)
//     checkdef = damageType[x]
//   }
//   else{
//     checkdef = "null"
//   }

//   db.run(
//     `INSERT INTO Defectlog(Sno,TimeStamp,Bottletype,Defect,Defecttype,Score1,Score2) Values(?,?,?,?,?,?,?)`,
//     [
//       `${i}`,
//       `10:${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60)}`,
//       `type${Math.floor(Math.random() * 10) > 5 ? "A" : "B"}`,
//       `${dmgtype}`,
//       `${checkdef}`,
//       `${Math.floor(Math.random() * 100)}`,
//       `${Math.floor(Math.random() * 100)}`,
//     ],
//     (err) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log("Sucessfull");
//     }
//   );
// }

// db.run(`DELETE FROM Defectlog where Sno=?`, "0", function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(this.changes);
// });
