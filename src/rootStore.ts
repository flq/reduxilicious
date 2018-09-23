import { createStore as createReduxStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { History } from "history";
import { UserState, userReducer } from "./profile";

// add support for redux browser extension https://github.com/zalmoxisus/redux-devtools-extension
const windowIfDefined =
typeof window === "undefined" ? null : (window as Window & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose });
const composeEnhancers = (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface ApplicationState {
  user: UserState;
}

const rootReducer = combineReducers({
  user: userReducer
});

export function createStore(history: History) {
  return createReduxStore(
    connectRouter(history)(rootReducer),
    (undefined as any) as ApplicationState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history) // for dispatching history actions
        // ... other middlewares ...
      )
    )
  );
}
