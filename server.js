const express = require('express');
const app = express();

//Routes
app.get('/', (req,res) => {
    res.send('Hello node API')

})
app.listen(3000, () => {
    console.log("node API is running on PORT 3000 ...");
})
