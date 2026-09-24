// =========================
// Zee Auto Park Website Settings
// =========================
const CALL_NUMBER = "918078050269";
const WHATSAPP_NUMBER = "918078050269"; // Calling number used for WhatsApp messaging
const WA_DEFAULT_COUNTRY_CODE = "91";
const BUSINESS_NAME = "Zee Auto Park";

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
  ["general-inspection","General Inspection","Check the overall condition of the vehicle","🔎"],
  ["engine-diagnostics","Engine Diagnostics","Engine scan and fault diagnosis","⚙️"],
  ["battery-service","Battery Service","Battery check and replacement","🔋"],
  ["brake-service","Brake Service","Brake pads, discs and brake fluid check","🛑"],
  ["ac-service","AC Service","Air conditioning inspection and repair","❄️"],
  ["suspension-service","Suspension Service","Shock absorber and alignment support","🛞"],
  ["oil-service","Oil & Filter Service","Engine oil change and filter replacement","🧴"],
  ["electrical-fix","Electrical Repair","Wiring, lights, sensors and electrical faults","💡"],
  ["tire-service","Tire & Wheel Service","Wheel balancing, puncture and fitting support","🏁"],
  ["other-service","Other Repair","Custom repair or maintenance request","🛠️"]
];

const parts = [
  // ==========================================
  // Car Accessories (114 Items)
  // ==========================================
  ["car-body-cover","Car Body Cover","Car Exterior Accessories","All-weather waterproof UV protective full car body cover","static/images/last/Car Body Cover.jpeg"],
  ["sun-shade","Sun Shade","Car Exterior Accessories","Reflective foldable heat-blocking windshield sun shade","static/images/last/Sun Shade.jpeg"],
  ["door-visor","Door Visor","Car Exterior Accessories","Aerodynamic rain guard door visors set","static/images/last/Door Visor.jpeg"],
  ["door-edge-guard","Door Edge Guard","Car Exterior Accessories","Anti-scratch silicone car door edge protectors","static/images/last/Door Edge Guard.jpeg"],
  ["door-handle-cover","Door Handle Cover","Car Exterior Accessories","Stylized chrome / carbon finish door handle protector cup","static/images/last/Door Handle Cover.jpeg"],
  ["side-mirror-cover","Side Mirror Cover","Car Exterior Accessories","Aerodynamic side rear view mirror replacement cover","static/images/last/Side Mirror Cover.jpeg"],
  ["side-mirror-rain-guard","Side Mirror Rain Guard","Car Exterior Accessories","Flexible eyebrow rain shield for side mirrors","static/images/last/Side Mirror Rain Guard.jpeg"],
  ["mud-flap","Mud Flap","Car Exterior Accessories","Heavy-duty splash guards mud flaps for wheels","static/images/last/Mud Flap.jpeg"],
  ["number-plate-frame","Number Plate Frame","Car Exterior Accessories","Sleek anti-vibration license number plate frame","static/images/last/Number Plate Frame.jpeg"],
  ["number-plate-cover","Number Plate Cover","Car Exterior Accessories","Crystal clear protective number plate shield","static/images/last/Number Plate Cover.jpeg"],
  ["bumper-guard","Bumper Guard","Car Exterior Accessories","Front and rear heavy-duty bumper protection guard","https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=700&q=80"],
  ["bumper-corner-guard","Bumper Corner Guard","Car Exterior Accessories","Anti-scratch rubber bumper corner protector strips","https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=700&q=80"],
  ["body-side-moulding","Body Side Moulding","Car Exterior Accessories","Impact absorbing side door protective moulding beading","https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=700&q=80"],
  ["fender-flare","Fender Flare","Car Exterior Accessories","Wide wheel arch fender flare kit","https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=700&q=80"],
  ["roof-rail","Roof Rail","Car Exterior Accessories","Heavy-duty aluminum alloy luggage roof rails","https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=700&q=80"],
  ["roof-rack","Roof Rack","Car Exterior Accessories","Aerodynamic cargo carrier luggage roof rack basket","https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=700&q=80"],
  ["spoiler","Spoiler","Car Exterior Accessories","Sport aerodynamic rear trunk boot spoiler wing","https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80"],
  ["shark-fin-antenna","Shark Fin Antenna","Car Exterior Accessories","FM/AM signal receiver aerodynamic roof shark fin","https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80"],
  ["car-decals-stickers","Car Decals / Stickers","Car Exterior Accessories","Premium vinyl exterior car body graphics and racing stripes","https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=700&q=80"],
  ["reflective-tape","Reflective Tape","Car Exterior Accessories","High-visibility nighttime safety reflective warning tape","https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=700&q=80"],
  ["car-seat-cover","Car Seat Cover","Interior Accessories","Premium breathable leatherette full car seat cover set","static/images/offer/car seat Cover.jpeg"],
  ["steering-wheel-cover","Steering Wheel Cover","Interior Accessories","Anti-slip breathable leather stitched steering wheel grip","https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=700&q=80"],
  ["dashboard-mat","Dashboard Mat","Interior Accessories","Non-slip anti-glare sun protection dashboard mat","https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80"],
  ["dashboard-cover","Dashboard Cover","Interior Accessories","Custom-fit protective dashboard cover pad","https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=80"],
  ["floor-mat","Floor Mat","Interior Accessories","All-weather heavy-duty waterproof car floor mats","https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=700&q=80"],
  ["3d-5d-7d-floor-mat","3D / 5D / 7D Floor Mat","Interior Accessories","Luxury custom-tailored 7D deep-dish waterproof floor mats","https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=700&q=80"],
  ["boot-mat","Boot Mat","Interior Accessories","All-weather trunk boot liner cargo protection tray","https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=700&q=80"],
  ["gear-knob-cover","Gear Knob Cover","Interior Accessories","Ergonomic leather stitched gear shift knob sleeve","https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80"],
  ["hand-brake-cover","Hand Brake Cover","Interior Accessories","Textured non-slip emergency brake protective grip","https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80"],
  ["seat-belt-cover","Seat Belt Cover","Interior Accessories","Soft shoulder comfort cushion seat belt padding","https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=700&q=80"],
  ["neck-rest-pillow","Neck Rest Pillow","Interior Accessories","Memory foam ergonomic head & neck rest cushion","https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=700&q=80"],
  ["headrest-pillow","Headrest Pillow","Interior Accessories","Contoured breathable driving headrest comfort pillow","https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=700&q=80"],
  ["lumbar-support-cushion","Lumbar Support Cushion","Interior Accessories","Orthopedic memory foam lower back support car cushion","https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=700&q=80"],
  ["armrest-cover","Armrest Cover","Interior Accessories","Cushioned leather center console armrest protective pad","https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=700&q=80"],
  ["sun-visor-organizer","Sun Visor Organizer","Interior Accessories","Multi-pocket card, document and sunglasses visor pouch","https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=700&q=80"],
  ["car-tissue-box","Car Tissue Box","Interior Accessories","Sleek sun visor & seatback leather tissue dispenser","https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=700&q=80"],
  ["car-trash-bin","Car Trash Bin","Interior Accessories","Compact leak-proof hanging automotive garbage container","https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=700&q=80"],
  ["cup-holder","Cup Holder","Interior Accessories","Expandable dual-slot console car cup holder organizer","https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=700&q=80"],
  ["seat-gap-filler","Seat Gap Filler","Interior Accessories","Drop-catch leather pocket organizer for car seat gaps","https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&w=700&q=80"],
  ["car-coat-hanger","Car Coat Hanger","Interior Accessories","Headrest back seat stainless steel suit and coat hanger","https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=700&q=80"],
  ["back-seat-organizer","Back Seat Organizer","Interior Accessories","Multi-pocket seatback storage bag with bottle & tablet holder","https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=700&q=80"],
  ["car-document-holder","Car Document Holder","Interior Accessories","Premium leather wallet organizer for RC, insurance & papers","https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=700&q=80"],
  ["mobile-holder","Mobile Holder","Mobile & Electronics","Universal 360-degree rotation car smartphone holder","https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=700&q=80"],
  ["dashboard-mobile-holder","Dashboard Mobile Holder","Mobile & Electronics","Heavy-duty suction cup dashboard phone mount","https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=700&q=80"],
  ["air-vent-mobile-holder","Air Vent Mobile Holder","Mobile & Electronics","Anti-shake air vent clip smartphone car holder","https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=700&q=80"],
  ["magnetic-mobile-holder","Magnetic Mobile Holder","Mobile & Electronics","Ultra-strong neodymium magnetic dashboard phone mount","https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=700&q=80"],
  ["wireless-charging-holder","Wireless Charging Holder","Mobile & Electronics","Qi fast wireless charging auto-clamping phone car mount","https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=700&q=80"],
  ["car-charger","Car Charger","Mobile & Electronics","Fast dual-port 12V cigarette lighter car charger","https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80"],
  ["usb-charger","USB Charger","Mobile & Electronics","QC 3.0 & PD 30W high-speed dual USB car charger adapter","https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80"],
  ["usb-cable","USB Cable","Mobile & Electronics","Durable nylon braided 3-in-1 fast charging car USB cable","https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=700&q=80"],
  ["bluetooth-fm-transmitter","Bluetooth FM Transmitter","Mobile & Electronics","Wireless Bluetooth FM radio transmitter with handsfree calling","https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=700&q=80"],
  ["bluetooth-adapter","Bluetooth Adapter","Mobile & Electronics","Aux 3.5mm wireless Bluetooth audio receiver adapter","https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=700&q=80"],
  ["car-stereo","Car Stereo","Mobile & Electronics","Single & Double DIN Bluetooth automotive audio receiver","https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=700&q=80"],
  ["android-car-player","Android Car Player","Mobile & Electronics","Smart Android touchscreen media player with GPS & WiFi","https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=700&q=80"],
  ["touchscreen-display","Touchscreen Display","Mobile & Electronics","HD IPS wireless Apple CarPlay & Android Auto display","static/images/offer/Dashboard Display.jpeg"],
  ["dashboard-display","Dashboard Display","Mobile & Electronics","HD smart touchscreen dashboard infotainment display with navigation & Apple CarPlay","static/images/offer/Dashboard Display.jpeg"],
  ["reverse-camera","Reverse Camera","Mobile & Electronics","Wide-angle HD night vision waterproof rear backup camera","https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80"],
  ["360-camera","360° Camera","Mobile & Electronics","Full 360-degree bird's-eye surround view camera system","https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80"],
  ["parking-sensor","Parking Sensor","Mobile & Electronics","Ultrasonic reverse parking radar sensors with LED display","https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80"],
  ["dash-camera","Dash Camera","Mobile & Electronics","Dual front and cabin HD 4K loop recording dashboard camera","https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80"],
  ["gps-tracker","GPS Tracker","Mobile & Electronics","Real-time anti-theft GPS vehicle tracking locator with app","https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"],
  ["led-headlight","LED Headlight","Lighting Accessories","High-power CSP chip automotive LED headlight bulb kit","https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=700&q=80"],
  ["led-fog-light","LED Fog Light","Lighting Accessories","Waterproof high-penetration all-weather LED fog lamps","https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=700&q=80"],
  ["led-bulb","LED Bulb","Lighting Accessories","Super bright H4 / H7 / H11 automotive LED replacement bulbs","https://images.unsplash.com/photo-1543465077-db45d34b88a5?auto=format&fit=crop&w=700&q=80"],
  ["interior-led-light","Interior LED Light","Lighting Accessories","Pure white roof dome interior LED cabin light panels","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80"],
  ["ambient-light","Ambient Light","Lighting Accessories","Smart app-controlled RGB optical fiber ambient cabin lighting","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80"],
  ["footwell-light","Footwell Light","Lighting Accessories","Sound-activated multi-color LED under-dash footwell strips","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80"],
  ["door-warning-light","Door Warning Light","Lighting Accessories","Anti-collision strobe safety door puddle warning lights","https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=700&q=80"],
  ["reading-light","Reading Light","Lighting Accessories","Touch-switch soft warm LED interior cabin reading lamp","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80"],
  ["led-strip","LED Strip","Lighting Accessories","Flexible waterproof silicone exterior and interior LED light strip","https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80"],
  ["number-plate-led","Number Plate LED","Lighting Accessories","Ultra-bright white LED license number plate illuminators","https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=700&q=80"],
  ["reverse-light","Reverse Light","Lighting Accessories","High-output super white LED backup reverse lamp bulbs","https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=700&q=80"],
  ["brake-light","Brake Light","Lighting Accessories","Instant-trigger high-mount bright red LED brake light","https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=700&q=80"],
  ["sequential-indicator","Sequential Indicator","Lighting Accessories","Dynamic sweeping amber sequential LED turn signals","https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=700&q=80"],
  ["drl-daytime-running-light","DRL — Daytime Running Light","Lighting Accessories","Ultra-bright dual-mode daytime running LED tube lights","https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=700&q=80"],
  ["wheel-cover","Wheel Cover","Wheels & Tyre Accessories","Impact-resistant snap-on sport wheel rim hubcaps","https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80"],
  ["alloy-wheel","Alloy Wheel","Wheels & Tyre Accessories","Precision-engineered lightweight aluminum alloy wheels","https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80"],
  ["wheel-spacers","Wheel Spacers","Wheels & Tyre Accessories","Forged aluminum hub-centric wheel spacers kit","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80"],
  ["wheel-lock-nuts","Wheel Lock Nuts","Wheels & Tyre Accessories","Anti-theft wheel lock lug nuts with proprietary key","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80"],
  ["tyre-valve-caps","Tyre Valve Caps","Wheels & Tyre Accessories","Anodized metal airtight tyre valve stem dust caps","https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=700&q=80"],
  ["tyre-inflator","Tyre Inflator","Wheels & Tyre Accessories","Digital preset automatic 12V portable tyre air pump","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["tyre-pressure-gauge","Tyre Pressure Gauge","Wheels & Tyre Accessories","Precision digital tyre pressure measuring gauge with display","https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=700&q=80"],
  ["tpms","TPMS","Wheels & Tyre Accessories","Solar-powered wireless tyre pressure monitoring system","https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80"],
  ["tyre-repair-kit","Tyre Repair Kit","Wheels & Tyre Accessories","Complete heavy-duty tubeless tyre plug and puncture kit","https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80"],
  ["puncture-repair-kit","Puncture Repair Kit","Wheels & Tyre Accessories","Emergency puncture strip repair kit with rasp and split-eye needle","https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80"],
  ["wheel-cleaning-brush","Wheel Cleaning Brush","Wheels & Tyre Accessories","Non-scratch soft bristle alloy rim and wheel cleaning brush","https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=700&q=80"],
  ["microfiber-cloth","Microfiber Cloth","Car Cleaning Accessories","Ultra-thick 800 GSM plush lint-free microfiber cleaning towels","https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=700&q=80"],
  ["car-wash-sponge","Car Wash Sponge","Car Cleaning Accessories","High-density porous honeycomb car washing sponge","https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=700&q=80"],
  ["car-wash-mitt","Car Wash Mitt","Car Cleaning Accessories","Scratch-free chenille microfiber car wash glove mitt","https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=700&q=80"],
  ["detailing-brush","Detailing Brush","Car Cleaning Accessories","Multi-size soft boar-hair automotive detailing brushes set","https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=700&q=80"],
  ["dashboard-cleaner","Dashboard Cleaner","Car Cleaning Accessories","UV-protectant non-greasy dashboard & vinyl cleaner spray","https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=700&q=80"],
  ["glass-cleaner","Glass Cleaner","Car Cleaning Accessories","Streak-free automotive windshield and window glass cleaner","https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=700&q=80"],
  ["tyre-cleaner","Tyre Cleaner","Car Cleaning Accessories","Deep cleaning wheel sidewall & brake dust degreaser spray","https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=700&q=80"],
  ["tyre-polish","Tyre Polish","Car Cleaning Accessories","Long-lasting deep black wet-look tyre shine dressing","https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=700&q=80"],
  ["car-wax","Car Wax","Car Cleaning Accessories","Premium carnauba gloss paste wax for maximum paint protection","https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=700&q=80"],
  ["car-polish","Car Polish","Car Cleaning Accessories","Swirl and micro-scratch remover car paint polish compound","https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=700&q=80"],
  ["interior-cleaner","Interior Cleaner","Car Cleaning Accessories","All-purpose fabric, upholstery and interior plastic cleaner","https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=700&q=80"],
  ["leather-cleaner","Leather Cleaner","Car Cleaning Accessories","pH-balanced leather seat cleaner and conditioning cream","https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=700&q=80"],
  ["air-freshener","Air Freshener","Car Cleaning Accessories","Long-lasting luxury car perfume diffuser & odor eliminator","https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=700&q=80"],
  ["vacuum-cleaner","Vacuum Cleaner","Car Cleaning Accessories","High-power handheld 12V portable car vacuum with attachments","https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=700&q=80"],
  ["pressure-washer","Pressure Washer","Car Cleaning Accessories","High-pressure portable electric car wash sprayer","https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&w=700&q=80"],
  ["car-jump-starter","Car Jump Starter","Emergency / Utility Accessories","Portable 12V lithium vehicle jump starter and power bank","https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=700&q=80"],
  ["jumper-cable","Jumper Cable","Emergency / Utility Accessories","Heavy-gauge pure copper battery booster jumper cables","https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=700&q=80"],
  ["emergency-hammer","Emergency Hammer","Emergency / Utility Accessories","Window glass punch breaker and seatbelt cutter escape tool","https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=700&q=80"],
  ["safety-triangle","Safety Triangle","Emergency / Utility Accessories","Foldable reflective roadside emergency breakdown warning triangle","https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=700&q=80"],
  ["first-aid-kit","First Aid Kit","Emergency / Utility Accessories","Emergency automotive medical first aid kit in compact pouch","https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=700&q=80"],
  ["fire-extinguisher","Fire Extinguisher","Emergency / Utility Accessories","Compact vehicle ABC dry powder emergency fire extinguisher","https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=700&q=80"],
  ["tow-rope","Tow Rope","Emergency / Utility Accessories","Heavy-duty 5-ton nylon car recovery tow rope with forged steel hooks","https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80"],
  ["towing-strap","Towing Strap","Emergency / Utility Accessories","Reinforced off-road recovery tow strap with bow shackles","https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80"],
  ["portable-air-compressor","Portable Air Compressor","Emergency / Utility Accessories","Dual cylinder metal portable 12V tyre air compressor","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["emergency-flashlight","Emergency Flashlight","Emergency / Utility Accessories","Rechargeable magnetic high-beam LED emergency work light","https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=700&q=80"],
  ["tool-kit","Tool Kit","Emergency / Utility Accessories","Comprehensive automotive socket wrench & mechanical hand tool set","https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80"],
  ["jack","Jack","Emergency / Utility Accessories","Heavy-duty hydraulic floor trolley & scissor car lifting jack","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["wheel-spanner","Wheel Spanner","Emergency / Utility Accessories","Telescopic extendable high-torque wheel lug nut spanner wrench","https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=700&q=80"],
  ["battery-tester","Battery Tester","Emergency / Utility Accessories","Digital 12V car battery condition and alternator load analyzer","https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=700&q=80"],

  // ==========================================
  // Mechanical & Engine Parts (Using static/images/ew/)
  // ==========================================
  ["engine-block","Engine Block","Engine","Main engine block assembly","static/images/ew/Engine Block.jpeg"],
  ["cylinder-head","Cylinder Head","Engine","Cylinder head assembly","static/images/ew/Cylinder Head.jpeg"],
  ["cylinder","Cylinder","Engine","Engine cylinder component","static/images/ew/Cylinder.jpeg"],
  ["combustion-chamber","Combustion Chamber","Engine","Combustion chamber component","static/images/ew/Combustion Chamber.jpeg"],
  ["piston","Piston","Engine","Engine piston","static/images/ew/Piston.jpeg"],
  ["piston-rings","Piston Rings","Engine","Piston ring set","static/images/ew/Piston Rings.jpeg"],
  ["connecting-rod","Connecting Rod","Engine","Connecting rod assembly","static/images/ew/Connecting Rod.jpeg"],
  ["crankshaft","Crankshaft","Engine","Engine crankshaft","static/images/ew/Crankshaft.jpeg"],
  ["main-bearings","Main Bearings","Engine","Main bearing kit","static/images/ew/Main Bearings.jpeg"],
  ["connecting-rod-bearings","Connecting Rod Bearings","Engine","Con rod bearing set","static/images/ew/Connecting Rod Bearings.jpeg"],
  ["flywheel","Flywheel","Engine","Flywheel assembly","static/images/ew/Flywheel.jpeg"],
  ["flexplate","Flexplate","Engine","Flexplate for automatic transmission","static/images/ew/Flexplate.jpeg"],
  ["timing-chain","Timing Chain","Engine","Timing chain kit","static/images/ew/Timing Chain.jpeg"],
  ["timing-belt","Timing Belt","Engine","Timing belt replacement","static/images/ew/Timing Belt.jpeg"],
  ["timing-gears","Timing Gears","Engine","Timing gear assembly","static/images/ew/Timing Gears.jpeg"],
  ["camshaft","Camshaft","Engine","Engine camshaft","static/images/Camshaft.jpeg"],
  ["camshaft-bearing","Camshaft Bearing","Engine","Camshaft bearing set","static/images/Camshaft Bearing.jpeg"],
  ["intake-valve","Intake Valve","Engine","Intake valve","static/images/Intake Valve.jpeg"],
  ["exhaust-valve","Exhaust Valve","Engine","Exhaust valve","static/images/Exhaust Valve.jpeg"],
  ["valve-spring","Valve Spring","Engine","Valve spring set","static/images/Valve Spring.jpeg"],
  ["valve-retainer","Valve Retainer","Engine","Valve retainer","static/images/Valve Retainer.jpeg"],
  ["valve-stem-seal","Valve Stem Seal","Engine","Valve stem seal kit","static/images/Valve Stem Seal.jpeg"],
  ["rocker-arm","Rocker Arm","Engine","Rocker arm assembly","static/images/Rocker Arm.jpeg"],
  ["rocker-shaft","Rocker Shaft","Engine","Rocker shaft","static/images/Rocker Shaft.jpeg"],
  ["tappet-lifter","Tappet / Valve Lifter","Engine","Valve lifter / tappet","static/images/Tappet  Valve Lifter.jpeg"],
  ["push-rod","Push Rod","Engine","Push rod","static/images/Push Rod.jpeg"],
  ["valve-guide","Valve Guide","Engine","Valve guide","static/images/Valve Guide.jpeg"],
  ["valve-seat","Valve Seat","Engine","Valve seat","static/images/Valve Seat.jpeg"],
  ["cylinder-head-gasket","Cylinder Head Gasket","Engine","Head gasket","static/images/Cylinder Head Gasket.jpeg"],
  ["fuel-tank","Fuel Tank","Fuel System","Fuel tank assembly","static/images/Fuel Tank.jpeg"],
  ["fuel-pump","Fuel Pump","Fuel System","Electric or mechanical fuel pump","static/images/Fuel Pump.jpeg"],
  ["fuel-filter","Fuel Filter","Fuel System","Fuel filter","static/images/Fuel Filter.jpeg"],
  ["fuel-rail","Fuel Rail","Fuel System","Fuel delivery rail","static/images/Fuel Rail.jpeg"],
  ["fuel-injector","Fuel Injector","Fuel System","Fuel injector","static/images/Fuel Injector.jpeg"],
  ["throttle-body","Throttle Body","Fuel System","Air and fuel control body","static/images/Throttle Body.jpeg"],
  ["tps","Throttle Position Sensor","Fuel System","TPS sensor","static/images/Throttle Position Sensor (TPS).jpeg"],
  ["fuel-pressure-regulator","Fuel Pressure Regulator","Fuel System","Pressure regulator","static/images/Fuel Pressure Regulator.jpeg"],
  ["high-pressure-fuel-pump","High Pressure Fuel Pump","Fuel System","GDI / diesel high-pressure fuel pump","static/images/High Pressure Fuel Pump (GDIDiesel.jpeg"],
  ["carburetor","Carburetor","Fuel System","Older vehicle carburetor","static/images/Carburetor.jpeg"],
  ["air-filter","Air Filter","Air / Intake System","Air filter element","static/images/Air Filter.jpeg"],
  ["air-filter-housing","Air Filter Housing","Air / Intake System","Air filter housing","static/images/Air Filter Housing.jpeg"],
  ["intake-manifold","Intake Manifold","Air / Intake System","Intake manifold","static/images/Intake Manifold.jpeg"],
  ["intake-pipe","Intake Pipe","Air / Intake System","Intake pipe","static/images/Intake Pipe.jpeg"],
  ["maf-sensor","MAF Sensor","Air / Intake System","Mass air flow sensor","static/images/ew/MAF Sensor.jpeg"],
  ["map-sensor","MAP Sensor","Air / Intake System","Manifold absolute pressure sensor","static/images/ew/MAP Sensor.jpeg"],
  ["iat-sensor","IAT Sensor","Air / Intake System","Intake air temp sensor","static/images/ew/IAT Sensor.jpeg"],
  ["intercooler","Intercooler","Air / Intake System","Intercooler unit","static/images/ew/Intercooler.jpeg"],
  ["turbocharger","Turbocharger","Air / Intake System","Turbocharger assembly","static/images/ew/Turbocharger.jpeg"],
  ["supercharger","Supercharger","Air / Intake System","Supercharger assembly","static/images/ew/Supercharger.jpeg"],
  ["spark-plug","Spark Plug","Ignition System","Spark plug","static/images/last/Spark Plug.jpeg"],
  ["ignition-coil","Ignition Coil","Ignition System","Ignition coil","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["coil-pack","Coil Pack","Ignition System","Ignition coil pack","static/images/last/Coil Pack.jpeg"],
  ["spark-plug-wire","Spark Plug Wire","Ignition System","Spark plug lead","static/images/last/Spark Plug Wire.jpeg"],
  ["distributor","Distributor","Ignition System","Distributor assembly","static/images/last/Distributor.jpeg"],
  ["crankshaft-position-sensor","Crankshaft Position Sensor","Ignition System","Crank sensor","static/images/last/Crankshaft Position Sensor.jpeg"],
  ["camshaft-position-sensor","Camshaft Position Sensor","Ignition System","Cam sensor","static/images/last/Camshaft Position Sensor.jpeg"],
  ["exhaust-manifold","Exhaust Manifold","Exhaust System","Exhaust manifold","static/images/last/Exhaust Manifold.jpeg"],
  ["exhaust-pipe","Exhaust Pipe","Exhaust System","Exhaust pipe","static/images/last/Exhaust Pipe.jpeg"],
  ["catalytic-converter","Catalytic Converter","Exhaust System","Catalytic converter","static/images/last/Catalytic Converter.jpeg"],
  ["oxygen-sensor","Oxygen Sensor","Exhaust System","O2 sensor","static/images/last/Oxygen Sensor.jpeg"],
  ["egr-valve","EGR Valve","Exhaust System","EGR valve","static/images/last/EGR Valve.jpeg"],
  ["egr-cooler","EGR Cooler","Exhaust System","EGR cooler","static/images/last/EGR Cooler.jpeg"],
  ["diesel-particulate-filter","Diesel Particulate Filter","Exhaust System","DPF filter","static/images/last/Diesel Particulate Filter.jpeg"],
  ["muffler","Muffler / Silencer","Exhaust System","Silent muffler","static/images/last/Muffler  Silencer.jpeg"],
  ["resonator","Resonator","Exhaust System","Exhaust resonator","static/images/last/Resonator.jpeg"],
  ["radiator","Radiator","Cooling System","Car radiator","static/images/last/Radiator.jpeg"],
  ["radiator-fan","Radiator Fan","Cooling System","Radiator cooling fan","static/images/last/Radiator Fan.jpeg"],
  ["water-pump","Water Pump","Cooling System","Coolant water pump","static/images/last/Water Pump.jpeg"],
  ["thermostat","Thermostat","Cooling System","Engine thermostat","static/images/last/Thermostat.jpeg"],
  ["thermostat-housing","Thermostat Housing","Cooling System","Thermostat housing","static/images/last/Thermostat Housing.jpeg"],
  ["coolant-reservoir","Coolant Reservoir","Cooling System","Coolant tank","static/images/last/Coolant Reservoir.jpeg"],
  ["radiator-cap","Radiator Cap","Cooling System","Radiator cap","static/images/last/Radiator Cap.jpeg"],
  ["coolant-hose","Coolant Hose","Cooling System","Coolant hose","static/images/last/Coolant Hose.jpeg"],
  ["ect-sensor","Temperature Sensor","Cooling System","ECT sensor","static/images/last/Temperature Sensor.jpeg"],
  ["cooling-fan-motor","Cooling Fan Motor","Cooling System","Cooling fan motor","static/images/last/Cooling Fan Motor.jpeg"],
  ["oil-pan","Oil Pan / Sump","Lubrication / Engine Oil System","Oil pan assembly","static/images/last/Oil Pan  Sump.jpeg"],
  ["oil-pump","Oil Pump","Lubrication / Engine Oil System","Engine oil pump","static/images/last/Oil Pump.jpeg"],
  ["oil-filter-2","Oil Filter","Lubrication / Engine Oil System","Oil filter cartridge","static/images/last/Oil Filter.jpeg"],
  ["oil-pickup-tube","Oil Pickup Tube","Lubrication / Engine Oil System","Oil pickup tube","static/images/last/Oil Pickup Tube.jpeg"],
  ["oil-pressure-sensor","Oil Pressure Sensor","Lubrication / Engine Oil System","Oil pressure sensor","static/images/last/Oil Pressure Sensor.jpeg"],
  ["oil-cooler","Oil Cooler","Lubrication / Engine Oil System","Engine oil cooler","static/images/last/Oil Cooler.jpeg"],
  ["dipstick","Dipstick","Lubrication / Engine Oil System","Engine oil dipstick","static/images/last/Dipstick.jpeg"],
  ["oil-filler-cap","Oil Filler Cap","Lubrication / Engine Oil System","Oil filler cap","static/images/last/Oil Filler Cap.jpeg"],
  ["pcv-valve","PCV Valve","Lubrication / Engine Oil System","Positive crankcase ventilation valve","static/images/last/PCV Valve.jpeg"],
  ["timing-chain-guide","Timing Chain Guide","Lubrication / Engine Oil System","Timing chain guide","static/images/last/Timing Chain Guide.jpeg"],
  ["timing-chain-tensioner","Timing Chain Tensioner","Lubrication / Engine Oil System","Chain tensioner","static/images/last/Timing Chain Tensioner.jpeg"],
  ["timing-belt-tensioner","Timing Belt Tensioner","Lubrication / Engine Oil System","Belt tensioner","static/images/last/Timing Belt Tensioner.jpeg"],
  ["camshaft-gear","Camshaft Gear / Sprocket","Lubrication / Engine Oil System","Camshaft gear","static/images/last/Camshaft Gear  Sprocket.jpeg"],
  ["crankshaft-pulley","Crankshaft Pulley","Lubrication / Engine Oil System","Crankshaft pulley","static/images/last/Crankshaft Pulley.jpeg"],
  ["vvt-solenoid","VVT Solenoid","Lubrication / Engine Oil System","Variable valve timing solenoid","static/images/last/VVT Solenoid.jpeg"],
  ["vvt-actuator","VVT Actuator / Cam Phaser","Lubrication / Engine Oil System","Cam phaser actuator","static/images/last/VVT Actuator  Cam Phaser.jpeg"],
  ["knock-sensor","Knock Sensor","Engine Sensors","Knock sensor","static/images/last/Knock Sensor.jpeg"],
  ["fuel-pressure-sensor","Fuel Pressure Sensor","Engine Sensors","Fuel pressure sensor","static/images/last/Fuel Pressure Sensor.jpeg"],
  ["boost-pressure-sensor","Boost Pressure Sensor","Engine Sensors","Boost sensor","static/images/last/Boost Pressure Sensor.jpeg"],
  ["egr-position-sensor","EGR Position Sensor","Engine Sensors","EGR position sensor","static/images/last/EGR Position Sensor.jpeg"],
  ["starter-motor","Starter Motor","Engine Electrical Parts","Starter motor","static/images/last/Starter Motor.jpeg"],
  ["alternator-part","Alternator","Engine Electrical Parts","Alternator unit","static/images/last/Alternator.jpeg"],
  ["battery-part","Battery","Engine Electrical Parts","Car battery","static/images/last/Battery.jpeg"],
  ["ecu","Engine Control Module","Engine Electrical Parts","ECU / ECM module","static/images/last/Engine Control Module.jpeg"],
  ["engine-wiring-harness","Engine Wiring Harness","Engine Electrical Parts","Wiring harness","static/images/last/Engine Wiring Harness.jpeg"],
  ["fuses","Fuses","Engine Electrical Parts","Electrical fuses","static/images/last/Fuses.jpeg"],
  ["relays","Relays","Engine Electrical Parts","Electrical relay","static/images/last/Relays.jpeg"],
  ["ground-cable","Ground Cable","Engine Electrical Parts","Ground cable","static/images/last/Ground Cable.jpeg"],
  ["starter-solenoid","Starter Solenoid","Engine Electrical Parts","Starter solenoid","static/images/last/Starter Solenoid.jpeg"],
  ["serpentine-belt","Serpentine Belt","Belts & External Engine Parts","Serpentine belt","static/images/last/Serpentine Belt.jpeg"],
  ["drive-belt","Drive Belt","Belts & External Engine Parts","Drive belt","static/images/last/Drive Belt.jpeg"],
  ["belt-tensioner","Belt Tensioner","Belts & External Engine Parts","Belt tensioner","static/images/last/Belt Tensioner.jpeg"],
  ["idler-pulley","Idler Pulley","Belts & External Engine Parts","Idle pulley","static/images/last/Idler Pulley.jpeg"],
  ["crankshaft-pulley-2","Crankshaft Pulley","Belts & External Engine Parts","Crankshaft pulley","static/images/last/Crankshaft Pulley.jpeg"],
  ["water-pump-pulley","Water Pump Pulley","Belts & External Engine Parts","Water pump pulley","static/images/last/Water Pump Pulley.jpeg"],
  ["alternator-pulley","Alternator Pulley","Belts & External Engine Parts","Alternator pulley","static/images/last/Alternator Pulley.jpeg"],
  ["power-steering-pump","Power Steering Pump","Belts & External Engine Parts","Power steering pump","static/images/last/Power Steering Pump.jpeg"],
  ["ac-compressor","AC Compressor","Belts & External Engine Parts","Air conditioning compressor","static/images/last/AC Compressor.jpeg"],
  ["glow-plug","Glow Plug","Diesel Engine","Glow plug","static/images/last/Glow Plug.jpeg"],
  ["glow-plug-relay","Glow Plug Relay","Diesel Engine","Glow plug relay","static/images/last/Glow Plug Relay.jpeg"],
  ["diesel-injector","Diesel Injector","Diesel Engine","Diesel injector","static/images/last/Diesel Injector.jpeg"],
  ["common-rail","Common Rail","Diesel Engine","Common rail system","static/images/last/Common Rail.jpeg"],
  ["diesel-high-pressure-fuel-pump","High Pressure Fuel Pump","Diesel Engine","Diesel high pressure pump","static/images/High Pressure Fuel Pump (GDIDiesel.jpeg"],
  ["diesel-turbocharger","Turbocharger","Diesel Engine","Diesel turbocharger","static/images/ew/Turbocharger.jpeg"],
  ["diesel-intercooler","Intercooler","Diesel Engine","Diesel intercooler","static/images/ew/Intercooler.jpeg"],
  ["diesel-dpf","DPF","Diesel Engine","Diesel particulate filter","static/images/last/DPF.jpeg"],
  ["diesel-oxidation-catalyst","Diesel Oxidation Catalyst","Diesel Engine","DOC catalytic converter","static/images/last/Diesel Oxidation Catalyst.jpeg"],
  ["nox-sensor","NOx Sensor","Diesel Engine","NOx sensor","static/images/last/NOx Sensor.jpeg"],
  ["adblue-def-system","AdBlue / DEF System","Diesel Engine","DEF / AdBlue system","static/images/last/AdBlue  DEF System.jpeg"],
  // ==========================================
  // Brake Parts (20 Items)
  // ==========================================
  ["brake-pad-front","Brake Pad – Front","Brake Parts","High-friction ceramic front disc brake pad set","static/images/new/Brake Pad – Front.jpeg"],
  ["brake-pad-rear","Brake Pad – Rear","Brake Parts","Precision rear axle disc brake pad set with noise reduction shims","static/images/new/Brake Pad – Rear.jpeg"],
  ["brake-disc-rotor-front","Brake Disc / Rotor – Front","Brake Parts","Ventilated anti-fade front wheel brake rotor disc","static/images/new/Brake Disc  Rotor – Front.jpeg"],
  ["brake-disc-rotor-rear","Brake Disc / Rotor – Rear","Brake Parts","Solid precision-machined rear brake rotor disc","static/images/new/Brake Disc  Rotor – Rear.jpeg"],
  ["brake-caliper","Brake Caliper","Brake Parts","Hydraulic single / dual piston brake clamping caliper assembly","static/images/new/Brake Caliper.jpeg"],
  ["brake-caliper-repair-kit","Brake Caliper Repair Kit","Brake Parts","Piston seals, boots, O-rings, and hardware overhaul kit","static/images/new/Brake Caliper Repair Kit.jpeg"],
  ["caliper-slide-pin","Caliper Slide Pin / Guide Pin","Brake Parts","Precision-ground caliper slide guide pins with dust boots","static/images/new/Caliper Slide Pin  Guide Pin.jpeg"],
  ["brake-shoe-rear-drum","Brake Shoe – Rear Drum","Brake Parts","High-durability rear drum friction brake shoe set","static/images/new/Brake Shoe – Rear Drum.jpeg"],
  ["brake-drum","Brake Drum","Brake Parts","Balanced heavy-duty cast iron rear wheel brake drum","static/images/new/Brake Drum.jpeg"],
  ["wheel-cylinder","Wheel Cylinder","Brake Parts","Rear drum hydraulic wheel brake cylinder assembly","static/images/new/Wheel Cylinder.jpeg"],
  ["brake-master-cylinder","Brake Master Cylinder","Brake Parts","Dual-reservoir hydraulic brake master cylinder pump","static/images/new/Brake Master Cylinder.jpeg"],
  ["brake-booster","Brake Booster","Brake Parts","Vacuum power brake servo booster diaphragm unit","static/images/new/Brake Booster.jpeg"],
  ["brake-hose","Brake Hose","Brake Parts","Reinforced high-pressure hydraulic flexible brake line hose","static/images/new/Brake Hose.jpeg"],
  ["brake-pipe","Brake Pipe","Brake Parts","Anti-corrosive metal hydraulic brake line hard pipe tubing","static/images/new/Brake Pipe.jpeg"],
  ["abs-wheel-speed-sensor","ABS Wheel Speed Sensor","Brake Parts","Magnetic anti-lock brake wheel speed sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["brake-pad-wear-sensor","Brake Pad Wear Sensor","Brake Parts","Electric brake pad friction wear indicator wire sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["brake-bleeder-screw","Brake Bleeder Screw","Brake Parts","High-strength caliper hydraulic air bleeder valve screw","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["hand-brake-cable","Hand Brake Cable","Brake Parts","Flexible steel wire emergency parking hand brake cable","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["parking-brake-shoe","Parking Brake Shoe","Brake Parts","Internal drum-in-hat parking brake shoe set","https://images.unsplash.com/photo-1600705722908-bab1e75b4c4c?auto=format&fit=crop&w=700&q=80"],
  ["brake-light-switch","Brake Light / Stop Lamp Switch","Brake Parts","Pedal-activated stop lamp electric switch sensor","https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80"],

  // ==========================================
  // STEERING & POWER STEERING (8 Items)
  // ==========================================
  ["steering-wheel-column","Steering Wheel & Column","Steering & Power Steering","Telescopic steering column assembly with angle sensor","static/images/last/Steering Wheel & Column.jpeg"],
  ["steering-rack-pinion","Steering Rack & Pinion","Steering & Power Steering","Complete hydraulic / electronic steering rack and pinion assembly","static/images/last/Steering Rack & Pinion.jpeg"],
  ["tie-rod-rack-end","Tie Rod & Rack End","Steering & Power Steering","Inner tie rod and outer steering tie rod end set","static/images/last/Tie Rod & Rack End.jpeg"],
  ["steering-knuckle-ball-joint","Steering Knuckle & Ball Joint","Steering & Power Steering","Forged suspension steering knuckle and lower ball joint","static/images/last/Steering Knuckle & Ball Joint.jpeg"],
  ["hydraulic-power-steering","Hydraulic Power Steering","Steering & Power Steering","Hydraulic power steering pump, fluid lines, and reservoir","static/images/last/Hydraulic Power Steering.jpeg"],
  ["electric-power-steering-eps","Electric Power Steering (EPS)","Steering & Power Steering","Electric steering assist motor and column ECU controller","static/images/last/Electric Power Steering (EPS).jpeg"],
  ["steering-mounting-bush","Steering Mounting & Bush","Steering & Power Steering","Heavy-duty rubber and polyurethane steering rack mounting bush","static/images/last/Steering Mounting & Bush.jpeg"],
  ["steering-repair-kits","Steering Repair Kits","Steering & Power Steering","Steering rack oil seal kit, boots, clamps, and overhaul parts","static/images/last/Steering Repair Kits.jpeg"],

  ["shock","Shock Absorber","Suspension","Suspension component","static/images/last/Shock Absorber.jpeg"],
  ["clutch","Clutch Kit","Other","Clutch replacement kit","static/images/last/Clutch Kit.jpeg"],
  ["headlight","Headlight","Other","Headlamp replacement","static/images/last/Headlight.jpeg"]
];

const state = {brand:"", model:"", year:"", services:new Set(), parts:new Set(), location:"Home", coordinates:null};
const partCategoryIcons = {
  // Car Accessories
  "Car Exterior Accessories": "🚗",
  "Interior Accessories": "🛋️",
  "Mobile & Electronics": "📱",
  "Lighting Accessories": "💡",
  "Wheels & Tyre Accessories": "🛞",
  "Car Cleaning Accessories": "🧼",
  "Emergency / Utility Accessories": "🔧",
  // Mechanical & Engine Parts
  "Engine": "⚙️",
  "Fuel System": "⛽",
  "Air / Intake System": "🌬️",
  "Ignition System": "🔥",
  "Exhaust System": "💨",
  "Cooling System": "❄️",
  "Lubrication / Engine Oil System": "🛢️",
  "Engine Sensors": "📡",
  "Engine Electrical Parts": "🔋",
  "Belts & External Engine Parts": "🔩",
  "Diesel Engine": "🛠️",
  "Brake Parts": "🛑",
  "Brake": "🛑",
  "Steering & Power Steering": "🕹️",
  "Suspension": "🛞",
  "AC": "❄️",
  "Other": "🧰"
};

const $ = id => document.getElementById(id);
const toast = msg => { $("toast").textContent=msg; $("toast").classList.add("show"); setTimeout(()=> $("toast").classList.remove("show"),2600); };
function normalizeWhatsAppNumber(raw, defaultCountryCode = "91"){
  let digits = String(raw || "").replace(/\D/g, "");
  if (!digits) return "";
  digits = digits.replace(/^0+/, "");
  const cc = String(defaultCountryCode || "").replace(/\D/g, "");
  if (cc && !digits.startsWith(cc)) {
    if (digits.length === 10 && cc === "91") {
      digits = `${cc}${digits}`;
    }
  }
  return digits;
}

function buildWhatsAppUrl(message, rawNumber, defaultCountryCode = "91"){
  const number = normalizeWhatsAppNumber(rawNumber, defaultCountryCode);
  if (!number) return "";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(url){
  if (!url) return;
  try {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      try { document.body.removeChild(a); } catch(e){}
    }, 250);
  } catch (err) {
    window.location.href = url;
  }
}

function getPartVisual(p){
  const categoryIcon = partCategoryIcons[p[2]] || "🧰";
  const isSelected = state.parts.has(p[0]);
  return `
    <div class="part-media-wrap">
      <img class="part-img" src="${p[4]}" alt="${p[1]}" loading="lazy" onerror="this.style.display='none'; this.closest('.part-media-wrap').classList.add('fallback');">
      <div class="part-card-fallback-art">${categoryIcon}</div>
      <div class="part-card-scrim"></div>
      <div class="part-card-top-bar">
        <span class="part-cat-badge">${categoryIcon} <span>${p[2]}</span></span>
        <button type="button" class="select-part ${isSelected ? "selected" : ""}" data-part="${p[0]}" aria-label="Select ${p[1]}">
          <span class="sel-icon">${isSelected ? "✓" : "+"}</span>
          <span class="sel-text">${isSelected ? "Selected" : "Select Part"}</span>
        </button>
      </div>
      <div class="part-card-bottom-info">
        <b class="part-title">${p[1]}</b>
        <p class="part-desc">${p[3]}</p>
      </div>
    </div>
  `;
}

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
  $("servicesGrid").innerHTML = services.map(([id, name, desc, icon]) => `
    <button class="service-card ${state.services.has(id)?"selected":""}" data-service="${id}">
      <div class="service-icon">${icon}</div>
      <b>${name}</b>
      <small>${desc}</small>
    </button>
  `).join("");
}
function toggleService(id){state.services.has(id)?state.services.delete(id):state.services.add(id);renderServices();updateSummary();}
function selectedServiceNames(){return services.filter(([id]) => state.services.has(id)).map(([, name]) => name);}

function renderParts(){
  const q=$("partSearch").value.trim().toLowerCase();
  const cat=$("partCategory").value;

  if (!q && cat === "none") {
    $("partsGrid").innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: #747a80;">Search for a part or accessory, or choose a category to view available items.</p>`;
    return;
  }

  const filtered=parts.filter(p => {
    const text = (p[1] + " " + p[2] + " " + p[3]).toLowerCase();
    const matchesQuery = !q || text.includes(q);
    const matchesCategory = cat === "all" || cat === "none" || p[2] === cat || (cat === "Brake" && p[2] === "Brake Parts") || (cat === "Brake Parts" && p[2] === "Brake");
    return matchesQuery && matchesCategory;
  });

  $("partsGrid").innerHTML=filtered.map(p=>`<article class="part-card ${state.parts.has(p[0])?"selected":""}" data-part="${p[0]}">
    ${getPartVisual(p)}
  </article>`).join("") || `<p style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: #747a80;">No spare parts or accessories found matching your search.</p>`;
}
function togglePart(id){state.parts.has(id)?state.parts.delete(id):state.parts.add(id);renderParts();updateSummary();}
function selectedPartNames(){return parts.filter(p=>state.parts.has(p[0])).map(p=>p[1]);}
function updateProgressBar(){
  const hasVehicle = Boolean(state.brand && state.model);
  const hasNeeds = Boolean(state.services.size > 0 || state.parts.size > 0);
  const hasLocation = Boolean(getValue("address").length > 3);
  const normalizedPhone = normalizeWhatsAppNumber(getValue("phone"));
  const hasContact = Boolean(getValue("name").length > 1 && normalizedPhone.length >= 8);
  const isSpecificSchedule = $("bookSpecificSchedule") && $("bookSpecificSchedule").checked;
  const hasScheduleOrReview = isSpecificSchedule
    ? Boolean(getValue("date") || getValue("time") || getValue("notes") || (hasVehicle && hasNeeds && hasLocation && hasContact))
    : true;

  let score = 0;
  if (hasVehicle) score += 20;
  if (hasNeeds) score += 20;
  if (hasLocation) score += 20;
  if (hasContact) score += 20;
  if (hasScheduleOrReview) score += 20;

  const pct = Math.min(100, score);

  const fill = $("progressFillBar");
  if (fill) fill.style.width = pct + "%";
  const stickyBar = $("formProgressBar");
  if (stickyBar) stickyBar.style.width = pct + "%";

  const badge = $("progressPercentBadge");
  if (badge) badge.textContent = pct + "% Completed";

  const statusTitle = $("progressStatusText");
  const hint = $("progressHintText");

  if (pct === 0) {
    if (statusTitle) statusTitle.textContent = "Request Progress: 0%";
    if (hint) hint.textContent = "Select your vehicle & requirements to begin";
  } else if (pct < 40) {
    if (statusTitle) statusTitle.textContent = "Vehicle Selected · " + pct + "%";
    if (hint) hint.textContent = "Choose repair service or spare parts needed";
  } else if (pct < 60) {
    if (statusTitle) statusTitle.textContent = "Vehicle & Needs Added · " + pct + "%";
    if (hint) hint.textContent = "Set your service location or use GPS";
  } else if (pct < 80) {
    if (statusTitle) statusTitle.textContent = "Location Set · " + pct + "%";
    if (hint) hint.textContent = "Enter your contact name & WhatsApp number";
  } else if (pct < 100) {
    if (statusTitle) statusTitle.textContent = "Almost Complete! · " + pct + "%";
    if (hint) hint.textContent = "Add preferred timing or review your request";
  } else {
    if (statusTitle) statusTitle.textContent = "Ready to Dispatch · 100% ✨";
    if (hint) hint.textContent = "Everything looks great! Click Send on WhatsApp";
  }
}

function updateSummary(){
  const car=state.brand?(state.model?`${state.brand} ${state.model}${state.year?" ("+state.year+")":""}`:`${state.brand} — model not selected`):"Not selected";
  const servicesText = selectedServiceNames().join(", ") || "None selected";
  const partsText = selectedPartNames().join(", ") || "None selected";
  $("sumCar").textContent=car;
  $("sumParts").textContent=partsText;
  $("sumLocation").textContent=state.location;
  const sumService = document.getElementById("sumService");
  if (sumService) {
    sumService.textContent = servicesText;
  }
  const sumSchedule = document.getElementById("sumSchedule");
  if (sumSchedule) {
    const isSpecific = $("bookSpecificSchedule") && $("bookSpecificSchedule").checked;
    if (!isSpecific) {
      sumSchedule.innerHTML = `<span class="badge-urgent-tag">🚨 Urgent</span> Immediate / ASAP Service`;
    } else {
      const d = $("date") ? $("date").value : "";
      const t = $("time") ? $("time").value : "";
      if (d || t) {
        sumSchedule.textContent = `${d || "Flexible date"} · ${t || "Flexible time"}`;
      } else {
        sumSchedule.textContent = "Preferred Date & Time (Flexible)";
      }
    }
  }
  updateProgressBar();
}
function getValue(id){return $(id) ? $(id).value.trim() : "";}
function makeMessage(){
  const isSpecific = $("bookSpecificSchedule") && $("bookSpecificSchedule").checked;
  let timingSection = "";
  if (!isSpecific) {
    timingSection = `📅 *SERVICE TIMING*\n• Mode: 🚨 URGENT (Immediate Service / As Soon As Possible)`;
  } else {
    const date = getValue("date") || "Flexible / To be confirmed";
    const time = getValue("time") || "Flexible / To be confirmed";
    timingSection = `📅 *PREFERRED TIMING*\n• Date: ${date}\n• Time: ${time}`;
  }

  return `*CAR SERVICE & SPARE PARTS REQUEST*\n*${BUSINESS_NAME}*\n\n` +
    `👤 *CUSTOMER CONTACT*\n` +
    `• Name: ${getValue("name")}\n` +
    `• Phone: ${getValue("phone")}\n\n` +
    `🚗 *VEHICLE INFO*\n` +
    `• Brand: ${state.brand || "Not selected"}\n` +
    `• Model: ${state.model || "Not selected"}\n` +
    `• Year: ${state.year || "Not specified"}\n\n` +
    `🛠️ *SERVICES REQUESTED*\n` +
    `${servicesList}\n\n` +
    `⚙️ *SPARE PARTS REQUIRED*\n` +
    `${partsList}\n\n` +
    `📍 *SERVICE LOCATION*\n` +
    `• Type: ${state.location}\n` +
    `• Address: ${getValue("address") || "Not provided"}${coords}\n\n` +
    `${timingSection}\n\n` +
    `📝 *ADDITIONAL NOTES*\n` +
    `${getValue("notes") || "None"}\n\n` +
    `_Please verify technician availability and provide an estimated quotation._\n_Thank you!_`;
}

function highlightMissingField(el) {
  if (!el) return;
  el.classList.add("highlight-missing");
  setTimeout(() => el.classList.remove("highlight-missing"), 2200);
}

function sendWhatsApp(){
  const name = getValue("name"), phone = getValue("phone"), address = getValue("address");
  if(!state.brand || !state.model){
    toast("Please select your car brand and model (Required).");
    const carsSec = $("cars");
    if (carsSec) carsSec.scrollIntoView({behavior:"smooth"});
    highlightMissingField($("modelSelect") || $("brands"));
    return;
  }
  if(!name){
    toast("Please enter your name (Required).");
    highlightMissingField($("name"));
    if($("name")) {
      $("name").focus();
      $("name").scrollIntoView({behavior:"smooth", block:"center"});
    }
    return;
  }
  const normalizedPhone = normalizeWhatsAppNumber(phone, WA_DEFAULT_COUNTRY_CODE);
  if(!normalizedPhone || normalizedPhone.length < 8){
    toast("Please enter a valid WhatsApp phone number (Required).");
    const phoneWrap = $("phone") ? $("phone").closest(".phone-input-wrap") || $("phone") : null;
    highlightMissingField(phoneWrap);
    if($("phone")) {
      $("phone").focus();
      $("phone").scrollIntoView({behavior:"smooth", block:"center"});
    }
    return;
  }
  if(!address){
    toast("Please enter your service location or address (Required).");
    highlightMissingField($("address"));
    if($("address")) {
      $("address").focus();
      $("address").scrollIntoView({behavior:"smooth", block:"center"});
    }
    return;
  }
  if(WHATSAPP_NUMBER.includes("X")){
    toast("Please verify WhatsApp number settings.");
    return;
  }
  const messageUrl = buildWhatsAppUrl(makeMessage(), WHATSAPP_NUMBER, WA_DEFAULT_COUNTRY_CODE);
  if (!messageUrl) {
    toast("Could not create WhatsApp link. Please check number.");
    return;
  }
  toast("Opening WhatsApp with your request details...");
  openWhatsApp(messageUrl);
}

function clearAll(){
  state.brand="";state.model="";state.year="";state.services.clear();state.parts.clear();state.location="Home";state.coordinates=null;
  $("modelSelect").innerHTML="<option value=''>Choose a model</option>";
  if($("carYear")) $("carYear").value="";
  if($("address")) $("address").value="";
  if($("name")) $("name").value="";
  if($("phone")) $("phone").value="";
  if($("date")) $("date").value="";
  if($("time")) $("time").value="";
  if($("notes")) $("notes").value="";
  if($("bookSpecificSchedule")) {
    $("bookSpecificSchedule").checked = false;
    const card = $("bookSpecificSchedule").closest(".schedule-question-card");
    if (card) card.classList.remove("checked");
    const banner = $("urgentScheduleBanner");
    const wrap = $("preferredScheduleWrap");
    if (banner) banner.style.display = "flex";
    if (wrap) wrap.style.display = "none";
  }
  document.querySelectorAll(".location-card").forEach((x,i)=>x.classList.toggle("active",i===0));
  document.querySelectorAll("[data-date-chip]").forEach(c=>c.classList.remove("active"));
  document.querySelectorAll("[data-time-slot]").forEach(c=>c.classList.remove("active"));
  document.querySelectorAll("[data-symptom]").forEach(c=>c.classList.remove("active"));
  document.querySelectorAll(".cat-pill").forEach(p=>p.classList.remove("active"));
  if($("partCategory")) $("partCategory").value="none";
  if($("partSearch")) $("partSearch").value="";
  renderBrands();renderServices();renderParts();updateSummary();updateProgressBar();toast("Your selections were cleared.");
}

function init(){
  document.addEventListener("click",e=>{
    const brand=e.target.closest("[data-brand]"); if(brand) selectBrand(brand.dataset.brand);
    const service=e.target.closest("[data-service]"); if(service) toggleService(service.dataset.service);
    const part=e.target.closest("[data-part]"); if(part) togglePart(part.dataset.part);
    const loc=e.target.closest("[data-location]"); if(loc){state.location=loc.dataset.location;document.querySelectorAll(".location-card").forEach(x=>x.classList.toggle("active",x===loc));updateSummary();}

    // Promotional triple deal advertisement click handler
    const dealBtn = e.target.closest("[data-deal-part]");
    if (dealBtn) {
      e.preventDefault();
      const partName = dealBtn.dataset.dealPart || "Special Spare Part";
      const dealPrice = dealBtn.dataset.dealPrice || "";
      const dealMrp = dealBtn.dataset.dealMrp || "";
      const dealDiscount = dealBtn.dataset.dealDiscount || "";
      const priceText = dealPrice ? `\n*OFFER DEAL PRICE:* ${dealPrice}${dealMrp ? ` (Regular MRP: ${dealMrp})` : ""}` : "";
      const promoMsg = `Hello ${BUSINESS_NAME},\n\nI saw your Special Offer advertisement on your website:\n\n*OFFER:* ${partName}${priceText}\n*BENEFIT / DISCOUNT:* ${dealDiscount}\n\nI would like to claim this offer and enquire about vehicle compatibility for my car and availability for doorstep service.\n\nThank you!`;
      const url = buildWhatsAppUrl(promoMsg, WHATSAPP_NUMBER, WA_DEFAULT_COUNTRY_CODE);
      if (url) {
        toast(`Opening WhatsApp for ${partName} offer...`);
        openWhatsApp(url);
      }
      return;
    }

    const wa=e.target.closest("[data-whatsapp]");
    if(wa){
      e.preventDefault();
      if(WHATSAPP_NUMBER.includes("X")){toast("Add the WhatsApp number in script.js first.");return;}
      const messageUrl = buildWhatsAppUrl("Hello Zee Auto Park, I would like to enquire about your car repair and spare-parts service.", WHATSAPP_NUMBER, WA_DEFAULT_COUNTRY_CODE);
      if(!messageUrl){toast("WhatsApp number is missing."); return;}
      toast("Opening WhatsApp...");
      openWhatsApp(messageUrl);
    }
  });
  $("modelSelect").addEventListener("change",e=>{state.model=e.target.value;updateSummary();$("selectedCar").textContent=state.model?`${state.brand} ${state.model}${state.year?" · "+state.year:""}`:"Choose a model";});
  $("carYear").addEventListener("input",e=>{state.year=e.target.value;updateSummary();if(state.brand&&state.model)$("selectedCar").textContent=`${state.brand} ${state.model}${state.year?" · "+state.year:""}`;});
  $("partSearch").addEventListener("input",renderParts);
  $("partCategory").addEventListener("change",()=>{
    const catVal = $("partCategory").value;
    document.querySelectorAll(".cat-pill").forEach(p=>p.classList.toggle("active",p.dataset.cat===catVal));
    renderParts();
  });

  // Category Pills selection & scroll sync
  document.querySelectorAll(".cat-pill").forEach(pill=>{
    pill.addEventListener("click",()=>{
      document.querySelectorAll(".cat-pill").forEach(p=>p.classList.remove("active"));
      pill.classList.add("active");
      const targetCat = pill.dataset.cat;
      $("partCategory").value = targetCat;
      renderParts();
    });
  });

  // Quick Date selector chips
  document.querySelectorAll("[data-date-chip]").forEach(chip=>{
    chip.addEventListener("click",()=>{
      const type = chip.dataset.dateChip;
      const today = new Date();
      let targetDate = "";
      if (type === "today") {
        targetDate = today.toISOString().split("T")[0];
      } else if (type === "tomorrow") {
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        targetDate = tomorrow.toISOString().split("T")[0];
      } else if (type === "custom") {
        $("date").focus();
        if ($("date").showPicker) { try { $("date").showPicker(); } catch(err){} }
        return;
      }
      $("date").value = targetDate;
      document.querySelectorAll("[data-date-chip]").forEach(c=>c.classList.toggle("active",c===chip));
      updateSummary();
    });
  });

  if ($("date")) {
    $("date").addEventListener("input",()=>{
      updateSummary();
      document.querySelectorAll("[data-date-chip]").forEach(c=>c.classList.remove("active"));
    });
  }

  // Quick Time slot cards
  document.querySelectorAll("[data-time-slot]").forEach(slotCard=>{
    slotCard.addEventListener("click",()=>{
      const slotVal = slotCard.dataset.timeSlot;
      if (slotVal === "ASAP") {
        const curNotes = $("notes").value.trim();
        if (!curNotes.includes("URGENT / ASAP")) {
          $("notes").value = curNotes ? `${curNotes} (URGENT / ASAP service requested)` : "URGENT / ASAP service requested";
        }
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, "0");
        const mins = String(now.getMinutes()).padStart(2, "0");
        $("time").value = `${hrs}:${mins}`;
      } else {
        $("time").value = slotVal;
      }
      document.querySelectorAll("[data-time-slot]").forEach(c=>c.classList.toggle("active",c===slotCard));
      updateSummary();
    });
  });

  if ($("time")) {
    $("time").addEventListener("input",()=>{
      updateSummary();
      document.querySelectorAll("[data-time-slot]").forEach(c=>c.classList.remove("active"));
    });
  }

  // Schedule Mode Checkbox Toggle listener
  if ($("bookSpecificSchedule")) {
    $("bookSpecificSchedule").addEventListener("change", () => {
      const isSpecific = $("bookSpecificSchedule").checked;
      const banner = $("urgentScheduleBanner");
      const wrap = $("preferredScheduleWrap");
      const card = $("bookSpecificSchedule").closest(".schedule-question-card");
      if (card) card.classList.toggle("checked", isSpecific);
      if (banner) banner.style.display = isSpecific ? "none" : "flex";
      if (wrap) wrap.style.display = isSpecific ? "block" : "none";
      updateSummary();
      updateProgressBar();
    });
  }

  // Common Trouble Symptoms chips
  document.querySelectorAll("[data-symptom]").forEach(chip=>{
    chip.addEventListener("click",()=>{
      chip.classList.toggle("active");
      const symptom = chip.dataset.symptom;
      let cur = $("notes").value.trim();
      if (chip.classList.contains("active")) {
        $("notes").value = cur ? `${cur}, ${symptom}` : symptom;
      } else {
        const regex = new RegExp(`(^|,\\s*)${symptom.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, "i");
        let cleaned = cur.replace(regex, "").trim().replace(/^,\s*/, "").replace(/,\s*,/g, ",");
        $("notes").value = cleaned;
      }
    });
  });

  ["name", "phone", "address", "notes"].forEach(id => {
    const el = $(id);
    if (el) {
      el.addEventListener("input", updateProgressBar);
    }
  });

  $("sendWhatsApp").addEventListener("click",sendWhatsApp);
  $("clearBtn").addEventListener("click",clearAll);
  $("menuBtn").addEventListener("click",()=> $("mobileNav").classList.toggle("open"));
  document.querySelectorAll("#mobileNav a").forEach(a=>a.addEventListener("click",()=> $("mobileNav").classList.remove("open")));
  $("locateBtn").addEventListener("click",()=>{
    if(!navigator.geolocation){toast("Location is not supported by this browser.");return;}
    toast("Getting your location...");
    navigator.geolocation.getCurrentPosition(pos=>{
      state.coordinates={lat:pos.coords.latitude,lng:pos.coords.longitude};
      $("address").value=`Current location (GPS): ${pos.coords.latitude.toFixed(6)}, ${pos.coords.longitude.toFixed(6)}`;
      toast("Location added to your request.");
      updateProgressBar();
    },()=>toast("Could not get your location. Please enter it manually."));
  });

  renderBrands();renderServices();renderParts();updateSummary();updateProgressBar();
}

document.addEventListener("DOMContentLoaded", init);
