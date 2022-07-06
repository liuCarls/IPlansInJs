import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Plan = db.define('plans',{
    plan_id : {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    plan_name:{
        type: DataTypes.STRING
    },
    plan_type:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default Plan;