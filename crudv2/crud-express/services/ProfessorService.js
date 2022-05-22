const ProfessorModel = require("../models/ProfessorModel")


class ProfessorService{
    static register(req,res){
        ProfessorModel.create(req.body).then(
            (user)=>{
                res.status(201).json(user)
            }
        )
    }
    
    static list(req,res){
        ProfessorModel.find().then(
            (users)=>{
                res.status(201).json(users)
            }
        )
    }

    static update(req,res){
        ProfessorModel.findByIdAndUpdate(req.params.id,req.body,{"new":true}).then(
            (users)=>{
                res.status(201).json(users)
            }
        )
    }

    static delete(req,res){
        ProfessorModel.findByIdAndRemove(req.params.id).then(
            (users)=>{
                res.status(201).json(users)
            }
        )
    }

    static retrieve(req,res){
        ProfessorModel.findById(req.params.id).then(
            (users)=>{
                res.status(201).json(users)
            }
        )
    }
}

    



module.exports = ProfessorService