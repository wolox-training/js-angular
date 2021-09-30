import { Message } from "@sign/types/sign.type"

export const requiredMessage: Message = {
  required: 'este campo es requerido'
}

export const emailMessage: Message = {
  email: 'este campo debe ser un email'
}

export const patternMessage = (message: string): Message => {
  return { pattern: message }
}

export const minLengthMessage = (message: string): Message => {
  return { minlength: message }
}
