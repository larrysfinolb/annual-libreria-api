const soap = require('soap');

const URL = 'http://64.135.103.209:49152/SaintAdminServer?wsdl';

const getAll = async (body) => {
	try {
		const { token } = body;
		const parametro = {};

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_ListarClientesAsync({ parametro, token });
		const parsedResult = JSON.parse(result[0].Adm_ListarClientesResult);

		const data = parsedResult.Data.map((obj) => {
			return {
				Codigo: obj.Codigo,
				Descripcion: obj.Descripcion,
				IDFiscal: obj.IDFiscal,
				Activo: obj.Activo,
				Fila: obj.Fila,
			};
		});

		const newResult = {
			...parsedResult,
			Data: data,
		};

		return newResult;
	} catch (error) {
		throw `Error in Adm_ListarClientes: ${error}`;
	}
};

const create = async (body) => {
	try {
		const { cliente, usuario, token } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_CrearClienteAsync({ cliente, usuario, token });
		const parsedResult = JSON.parse(result[0].Adm_CrearClienteResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_CrearCliente: ${error}`;
	}
};

const update = async (body) => {
	try {
		const { cliente, usuario, token } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_EditarClienteAsync({ cliente, usuario, token });
		const parsedResult = JSON.parse(result[0].Adm_EditarClienteResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_EditarCliente: ${error}`;
	}
};

const delete_ = async (body) => {
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
	getAll,
	create,
	update,
	delete_,
};
