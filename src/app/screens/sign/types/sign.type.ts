import { SIGN_UP, SIGN_IN } from '@sign/constants/types.constant';

export type sign = typeof SIGN_UP | typeof SIGN_IN

export type Message = {
  [key: string]: string
}

export type MessagesValidtions = {
  [key: string]: Message
}
