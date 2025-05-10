document.addEventListener("DOMContentLoaded", main);

async function main() {
    loadMainContent(1);
    updateFooterData(); // Substituído renderFooterData por updateFooterData
}

// Seleciona o campo de pesquisa e a lista de personagens
const searchInput = document.getElementById('search-input');
const characterList = document.getElementById('list-characters');

// Função para buscar personagens na API
searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim().toLowerCase();

    if (query === '') {
        // Se o campo de pesquisa estiver vazio, volta para a página inicial
        loadMainContent(1);
        return;
    }

    // Faz uma requisição à API com o filtro de nome
    axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(response => {
            const characters = response.data.results;

            // Renderiza os personagens encontrados
            renderCharacters(characters);
        })
        .catch(error => {
            // Caso não encontre resultados, exibe uma mensagem
            if (error.response && error.response.status === 404) {
                characterList.innerHTML = '<p class="text-center text-danger">Nenhum personagem encontrado.</p>';
            } else {
                console.error('Erro ao buscar personagens:', error);
            }
        });
});

// Função para renderizar os personagens na página
function renderCharacters(characters) {
    characterList.innerHTML = ''; // Limpa a lista atual

    characters.forEach(character => {
        const characterCard = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card shadow">
                    <img src="${character.image}" class="card-img-top" alt="Foto do Personagem ${character.name}">
                    <div class="card-body fw-bolder">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">
                            <small>
                                <i class="bi bi-circle-fill ${character.status === 'Alive' ? 'text-success' : character.status === 'Dead' ? 'text-danger' : 'text-secondary'}"></i>
                                <span>${character.status} - ${character.species}</span>
                            </small>
                        </p>
                        <p class="card-text">
                            <small class="text-secondary">Última localização conhecida:</small><br>
                            <small>${character.location.name}</small>
                        </p>
                        <p class="card-text">
                            <small class="text-secondary">Visto a última vez em:</small><br>
                            <small>${character.episode[character.episode.length - 1]}</small>
                        </p>
                    </div>
                </div>
            </div>
        `;
        characterList.innerHTML += characterCard;
    });
}

async function loadMainContent(page) {
  const result = await listCharactersByPage(page);

  const characters = [...result.charactersList];

  for (const character of characters) {
    const lastEpisodeUrl = character.episode[character.episode.length - 1];

    const episodeName = await getEpisodeDataFromURL(lastEpisodeUrl);

    character.episode = {
      url: lastEpisodeUrl,
      name: episodeName,
    };
  }

  renderCharactersList(characters);
  renderPagination(result.prevPage, result.nextPage);
}

function renderCharactersList(characters) {
  const row = document.getElementById("list-characters");
  row.innerHTML = "";

  for (const character of characters) {
    let nameCharacter = character.name;

    if (nameCharacter.length > 18) {
      nameCharacter = nameCharacter.slice(0, 18).concat("...");
    }

    const card = `
      <div class="card shadow" onclick="viewCharacterDetail(${character.id})">
          <img src="${character.image}" class="card-img-top"
              alt="Foto do ${character.name}">
          <div class="card-body fw-bolder">
              <h5 class="card-title">${nameCharacter}</h5>

              <p class="card-text">
                  <small>
                      <i id="circle-status" class="bi bi-circle-fill text-${
                        mapStatus(character.status).color
                      }"></i>
                      <span>
                        ${mapStatus(character.status).text} 
                        - 
                        ${mapSpecie(character.species)}
                      </span>
                  </small>
              </p>


              <p class="card-text">
                  <small class="text-secondary">Última localização conhecida:</small><br>
                  <small>${character.location.name}</small>
              </p>

              <p class="card-text">
                  <small class="text-secondary">Visto a última vez em:</small><br>
                  <small>${character.episode.name}</small>
              </p>
          </div>
      </div>
  `;

    const col = document.createElement("div");
    col.classList.add("col-12", "col-md-6", "col-lg-4");

    col.innerHTML = card;
    row.appendChild(col);
  }
}

function renderPagination(prevPage, nextPage) {
  const prevPageNumber = !prevPage ? 0 : prevPage.split("?page=")[1];
  const nextPageNumber = !nextPage ? 0 : nextPage.split("?page=")[1];

  const nav = document.getElementById("pagination");
  nav.innerHTML = "";
  const ul = document.createElement("ul");
  ul.classList.add("pagination", "justify-content-center");

  // BTN Prev
  const liPrevPage = document.createElement("li");
  liPrevPage.classList.add("page-item");

  if (!prevPage) {
    liPrevPage.classList.add("disabled");
  }

  const buttonPrev = document.createElement("button");
  buttonPrev.setAttribute("type", "button");
  buttonPrev.classList.add("page-link");
  buttonPrev.innerText = "Anterior";
  buttonPrev.addEventListener("click", () => loadMainContent(prevPageNumber));

  liPrevPage.appendChild(buttonPrev);

  // BTN Next
  const liNextPage = document.createElement("li");
  liPrevPage.classList.add("page-item");

  if (!nextPage) {
    liNextPage.classList.add("disabled");
  }

  const buttonNext = document.createElement("button");
  buttonNext.setAttribute("type", "button");
  buttonNext.classList.add("page-link");
  buttonNext.innerText = "Próxima";
  buttonNext.addEventListener("click", () => loadMainContent(nextPageNumber));

  liNextPage.appendChild(buttonNext);

  ul.appendChild(liPrevPage);
  ul.appendChild(liNextPage);

  nav.appendChild(ul);
}

function viewCharacterDetail(characterId) {
  window.location.href = `detail.html?character=${characterId}`;
}