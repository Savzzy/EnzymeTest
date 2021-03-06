import { SAVE_COMMENT } from "actions/types";
import { FETCH_COMMENT } from "actions/types";
import axios from "axios";
export const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export const fetchComments = () => {
  const response = axios.get("http://jsonplaceholder.typicode.com/comments");

  return {
    type: FETCH_COMMENT,
    payload: response,
  };
};
