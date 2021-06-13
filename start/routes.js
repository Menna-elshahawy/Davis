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



Route.on('/').render('homePage')
Route.on('/homePage').render('homePage')

Route.group(()=>{
    Route.on('/').render('Standard/standard')
    Route.on('/Stack').render('Standard/stackS')
    Route.on('/Queue').render('Standard/queueS')
    Route.on('/PrioirityQueue').render('Standard/pqueueS')
    Route.on('/LinkedList').render('Standard/lListS')
    Route.on('/Tree').render('Standard/treeS')
    Route.on('/SelectionSort').render('Standard/selectionS')
    Route.on('/InsertionSort').render('Standard/insertS')
    Route.on('/BubbleSort').render('Standard/bubbleS')
    Route.on('/HashTable').render('Standard/hashTS')
}).prefix('/Standard')

Route.group(()=>{
    Route.on('/').render('UserDef/userDef')
    Route.on('/Stack').render('UserDef/stackU')
    Route.on('/Queue').render('UserDef/queueU')
    Route.on('/PrioirityQueue').render('UserDef/pqueueU')
    Route.on('/LinkedList').render('UserDef/lListU')
    Route.on('/stackRes').render('UserDef/stackRes')
    Route.on('/queueRes').render('UserDef/queueRes')
    Route.on('/listRes').render('UserDef/listRes')
}).prefix('/UserDefined')


Route.post('/executeCode', 'ExecuteCodeController.executeCode2') // controller name and the method

// Route.get('/UserDefined/Stack','ExecuteCodeController.executeCode2')

Route.get('/try', async ({view})=>{
    let r="sara"
    return view.render('try', {res:r})
}
)
