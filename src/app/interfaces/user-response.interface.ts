import { Support } from "./support.interface";
import { User } from "./user.interface";

export interface UserResponse {
  data: User;
  support: Support;
}
