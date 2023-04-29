import { configureStore } from "@reduxjs/toolkit";

import { loadingSlice } from "./feature/loading";

const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
  },
});

export default store;