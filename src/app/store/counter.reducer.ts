import {Action, createReducer, on} from "@ngrx/store";
//import {CounterActions, INCREMENT, IncrementAction} from "./counter.actions";
import {increment} from "./counter.actions";

const initialState = 0;
//Option 1
export const counterReducer = createReducer(
  initialState,
  on(increment,(state, action)=>state+action.value)
);


//Option 2
// export function counterReducer(state = initialState, action: CounterActions | Action) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }
//   return state;
// }


/*export function createReducer(state=initialState) {
  return state
}*/


