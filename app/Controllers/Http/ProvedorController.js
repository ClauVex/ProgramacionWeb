const Provedor = use('App/Models/Provedor')
'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with provedors
 */
class ProvedorController {
    /**
     * Show a list of all provedors.
     * GET provedors
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let provedor = await Provedor.query().with('productos').fetch();
        return response.json(provedor.toJSON());
    }

    /**
     * Render a form to be used for creating a new provedor.
     * GET provedors/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {
        let provedor = await Provedor.all();
        return view.render('provedor.create', { provedor: provedor.toJSON() });
    }

    /**
     * Create/save a new provedor.
     * POST provedors
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        await Provedor.create(request.all());
        return response.json('provedor registrado')
    }

    /**
     * Display a single provedor.
     * GET provedors/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {}

    /**
     * Render a form to update an existing provedor.
     * GET provedors/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {
        let provedor = await Provedor.find(params.id);
        return view.render('provedor.edit', { provedor: provedor.toJSON() });
    }

    /**
     * Update provedor details.
     * PUT or PATCH provedors/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        let provedor = await Provedor.find(params.id);
        provedor.merge(request.all());
        await provedor.save();
        return response.json('provedor editado');
    }

    /**
     * Delete a provedor with id.
     * DELETE provedors/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        let provedor = await Provedor.find(params.id);
        provedor.delete();
        return response.json('Provedor eliminado');
    }
}

module.exports = ProvedorController
