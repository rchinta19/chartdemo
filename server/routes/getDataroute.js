const express = require('express')
const router = express.Router()
router.get("/data", function(){
    console.log("Handling the route")
})

module.exports = router;