import controller from "../controllers/customersController"


export default (app) => {
	app.get('/customers', controller.getAll)
	app.get('/customers/:id', controller.getById)
	app.post('/customers/persist', controller.persist)
	app.post('/customers/destroy', controller.destroy)
}