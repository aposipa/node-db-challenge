
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1, 
          task_description: 'create all necessary app folders/files',
          task_notes: "slow and steady, no need to rush",
          task_completed: false,
          task_project_id: 1
        },
        // {id: 2, colName: 'rowValue2'},
        // {id: 3, colName: 'rowValue3'}
      ]);
    });
};
