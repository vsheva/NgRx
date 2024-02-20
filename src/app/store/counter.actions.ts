import {Action, createAction, props} from "@ngrx/store";

export const increment = createAction(
  '[Counter] Increment',
  props<{value: number}>()
)

//option 2
// export const INCREMENT =  '[Counter] Increment'
//
// export class IncrementAction implements Action {
//  readonly type= INCREMENT;
//
//  constructor(public value: number) {}
// }
//
// export type CounterActions = IncrementAction  ;
