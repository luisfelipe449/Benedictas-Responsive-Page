const express=require('express');
const path=require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/benedictas-header-com-sidenav'));

app.get('/*',(req, res) =>{
        res.sendFile(__dirname + '/dist/benedictas-header-com-sidenav/index.html');
});

app.listen(PORT,()=>{
    console.log('Servidor rodando na porta' + PORT);
})