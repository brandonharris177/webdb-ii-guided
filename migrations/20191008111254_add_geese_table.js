// changes to make on the db schema
exports.up = function(knex) {
  return  knex.schema.createTable('geese', function(tbl) {
      tbl.increments();
      tbl.string('name', 128).notNullable();
  })
};

//undo changes made to db schema
//manual undo
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('geese');
};
