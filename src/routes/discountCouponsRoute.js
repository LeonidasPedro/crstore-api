import controller from "../controllers/discountCouponsController"


export default (app) => {
	app.get('/discountCoupons', controller.getAll)
	app.get('/discountCoupons/:id', controller.getById)
	app.post('/discountCoupons/persist', controller.persist)
	app.post('/discountCoupons/persist/:id', controller.persist)
	app.post('/discountCoupons/destroy', controller.destroy)
}