export const requiredMessage = {
  required: 'este campo es requerido'
}

export const emailMessage = {
  email: 'este campo debe ser un email'
}

export const patternMessage = (message: string) => {
  return { pattern: message }
}
