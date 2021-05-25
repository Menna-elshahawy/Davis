'use strict'
/** @type {typeof import('@ioc:Adonis/Core/View')} */

const View=use('View')
const Axios = use('axios')

Axios.defaults.headers.post['Content-Type'] = 'application/json';
// View.global('code',"")
var code;
View.global('code',"")
class ExecuteCodeController {

	
	async executeCode1(){
		
	    await Axios.post('https://api.jdoodle.com/v1/execute',{
	   		script: "print(7+3)",
	        language: "python3",
	        versionIndex: "0",
	        clientId: "95c3d6d990faf6b1d2daf7ad0195b799",
	        clientSecret: "3407587a0e94f79246c4682be471fafcb445a37ba99b06882ceb23ef203015bb"	
	    })
            .then(response => {
        	    console.log(response.data.output);
				View.global('res',response.data.output);
                return response;
            });
	}

	async executeCode2(){
		
	    await Axios.post('https://api.jdoodle.com/v1/execute',{
			script : "public class MyClass {public static void main(String args[]) {int x=10;int y=25;int z=x+y;System.out.print(z);}}",
			language: "java",
			versionIndex: "3",
			clientId: "95c3d6d990faf6b1d2daf7ad0195b799",
			clientSecret: "3407587a0e94f79246c4682be471fafcb445a37ba99b06882ceb23ef203015bb"
		 })
            .then(response => {
        	    console.log(response.data.output);
				View.global('res',response.data.output);
                return response;
            });
	}

	async executeCode3(){
		View.global('res',"waiting for output...")

	    await Axios.post('https://api.jdoodle.com/v1/execute',{
			script : "import java.util.Arrays; public class ArrayStack { private int[] theStack; private int maxSize; private int top; public ArrayStack(int s) { maxSize = s; theStack = new int[maxSize]; top = -1; } public void push(int elem) { top++; theStack[top] = elem; } public int pop() { int result = theStack[top]; top--; return result; } public int top() { return theStack[top]; } public boolean isFull() { return (top == (maxSize - 1)); } public boolean isEmpty() { return (top == -1); } public int size() { return (top + 1); } public void printStack() { System.out.print(Arrays.toString(theStack));} public static void main(String[]args){ ArrayStack s=new ArrayStack(4); s.push(2); s.push(5); s.printStack();}}",
			language: "java",
			versionIndex: "3",
			clientId: "95c3d6d990faf6b1d2daf7ad0195b799",
			clientSecret: "3407587a0e94f79246c4682be471fafcb445a37ba99b06882ceb23ef203015bb"
		 })
            .then(response => {
        	    console.log(response.data.output);
				View.global('res',response.data.output);
                return response;
            });
	}

	
}

module.exports = ExecuteCodeController