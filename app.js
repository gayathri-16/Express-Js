
const express = require('express')
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


app.use(express.static(path.join(__dirname,'public')))

app.use(bodyParser.urlencoded())
app.use(adminRoutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
  res.status(404).send('<h1>404 Page Not Found</h1>')
})


app.listen(3000);
