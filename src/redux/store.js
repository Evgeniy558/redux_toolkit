import { filtersReducer, tasksReducer } from "./filters/reducer";
import { configureStore } from "@reduxjs/toolkit";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
export const store = configureStore({
  reducer: { tasks: tasksReducer, filters: filtersReducer },
});
