document.addEventListener("DOMContentLoaded", loadCharacterDetails);
document
  .getElementById("btn-return")
  .addEventListener("click", returnToMainPage);

async function loadCharacterDetails() {
    const characterId = getCharacterIdFromURL();

    if (!characterId) {
        console.error("ID do personagem não encontrado na URL.");
        return;
    }

    try {
        // Faz a requisição à API para obter os detalhes do personagem
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
        const character = response.data;

        // Renderiza os detalhes do personagem na página
        renderCharacterDetails(character);
    } catch (error) {
        console.error("Erro ao carregar os detalhes do personagem:", error);
        document.getElementById("character-detail").innerHTML = `
            <p class="text-center text-danger">Erro ao carregar os detalhes do personagem.</p>
        `;
    }
}

// Função para obter o ID do personagem da URL
function getCharacterIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("character");
}

// Função para renderizar os detalhes do personagem na página
function renderCharacterDetails(character) {
    const characterDetail = document.getElementById("character-detail");

    const characterCard = `
        <div class="col-12">
            <div class="card shadow-lg border-0">
                <div class="row g-0">
                    <div class="col-md-6">
                        <img src="${character.image}" class="img-fluid rounded-start h-100 object-fit-cover" alt="Foto do Personagem ${character.name}">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h2 class="card-title text-primary fw-bold">${character.name}</h2>
                            <p class="card-text">
                                <small>
                                    <i class="bi bi-circle-fill ${character.status === 'Alive' ? 'text-success' : character.status === 'Dead' ? 'text-danger' : 'text-secondary'}"></i>
                                    <span class="fw-bold">${character.status}</span> - ${character.species}
                                </small>
                            </p>
                            <p class="card-text">
                                <small class="text-secondary">Gênero:</small><br>
                                <span>${character.gender}</span>
                            </p>
                            <p class="card-text">
                                <small class="text-secondary">Tipo:</small><br>
                                <span>${character.type || "Desconhecido"}</span>
                            </p>
                            <p class="card-text">
                                <small class="text-secondary">Origem:</small><br>
                                <span>${character.origin.name}</span>
                            </p>
                            <p class="card-text">
                                <small class="text-secondary">Última localização conhecida:</small><br>
                                <span>${character.location.name}</span>
                            </p>
                            <p class="card-text">
                                <small class="text-secondary">Número de episódios:</small><br>
                                <span>${character.episode.length}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    characterDetail.innerHTML = characterCard;
}

function returnToMainPage() {
  window.location.href = "index.html";
}