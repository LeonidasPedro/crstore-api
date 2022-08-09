import Category from "../models/Category";

const getAll = async (req, res) => {
  try {
    const response = await Category.findAll({
      order: [['id', 'ASC']]
    });
    return res.status(200).send({
      type: 'success', // success, error, warning, info
      message: 'Registros recuperados com sucesso', // mensagem para o front exibir
      data: response // json com informações de resposta
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: 'Ops! Ocorreu um erro!',
      data: error
    });
  }
}
const getById = async (req, res) => {
  try {
    let { id } = req.params;

    //garante que o id só vai ter NUMEROS;
    id = id.replace(/\D/g, '');
    if (!id) {
      return res.status(200).send({
        type: 'error',
        message: 'Informe um id válido para consulta'
      });
    }

    let response = await Category.findOne({
      where: {
        id
      }
    });

    if (!response) {
      return res.status(400).send({
        message: `Não foi encontrada categoria com o id ${id}`
      });
    }

    return res.status(200).send(response);
  } catch (error) {
    return res.status(200).send({
      type:"error",
      message: error.message
    })
  }
}

const persist = async (req, res) => {
  try {
    let { id } = req.params;
    //caso nao tenha id, cria um novo registro
    if (!id) {
      return await create(req.body, res)
    }

    return await update(id, req.body, res)
  } catch (error) {
    return res.status(200).send({
      type:"error",
      message: error.message
    })
  }
}

const create = async (data, res) => {
  let { name } = data;

  let response = await Category.create({
    name

  });
  return res.status(201).send(response)
}

const update = async (id, data, res) => {
  let { name } = data;
  let response = await Category.findOne({
    where: {
      id
    }
  });

  if (!response) {
    return res.status(200).send({ type: 'error', message: `Não foi encontrada categoria com o id ${id}` })
  }
  //TODO: desenvolver uma lógica pra validar todos os campos
  //que vieram para atualizar e entao atualizar
  Object.keys(data).forEach(field => response[field] = data[field]);

  await response.save();
  return res.status(200).send({
    message: `Categoria ${id} atualizado com sucesso`,
    data: response
  });
}

const destroy = async (req, res) => {
  try {
    let { id } = req.body;
    //garante que o id só vai ter NUMEROS;
    id = id ? id.toString().replace(/\D/g, '') : null;//toString
    if (!id) {
      return res.status(200).send({
        type:"error",
        message: 'Informe um id válido para deletar a categoria'
      });
    }

    let response = await Category.findOne(
    {
      where: {
        id
      }

    });

    if (!response) {
      return res.status(200).send({ type:"error", message: `Não foi encontrada categoria com o id ${id}` })
    }

    await response.destroy();
    return res.status(200).send({
      message: `Categoria id ${id} deletada com sucesso`
    })
  } catch (error) {
    return res.status(200).send({
      type: "error",
      message: error.message
    })
  }
}

export default {
  getAll,
  getById,
  persist,
  destroy
}