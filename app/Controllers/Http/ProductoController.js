const Producto = use('App/Models/Producto');
'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with productos
 */
class ProductoController {
    /**
     * Show a list of all productos.
     * GET productos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let producto = await Producto.all();
        return response.json(producto.toJSON());
    }

    /**
     * Render a form to be used for creating a new producto.
     * GET productos/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {
        let producto = await Producto.all();
        return view.render('producto.create', { producto: producto.toJSON() });
    }

    /**
     * Create/save a new producto.
     * POST productos
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        await Producto.create(request.all());
        return response.json('producto creado');
    }

    /**
     * Display a single producto.
     * GET productos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {}

    /**
     * Render a form to update an existing producto.
     * GET productos/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {
        let producto = await Productos.find(params.id);
        return view.render('producto.edit', { producto: producto.toJSON() });
    }

    /**
     * Update producto details.
     * PUT or PATCH productos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        let producto = await Producto.find(params.id);
        producto.merge(request.all());
        await producto.save();
        return response.json('producto editado');

    }

    /**
     * Delete a producto with id.
     * DELETE productos/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        let producto = await Producto.find(params.id);
        producto.delete();
        return response.json('Producto eliminado');
    }
}

module.exports = ProductoController