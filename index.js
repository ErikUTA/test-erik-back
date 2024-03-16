const conexion = require('./conexion');
const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();



const router = express.Router();
const cors =  require('cors');
const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', router);

router.use((req, res, next) => {    
    next();
})

app.listen(
    PORT, 
    () => console.log(`it's running on http:localhost:${PORT}`)
);

router.route('/listComments').get((req, res) => {
    conexion.query("SELECT * FROM list", (err, result, fields) => {
        if(!err){
            res.send(result);
        }else{
            console.log(err);
        }
    });
});

router.route('/addComment').post((req, res) => {
    conexion.query("INSERT INTO list SET ?", req.body, (err, result, fields) => {
        if(!err){
            res.json(result);
        }else{
            console.log(err);
        }
    }); 
});