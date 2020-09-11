let knex = require("../knexfile");

exports.up = function (knex) {
  return knex.schema.createTable("admin", function (table) {
    table.increments("id").primary();
    table.string("firstname", 255).notNullable();
    table.string("lastname", 255).nullable();
    table.string("phone", 255).unique().notNullable();
    table.string("email", 255).unique().notNullable();
    table.string("password", 60).notNullable();
    table.string("address").notNullable();
    table.string("next_of_kin").nullable();
    table.string("id_type").nullable();
    table.string("id_number").nullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("admin");
};
