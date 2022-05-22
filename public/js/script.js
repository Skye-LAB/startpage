const searchEngine = "https://duckduckgo.com/?q=";

const search = (e) => {
  e.preventDefault();
  const searchContainer = document.getElementById("search-container");
  const keyword = searchContainer.value;

  window.location = searchEngine + keyword;
};
