'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
    up() {
        this.create('productos', (table) => {
            table.increments()
            table.string('nombre', 20).notNullable();
            table.string('marca', 20).notNullable();
            table.integer('precio', 11).notNullable();
            table.timestamps()
        })
    }

    down() {
        this.drop('productos')
    }
}

module.exports = ProductosSchema