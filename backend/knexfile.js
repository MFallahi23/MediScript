import dotenv from "dotenv";
dotenv.config();

console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);

export default {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },

  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL, // typical on VPS or managed DB
      ssl: { rejectUnauthorized: false }, // if using cloud PG like Heroku/Neon
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
