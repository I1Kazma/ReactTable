import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchPosts,  setSortField, setSortMethod } from "../store/actions/posts.action";
import { setSortFieldToURL, setSortMethodToURL } from "../utils/path";

//Сортировка

function SortItem({ title, name }) {
  const dispatch = useDispatch();

  const [sort, setSort] = useState("asc");

  const toogle = () => {
    if (sort === "asc") {
      setSort("desc");
      dispatch(setSortMethod("desc"));
      setSortMethodToURL("desc");
    }
    if (sort === "desc") {
      setSort("asc");
      dispatch(setSortMethod("asc"));
      setSortMethodToURL("asc");
    }

    setSortFieldToURL(name);
    dispatch(setSortField(name));
    dispatch(fetchPosts());
  };

  return (
    <SortItemWrapper>
      <Title onClick={toogle}>{title}</Title>
      <Icon
        onClick={toogle}
        style={{ transform: sort === "desc" ? "rotate(180deg)" : "none" }}
      />
    </SortItemWrapper>
  );
}

const Title = styled.div`
  cursor: pointer;
`;

const Icon = styled.div`
  background: url(/images/arrow.png);
  height: 6px;
  width: 12px;
  cursor: pointer;
`;

const SortItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  gap:10px;
`;

export default SortItem;
