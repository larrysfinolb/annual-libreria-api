const soap = require('soap');

const URL = 'http://64.135.103.209:49152/SaintAdminServer?wsdl';

const crear_C = async (body) => {
	try {
		const { cliente, usuario, token } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_CrearClienteAsync({ cliente, usuario,  token });
		const parsedResult = JSON.parse(result[0].Adm_CrearClienteResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_CrearCliente: ${error}`;
	} 

};

const editar_C = async (body) => {
	try {
		const { cliente, usuario, token } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_EditarClienteAsync({ cliente, usuario,  token });
		const parsedResult = JSON.parse(result[0].Adm_EditarClienteResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_EditarCliente: ${error}`;
	} 

};

const eliminar_C= async (body) => {
	try {
		const { codigoCliente, token } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_BorrarClienteAsync({ codigoCliente, token });
		const parsedResult = JSON.parse(result[0].Adm_BorrarClienteResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_BorrarCliente: ${error}`;
	} 

};

module.exports = {
	crear_C,
    editar_C
	eliminar_C,
};
