'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProvedorSchema extends Schema {
    up() {
        this.create('provedors', (table) => {
            table.increments()
            table.integer('id_producto', 20).unsigned().references('id').inTable('productos')
            table.string('nombre', 20).notNullable()
            table.string('direccion', 20).notNullable()
            table.string('email', 20).notNullable().unique()
            table.string('telefono', 20).notNullable().unique()
            table.timestamps()
        })
    }

    down() {
        this.drop('provedors')
    }
}

module.exports = ProvedorSchema