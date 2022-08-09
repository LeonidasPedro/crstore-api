import Item from "../models/Item";

const getByCategory = async (req, res) => {
  try {
    let { idCategory } = req.body
    const response = await Item.findAll({
        where: {
          idCategory
        }
    });
    return res.status(200).send({
      type: 'success', // success, error, warning, info
      message: 'Registros recuperados com sucesso', // mensagem para o front exibir
      data: response // json com informações de resposta
    });
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: `Não foi encontrado nenhum item na categoria id ${idCategory}`
    });
  }
}
const getAll = async (req, res) => {
  try {
    const response = await Item.findAll({
      include:'category',
      order: [['id', 'ASC']],
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

    let response = await Item.findOne({
      where: {
        id
      }
    });

    if (!response) {
      return res.status(200).send({
        type:'error',
        message: `Não foi encontrado Item com o id ${id}`
      });
    }

    return res.status(200).send(response);
  } catch (error) {
    return res.status(200).send({
      type:'error',
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
      type:'error',
      message: error.message
    })
  }
}

const create = async (data, res) => {
  let { name, price, idCategory, thumbnail } = data;

  let response = await Item.create({
    name,
    price,
    idCategory,
    thumbnail
  });
  return res.status(201).send(response)
}

const update = async (id, data, res) => {
  let { name, price, idCategory, thumbnail } = data;
  let response = await Item.findOne({
    where: {
      id
    }
  });

  if (!response) {
    return res.status(200).send({  type:'error',message: `Não foi encontrado nenhum entregador com o id ${id}` })
  }
  //TODO: desenvolver uma lógica pra validar todos os campos
  //que vieram para atualizar e entao atualizar
  Object.keys(data).forEach(field => response[field] = data[field]);

  await response.save();
  return res.status(200).send({
    message: `Entregador ${id} atualizado com sucesso`,
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
        message: 'Informe um id válido para deletar o item'
      });
    }

    let response = await Item.findOne(
    {
      where: {
        id
      }

    });

    if (!response) {
      return res.status(200).send({ message: `Não foi encontrado item com o id ${id}` })
    }

    await response.destroy();
    return res.status(200).send({
      message: `Item id ${id} deletado com sucesso`
    })
  } catch (error) {
    return res.status(200).send({
      type: 'error',
      message: error.message
    })
  }
}

export default {
  getAll,
  getById,
  persist,
  destroy,
  getByCategory
}