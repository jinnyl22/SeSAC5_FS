const my = require("mysql2");
const mysql = require("mysql2/promise");
require("dotenv").config();

const DB_INFO = {
  host: "",
  port: 3306,
  user: "",
  password: process.env.DB_PASSWD,
  database: mydb,
};

module.exports = {
  async getConn() {
    return mysql.createConnection(DB_INFO);
    // return POOL.getConnection();
  },

  getConnection() {
    return my.createConnection(DB_INFO);
  },

  // 위에서 mysql2/promise를 불러와서 프로미스로 만들어줌!
  async get(table = "Emp", id = 0) {
    try {
      const conn = await this.getConn();
      const [[data]] = await conn.execute(`select * from ${table} where id = ${id}`);
      // console.log('🚀  rows:', data);
      return data;
    } catch (error) {
      console.error("Error on db.get>>", error.message);
      throw error;
    }
  },

  async gets(table, limit = 100) {
    try {
      const conn = await this.getConn();
      const [data] = await conn.execute(`select * from ${table} limit ${limit}`);
      // console.log('🚀  rows:', data);
      return data;
    } catch (error) {
      console.error("Error on db.gets>>", error.message);
      throw error;
    }
  },

  async finds(table, searchParam) {
    const where = Object.entries(searchParam)
      .map(([k, v]) => `${k} = ${v}`)
      .join(" and ");
    console.log("🚀  where:", where);

    const [data] = await this.execute(`select * fromx ${table} where ${where}`);
    // console.log('🚀  rows:', data);
    return data;
  },

  getDbInfo() {
    return DB_INFO;
  },
};
