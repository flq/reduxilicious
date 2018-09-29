import { unionize, ofType, UnionOf } from "unionize";

export type Operation = "login";
export type OperationsState = Operation[];

export const Actions = unionize({
    Pending: ofType<{ operation: Operation }>(),
    Done: ofType<{ operation: Operation }>()
});

type OperationsActions = UnionOf<typeof Actions>;

export const operationsReducer = (state: OperationsState, a: OperationsActions) =>
   Actions.match({
       Pending: ({operation}) => {
           if (state.findIndex(v => v === operation) > -1) {
               return state;
           }
           return [...state, operation];
       },
       Done: ({operation}) => state //TODO: remove item
   })
