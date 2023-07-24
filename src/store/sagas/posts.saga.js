import axios from "axios";
import { takeLatest, put, call, select } from "redux-saga/effects";
import {
  failurePosts,
  setTotalCount,
  successPosts,
} from "../actions/posts.action";

//запрос API

function fetchPosts({ page, limit, q, sortField, sortMethod }) {
  let url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;

  if (q.length !== 0) {
    url += `&q=${q}`;
  }

  url += `&_sort=${sortField}&_order=${sortMethod}`;

  return axios({
    method: "get",
    url,
  });
}

const getPage = (state) => state.posts.page;
const getLimit = (state) => state.posts.limit;
const getSearch = (state) => state.posts.search;
const getSortField = (state) => state.posts.sortField;
const getSortMethod = (state) => state.posts.sortMethod;

export function* workerPosts() {
  try {
    const page = yield select(getPage);
    const limit = yield select(getLimit);
    const q = yield select(getSearch);
    const sortField = yield select(getSortField);
    const sortMethod = yield select(getSortMethod);

    const response = yield call(fetchPosts, {
      page,
      limit,
      q,
      sortField,
      sortMethod,
    });
    const posts = response.data;

    yield put(setTotalCount(response.headers["x-total-count"]));
    yield put(successPosts(posts));
  } catch (error) {
    yield put(failurePosts());
  }
}

export function* watchPosts() {
  yield takeLatest("POSTS_FETCH_REQUEST", workerPosts);
}
