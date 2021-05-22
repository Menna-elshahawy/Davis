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

Route.on('/').render('home')
Route.on('/stack').render('stack')
Route.on('/queue').render('queue')
Route.on('/pqueue').render('pqueue')
Route.on('/lList').render('lList')

Route.post('/executeCode', 'ExecuteCodeController.executeCode') // controller name and the method
