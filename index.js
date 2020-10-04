
const express = require('express')
const app = express()
const port = 3000
const axios = require('axios').default;

app.get('/getItems', async (req, res) => {

  axios.get('https://bubbledashboard.firebaseio.com/song.json')
  .then(function (response) {
    console.log(response);
    res.send(response.data);
  })
  .catch(function (error) {
    res.send("error: " + error);
  });

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})