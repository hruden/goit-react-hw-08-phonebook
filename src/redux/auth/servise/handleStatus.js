export const handleAuthPending = state => {
  state.isLoading = true;
  state.error = ''
};
export const handleAuth = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = '';
};
export const handleAuthRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const handleLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleRefreshPending = state => {
  state.isRefreshing = true;
  // state.error = ''
};
export const handleRefreshfFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
export const handleRefreshfRejected = state => {
  state.isRefreshing = false;
};
