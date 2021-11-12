const express = require ("express");
const app = express ();

app.get("/mult", function(req, res){
    res.end("Resultado: " + req.query.op1 * req.query.op2);
})

app.listen(3000);
