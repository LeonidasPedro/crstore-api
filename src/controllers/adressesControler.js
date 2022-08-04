import Adress from "../models/Adress";
import usersController from "./usersController";


const getAll = async (req, res) => {
  try {

    let user = await usersController.getUserByToken(req.headers.authorization);

    if (!user) {
      return res.status(200).send({
        type: 'error',
        message: 'Ocorreu um erro ao recuperar os seus dados'
      })
    }

    const response = await Adress.findAll({
      where: {userId: user.id},
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
    let user = await usersController.getUserByToken(req.headers.authorization);
    if (!user) {
      return res.status(200).send({
        type: 'error',
        message: 'Ocorreu um erro ao recuperar os seus dados'
      })
    }

    //garante que o id só vai ter NUMEROS;
    id = id.replace(/\D/g, '');
    if (!id) {
      return res.status(200).send({
        type: 'error',
        message: 'Informe um id válido para consulta'
      });
    }

    let response = await Adress.findOne({
      where: {
        id,
        userId: user.id
      }
    });

    if (!response) {
      return res.status(200).send({
        type:'error',
        message: `Não foi encontrado endereço com o id ${id}`
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

    let user = await usersController.getUserByToken(req.headers.authorization);

    if (!user) {
      return res.status(200).send({
        type: 'error',
        message: 'Ocorreu um erro ao recuperar os seus dados'
      })
    }
    if (!id) {
      return await create(req.body, res, user)
    }

    return await update(id, req.body, res, user)
  } catch (error) {
    return res.status(200).send({
      type:'error',
      message: error.message
    })
  }
}

const create = async (data, res, user) => {
  let { adress, cep, state, city, district, number} = data;

  let response = await Adress.create({
    number, adress, cep, state, city, district, userId: user.id
  });
  return res.status(201).send(response)
}

const update = async (id, data, res, user) => {
  let { adress, cep, state, city, district, number} = data;
  let response = await Adress.findOne({
    where: {
      id,
      userId: user.id
    }
  });

  if (!response) {
    return res.status(200).send({  type:'error',message: `Não foi encontrado nenhum endereço com o id ${id}` })
  }
  //TODO: desenvolver uma lógica pra validar todos os campos
  //que vieram para atualizar e entao atualizar
  Object.keys(data).forEach(field => response[field] = data[field]);

  await response.save();
  return res.status(200).send({
    message: `endereço ${id} atualizado com sucesso`,
    data: response
  });
}

const destroy = async (req, res) => {
  try {
    let { id } = req.body;
    //garante que o id só vai ter NUMEROS;
    id = id ? id.toString().replace(/\D/g, '') : null;//toString

    let user = await usersController.getUserByToken(req.headers.authorization);

    if (!user) {
      return res.status(200).send({
        type: 'error',
        message: 'Ocorreu um erro ao recuperar os seus dados'
      })
    }

    if (!id) {
      return res.status(200).send({
        message: 'Informe um id válido para deletar o endereço'
      });
    }

    let response = await Adress.findOne(
    {
      where: {
        id,
        userId: user.id
      }
    
    });

    if (!response) {
      return res.status(200).send({ message: `Não foi encontrado endereço com o id ${id}` })
    }

    await response.destroy();
    return res.status(200).send({
      message: `endereço id ${id} deletado com sucesso`
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
  destroy
}