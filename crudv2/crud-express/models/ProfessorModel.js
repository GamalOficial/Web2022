var mongoose = require("mongoose")

var ProfessorSchema = mongoose.Schema(
    {
        firstName: {type:String, required:true, max:100},
        lastName: {type:String, required:true, max:100},
        login: {type:String, required:true, max:100},
        email: {type:String, required:true, max:100},
        zipcode: {type:String, required:true, max:100},
        password: {type:String, required:true, max:100},

    }
)

var ProfessorModel = mongoose.model("professors",ProfessorSchema)

module.exports = ProfessorModel