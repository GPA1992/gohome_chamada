"use strict";
require("dotenv/config");
const config = {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
};
module.exports = config;
