import { createFeatureSelector, createSelector } from "@ngrx/store";

import { TODOS_STORE_TOKEN } from "../injector-tokens";
import { ITodosState } from "../../interfaces";


// Created a feature selector to return the top level feature state ie 'todos' and  to compute if different arguments passed
export const selectFeature = createFeatureSelector<ITodosState>(TODOS_STORE_TOKEN);

export const incrementOrDecrementTodosSelector = createSelector(
    selectFeature,
    (state: ITodosState) => state.todos
)