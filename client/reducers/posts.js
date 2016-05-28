// A reducer takes in two things:
// The action (info about event happened)
// The copy of the current state.

function postsReducer(state = [], action) {
  console.log("POSTS", state, action);
  return state;
}

export default postsReducer;