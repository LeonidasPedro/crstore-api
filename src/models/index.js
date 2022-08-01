import User from "./User";
import Item from "./Item";
import Adress from "./Adress";
import Employee from "./Employee";
import Category from "./Category";
import Customer from "./Customer";
import DiscountCoupon from "./DiscountCoupon";
import Order from "./Order";

(async () => {
   await Category.sync({ force: true })
   await Customer.sync({ force: true })
   await Employee.sync({ force: true })
   await User.sync({ force: true })
   await Item.sync({ force: true })
   await DiscountCoupon.sync({ force: true })
   await Order.sync({ force: true })
   await Adress.sync({ force: true })
})();