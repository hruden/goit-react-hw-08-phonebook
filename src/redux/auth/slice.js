const { createSlice, isAnyOf } = require("@reduxjs/toolkit");
const { register, logIn, logOut, refreshUser } = require("./operations");
const { handleAuth, handleLogOut, handleRefreshPending, handleRefreshfFulfilled, handleRefreshfRejected, handleAuthPending, handleAuthRejected } = require("./servise/handleStatus");


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,  
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(register.fulfilled, handleAuth)
        .addCase(logIn.fulfilled, handleAuth)
        .addCase(logOut.fulfilled, handleLogOut)
        .addCase(refreshUser.pending, handleRefreshPending)
        .addCase(refreshUser.fulfilled, handleRefreshfFulfilled)
        .addCase(refreshUser.rejected, handleRefreshfRejected)
        .addMatcher(isAnyOf(register.pending, logIn.pending), handleAuthPending)
        .addMatcher(isAnyOf(register.rejected, logIn.rejected), handleAuthRejected)
    }
  })

export const authReducer = authSlice.reducer;