const express = require("express")
const app = express()
const port = 3111

// root router
app.get('/', (req, res) => {
    res.send("<h1>ziyakhala manje</h1>")
})



app.listen(port, () =>{
    console.log(`Server runs on port ${port}`)
})