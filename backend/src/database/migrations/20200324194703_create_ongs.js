const { KnexTimeoutError } = require("knex");

exports.up = function(knex) {
  knex.schema.createTable('ec', function (table){
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
