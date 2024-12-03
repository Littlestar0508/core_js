import { Main } from "./type";

const END_POINT = "https://pokeapi.co/api/v2/pokemon/18";

async function fetchData(url: string): Promise<Main> {
  const response = await fetch(url);

  return response.json();
}

const data = await fetchData(END_POINT);

function createCard(data: Main): string {
  const template = `
  <div class='card'>
  <img src=${data.sprites["front_default"]}>
  <div>${data.name}</div>
  </div>
  `;

  return template;
}

function renderCard(target: Element | HTMLBodyElement, template: string): void {
  target.insertAdjacentHTML("beforeend", template);
}

function render(target: Element | HTMLBodyElement, data: Main): void {
  const template = createCard(data);

  renderCard(target, template);
}

// render(document.body, data);

function fetchPokemon() {
  const arr: Promise<Main>[] = [];
  Array(100)
    .fill(null)
    .forEach((_, i) => {
      const url: string = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
      arr.push(
        fetch(url).then((res) => {
          return res.json();
        })
      );
    });

  return arr;
}

async function createPokemonObject(arr: Promise<Main>[]) {
  let pokemon: unknown;

  await Promise.all(arr).then((all) => {
    pokemon = all.map((item) => ({
      name: item.name,
      image: item.sprites["front_default"],
    }));
  });

  return pokemon;
}

async function renderPokemon() {
  const data = fetchPokemon();
  const p = await createPokemonObject(data);
  if (Array.isArray(p)) {
    let tag = p
      .map((item) => {
        return `
        <li>
          <img src="${item.image}" alt="${item.name}" />
          <h2>${item.name}</h2>
        </li>
      `;
      })
      .join("");
    (document.querySelector("ul") as Element).insertAdjacentHTML("beforeend", tag);
  }
}

renderPokemon();
