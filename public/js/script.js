const blocksContainer = document.querySelector("#blocks-container");

const searchEngine = "https://duckduckgo.com/?q=";

const search = (e) => {
  e.preventDefault();
  const searchContainer = document.querySelector("#search-container");
  const keyword = searchContainer.value;

  window.location = searchEngine + keyword;
};

links.forEach((block) => {
  let container = document.createElement("div");
  container.setAttribute("class", "flex flex-col space-y-2 font-fantasque");

  let linksContainer = "";
  block.links.forEach((links) => {
    linksContainer += `
      <a class="hover:text-gruvbox-bg-4" href="${links.link}">
        ${links.name}
      </a>
    `;

    container.innerHTML = `
      <div
        class="flex bg-gruvbox-${block.color} justify-center items-center rounded-sm"
      >
        <span class="text-gruvbox-fg-1">${block.name}</span>
      </div>
      <div
        class="bg-gruvbox-fg-1 p-1 w-full h-full rounded-sm flex flex-col justify-start text-center text-gruvbox-bg-1"
      >
      ${linksContainer}
      </div>
    `;

    blocksContainer.appendChild(container);
  });
});
