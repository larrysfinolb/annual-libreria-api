const soap = require('soap');

const URL = 'http://64.135.103.209:49152/SaintAdminServer?wsdl';


const crear = async (body) => {
	try {
		const { producto, token } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_CrearProductoAsync({ producto, token });
		const parsedResult = JSON.parse(result[0].Adm_CrearProductoResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_CrearProducto: ${error}`;
	} 

};

const editar = async (body) => {
	try {
		const { producto, token } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_EditarProductoAsync({ producto, token });
		const parsedResult = JSON.parse(result[0].Adm_EditarProductoResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_EditarProducto: ${error}`;
	} 

};

const eliminar = async (body) => {
	try {
		const { codigoProducto, token } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_BorrarProductoAsync({ codigoProducto, token });
		const parsedResult = JSON.parse(result[0].Adm_BorrarProductoResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_BorrarProducto: ${error}`;
	} 

};

module.exports = {
	crear,
	editar,
	eliminar,
};
