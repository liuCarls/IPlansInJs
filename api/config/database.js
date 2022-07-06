import { Sequelize } from "sequelize";
 
const db = new Sequelize('wserp', 'root', 'Erp2205^^^', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;