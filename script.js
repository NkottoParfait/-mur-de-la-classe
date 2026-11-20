const cities = [
  { name: "Bafoussam", region: "Ouest" },
  { name: "Dschang", region: "Ouest" },
  { name: "Mbouda", region: "Ouest" },
  { name: "Bangangté", region: "Ouest" },
  { name: "Foumban", region: "Ouest" },
  { name: "Foumbot", region: "Ouest" },
  { name: "Bafang", region: "Ouest" },
  { name: "Bandjoun", region: "Ouest" },
  { name: "Douala", region: "Littoral" },
  { name: "Edéa", region: "Littoral" },
  { name: "Nkongsamba", region: "Littoral" },
  { name: "Manjo", region: "Littoral" },
  { name: "Penja", region: "Littoral" },
  { name: "Melong", region: "Littoral" },
  { name: "Loum", region: "Littoral" },
  { name: "Dibombari", region: "Littoral" },
  { name: "Yaoundé", region: "Centre" },
  { name: "Mbalmayo", region: "Centre" },
  { name: "Bafia", region: "Centre" },
  { name: "Eséka", region: "Centre" },
  { name: "Obala", region: "Centre" },
  { name: "Akonolinga", region: "Centre" },
  { name: "Monatélé", region: "Centre" },
  { name: "Nanga-Eboko", region: "Centre" },
  { name: "Ebolowa", region: "Sud" },
  { name: "Kribi", region: "Sud" },
  { name: "Sangmélima", region: "Sud" },
  { name: "Ambam", region: "Sud" },
  { name: "Lolodorf", region: "Sud" },
  { name: "Akom II", region: "Sud" },
  { name: "Campo", region: "Sud" },
  { name: "Bertoua", region: "Est" },
  { name: "Batouri", region: "Est" },
  { name: "Abong-Mbang", region: "Est" },
  { name: "Yokadouma", region: "Est" },
  { name: "Bélabo", region: "Est" },
  { name: "Bétaré-Oya", region: "Est" },
  { name: "Mbang", region: "Est" },
  { name: "Garoua", region: "Nord" },
  { name: "Guider", region: "Nord" },
  { name: "Figuil", region: "Nord" },
  { name: "Poli", region: "Nord" },
  { name: "Lagdo", region: "Nord" },
  { name: "Pitoa", region: "Nord" },
  { name: "Tcholliré", region: "Nord" },
  { name: "Maroua", region: "Extrême-Nord" },
  { name: "Kousséri", region: "Extrême-Nord" },
  { name: "Mokolo", region: "Extrême-Nord" },
  { name: "Yagoua", region: "Extrême-Nord" },
  { name: "Mora", region: "Extrême-Nord" },
  { name: "Kaélé", region: "Extrême-Nord" },
  { name: "Mindif", region: "Extrême-Nord" },
  { name: "Ngaoundéré", region: "Adamaoua" },
  { name: "Meiganga", region: "Adamaoua" },
  { name: "Tibati", region: "Adamaoua" },
  { name: "Banyo", region: "Adamaoua" },
  { name: "Ngaoundal", region: "Adamaoua" },
  { name: "Bankim", region: "Adamaoua" },
  { name: "Tignère", region: "Adamaoua" },
  { name: "Bamenda", region: "Nord-Ouest" },
  { name: "Kumbo", region: "Nord-Ouest" },
  { name: "Wum", region: "Nord-Ouest" },
  { name: "Ndop", region: "Nord-Ouest" },
  { name: "Fundong", region: "Nord-Ouest" },
  { name: "Bali", region: "Nord-Ouest" },
  { name: "Jakiri", region: "Nord-Ouest" },
  { name: "Limbe", region: "Sud-Ouest" },
  { name: "Buea", region: "Sud-Ouest" },
  { name: "Kumba", region: "Sud-Ouest" },
  { name: "Mamfe", region: "Sud-Ouest" },
  { name: "Tiko", region: "Sud-Ouest" },
  { name: "Muyuka", region: "Sud-Ouest" },
  { name: "Ekondo-Titi", region: "Sud-Ouest" },
  { name: "Idenau", region: "Sud-Ouest" }
];

const cityFacts = {
  "Yaoundé": { gps: "3.8667, 11.5167", pollution: "Modérée en général", schools: "Universités de Yaoundé I et II, écoles nombreuses", mayor: "Luc Messi Atangana", places: "Palais des Congrès, Mont Fébé, Musée national" },
  "Douala": { gps: "4.0511, 9.7679", pollution: "Élevée dans les axes industriels", schools: "Université de Douala, établissements publics et privés", mayor: "Roger Mbassa Ndine", places: "Port, Lac Municipal, Musée maritime" },
  "Bamenda": { gps: "5.9631, 10.1591", pollution: "Modérée", schools: "Universités, lycées et collèges", mayor: "À confirmer", places: "Vallée de Santa, escarpement de Bamenda" },
  "Garoua": { gps: "9.3014, 13.3977", pollution: "Faible à modérée", schools: "Université de Garoua et établissements secondaires", mayor: "À confirmer", places: "Fleuve Bénoué, Parc de Garoua" },
  "Maroua": { gps: "10.5910, 14.3159", pollution: "Faible, poussière possible", schools: "Université de Maroua et établissements secondaires", mayor: "À confirmer", places: "Marché central, Féroé, musée de Miskine" },
  "Bafoussam": { gps: "5.4737, 10.4179", pollution: "Modérée", schools: "Université et nombreux établissements secondaires", mayor: "À confirmer", places: "Palais des chefferies, marché B" },
  "Limbe": { gps: "4.0242, 9.2149", pollution: "Faible à modérée", schools: "Établissements publics et privés nombreux", mayor: "À confirmer", places: "Plages, Jardin botanique, mont Cameroun" },
  "Kribi": { gps: "2.9379, 9.9076", pollution: "Faible près du littoral", schools: "Établissements publics et privés", mayor: "À confirmer", places: "Chutes de la Lobé, plage, port en eau profonde" },
  "Ebolowa": { gps: "2.9000, 11.1500", pollution: "Faible", schools: "Collèges, lycées et établissements techniques", mayor: "À confirmer", places: "Cascade de Nkolandom, réserve de faune" },
  "Bertoua": { gps: "4.5770, 13.6846", pollution: "Modérée", schools: "Université et établissements secondaires", mayor: "À confirmer", places: "Marché, cathédrale, artisanat" }
};

const grid = document.getElementById("cityGrid");
const searchInput = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const resetButton = document.getElementById("resetButton");
const cityModal = document.getElementById("cityModal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

const regionColors = {
  "Ouest": "#f4c542", "Littoral": "#4db2a3", "Centre": "#4f8fc4",
  "Sud": "#82aa62", "Est": "#b47a55", "Nord": "#d88954",
  "Extrême-Nord": "#e36969", "Adamaoua": "#9b7ab8",
  "Nord-Ouest": "#6a9f84", "Sud-Ouest": "#3eaaa7"
};

const regions = [...new Set(cities.map(city => city.region))].sort((a, b) => a.localeCompare(b, "fr"));
regions.forEach(region => {
  const option = document.createElement("option");
  option.value = region;
  option.textContent = region;
  regionFilter.appendChild(option);
});

function normalize(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function renderCities() {
  const query = normalize(searchInput.value.trim());
  const selectedRegion = regionFilter.value;

  const filtered = cities.filter(city => {
    const matchesName = normalize(city.name).includes(query);
    const matchesRegion = selectedRegion === "Toutes" || city.region === selectedRegion;
    return matchesName && matchesRegion;
  });

  grid.innerHTML = "";
  filtered.forEach((city, index) => {
    const card = document.createElement("article");
    card.className = "city-card";
    card.style.animationDelay = `${Math.min(index * 28, 280)}ms`;
    card.style.setProperty("--region-color", regionColors[city.region]);

    const top = document.createElement("div");
    top.className = "city-top";

    const mark = document.createElement("span");
    mark.className = "city-mark";
    mark.textContent = city.name.charAt(0).toUpperCase();

    const heading = document.createElement("h3");
    heading.textContent = city.name;

    const number = document.createElement("span");
    number.className = "city-number";
    number.textContent = String(index + 1).padStart(2, "0");

    top.append(mark, heading, number);

    const footer = document.createElement("div");
    footer.className = "city-card-footer";

    const tag = document.createElement("span");
    tag.className = "region-tag";
    tag.textContent = city.region;

    const infoButton = document.createElement("button");
    infoButton.type = "button";
    infoButton.className = "info-button";
    infoButton.innerHTML = 'Voir plus <span aria-hidden="true">→</span>';
    infoButton.setAttribute("aria-label", `Voir les informations sur ${city.name}`);
    infoButton.addEventListener("click", () => openCityModal(city));

    footer.append(tag, infoButton);
    card.append(top, footer);
    grid.appendChild(card);
  });

  resultCount.textContent = `${filtered.length} ville${filtered.length > 1 ? "s" : ""} affichée${filtered.length > 1 ? "s" : ""}`;
  emptyState.hidden = filtered.length !== 0;
}

function getCityFacts(city) {
  const known = cityFacts[city.name];
  const regionalDescription = {
    "Ouest": "Climat tempéré des hauts plateaux.",
    "Littoral": "Climat humide avec influence maritime.",
    "Centre": "Forêt tropicale et climat de savane humide.",
    "Sud": "Forêt dense humide et climat équatorial.",
    "Est": "Forêts tropicales et grands espaces naturels.",
    "Nord": "Climat soudano-sahélien, saisons très marquées.",
    "Extrême-Nord": "Climat semi-aride et fortes chaleurs.",
    "Adamaoua": "Plateaux frais aux températures plus modérées.",
    "Nord-Ouest": "Climat frais des hautes terres.",
    "Sud-Ouest": "Climat humide autour du littoral et du massif montagneux."
  };

  return known || {
    gps: "Coordonnées exactes à vérifier sur une carte",
    pollution: "Données locales non disponibles",
    schools: "Écoles primaires, secondaires et parfois établissements techniques",
    mayor: "Nom du maire actuel à confirmer",
    places: "Marché local, espace culturel ou naturel de la région",
    climate: regionalDescription[city.region]
  };
}

function openCityModal(city) {
  const facts = getCityFacts(city);
  const mapLink = facts.gps.includes("Coordonnées")
    ? `https://www.openstreetmap.org/search?query=${encodeURIComponent(city.name + " Cameroun")}`
    : `https://www.openstreetmap.org/?mlat=${facts.gps.split(",")[0].trim()}&mlon=${facts.gps.split(",")[1].trim()}#map=12/${facts.gps.split(",")[0].trim()}/${facts.gps.split(",")[1].trim()}`;

  modalTitle.textContent = city.name;
  modalContent.innerHTML = `
    <div class="detail-card"><strong>Région</strong><p>${city.region}</p></div>
    <div class="detail-card"><strong>Position GPS</strong><p>${facts.gps}<br><a href="${mapLink}" target="_blank" rel="noopener">Voir sur OpenStreetMap</a></p></div>
    <div class="detail-card"><strong>Qualité de l’air</strong><p>${facts.pollution}</p></div>
    <div class="detail-card"><strong>Écoles et formation</strong><p>${facts.schools}</p></div>
    <div class="detail-card"><strong>Mairie</strong><p>${facts.mayor}</p></div>
    <div class="detail-card"><strong>À découvrir</strong><p>${facts.places}</p></div>
    <p class="data-note">Les niveaux de pollution sont indicatifs. Le nom du maire et les informations municipales doivent être confirmés auprès de la mairie ou des autorités locales.</p>`;

  cityModal.hidden = false;
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeCityModal() {
  cityModal.hidden = true;
  document.body.classList.remove("modal-open");
}

searchInput.addEventListener("input", renderCities);
regionFilter.addEventListener("change", renderCities);
resetButton.addEventListener("click", () => {
  searchInput.value = "";
  regionFilter.value = "Toutes";
  searchInput.focus();
  renderCities();
});
modalClose.addEventListener("click", closeCityModal);
cityModal.addEventListener("click", event => {
  if (event.target === cityModal) closeCityModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !cityModal.hidden) closeCityModal();
});

renderCities();
