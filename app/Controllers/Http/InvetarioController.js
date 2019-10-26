'use strict'
const Inventario = use('App/Models/Inventario')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with invetarios
 */
class InvetarioController {
    /**
     * Show a list of all invetarios.
     * GET invetarios
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let inventario = await Inventario.query().with('productos').fetch()
        return response.json(inventario.toJSON())
    }

    /**
     * Render a form to be used for creating a new invetario.
     * GET invetarios/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {
        let inventario = await Inventario.all();
        return view.render('inventario.create', { inventario: inventario.toJSON() });
    }

    /**
     * Create/save a new invetario.
     * POST invetarios
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        await Inventario.create(request.all());
        return response.json('stock añadido');
    }

    /**
     * Display a single invetario.
     * GET invetarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {}

    /**
     * Render a form to update an existing invetario.
     * GET invetarios/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {
        let inventario = await Inventario.find(params.id);
        return view.render('inventario.edit', { inventario: inventario.toJSON() });
    }

    /**
     * Update invetario details.
     * PUT or PATCH invetarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        let inventario = await Inventario.find(params.id);
        inventario.merge(request.all());
        await inventario.save();
        return response.json('inventario editado');
    }

    /**
     * Delete a invetario with id.
     * DELETE invetarios/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        let inventario = await Inventario.find(params.id);
        inventario.delete();
        return response.json('Producto eliminado');
    }
}

module.exports = InvetarioController