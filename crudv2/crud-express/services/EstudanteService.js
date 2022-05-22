const EstudanteModel = require("../models/EstudanteModel")
const UserModel = require("../models/EstudanteModel")

class EstudanteService{
    static register(req,res){
        EstudanteModel.create(req.body).then(
            (user)=>{
                res.status(201).json(user)
            }
        )
    }
    
    static list(req,res){
        EstudanteModel.find().then(
            (users)=>{
                res.status(201).json(users)
            }
        )
    }

    static update(req,res){
        EstudanteModel.findByIdAndUpdate(req.params.id,req.body,{"new":true}).then(
            (users)=>{
                res.status(201).json(users)
            }
        )
    }

    static delete(req,res){
        EstudanteModel.findByIdAndRemove(req.params.id).then(
            (users)=>{
                res.status(201).json(users)
            }
        )
    }

    static retrieve(req,res){
        EstudanteModel.findById(req.params.id).then(
            (users)=>{
                res.status(201).json(users)
            }
        )
    }
}

    



module.exports = EstudanteService