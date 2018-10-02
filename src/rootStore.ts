import { createStore as createReduxStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createEpicMiddleware, combineEpics, Epic } from "redux-observable";
import { History } from "history";
import { UserState, userReducer, loginEpic } from "./profile";

// add support for redux browser extension https://github.com/zalmoxisus/redux-devtools-extension
const windowIfDefined =
  typeof window === "undefined"
    ? null
    : (window as Window & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose });
const composeEnhancers =
  (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const epicMiddleware = createEpicMiddleware();

export interface ApplicationState {
  user: UserState;
}

const rootReducer = combineReducers({
  user: userReducer
});

const rootEpic = combineEpics(loginEpic) as Epic;

export function createStore(history: History) {
  const store = createReduxStore(
    connectRouter(history)(rootReducer),
    (undefined as any) as ApplicationState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history),
        epicMiddleware
        // ... other middlewares ...
      )
    )
  );
  epicMiddleware.run(rootEpic);
  return store;
}
