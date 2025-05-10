function mapStatus(characterStatus) {
  switch (characterStatus) {
    case "Alive":
      return {
        color: "success",
        text: "Vivo",
      };
    case "Dead":
      return {
        color: "danger",
        text: "Morto",
      };
    default:
      return {
        color: "secondary",
        text: "Desconhecida",
      };
  }
}

function mapSpecie(characterSpecie) {
  switch (characterSpecie) {
    case "Human":
      return "Humano";
    case "Alien":
      return "Alien";
    case "Robot":
      return "Robô";
    default:
      return `Outro (${characterSpecie})`;
  }
}

document.addEventListener("DOMContentLoaded", updateFooterData);

async function updateFooterData() {
    try {
        // Fazendo requisições para obter os dados da API
        const [charactersResponse, locationsResponse, episodesResponse] = await Promise.all([
            axios.get('https://rickandmortyapi.com/api/character'),
            axios.get('https://rickandmortyapi.com/api/location'),
            axios.get('https://rickandmortyapi.com/api/episode')
        ]);

        // Atualizando os valores no footer
        document.getElementById('total-characters').textContent = charactersResponse.data.info.count;
        document.getElementById('total-locations').textContent = locationsResponse.data.info.count;
        document.getElementById('total-episodes').textContent = episodesResponse.data.info.count;

        // Atualizando o nome do desenvolvedor e o ano atual
        document.getElementById('dev-name').textContent = 'Karina Martins';
        document.getElementById('current-year').textContent = new Date().getFullYear();
    } catch (error) {
        console.error('Erro ao carregar os dados do footer:', error);
    }
}