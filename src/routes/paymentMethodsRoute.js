import controller from '../controllers/paymentMethodsController'


export default (app) => {
	app.get('/paymentMethods', controller.getAll)
	app.get('/paymentMethods/:id', controller.getById)
	app.post('/paymentMethods/persist', controller.persist)
  app.post('/paymentMethods/persist/:id', controller.persist)
	app.post('/paymentMethods/destroy', controller.destroy)
}