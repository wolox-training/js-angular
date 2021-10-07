/* Environments */
import { environment } from "@environments/environment"

const BASE_URL = `${environment.baseUrl}/${environment.version}`;

export const API_BOOKS = `${BASE_URL}/books`;
