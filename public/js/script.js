const searchEngine = "https://duckduckgo.com/?q=";

// searchbox
const search = (e) => {
  e.preventDefault();
  const searchContainer = document.querySelector("#search-container");
  const keyword = searchContainer.value;

  window.location = searchEngine + keyword;
};
