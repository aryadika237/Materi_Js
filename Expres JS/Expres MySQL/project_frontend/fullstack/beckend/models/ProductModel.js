import { Sequelize } from "sequelize";
import db from "../config/databse.js";

const { DataTypes } = Sequelize;

const Product = db.define('product', {
    tittle: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    }
}, {
    freezeTableName: true
});

export default Product;