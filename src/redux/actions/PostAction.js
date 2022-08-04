export const PostAction = (data) => {
  console.log("action data", data);
  return {
    type: "ADD_POST",
    payload: data,
  };
};
export const deletePostAction = (id) => {
  console.log("delete id", id);
  return {
    type: "DELETE_POST",
    payload: id,
  };
};
export const UpdateAction = (UpdateData) => {
  return {
    type: "UPDATE_POST",
    payload: UpdateData,
  };
};
