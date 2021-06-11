'use strict'
/** @type {typeof import('@ioc:Adonis/Core/View')} */
/** @type {typeof import('@adonisjs/ignitor')} */


const View=use('View')
const Axios = use('axios')

Axios.defaults.headers.post['Content-Type'] = 'application/json';

class ExecuteCodeController {

	
	async executeCode1({request}){
		
		var code=request.input('code');
		var c=code.replace(/(\r\n|\n|\r)/gm, "");
		console.log(c)

	    await Axios.post('https://api.jdoodle.com/v1/execute',{
	   		script: c,
	        language: "python3",
	        versionIndex: "0",
	        clientId: "95c3d6d990faf6b1d2daf7ad0195b799",
	        clientSecret: "3407587a0e94f79246c4682be471fafcb445a37ba99b06882ceb23ef203015bb"	
	    })
            .then(response => {
        	    console.log(response.data.output);
                View.global('res',response.data.output);
            });
	}

	async executeCode2({request,view}){
		
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
			.then(response => {
				
        	    console.log("in controller: "+ response.data.output);
				View.global('res',response.data.output);
				// return response.data.output;
				let result= response.data.output
				return view.render('homePage',{res: result})
            })
			.catch(err =>{
				console.log("Error: check your code and run again " + err.response);
			} );

	}

	
}

module.exports = ExecuteCodeController