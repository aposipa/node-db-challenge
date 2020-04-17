
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1, 
          resource_name: "computer",
          resource_description: "well function computer to run all programs"
        },
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
