import { createDb, get , insert} from "./db.js";

createDb()
insert('name', 'shamim')
get('name')