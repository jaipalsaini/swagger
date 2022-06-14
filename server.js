const app = require("express")();

const bodyParser =  require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(4000, ()=>{
    console.log(`server is running on 4000`);
});

app.get('/', (req, res) =>{
    res.send('server is running');
});