const soap = require('soap');

const URL = 'http://64.135.103.209:49152/SaintAdminServer?wsdl';

const loginSaint = async (body) => {
	try {
		const { idUser, password } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.SEG_LoginSaintAsync({ idUser, password });

		return JSON.parse(result[0].SEG_LoginSaintResult);
	} catch (error) {
		throw `Error in SEG_LoginSaint: ${error}`;
	}
};

module.exports = {
	loginSaint,
};
