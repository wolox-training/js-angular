/* Environments */
import { environment } from "@environments/environment"

const BASE_URL = `${environment.baseUrl}/${environment.version}`;

export const API_SIGN_UP = `${BASE_URL}/users`;
export const API_SIGN_IN = `${BASE_URL}/users/sign_in`;
