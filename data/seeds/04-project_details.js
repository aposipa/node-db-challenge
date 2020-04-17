
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_details')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('project_details').insert([
        {
          id: 1, 
          project_details_id: 1,
          resources_id: 1
        },
      //   {id: 2, colName: 'rowValue2'},
      //   {id: 3, colName: 'rowValue3'}
      ]);
    });
};

