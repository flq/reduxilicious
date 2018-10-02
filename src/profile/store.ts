import { unionize, ofType, UnionOf } from "unionize";
import { Observable, of } from "rxjs";
import { filter, flatMap } from "rxjs/operators";
import Api from "../api";
import { ApplicationState } from "../rootStore";
import { push } from "connected-react-router";

export interface User {
  name: string;
  email: string;
}

type Failure = "LoginFailure";
export type UserState = null | User | Failure;

export const Actions = unionize(
  {
    LogIn: ofType<{ userName: string }>(),
    RejectLogin: {},
    LoginSuccessul: ofType<User>(),
    LogOut: {}
  },
  {
    tag: "type",
    value: "payload"
  }
);

type UserAction = UnionOf<typeof Actions>;

export const loginEpic = (action$: Observable<UserAction>) =>
  action$.pipe(
    filter(Actions.is.LogIn),
    flatMap(v => Api.user.tryLogin(v.payload.userName)),
    flatMap(v => (v ? of(Actions.LoginSuccessul(v), push("/profile")) : of(Actions.RejectLogin())))
  );

export const userReducer = (s: UserState | undefined = null, a: UserAction): UserState =>
  Actions.match(a, {
    LoginSuccessul: user => user,
    LogOut: () => null,
    RejectLogin: () => "LoginFailure" as Failure,
    default: () => s
  });

export const getUser = (s: ApplicationState) => s.user as User;
export const isLoggedIn = (s: ApplicationState) => s.user != null && s.user !== "LoginFailure";
export const isLoginFailed = (s: ApplicationState) => s.user === "LoginFailure";
