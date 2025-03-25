const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { 
          isAuthenticated: true, 
          user: action.payload // Store full user object (not just username)
        };
  
      case "LOGOUT":
        return { 
          isAuthenticated: false, 
          user: null 
        };
  
      case "UPDATE":
        return {
          ...state,
          user: { ...state.user, ...action.payload } // Merge updated profile details
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  