exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('project_name').notNullable();
            tbl.text('project_description');
            tbl
                .boolean('project_completed')
                .defaultTo(false)
                .notNullable();
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.text('task_description').notNullable();
            tbl.text('task_notes');
            tbl
                .boolean('task_completed')
                .defaultTo(false)
                .notNullable();
            tbl
                .integer('task_project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable('project_details', tbl => {
            tbl.increments();
            tbl 
                .integer('project_details_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl
                .integer("resources_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("resources")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resource_name').notNullable();
            tbl.text('resource_description');
        });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('project_details')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources');
};
