import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setPage } from "../store/actions/posts.action";
import { setPageToURL } from "../utils/path";

function usePagination() {
  const dispatch = useDispatch();
  const totalCount = useSelector((state) => state.posts.totalCount);
  const limit = useSelector((state) => state.posts.limit);
  const countPages = Math.ceil(totalCount / limit);

  const toPage = (page) => {
    if (page > 0 && page <= countPages) {
      setPageToURL(page);
      dispatch(setPage(page));
      dispatch(fetchPosts());
    }
  };

  return {
    page: useSelector((state) => state.posts.page),
    totalCount,
    limit,
    countPages,
    toPage: toPage,
    setPage: (page) => dispatch(setPage(page)),
  };
}

export default usePagination;
