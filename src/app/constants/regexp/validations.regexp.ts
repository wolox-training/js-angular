/* 
  Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
*/
export const PASSWORD = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
