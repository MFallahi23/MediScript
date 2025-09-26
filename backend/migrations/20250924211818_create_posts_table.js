/** @type {import("knex").Knex} */
export async function up(knex) {
  await knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("content").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

/** @type {import("knex").Knex} */
export async function down(knex) {
  await knex.schema.dropTableIfExists("posts");
}
