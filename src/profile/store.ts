import { unionize, ofType, UnionOf } from "unionize";
import { Observable } from "rxjs";
import { filter, map, flatMap } from "rxjs/operators";
import Api from "../api";

export interface User {
  name: string;
  email: string;
}

export type UserState = null | User;

const Actions = unionize({
  LogIn: ofType<{ name: string }>(),
  RejectLogin: {},
  LoginSuccessul: ofType<User>(),
  LogOut: {},
});

type UserAction = UnionOf<typeof Actions>;

export const loginEpic = (action$: Observable<UserAction>) =>
  action$.pipe(
    filter(Actions.is.LogIn),
    flatMap(v => Api.user.tryLogin(v.name)),
    map(v => v ? Actions.LoginSuccessul(v) : Actions.RejectLogin()));

export const userReducer = (s: UserState | undefined = null, a: UserAction) =>
  Actions.match(a, {
    LoginSuccessul: user => user,
    LogOut: () => null,
    default: () => s
  });