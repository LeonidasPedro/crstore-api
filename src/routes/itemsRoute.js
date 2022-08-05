import controller from '../controllers/itemsController'


export default (app) => {
	app.get('/items', controller.getAll)
	app.get('/items/:id', controller.getById)
	app.post('/items/category/', controller.getByCategory)
	app.post('/items/persist', controller.persist)
	app.post('/items/persist/:id', controller.persist)
	app.post('/items/destroy', controller.destroy)
}