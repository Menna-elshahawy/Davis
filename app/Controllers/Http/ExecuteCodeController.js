'use strict'

const Axios = use('axios')

Axios.defaults.headers.post['Content-Type'] = 'application/json';

class ExecuteCodeController {

	async executeCode({request, response, axios}){

	    await Axios.post('https://api.jdoodle.com/v1/execute',{
	   		script: "print(2+5)",
	        language: "python3",
	        versionIndex: "0",
	        clientId: "95c3d6d990faf6b1d2daf7ad0195b799",
	        clientSecret: "3407587a0e94f79246c4682be471fafcb445a37ba99b06882ceb23ef203015bb"	
	    })
            .then(response => {
        	    console.log(response.data.output);
                return response;
            });
	}

	
}

module.exports = ExecuteCodeController
