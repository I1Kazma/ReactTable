const setSortField = function (name) {
  return {
    type: "SET_SORT_FIELD",
    payload: {
      name,
    },
  };
};

const setSortMethod = function (method) {
  return {
    type: "SET_SORT_METHOD",
    payload: {
      method,
    },
  };
};

const setTotalCount = function (totalCount) {
  return {
    type: "SET_TOTAL_COUNT",
    payload: {
      totalCount,
    },
  };
};

const setPage = function (page) {
  return {
    type: "SET_PAGE",
    payload: {
      page,
    },
  };
};

const setSearch = function (q) {
  return {
    type: "SET_SEARCH",
    payload: {
      q,
    },
  };
};

const fetchPosts = function () {
  return {
    type: "POSTS_FETCH_REQUEST",
  };
};

const successPosts = function (posts) {
  return {
    type: "POSTS_FETCH_SUCCESS",
    payload: {
      posts,
    },
  };
};

const failurePosts = function () {
  return {
    type: "POSTS_FETCH_FAILURE",
  };
};

module.exports = {
  setSortField,
  setSortMethod,
  setTotalCount,
  setPage,
  fetchPosts,
  setSearch,
  successPosts,
  failurePosts,
};
