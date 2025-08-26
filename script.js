const services = [
  { name: "National Emergency", number: "999", category: "General" },
  { name: "Police Helpline", number: "999", category: "Police" },
  { name: "Fire Service", number: "999", category: "Fire" },
  { name: "Ambulance Service", number: "1994-999999", category: "Medical" },
  { name: "Women & Child Helpline", number: "109", category: "Support" },
  { name: "Anti-Corruption Helpline", number: "106", category: "Legal" },
  { name: "Electricity Helpline", number: "16999", category: "Utility" },
  { name: "Brac Helpline", number: "16788", category: "NGO" },
  { name: "Railway Helpline", number: "131", category: "Transport" }
];

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const cardContainer = document.getElementById("cardContainer");
const historyList = document.getElementById("historyList");

services.forEach(service => {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded shadow-md flex flex-col justify-between";

  card.innerHTML = `
    <div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-xl">💗</span>
        <span class="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">${service.category}</span>
      </div>
      <h4 class="font-bold">${service.name}</h4>
      <p class="text-sm text-gray-600">${service.number}</p>
    </div>
    <div class="flex justify-between mt-4">
      <button onclick="copyText('${service.name}: ${service.number}')" class="bg-blue-500 text-white px-2 py-1 rounded text-sm">📋 Copy</button>
      <button onclick="callService('${service.name}', '${service.number}')" class="bg-green-500 text-white px-2 py-1 rounded text-sm">📞 Call</button>
    </div>
  `;
  cardContainer.appendChild(card);
});

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert(`Copied: ${text}`);
    copyCount++;
    document.getElementById("copyCount").innerText = copyCount;
  });
}

function callService(name, number) {
  if (coinCount < 20) {
    alert("Not enough coins to make a call.");
    return;
  }

  alert(`Calling ${name} at ${number}`);
  coinCount -= 20;
  document.getElementById("coinCount").innerText = coinCount;

  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const entry = document.createElement("li");
  entry.innerText = `${name} – ${number} – ${time}`;
  historyList.prepend(entry);
}

function clearHistory() {
  historyList.innerHTML = "";
}