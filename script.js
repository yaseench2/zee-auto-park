// =========================
// AutoCare Website Settings
// =========================
const WHATSAPP_NUMBER = "917034041366"; // Replace with client's WhatsApp number, e.g. 919876543210
const BUSINESS_NAME = "AutoCare";

// Replace these image URLs with the client's preferred images if required.
const cars = {
  "Toyota": ["Innova", "Fortuner", "Corolla", "Camry", "Glanza"],
  "Hyundai": ["Creta", "i20", "Venue", "Verna", "Grand i10"],
  "Honda": ["City", "Amaze", "Elevate", "Jazz"],
  "Kia": ["Seltos", "Sonet", "Carens", "Carnival"],
  "Maruti Suzuki": ["Swift", "Baleno", "Brezza", "Dzire", "Ertiga"],
  "Tata": ["Nexon", "Punch", "Harrier", "Safari", "Altroz"],
  "Mahindra": ["Thar", "XUV700", "Scorpio", "Bolero", "XUV300"],
  "Nissan": ["Magnite", "Kicks"],
  "Renault": ["Kwid", "Kiger", "Triber", "Duster"],
  "Volkswagen": ["Polo", "Virtus", "Taigun", "Tiguan"],
  "Skoda": ["Slavia", "Kushaq", "Kodiaq", "Superb"],
  "Ford": ["EcoSport", "Endeavour", "Figo"],
  "BMW": ["3 Series", "5 Series", "X1", "X3"],
  "Mercedes-Benz": ["C-Class", "E-Class", "GLA", "GLC"],
  "Audi": ["A4", "A6", "Q3", "Q5"]
};

const brandIcons = {"Toyota":"T","Hyundai":"H","Honda":"H","Kia":"K","Maruti Suzuki":"M","Tata":"T","Mahindra":"M","Nissan":"N","Renault":"R","Volkswagen":"VW","Skoda":"S","Ford":"F","BMW":"BMW","Mercedes-Benz":"MB","Audi":"A"};

const services = [
  ["general","🔧","General Car Service","Inspection & routine maintenance"],
  ["engine","⚙️","Engine Repair","Engine diagnosis and repair"],
  ["brake","🛑","Brake Repair","Brake inspection and repair"],
  ["battery","🔋","Battery Replacement","Battery testing and replacement"],
  ["oil","🛢️","Oil Change","Engine oil and filter service"],
  ["tyre","🛞","Tyre Service","Tyre replacement and service"],
  ["ac","❄️","AC Repair","Cooling and AC problems"],
  ["electrical","⚡","Electrical Repair","Electrical diagnosis"],
  ["suspension","🔩","Suspension Repair","Suspension inspection"],
  ["clutch","⚙️","Clutch Repair","Clutch inspection and repair"],
  ["alternator","🔌","Alternator Repair","Charging system service"],
  ["diagnostic","📟","Diagnostic Scan","Computer diagnostics"],
  ["coolant","💧","Coolant Replacement","Coolant system service"],
  ["headlight","💡","Headlight Replacement","Lights and bulbs"],
  ["breakdown","🚨","Emergency Breakdown","Roadside assistance"],
  ["other","🧰","Other","Tell us what you need"]
];

const parts = [
  ["brake-pads","Brake Pads","Brake","Brake pad replacement","https://images.unsplash.com/photo-1600705722908-bab1e75b4c4c?auto=format&fit=crop&w=700&q=80"],
  ["brake-disc","Brake Disc","Brake","Brake disc / rotor","https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80"],
  ["battery","Car Battery","Electrical","Battery replacement","https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=700&q=80"],
  ["engine-oil","Engine Oil","Engine","Engine oil replacement","https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=700&q=80"],
  ["oil-filter","Oil Filter","Engine","Oil filtration component","https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80"],
  ["air-filter","Air Filter","Engine","Air intake filter","https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=700&q=80"],
  ["spark-plug","Spark Plug","Engine","Ignition component","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["alternator","Alternator","Electrical","Charging system component","https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=700&q=80"],
  ["starter","Starter Motor","Electrical","Engine starting component","https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=700&q=80"],
  ["shock","Shock Absorber","Suspension","Suspension component","https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80"],
  ["clutch","Clutch Kit","Other","Clutch replacement kit","https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=700&q=80"],
  ["headlight","Headlight","Other","Headlamp replacement","https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=700&q=80"]
];

const state = {brand:"", model:"", year:"", services:new Set(), parts:new Set(), location:"Home", coordinates:null};

const $ = id => document.getElementById(id);
const toast = msg => { $("toast").textContent=msg; $("toast").classList.add("show"); setTimeout(()=> $("toast").classList.remove("show"),2600); };

function renderBrands(){
  $("brands").innerHTML = Object.keys(cars).map(brand =>
    `<button class="brand ${state.brand===brand?"active":""}" data-brand="${brand}"><span class="brand-logo">${brandIcons[brand]||"🚗"}</span>${brand}</button>`
  ).join("");
}
function selectBrand(brand){
  state.brand=brand; state.model=""; state.year="";
  renderBrands();
  $("modelSelect").innerHTML=`<option value="">Choose a ${brand} model</option>`+cars[brand].map(m=>`<option value="${m}">${m}</option>`).join("");
  $("selectedCar").textContent=`${brand} — choose a model`;
  updateSummary();
}
function renderServices(){
  const html=services.map(([id,icon,name,desc])=>`<button class="service-card ${state.services.has(id)?"selected":""}" data-service="${id}"><div class="service-icon">${icon}</div><b>${name}</b><small>${desc}</small></button>`).join("");
  $("quickServices").innerHTML=html; $("servicesGrid").innerHTML=html;
}
function toggleService(id){state.services.has(id)?state.services.delete(id):state.services.add(id);renderServices();updateSummary();}
function renderParts(){
  const q=$("partSearch").value.toLowerCase(), cat=$("partCategory").value;
  const filtered=parts.filter(p=>(p[1]+" "+p[2]+" "+p[3]).toLowerCase().includes(q)&&(cat==="all"||p[2]===cat));
  $("partsGrid").innerHTML=filtered.map(p=>`<article class="part-card ${state.parts.has(p[0])?"selected":""}">
    <img class="part-img" src="${p[4]}" alt="${p[1]}" loading="lazy" onerror="this.style.display='none'">
    <div class="part-info"><small>${p[2]}</small><b>${p[1]}</b><p>${p[3]}</p><button class="select-part" data-part="${p[0]}">${state.parts.has(p[0])?"✓ Selected":"Select Part"}</button></div>
  </article>`).join("") || `<p>No parts found.</p>`;
}
function togglePart(id){state.parts.has(id)?state.parts.delete(id):state.parts.add(id);renderParts();updateSummary();}
function selectedServiceNames(){return services.filter(s=>state.services.has(s[0])).map(s=>s[2]);}
function selectedPartNames(){return parts.filter(p=>state.parts.has(p[0])).map(p=>p[1]);}
function updateSummary(){
  const car=state.brand?(state.model?`${state.brand} ${state.model}${state.year?" ("+state.year+")":""}`:`${state.brand} — model not selected`):"Not selected";
  $("sumCar").textContent=car;
  $("sumServices").textContent=selectedServiceNames().join(", ")||"None selected";
  $("sumParts").textContent=selectedPartNames().join(", ")||"None selected";
  $("sumLocation").textContent=state.location;
}
function getValue(id){return $(id).value.trim();}
function makeMessage(){
  const date=$("date").value||"Not specified", time=$("time").value||"Not specified";
  const coords=state.coordinates?`\nMap location: https://maps.google.com/?q=${state.coordinates.lat},${state.coordinates.lng}`:"";
  return `Hello, I would like to request a car service from ${BUSINESS_NAME}.\n\nCUSTOMER DETAILS\nName: ${getValue("name")}\nWhatsApp: ${getValue("phone")}\n\nVEHICLE\nBrand: ${state.brand||"Not selected"}\nModel: ${state.model||"Not selected"}\nYear: ${state.year||"Not specified"}\n\nSERVICES REQUIRED\n${selectedServiceNames().length?selectedServiceNames().map(x=>"- "+x).join("\n"):"- None selected"}\n\nSPARE PARTS REQUIRED\n${selectedPartNames().length?selectedPartNames().map(x=>"- "+x).join("\n"):"- None selected"}\n\nSERVICE LOCATION\nType: ${state.location}\nAddress: ${getValue("address")||"Not provided"}${coords}\n\nPREFERRED DATE: ${date}\nPREFERRED TIME: ${time}\n\nADDITIONAL NOTES\n${getValue("notes")||"None"}\n\nPlease contact me regarding availability and quotation.\nThank you.`;
}
function sendWhatsApp(){
  const name=getValue("name"), phone=getValue("phone"), address=getValue("address");
  if(!state.brand||!state.model){toast("Please select your car brand and model.");$("cars").scrollIntoView({behavior:"smooth"});return;}
  if(!state.services.size&&!state.parts.size){toast("Please select at least one service or spare part.");$("services").scrollIntoView({behavior:"smooth"});return;}
  if(!name){toast("Please enter your name.");$("name").focus();return;}
  if(!phone||phone.replace(/\D/g,"").length<8){toast("Please enter a valid WhatsApp number.");$("phone").focus();return;}
  if(!address){toast("Please enter your service location.");$("address").focus();return;}
  if(WHATSAPP_NUMBER.includes("X")){toast("Please add the client's WhatsApp number in script.js.");return;}
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(makeMessage())}`,"_blank");
}
function clearAll(){
  state.brand="";state.model="";state.year="";state.services.clear();state.parts.clear();state.location="Home";state.coordinates=null;
  $("modelSelect").innerHTML="<option value=''>Choose a model</option>";$("carYear").value="";$("address").value="";$("name").value="";$("phone").value="";$("date").value="";$("time").value="";$("notes").value="";
  document.querySelectorAll(".location-card").forEach((x,i)=>x.classList.toggle("active",i===0));renderBrands();renderServices();renderParts();updateSummary();toast("Your selections were cleared.");
}

document.addEventListener("click",e=>{
  const brand=e.target.closest("[data-brand]"); if(brand) selectBrand(brand.dataset.brand);
  const svc=e.target.closest("[data-service]"); if(svc) toggleService(svc.dataset.service);
  const part=e.target.closest("[data-part]"); if(part) togglePart(part.dataset.part);
  const loc=e.target.closest("[data-location]"); if(loc){state.location=loc.dataset.location;document.querySelectorAll(".location-card").forEach(x=>x.classList.toggle("active",x===loc));updateSummary();}
  const wa=e.target.closest("[data-whatsapp]"); if(wa){e.preventDefault();if(WHATSAPP_NUMBER.includes("X")){toast("Add the WhatsApp number in script.js first.");return;}window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I would like to enquire about your car repair and spare-parts service.")}`,"_blank");}
});
$("modelSelect").addEventListener("change",e=>{state.model=e.target.value;updateSummary();$("selectedCar").textContent=state.model?`${state.brand} ${state.model}${state.year?" · "+state.year:""}`:"Choose a model";});
$("carYear").addEventListener("input",e=>{state.year=e.target.value;updateSummary();if(state.brand&&state.model)$("selectedCar").textContent=`${state.brand} ${state.model}${state.year?" · "+state.year:""}`;});
$("partSearch").addEventListener("input",renderParts);$("partCategory").addEventListener("change",renderParts);
$("sendWhatsApp").addEventListener("click",sendWhatsApp);$("clearBtn").addEventListener("click",clearAll);
$("menuBtn").addEventListener("click",()=> $("mobileNav").classList.toggle("open"));
document.querySelectorAll("#mobileNav a").forEach(a=>a.addEventListener("click",()=> $("mobileNav").classList.remove("open")));
$("locateBtn").addEventListener("click",()=>{
  if(!navigator.geolocation){toast("Location is not supported by this browser.");return;}
  toast("Getting your location...");
  navigator.geolocation.getCurrentPosition(pos=>{
    state.coordinates={lat:pos.coords.latitude,lng:pos.coords.longitude};
    $("address").value=`Current location (GPS): ${pos.coords.latitude.toFixed(6)}, ${pos.coords.longitude.toFixed(6)}`;
    toast("Location added to your request.");
  },()=>toast("Could not get your location. Please enter it manually."));
});

renderBrands();renderServices();renderParts();updateSummary();
