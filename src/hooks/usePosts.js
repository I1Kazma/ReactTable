import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setPage, setSearch } from "../store/actions/posts.action";
import { setPageToURL, setSearchToURL } from "../utils/path";

function usePosts() {
  const dispatch = useDispatch();

  const search = (q) => {
    setSearchToURL(q);
    dispatch(setSearch(q));

    setPageToURL(1);
    dispatch(setPage(1));
  };

  return {
    loading: useSelector((state) => state.posts.loading),
    error: useSelector((state) => state.posts.error),
    posts: useSelector((state) => state.posts.posts),
    fetchPosts: () => dispatch(fetchPosts()),
    search,
  };
}

export default usePosts;
