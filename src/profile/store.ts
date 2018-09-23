import { unionize, ofType, UnionOf } from "unionize";

export interface User {
  name: string;
  email: string;
}

export type UserState = null | User;

const Actions = unionize({
  MaterializeUser: ofType<User>(),
  LogOut: {},
});

type UserAction = UnionOf<typeof Actions>;

export const userReducer = (s: UserState | undefined = null, a: UserAction) =>
  Actions.match(a, {
    MaterializeUser: user => user,
    LogOut: () => null,
    default: () => s
  });