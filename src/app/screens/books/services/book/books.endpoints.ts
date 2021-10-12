/* Environments */
import { environment } from "@environments/environment"

const BASE_URL = `${environment.baseUrl}/${environment.version}`;

export const API_BOOKS = `${BASE_URL}/books`;

export const API_DETAIL_BOOK = (id: number | string) => `${API_BOOKS}/${id}`;
