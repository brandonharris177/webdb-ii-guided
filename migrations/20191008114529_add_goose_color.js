
exports.up = function(knex) {
  return knex.schema.table('geese', tbl => {
      tbl.string('color', 128);
  });
};

exports.down = function(knex) {
  return knex.schema.table('geese', tbl => {
      tbl.dropColumn('color');
  });
};
