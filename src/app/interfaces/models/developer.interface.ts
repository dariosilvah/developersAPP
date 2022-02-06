import {Level} from "./level.interface";
import {Resource} from "./resource.interface";

export interface Developer extends Resource {
  name?: string;
  level_id?: number;
  level_name?: string;
  level?: Level;
  genre?: string;
  age?: number;
  birthdate?: string;
  hobby?: string;
}
