import controller from "../controllers/employeesController"


export default (app) => {
	app.get('/employees', controller.getAll)
	app.get('/employees/:id', controller.getById)
	app.post('/employees/persist', controller.persist)
	app.post('/employees/destroy', controller.destroy)
}