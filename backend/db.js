import knex from "knex";
import config from "./knexfile.js";

const environment = process.env.NODE_ENV || "development";
const db = knex(config[environment]);

db.raw("SELECT current_user;").then((res) =>
  console.log("Connected as:", res.rows[0].current_user)
);

async function checkOwner() {
  try {
    const result = await db.raw(`
      SELECT datname, pg_catalog.pg_get_userbyid(datdba) AS owner
      FROM pg_database
      WHERE datname = current_database();
    `);

    console.log("Database info:", result.rows[0]);
  } catch (err) {
    console.error(err);
  }
}

checkOwner();

export default db;
