const events = [
  { name: "Sunset Park Run", date: "12 Jul 2026", city: "Sao Paulo", state: "SP", time: "07:30", distance: "5 km / 10 km", category: "Rua", price: "R$ 89,90", status: "Inscricoes abertas" },
  { name: "City Sprint", date: "20 Jul 2026", city: "Sao Paulo", state: "SP", time: "06:45", distance: "5 km", category: "Rua", price: "R$ 59,90", status: "Ultimas vagas" },
  { name: "Forest Run", date: "27 Jul 2026", city: "Curitiba", state: "PR", time: "08:00", distance: "12 km", category: "Trail", price: "R$ 119,90", status: "Inscricoes abertas" },
  { name: "Rio Half Challenge", date: "09 Ago 2026", city: "Rio de Janeiro", state: "RJ", time: "06:30", distance: "21 km", category: "Maratona", price: "R$ 149,90", status: "Inscricoes abertas" },
  { name: "Walk Together", date: "16 Ago 2026", city: "Sao Paulo", state: "SP", time: "08:30", distance: "5 km", category: "Caminhada", price: "R$ 39,90", status: "Inscricoes abertas" }
];

function createEventCard(event) {
  const detailPath = location.pathname.includes('/pages/') ? 'event-detail.html' : 'pages/event-detail.html';

  return `
    <article class="event-card">
      <div><span class="tag">${event.category}</span><h3>${event.name}</h3><p>${event.date} - ${event.time}</p></div>
      <dl><div><dt>Local</dt><dd>${event.city}, ${event.state}</dd></div><div><dt>Distancia</dt><dd>${event.distance}</dd></div><div><dt>Valor</dt><dd>${event.price}</dd></div></dl>
      <div class="card-footer"><span>${event.status}</span><a href="${detailPath}">Detalhes</a></div>
    </article>`;
}

function renderEvents(list, items) {
  if (!items.length) {
    list.innerHTML = '<p class="empty-state">Nenhum evento encontrado com os filtros selecionados.</p>';
    return;
  }

  list.innerHTML = items.map(createEventCard).join("");
}

const featuredList = document.querySelector('[data-event-list="featured"]');
if (featuredList) renderEvents(featuredList, events.slice(0, 3));

const allList = document.querySelector('[data-event-list="all"]');
const searchInput = document.querySelector('#eventSearch');
const cityFilter = document.querySelector('#cityFilter');
const distanceFilter = document.querySelector('#distanceFilter');
const params = new URLSearchParams(location.search);

if (searchInput && params.get('q')) searchInput.value = params.get('q');
if (distanceFilter && params.get('distance')) distanceFilter.value = params.get('distance');

function applyFilters() {
  if (!allList) return;

  const term = (searchInput?.value || "").toLowerCase();
  const category = (params.get('category') || "").toLowerCase();
  const city = cityFilter?.value || "";
  const distance = distanceFilter?.value || "";

  const filtered = events.filter((event) => {
    const searchable = `${event.name} ${event.city} ${event.category} ${event.distance}`.toLowerCase();
    const matchesTerm = searchable.includes(term);
    const matchesCategory = !category || event.category.toLowerCase() === category;
    const matchesCity = !city || event.city === city;
    const matchesDistance = !distance || event.distance.includes(distance);
    return matchesTerm && matchesCategory && matchesCity && matchesDistance;
  });

  renderEvents(allList, filtered);
}

[searchInput, cityFilter, distanceFilter].forEach((field) => field?.addEventListener('input', applyFilters));
applyFilters();

for (const form of document.querySelectorAll('form')) {
  form.addEventListener('submit', (event) => {
    if (!form.matches('.search-panel')) event.preventDefault();
  });
}
