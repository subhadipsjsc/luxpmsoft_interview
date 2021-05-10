var Data = require("../controllers/Data.Controller");

module.exports = (app) => {
    app.get("/", (req,res)=>{ res.status(200).json({ping:1}) }); 

    app.get("/insert", Data.insert);   
    app.get("/data", Data.getData);  
};