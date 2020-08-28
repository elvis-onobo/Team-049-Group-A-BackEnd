let knex = require("../knexfile");

exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("firstname", 255).notNullable();
    table.string("lastname", 255).nullable();
    table.string("phone", 255).unique().notNullable();
    table.string("email", 255).unique().nullable();
    table.string("password", 60).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
