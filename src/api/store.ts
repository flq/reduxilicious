import { unionize, ofType, UnionOf } from "unionize";
import { Observable, merge } from "rxjs";
import { filter, map } from "rxjs/operators";
import { Action } from "redux";
import { ApplicationState } from "../rootStore";

export type Operation = "login";
export type OperationsState = Operation[];

export const Actions = unionize(
  {
    Pending: ofType<{ operation: Operation }>(),
    Done: ofType<{ operation: Operation }>()
  },
  {
    tag: "type",
    value: "payload"
  }
);

/**
 *
 * @param startChecker predicate that should return true to trigger the pending state
 * @param endChecker predicate that should return true to trigger the pending-end state
 * @param operation The operation to which you refer
 */
export const pendingStreamBuilder = <T extends Action>(
  startChecker: (action: T) => boolean,
  endChecker: (action: T) => boolean,
  operation: Operation
) => (action$: Observable<T>) => {
  const startStream = action$.pipe(
    filter(startChecker),
    map(v => Actions.Pending({ operation }))
  );
  const endStream = action$.pipe(
    filter(endChecker),
    map(v => Actions.Done({ operation }))
  );
  return merge(startStream, endStream);
};

export type OperationsAction = UnionOf<typeof Actions>;

export const operationsReducer = (state: OperationsState | undefined = [], a: OperationsAction) =>
  Actions.match(a, {
    Pending: ({ operation }) => {
      if (state.findIndex(v => v === operation) > -1) {
        return state;
      }
      return [...state, operation];
    },
    Done: ({ operation }) => {
      const idx = state.findIndex(v => v === operation);
      if (idx < 0) {
        return state;
      }
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    },
    default: () => state
  });

export const isPending = (o: Operation) => (s: ApplicationState) =>
  s.operations.findIndex(v => v === o);

export const isAnyPending = (s: ApplicationState) => s.operations.length > 0;

export const isLoginPending = isPending("login");
