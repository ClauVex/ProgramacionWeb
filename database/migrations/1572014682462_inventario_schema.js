'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventarioSchema extends Schema {
    up() {
        this.create('inventarios', (table) => {
            table.increments()
            table.integer('idProducto', 20).unsigned().references('id').inTable('productos')
            table.integer('stock', 20).notNullable();
            table.timestamps()
        })
    }

    down() {
        this.drop('inventarios')
    }
}

module.exports = InventarioSchema