import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import { authReducer } from "./auth/slice";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"]
}

const middleware = {
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})