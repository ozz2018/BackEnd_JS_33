const express = require("express")
//const { response } = require("./server")
const router= express.Router()

router.get("/", (request, response )=>{
        response.json({
            message:"All Mentors",
    })
})
module.exports = router