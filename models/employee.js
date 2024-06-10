const mongoose=require("mongoose")
const schema=mongoose.Schema({
    "empId":String,
    "empName":String,
    "designation":String,
    "salary":String,
})
let employeemodel=mongoose.model("Employees",schema);
module.exports={employeemodel}
