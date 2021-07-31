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
    Route.on('').render('Standard/standard')
    Route.on('/Stack').render('Standard/stackS')
    Route.on('/Queue').render('Standard/queueS')
    Route.on('/PrioirityQueue').render('Standard/pqueueS')
    Route.on('/LinkedList').render('Standard/lListS')
    Route.on('/DoublyLinkedList').render('Standard/dlList')
    Route.on('/Tree').render('Standard/treeS')
    Route.on('/SelectionSort').render('Standard/selectionS')
    Route.on('/InsertionSort').render('Standard/insertS')
    Route.on('/BubbleSort').render('Standard/bubbleS')
    Route.on('/HashTable').render('Standard/hashTS')
}).prefix('/Standard')

Route.group(()=>{
    Route.on('').render('UserDef/userDef')
    Route.on('/Stack').render('UserDef/stackU')
    Route.on('/PriorityQueue').render('UserDef/priorityqU')
    Route.on('/Queue').render('UserDef/queueU')
    Route.on('/LinkedList').render('UserDef/lListU')
    Route.on('/DoublyLinkedList').render('UserDef/DListU')
    Route.on('/HashTable').render('UserDef/hashTU')
    Route.on('/Tree').render('UserDef/treeU')
    Route.on('/SelectionSort').render('UserDef/selectionU')
    Route.on('/InsertionSort').render('UserDef/insertionU')
    Route.on('/BubbleSort').render('UserDef/bubbleU')
    Route.on('/stackRes').render('UserDef/stackRes')
    Route.on('/priorityqRes').render('UserDef/priorityqRes')
    Route.on('/queueRes').render('UserDef/queueRes') 
    Route.on('/listRes').render('UserDef/listRes')
    Route.on('/DlistRes').render('UserDef/DlistRes')
    Route.on('/hashRes').render('UserDef/hashRes')
    Route.on('/treeRes').render('UserDef/treeRes')
    Route.on('/selectRes').render('UserDef/selectRes')
    Route.on('/insertRes').render('UserDef/insertRes')
    Route.on('/bubbleRes').render('UserDef/bubbleRes')
    Route.on('/printTree').render('UserDef/printTree')
}).prefix('/UserDefined')


Route.post('/executeCode', 'ExecuteCodeController.executeCode2') // controller name and the method

