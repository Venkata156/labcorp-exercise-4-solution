import { createAction } from "@ngrx/store";


export const incrementTodosCount =  createAction(
    '[To Do Count] Increment To Do Count'
)

export const decrementTodosCount =  createAction(
    '[To Do Count] Decrement To Do Count'
)
