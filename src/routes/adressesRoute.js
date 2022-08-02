import controller from "../controllers/adressesControler"


export default (app) => {
	app.get('/adresses', controller.getAll)
	app.get('/adresses/:id', controller.getById)
	app.post('/adresses/persist', controller.persist)
	app.post('/adresses/destroy', controller.destroy)
}