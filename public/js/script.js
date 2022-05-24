const blocksContainer = document.querySelector("#blocks-container");

const searchEngine = "https://duckduckgo.com/?q=";

// init
const modeState = JSON.parse(localStorage.getItem("darkModeState"));
if (modeState || modeState == false) {
} else {
  localStorage.setItem("darkModeState", "true");
}

// searchbox
const search = (e) => {
  e.preventDefault();
  const searchContainer = document.querySelector("#search-container");
  const keyword = searchContainer.value;

  window.location = searchEngine + keyword;
};

// make element for each block
links.forEach((block) => {
  let container = document.createElement("div");
  container.setAttribute("class", "flex flex-col space-y-2 font-fantasque");

  // make anchor for each link
  let linksContainer = "";
  block.links.forEach((links) => {
    linksContainer += `
      <a class="hover:text-gruvbox-fg-4 dark:hover:text-gruvbox-bg-4" href="${links.link}">
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
        class="bg-gruvbox-bg-1 dark:bg-gruvbox-fg-1 p-1 w-full h-full rounded-sm flex flex-col justify-start text-center text-gruvbox-fg-1 dark:text-gruvbox-bg-1"
      >
      ${linksContainer}
      </div>
    `;

    blocksContainer.appendChild(container);
  });
});

// dark mode toggle
const modeCheckbox = document.querySelector("#mode-checkbox");
const modeIconContainer = document.querySelector("#mode-icon-container");
const html = document.querySelector("html");

const icon = document.createElement("i");

const darkModeState = JSON.parse(localStorage.getItem("darkModeState"));

if (darkModeState) {
  icon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gruvbox-fg-1" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>`;
} else {
  icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gruvbox-bg-1" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
      </svg>`;
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
  }
}

modeIconContainer.appendChild(icon);

modeCheckbox.addEventListener("click", () => {
  modeIconContainer.innerHTML = "";
  const icon = document.createElement("i");
  if (modeCheckbox.checked) {
    html.classList.remove("dark");
    localStorage.setItem("darkModeState", "false");
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gruvbox-bg-1" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
      </svg>
    `;
    modeIconContainer.appendChild(icon);
  } else {
    html.classList.add("dark");
    localStorage.setItem("darkModeState", "true");
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gruvbox-fg-1" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>`;
    modeIconContainer.appendChild(icon);
  }
});
