import controller from '../controllers/categoriesController'


export default (app) => {
	app.get('/categories', controller.getAll)
	app.get('/categories/:id', controller.getById)
	app.post('/categories/persist/:id', controller.persist)
	app.post('/categories/persist', controller.persist)
	app.post('/categories/destroy', controller.destroy)
}