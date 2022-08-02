import controller from '../controllers/orderItemsController'


export default (app) => {
	app.get('/orderItems', controller.getAll)
	app.get('/orderItems/:id', controller.getById)
	app.post('/orderItems/persist', controller.persist)
	app.post('/orderItems/destroy', controller.destroy)
}