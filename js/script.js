import { createBill } from "./bill.js";
import { createDb, get , insert} from "./db.js";

createDb()
createBill()
document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.modal');
  const instances = M.Modal.init(elems, {opacity : 0.7});
});