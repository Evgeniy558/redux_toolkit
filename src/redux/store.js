// import { filtersReducer, tasksReducer } from "./filters/reducer";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { tasksReducer } from "./Slices/tasksSlicer";
import { filtersReducer } from "./Slices/filterSlicer";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
