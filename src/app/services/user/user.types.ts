import { status } from "@services/status.type";

export interface UserResponse {
  id?: string | number;
  provider: string;
  uid: string;
  allow_password_change: boolean;
  first_name: string;
  last_name: string;
  email: string;
  created_at?: any;
  updated_at?: any;
  locale: string;
}

export interface UserToCreate {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password_confirmation: string;
  locale?: string;
}

export interface Errors {
  email: string[];
  full_messages: string[];
}

export interface ResponseUserPost {
  status: status;
  data: UserResponse;
  errors: Errors;
}

export interface UserLogin {
  email: string
  password: string
}

export interface ResponseLogin {
  success: boolean;
  errors: string[];
  data: UserLoginResponse;
}

export interface UserLoginResponse {
  id: number;
  email: string;
  provider: string;
  uid: string;
  allow_password_change: boolean;
  first_name: string;
  last_name: string;
  locale: string;
}
