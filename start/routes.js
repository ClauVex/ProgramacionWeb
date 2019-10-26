'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('productos', 'ProductoController.index')
Route.get('productos/crear', 'ProductoController.create')
Route.post('productos/crear', 'ProductoController.store')
Route.get('productos/editar/:id', 'ProductoController.edit')
Route.post('productos/editar/:id', 'ProductoController.update')
Route.get('productos/eliminar/:id', 'ProductoController.destroy')

Route.get('inventario', 'InvetarioController.index')
Route.get('inventario/crear', 'InvetarioController.create')
Route.post('inventario/crear', 'InvetarioController.store')
Route.get('inventario/editar/:id', 'InvetarioController.edit')
Route.post('inventario/editar/:id', 'InvetarioController.update')
Route.get('inventario/eliminar/:id', 'InvetarioController.destroy')

Route.get('provedor', 'ProvedorController.index')
Route.get('provedor/crear', 'ProvedorController.create')
Route.post('provedor/crear', 'ProvedorController.store')
Route.get('provedor/editar/:id', 'ProvedorController.edit')
Route.post('provedor/editar/:id', 'ProvedorController.update')
Route.get('provedor/eliminar/:id', 'ProvedorController.destroy')
