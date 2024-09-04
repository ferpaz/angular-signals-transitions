import { Support } from "./support.interface";
import { User } from "./user.interface";


export interface UserListResponse {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        User[];
  support:     Support;
}
