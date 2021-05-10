const Development = {
    USER: process.env.DEV_DB_USER,
    PASSWORD: process.env.DEV_DB_PASS,
};

const Production = {
    USER: process.env.PROD_DB_USER,
    PASSWORD: process.env.PROD_DB_PASS,
}

module.exports = {
    ...(process.env.ENV === "prod" ? Production : Development),
    HOST: "",
    DB: process.env.DB_NAME,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}