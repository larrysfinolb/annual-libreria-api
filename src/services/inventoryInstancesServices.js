const soap = require('soap');

const URL = 'http://64.135.103.209:49152/SaintAdminServer?wsdl';

const getAll = async (body) => {
	try {
		const { token } = body;
		const parametro = {};

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_ListarInstanciasInventariosAsync({ parametro, token });
		const parsedResult = JSON.parse(result[0].Adm_ListarInstanciasInventariosResult);

		if (parsedResult.Status !== 0) return parsedResult;

		const data = parsedResult.Data.map((obj) => {
			return {
				Codigo: obj.Codigo,
				Descripcion: obj.Descripcion,
				CantidadProductos: obj.CantidadProductos,
				Fila: obj.Fila,
			};
		});

		const newResult = {
			...parsedResult,
			Data: data,
		};

		return newResult;
	} catch (error) {
		throw `Error in Adm_ListarInstanciasInventarios: ${error}`;
	}
};

const create = async (body) => {
	try {
		const { deposito, token } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_CrearDepositoAsync({ deposito, token });
		const parsedResult = JSON.parse(result[0].Adm_CrearDepositoResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_CrearDeposito: ${error}`;
	}
};

const update = async (body) => {
	try {
		const { deposito, token } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_EditarDepositoAsync({ deposito, token });
		const parsedResult = JSON.parse(result[0].Adm_EditarDepositoResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_EditarDeposito: ${error}`;
	}
};

const delete_ = async (body) => {
	try {
		const { codigoDeposito, token } = body;

		const client = await soap.createClientAsync(URL);
		const result = await client.Adm_BorrarDepositoAsync({ codigoDeposito, token });
		const parsedResult = JSON.parse(result[0].Adm_BorrarDepositoResult);

		return parsedResult;
	} catch (error) {
		throw `Error in Adm_BorrarDeposito: ${error}`;
	}
};

module.exports = {
	getAll,
	create,
	update,
	delete_,
};
