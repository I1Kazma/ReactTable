//начальное состояние

const initialState = {
  posts: [],
  search: "",
  page: 1,
  sortField: "id",
  sortMethod: "asc",
  totalCount: 1,
  limit: 10,
  loading: true,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_FIELD":
      return {
        ...state,
        sortField: action.payload.name,
      };
    case "SET_SORT_METHOD":
      return {
        ...state,
        sortMethod: action.payload.method,
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload.q ? action.payload.q : "",
      };
    case "SET_TOTAL_COUNT":
      return {
        ...state,
        totalCount: action.payload.totalCount,
      };
    case "SET_PAGE":
      return {
        ...state,
        page: action.payload.page,
      };
    case "POSTS_FETCH_REQUEST":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "POSTS_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload.posts,
      };
    case "POSTS_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
