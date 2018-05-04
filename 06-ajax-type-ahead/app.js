const suggestions = document.querySelector(".suggestions");
const search = document.querySelector(".search");
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const getContent = () => fetch(endpoint);

const render = html => {
  suggestions.innerHTML = html;
};

const reset = () => {
  console.log("called");
  render(`
    <li>Filter for a city</li>
    <li>or a state</li>
  `);
};

const addCommas = num => num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const prepHtml = (val, list) =>
  list.map(locale => {
    const re = new RegExp(val, "gi");
    const hl = '<span class="hl">$&</span>';
    return `
      <li>
        <span class="name">
          ${locale.city.replace(re, hl)}, ${locale.state.replace(re, hl)}
        </span>
        <span class="population">${addCommas(locale.population)}</span>
      </li>
    `;
  });

const runApp = json => {
  function filterCityState() {
    const val = this.value.toLowerCase();
    console.log(!val);
    if (!val) return reset();

    const filtered = json.filter(
      item =>
        item.city.toLowerCase().includes(val) ||
        item.state.toLowerCase().includes(val)
    );
    const html = prepHtml(val, filtered).join("");
    render(html);
  }

  search.addEventListener("keyup", filterCityState);
};

getContent()
  .then(res => res.json())
  .then(runApp);
