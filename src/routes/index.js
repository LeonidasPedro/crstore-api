import usersRoute from "./usersRoute";
import itemsRoute from "./itemsRoute";
import categoriesRoute from "./categoriesRoute";
import customerRoute from "./customerRoute";
import orderItemsRoute from "./orderItemsRoute";
import employeesRoute from "./employeesRoute";
import adressesRoute from "./adressesRoute";
import discountCouponsRoute from "./discountCouponsRoute";
import paymentMethodsRoute from "./paymentMethodsRoute";



function Routes(app) {
	adressesRoute(app);
	usersRoute(app);
	itemsRoute(app);
	categoriesRoute(app);
	customerRoute(app);
	orderItemsRoute(app);
	employeesRoute(app);	
	discountCouponsRoute(app)
	paymentMethodsRoute(app)
}

export default Routes;