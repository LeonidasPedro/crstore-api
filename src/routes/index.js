import usersRoute from "./usersRoute";
import itemsRoute from "./itemsRoute";
import categoriesRoute from "./categoriesRoute";
import customerRoute from "./customerRoute";
import orderItemsRoute from "./orderItemsRoute";
import employeesRoute from "./employeesRoute";
import adressesRoute from "./adressesRoute";
import discountCouponsRoute from "./discountCouponsRoute";



function Routes(app) {
	usersRoute(app);
	itemsRoute(app);
	categoriesRoute(app);
	customerRoute(app);
	orderItemsRoute(app);
	employeesRoute(app);
	adressesRoute(app);
	discountCouponsRoute(app)
}

export default Routes;