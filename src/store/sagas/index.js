import { all } from "redux-saga/effects";
import { watchPosts } from "./posts.saga";

export default function* rootSaga() {
  yield all([watchPosts()]);
}
