import { createBrowserHistory } from "history";

const history = createBrowserHistory();


//передача URL 
export function setPageToURL(page) {
  const url = new URL(window.location.href);
  url.searchParams.set("page", String(page));
  history.replace(url.pathname + url.search, {});
}

//получение URL 
export function getPageFromURL() {
  const url = new URL(window.location.href);
  return Number(url.searchParams.get("page"));
}

//передача поиска в URL
export function setSearchToURL(q) {
  const url = new URL(window.location.href);
  url.searchParams.set("q", q ? q : "");
  history.replace(url.pathname + url.search, {});
}

//получение поиска из URL
export function getSearchFromURL() {
  const url = new URL(window.location.href);
  return url.searchParams.get("search");
}

//обновление field в URL
export function setSortFieldToURL(field) {
  const url = new URL(window.location.href);
  url.searchParams.set("field", field);
  history.replace(url.pathname + url.search, {});
}

//Получение field из URL
export function getSortFieldFromURL() {
  const url = new URL(window.location.href);
  return url.searchParams.get("field");
}

//обновление method в URL
export function setSortMethodToURL(method) {
  const url = new URL(window.location.href);
  url.searchParams.set("method", method);
  history.replace(url.pathname + url.search, {});
}

//получение method из URL
export function getSortMethodFromURL() {
  const url = new URL(window.location.href);
  return url.searchParams.get("method");
}
