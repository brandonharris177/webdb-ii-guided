
exports.up = function(knex) {
    return knex.schema.table('geese', tbl => {
        tbl.integer('weight', 128);
    });
};

exports.down = function(knex) {
    return knex.schema.table('geese', tbl => {
        tbl.dropColumn('weight');
    });
};
