const initialState = {
  postData: [
    { name: "a", id: 1, desc: "desc_a" },
    { name: "b", id: 2, desc: "desc_b" },
    { name: "c", id: 3, desc: "desc_c" },
  ],
  editData: {},
};
console.log(1212, initialState.editData);

const PostReducer = (state = initialState, action) => {
  console.log("reducerData", action.payload);
  console.log("typeOfAction", action.type);
  switch (action.type) {
    case "GET_POST":
      return {
        ...state,
      };
    case "ADD_POST":
      return {
        ...state,
        postData: state.postData.concat(action.payload),
      };
    case "DELETE_POST":
      return {
        ...state,
        postData: state.postData.filter((ele) => ele.id !== action.payload),
      };
    case "UPDATE_POST":
      const predata = state.postData;
      const data = predata.findIndex((item) => item.id === action.payload.id);
      predata.splice(data, 1, action.payload);
      console.log(state.postData);
      return {
        ...state,
        postData: state.postData.map((ele) => ele),
      };
    default:
      return state;
  }
};
export default PostReducer;
