import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist";
import { authReducer } from "./auth/slice";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"]
}

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store)