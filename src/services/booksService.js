const soap = require('soap');

const URL = 'http://64.135.103.209:49152/SaintAdminServer?wsdl';

const getAllByBookcases = async (body) => {
	try {
		const { codigoDeposito, token } = body;
		const parametro = {};

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_ListarProductosAsync({ parametro, codigoDeposito, token });
		const parsedResult = JSON.parse(result[0].Adm_ListarProductosResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_ListarProductos: ${error}`;
	}
};

const create = async (body) => {
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

const update = async (body) => {
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

const delete_ = async (body) => {
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
	getAllByBookcases,
	create,
	update,
	delete_,
};
