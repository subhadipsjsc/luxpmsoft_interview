const db = require('../config/sequelize');
const Data = db.data;
const API_call = require('../helper/restCall')
const { Op } = require("sequelize");

exports.insert = async (req, res) => {

    try{
        getData = await API_call.Get_HTTP( process.env.PYTHON_SERVER,'/',process.env.PYTHON_PORT)
        if(getData.myArray){
            // const result = getData.myArray.map( v =>{ return {letters: v}})
            // return res.status(200).json({success:1, id:result.toString() , word: getData.myWord});
            const result = await Data.bulkCreate(getData.myArray.map( v =>{ return {letters: v}}))
            // console.log("auto-generated ID:", result.id);
            const from_value= result[0].id
            const to_value= result[result.length-1].id
            return res.status(200).json({success:1, id:{from:from_value , to: to_value} , word: getData.myWord}); 
        }
        else{
            return res.status(200).json({success:0, error : 'data not received'}); 
        }
        
    }
    catch(e){
        return res.status(400).json({success:0, error:'server error'}); 
    }
       
};

exports.getData= async (req, res) => {

    try{
        var from_value = req.query.from;
        var to_value = req.query.to;
        if(from_value && to_value){
            const result = await Data.findAll({
                where: {
                  id: {[Op.between]: [from_value, to_value] }
                }
              });
            return res.status(200).json({success:1, result: result }); 
        }
        return res.status(200).json({success:0, error : 'data not received'}); 
        
        
    }
    catch(e){
        console.log(e)
        return res.status(400).json({success:0, error:'server error'}); 
    }
       
};