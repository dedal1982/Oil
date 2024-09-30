if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
  const style = document.createElement("style");
  style.innerHTML = `
        .quality__list {
            scrollbar-width: none;
        }
    `;
  document.head.appendChild(style);
}
