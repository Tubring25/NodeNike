/**
 * api for users
 */
import Axios from 'axios';
const baseUrl = "http://localhost:3000/goods/";
export function getCategoryType() {
  return Axios.get(baseUrl + "categoryType");
}
