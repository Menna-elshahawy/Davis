'use strict'
/** @type {typeof import('@ioc:Adonis/Core/View')} */
/** @type {typeof import('@adonisjs/ignitor')} */


const View=use('View')
const Axios = use('axios')

View.global('res','[1,2,3]');

Axios.defaults.headers.post['Content-Type'] = 'application/json';

class ExecuteCodeController {

	
	async executeCode1({request,response}){
		
		var code=request.input('code');
		var c=code.replace(/(\r\n|\n|\r)/gm, "");

	    await Axios.post('https://api.jdoodle.com/v1/execute',{
			script: "  import java.util.Arrays; public class ArrayStack { private int[] theStack; private int maxSize; private int top; public ArrayStack(int s) { maxSize = s; theStack = new int[maxSize]; top = -1; } public void push(int elem) { top++; theStack[top] = elem; } public String printStack() { return (Arrays.toString(theStack)); } static void print(String []a) { System.out.println(Arrays.toString(a)); } public static void main(String[] args){ ArrayStack s=new ArrayStack(5); String[] a=new String[5]; a[0]=s.printStack(); s.push(2); a[1]=s.printStack(); s.push(6); a[2]=s.printStack(); s.push(5); a[3]=s.printStack(); s.push(9); a[4]=s.printStack(); s.push(3); print(a); s.printStack(); } }  ",
	        language: "java",
	        versionIndex: "3",
	        clientId: "95c3d6d990faf6b1d2daf7ad0195b799",
	        clientSecret: "3407587a0e94f79246c4682be471fafcb445a37ba99b06882ceb23ef203015bb"	
	    })
            .then(Response => {
				var result=Response.data.output
        	    console.log("Result: " +String(result));
				result=result
                View.global('res',result);
				return response.redirect('/UserDefined/stackRes');
            });
	}

	async executeCode2({request,response}){
		
		var data=request.input('data');
		var code=request.input('code');
		if(code!=undefined){
			var c=code.replace(/(\r\n|\n|\r)/gm, "");
		}
	    await Axios.post('https://api.jdoodle.com/v1/execute',{
			script : c,
			language: "java",
			versionIndex: "3",
			clientId: "95c3d6d990faf6b1d2daf7ad0195b799",
			clientSecret: "3407587a0e94f79246c4682be471fafcb445a37ba99b06882ceb23ef203015bb"
		 })
			.then((Response) => {

				var currentDate = new Date();
				var timestamp = currentDate.getTime() / 1000 ;
				var result=Response.data.output;
				
        	    // console.log("time:"+ timestamp + " in controller: "+ result);
				View.global('res',result);
				code=code+""
				// View.global('code',String(code));
				currentDate = new Date();
				timestamp = currentDate.getTime() / 1000 ;
				// console.log("time:"+ timestamp );
				console.log("data: "+ data);
				console.log("Result: "+result)
				// data='priorityqueue'

				if(data.localeCompare('stack')==0){
					return response.redirect('/UserDefined/stackRes');
				}

				else if(data.localeCompare('queue')==0){
					return response.redirect('/UserDefined/queueRes');
				}

				else if(data.localeCompare('priorityqueue')==0){
					return response.redirect('/UserDefined/priorityqRes');
				}

				else if(data.localeCompare('LinkedList')==0){
					return response.redirect('/UserDefined/listRes');
				}

				else if(data.localeCompare('DLinkedList')==0){
					return response.redirect('/UserDefined/DlistRes');
				}

				else if(data.localeCompare('hash')==0){
					return response.redirect('/UserDefined/hashRes');
				}

				else if(data.localeCompare('tree')==0){
					return response.redirect('/UserDefined/treeRes');
				}

				else if(data.localeCompare('selection')==0){
					return response.redirect('/UserDefined/selectRes');
				}

				else if(data.localeCompare('insertion')==0){
					return response.redirect('/UserDefined/insertRes');
				}

				else if(data.localeCompare('bubble')==0){
					return response.redirect('/UserDefined/bubbleRes');
				}

            }, (err) =>{
				console.log("Error: check your code and run again " + err.response);
			} );

	}
	
}

module.exports = ExecuteCodeController