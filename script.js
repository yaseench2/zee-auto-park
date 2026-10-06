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

const categories = [
  {
    id: "brake-parts",
    name: "Brake Parts",
    desc: "Brake pads, discs, rotors, calipers and fluid lines",
    icon: "🛑",
    matchCats: ["Brake Parts", "Brake"]
  },
  {
    id: "engine-mechanical",
    name: "Engine & Mechanical",
    desc: "Pistons, cylinder head, gaskets, timing belts & valves",
    icon: "⚙️",
    matchCats: ["Engine", "Belts & External Engine Parts", "Diesel Engine"]
  },
  {
    id: "electrical-battery",
    name: "Battery & Electrical",
    desc: "Battery check & replacement, starter, alternator & relays",
    icon: "🔋",
    matchCats: ["Engine Electrical Parts", "Ignition System", "Engine Sensors"]
  },
  {
    id: "suspension-steering",
    name: "Suspension & Steering",
    desc: "Shock absorbers, struts, steering rack & ball joints",
    icon: "🛞",
    matchCats: ["Suspension", "Steering & Power Steering"]
  },
  {
    id: "cooling-ac",
    name: "Cooling & AC System",
    desc: "Air conditioning, radiator, water pump & thermostat",
    icon: "❄️",
    matchCats: ["Cooling System", "AC"]
  },
  {
    id: "oil-lubrication",
    name: "Oil & Lubrication",
    desc: "Engine oil, oil filters, sump pan & fluid coolers",
    icon: "🧴",
    matchCats: ["Lubrication / Engine Oil System"]
  },
  {
    id: "lighting-lamps",
    name: "Lighting & Lamps",
    desc: "LED headlights, fog lamps, DRL & ambient lights",
    icon: "💡",
    matchCats: ["Lighting Accessories"]
  },
  {
    id: "fuel-intake",
    name: "Fuel & Intake System",
    desc: "Fuel pump, injectors, air filter & turbocharger",
    icon: "⛽",
    matchCats: ["Fuel System", "Air / Intake System"]
  },
  {
    id: "exhaust-emission",
    name: "Exhaust System",
    desc: "Catalytic converters, exhaust pipes, mufflers & DPF",
    icon: "💨",
    matchCats: ["Exhaust System"]
  },
  {
    id: "wheels-tyres",
    name: "Wheels & Tyre Care",
    desc: "Alloy wheels, wheel covers, tyre inflators & TPMS",
    icon: "🏁",
    matchCats: ["Wheels & Tyre Accessories"]
  },
  {
    id: "exterior-accessories",
    name: "Exterior Accessories",
    desc: "Body covers, door visors, bumper guards & roof rails",
    icon: "🚗",
    matchCats: ["Car Exterior Accessories"]
  },
  {
    id: "interior-accessories",
    name: "Interior Accessories",
    desc: "Seat covers, 7D floor mats, steering covers & cushions",
    icon: "🛋️",
    matchCats: ["Interior Accessories"]
  },
  {
    id: "mobile-electronics",
    name: "Electronics & Gadgets",
    desc: "Android screens, dash cams, reverse cameras & chargers",
    icon: "📱",
    matchCats: ["Mobile & Electronics"]
  },
  {
    id: "car-cleaning",
    name: "Car Care & Cleaning",
    desc: "Microfiber cloths, polish, wax, vacuum & wash kits",
    icon: "🧼",
    matchCats: ["Car Cleaning Accessories"]
  },
  {
    id: "emergency-utility",
    name: "Emergency & Utility",
    desc: "Jump starters, jacks, tool kits, tow ropes & safety kits",
    icon: "🛠️",
    matchCats: ["Emergency / Utility Accessories"]
  },
  {
    id: "all",
    name: "All Spare Parts",
    desc: "Browse our complete catalog of 200+ genuine parts",
    icon: "✨",
    matchCats: ["all"]
  }
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
  ["bumper-guard","Bumper Guard","Car Exterior Accessories","Front and rear heavy-duty bumper protection guard","static/images/FINAL/Bumper Guard.jpeg"],
  ["bumper-corner-guard","Bumper Corner Guard","Car Exterior Accessories","Anti-scratch rubber bumper corner protector strips","static/images/FINAL/Bumper Corner Guard.jpeg"],
  ["body-side-moulding","Body Side Moulding","Car Exterior Accessories","Impact absorbing side door protective moulding beading","static/images/FINAL/Body Side Moulding.jpeg"],
  ["fender-flare","Fender Flare","Car Exterior Accessories","Wide wheel arch fender flare kit","static/images/FINAL/Fender Flare.jpeg"],
  ["roof-rail","Roof Rail","Car Exterior Accessories","Heavy-duty aluminum alloy luggage roof rails","static/images/FINAL/Roof Rail.jpeg"],
  ["roof-rack","Roof Rack","Car Exterior Accessories","Aerodynamic cargo carrier luggage roof rack basket","static/images/FINAL/Roof Rack.jpeg"],
  ["spoiler","Spoiler","Car Exterior Accessories","Sport aerodynamic rear trunk boot spoiler wing","static/images/FINAL/spoiler.jpeg"],
  ["shark-fin-antenna","Shark Fin Antenna","Car Exterior Accessories","FM/AM signal receiver aerodynamic roof shark fin","static/images/FINAL/Shark Fin Antenna.jpeg"],
  ["car-decals-stickers","Car Decals / Stickers","Car Exterior Accessories","Premium vinyl exterior car body graphics and racing stripes","static/images/FINAL/Car Decals  Stickers.jpeg"],
  ["reflective-tape","Reflective Tape","Car Exterior Accessories","High-visibility nighttime safety reflective warning tape","static/images/FINAL/Reflective Tape.jpeg"],
  ["car-seat-cover","Car Seat Cover","Interior Accessories","Premium breathable leatherette full car seat cover set","static/images/FINAL/Car Seat Cover.jpeg"],
  ["steering-wheel-cover","Steering Wheel Cover","Interior Accessories","Anti-slip breathable leather stitched steering wheel grip","static/images/FINAL/Steering Wheel Cover.jpeg"],
  ["dashboard-mat","Dashboard Mat","Interior Accessories","Non-slip anti-glare sun protection dashboard mat","static/images/FINAL/Dashboard Mat.jpeg"],
  ["dashboard-cover","Dashboard Cover","Interior Accessories","Custom-fit protective dashboard cover pad","static/images/FINAL/Dashboard Cover.jpeg"],
  ["floor-mat","Floor Mat","Interior Accessories","All-weather heavy-duty waterproof car floor mats","static/images/FINAL/Floor Mat.jpeg"],
  ["3d-5d-7d-floor-mat","3D / 5D / 7D Floor Mat","Interior Accessories","Luxury custom-tailored 7D deep-dish waterproof floor mats","static/images/FINAL/3D  5D  7D Floor Mat.jpeg"],
  ["boot-mat","Boot Mat","Interior Accessories","All-weather trunk boot liner cargo protection tray","static/images/FINAL/Boot Mat.jpeg"],
  ["gear-knob-cover","Gear Knob Cover","Interior Accessories","Ergonomic leather stitched gear shift knob sleeve","static/images/FINAL/Gear Knob Cover.jpeg"],
  ["hand-brake-cover","Hand Brake Cover","Interior Accessories","Textured non-slip emergency brake protective grip","static/images/FINAL/Hand Brake Cover.jpeg"],
  ["seat-belt-cover","Seat Belt Cover","Interior Accessories","Soft shoulder comfort cushion seat belt padding","static/images/FINAL/Seat Belt Cover.jpeg"],
  ["neck-rest-pillow","Neck Rest Pillow","Interior Accessories","Memory foam ergonomic head & neck rest cushion","static/images/FINAL/Neck Rest Pillow.jpeg"],
  ["headrest-pillow","Headrest Pillow","Interior Accessories","Contoured breathable driving headrest comfort pillow","static/images/FINAL/Headrest Pillow.jpeg"],
  ["lumbar-support-cushion","Lumbar Support Cushion","Interior Accessories","Orthopedic memory foam lower back support car cushion","static/images/FINAL/Lumbar Support Cushion.jpeg"],
  ["armrest-cover","Armrest Cover","Interior Accessories","Cushioned leather center console armrest protective pad","static/images/FINAL/Armrest Cover.jpeg"],
  ["sun-visor-organizer","Sun Visor Organizer","Interior Accessories","Multi-pocket card, document and sunglasses visor pouch","static/images/FINAL/Sun Visor Organizer.jpeg"],
  ["car-tissue-box","Car Tissue Box","Interior Accessories","Sleek sun visor & seatback leather tissue dispenser","static/images/FINAL/Car Tissue Box.jpeg"],
  ["car-trash-bin","Car Trash Bin","Interior Accessories","Compact leak-proof hanging automotive garbage container","static/images/FINAL/Car Trash Bin.jpeg"],
  ["cup-holder","Cup Holder","Interior Accessories","Expandable dual-slot console car cup holder organizer","static/images/FINAL/Cup Holder.jpeg"],
  ["seat-gap-filler","Seat Gap Filler","Interior Accessories","Drop-catch leather pocket organizer for car seat gaps","static/images/FINAL/Seat Gap Filler.jpeg"],
  ["car-coat-hanger","Car Coat Hanger","Interior Accessories","Headrest back seat stainless steel suit and coat hanger","static/images/FINAL/Car Coat Hanger.jpeg"],
  ["back-seat-organizer","Back Seat Organizer","Interior Accessories","Multi-pocket seatback storage bag with bottle & tablet holder","static/images/FINAL/Back Seat Organizer.jpeg"],
  ["car-document-holder","Car Document Holder","Interior Accessories","Premium leather wallet organizer for RC, insurance & papers","static/images/FINAL/Car Document Holder.jpeg"],
  ["mobile-holder","Mobile Holder","Mobile & Electronics","Universal 360-degree rotation car smartphone holder","static/images/FINAL/Mobile Holder.jpeg"],
  ["dashboard-mobile-holder","Dashboard Mobile Holder","Mobile & Electronics","Heavy-duty suction cup dashboard phone mount","static/images/FINAL/Dashboard Mobile Holder.jpeg"],
  ["air-vent-mobile-holder","Air Vent Mobile Holder","Mobile & Electronics","Anti-shake air vent clip smartphone car holder","static/images/FINAL/Air Vent Mobile Holder.jpeg"],
  ["magnetic-mobile-holder","Magnetic Mobile Holder","Mobile & Electronics","Ultra-strong neodymium magnetic dashboard phone mount","static/images/FINAL/Magnetic Mobile Holder.jpeg"],
  ["wireless-charging-holder","Wireless Charging Holder","Mobile & Electronics","Qi fast wireless charging auto-clamping phone car mount","static/images/FINAL/Wireless Charging Holder.jpeg"],
  ["car-charger","Car Charger","Mobile & Electronics","Fast dual-port 12V cigarette lighter car charger","static/images/FINAL/Car Charger.jpeg"],
  ["usb-charger","USB Charger","Mobile & Electronics","QC 3.0 & PD 30W high-speed dual USB car charger adapter","static/images/FINAL/USB Charger.jpeg"],
  ["usb-cable","USB Cable","Mobile & Electronics","Durable nylon braided 3-in-1 fast charging car USB cable","static/images/FINAL/USB Cable.jpeg"],
  ["bluetooth-fm-transmitter","Bluetooth FM Transmitter","Mobile & Electronics","Wireless Bluetooth FM radio transmitter with handsfree calling","static/images/FINAL/Bluetooth FM Transmitter.jpeg"],
  ["bluetooth-adapter","Bluetooth Adapter","Mobile & Electronics","Aux 3.5mm wireless Bluetooth audio receiver adapter","static/images/FINAL/Bluetooth Adapter.jpeg"],
  ["car-stereo","Car Stereo","Mobile & Electronics","Single & Double DIN Bluetooth automotive audio receiver","static/images/FINAL/Car Stereo.jpeg"],
  ["android-car-player","Android Car Player","Mobile & Electronics","Smart Android touchscreen media player with GPS & WiFi","static/images/FINAL/Android Car Player.jpeg"],
  ["touchscreen-display","Touchscreen Display","Mobile & Electronics","HD IPS wireless Apple CarPlay & Android Auto display","static/images/FINAL/Touchscreen Display.jpeg"],
  ["dashboard-display","Dashboard Display","Mobile & Electronics","HD smart touchscreen dashboard infotainment display with navigation & Apple CarPlay","static/images/FINAL/Touchscreen Display.jpeg"],
  ["reverse-camera","Reverse Camera","Mobile & Electronics","Wide-angle HD night vision waterproof rear backup camera","static/images/FINAL/Reverse Camera.jpeg"],
  ["360-camera","360° Camera","Mobile & Electronics","Full 360-degree bird's-eye surround view camera system","static/images/FINAL/360° Camera.jpeg"],
  ["parking-sensor","Parking Sensor","Mobile & Electronics","Ultrasonic reverse parking radar sensors with LED display","static/images/FINAL/Parking Sensor.jpeg"],
  ["dash-camera","Dash Camera","Mobile & Electronics","Dual front and cabin HD 4K loop recording dashboard camera","static/images/FINAL/Dash Camera.jpeg"],
  ["gps-tracker","GPS Tracker","Mobile & Electronics","Real-time anti-theft GPS vehicle tracking locator with app","static/images/FINAL/GPS Tracker.jpeg"],
  ["led-headlight","LED Headlight","Lighting Accessories","High-power CSP chip automotive LED headlight bulb kit","static/images/FINAL/LED Headlight.jpeg"],
  ["led-fog-light","LED Fog Light","Lighting Accessories","Waterproof high-penetration all-weather LED fog lamps","static/images/FINAL/LED Fog Light.jpeg"],
  ["led-bulb","LED Bulb","Lighting Accessories","Super bright H4 / H7 / H11 automotive LED replacement bulbs","static/images/FINAL/LED Bulb.jpeg"],
  ["interior-led-light","Interior LED Light","Lighting Accessories","Pure white roof dome interior LED cabin light panels","static/images/FINAL/Interior LED Light.jpeg"],
  ["ambient-light","Ambient Light","Lighting Accessories","Smart app-controlled RGB optical fiber ambient cabin lighting","static/images/FINAL/Ambient Light.jpeg"],
  ["footwell-light","Footwell Light","Lighting Accessories","Sound-activated multi-color LED under-dash footwell strips","static/images/FINAL/Footwell Light.jpeg"],
  ["door-warning-light","Door Warning Light","Lighting Accessories","Anti-collision strobe safety door puddle warning lights","static/images/FINAL/Door Warning Light.jpeg"],
  ["reading-light","Reading Light","Lighting Accessories","Touch-switch soft warm LED interior cabin reading lamp","static/images/FINAL/Reading Light.jpeg"],
  ["led-strip","LED Strip","Lighting Accessories","Flexible waterproof silicone exterior and interior LED light strip","static/images/FINAL/LED Strip.jpeg"],
  ["number-plate-led","Number Plate LED","Lighting Accessories","Ultra-bright white LED license number plate illuminators","static/images/FINAL/Number Plate LED.jpeg"],
  ["reverse-light","Reverse Light","Lighting Accessories","High-output super white LED backup reverse lamp bulbs","static/images/FINAL/Reverse Light.jpeg"],
  ["brake-light","Brake Light","Lighting Accessories","Instant-trigger high-mount bright red LED brake light","static/images/FINAL/Brake Light.jpeg"],
  ["sequential-indicator","Sequential Indicator","Lighting Accessories","Dynamic sweeping amber sequential LED turn signals","static/images/FINAL/Sequential Indicator.jpeg"],
  ["drl-daytime-running-light","DRL — Daytime Running Light","Lighting Accessories","Ultra-bright dual-mode daytime running LED tube lights","static/images/FINAL/DRL — Daytime Running Light.jpeg"],
  ["wheel-cover","Wheel Cover","Wheels & Tyre Accessories","Impact-resistant snap-on sport wheel rim hubcaps","static/images/FINAL/Wheel Cover.jpeg"],
  ["alloy-wheel","Alloy Wheel","Wheels & Tyre Accessories","Precision-engineered lightweight aluminum alloy wheels","static/images/FINAL/Alloy Wheel.jpeg"],
  ["wheel-spacers","Wheel Spacers","Wheels & Tyre Accessories","Forged aluminum hub-centric wheel spacers kit","static/images/FINAL/Wheel Spacers.jpeg"],
  ["wheel-lock-nuts","Wheel Lock Nuts","Wheels & Tyre Accessories","Anti-theft wheel lock lug nuts with proprietary key","static/images/FINAL/Wheel Lock Nuts.jpeg"],
  ["tyre-valve-caps","Tyre Valve Caps","Wheels & Tyre Accessories","Anodized metal airtight tyre valve stem dust caps","static/images/FINAL/Tyre Valve Caps.jpeg"],
  ["tyre-inflator","Tyre Inflator","Wheels & Tyre Accessories","Digital preset automatic 12V portable tyre air pump","static/images/FINAL/Tyre Inflator.jpeg"],
  ["tyre-pressure-gauge","Tyre Pressure Gauge","Wheels & Tyre Accessories","Precision digital tyre pressure measuring gauge with display","static/images/FINAL/Tyre Pressure Gauge.jpeg"],
  ["tpms","TPMS","Wheels & Tyre Accessories","Solar-powered wireless tyre pressure monitoring system","static/images/FINAL/TPMS.jpeg"],
  ["tyre-repair-kit","Tyre Repair Kit","Wheels & Tyre Accessories","Complete heavy-duty tubeless tyre plug and puncture kit","static/images/FINAL/Tyre Repair Kit.jpeg"],
  ["puncture-repair-kit","Puncture Repair Kit","Wheels & Tyre Accessories","Emergency puncture strip repair kit with rasp and split-eye needle","static/images/FINAL/Puncture Repair Kit.jpeg"],
  ["wheel-cleaning-brush","Wheel Cleaning Brush","Wheels & Tyre Accessories","Non-scratch soft bristle alloy rim and wheel cleaning brush","static/images/FINAL/Wheel Cleaning Brush.jpeg"],
  ["microfiber-cloth","Microfiber Cloth","Car Cleaning Accessories","Ultra-thick 800 GSM plush lint-free microfiber cleaning towels","static/images/FINAL/Microfiber Cloth.jpeg"],
  ["car-wash-sponge","Car Wash Sponge","Car Cleaning Accessories","High-density porous honeycomb car washing sponge","static/images/FINAL/Car Wash Sponge.jpeg"],
  ["car-wash-mitt","Car Wash Mitt","Car Cleaning Accessories","Scratch-free chenille microfiber car wash glove mitt","static/images/FINAL/Car Wash Mitt.jpeg"],
  ["car-wash-set","Car Wash Set","Car Cleaning Accessories","Complete multi-piece car exterior washing & detailing care set","static/images/FINAL/car wash set.jpeg"],
  ["detailing-brush","Detailing Brush","Car Cleaning Accessories","Multi-size soft boar-hair automotive detailing brushes set","https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=700&q=80"],
  ["dashboard-cleaner","Dashboard Cleaner","Car Cleaning Accessories","UV-protectant non-greasy dashboard & vinyl cleaner spray","static/images/FINAL/Dashboard Cleaner.jpeg"],
  ["glass-cleaner","Glass Cleaner","Car Cleaning Accessories","Streak-free automotive windshield and window glass cleaner","static/images/FINAL/Glass Cleaner.jpeg"],
  ["tyre-cleaner","Tyre Cleaner","Car Cleaning Accessories","Deep cleaning wheel sidewall & brake dust degreaser spray","static/images/FINAL/Tyre Cleaner.jpeg"],
  ["tyre-polish","Tyre Polish","Car Cleaning Accessories","Long-lasting deep black wet-look tyre shine dressing","static/images/FINAL/Tyre Polish.jpeg"],
  ["car-wax","Car Wax","Car Cleaning Accessories","Premium carnauba gloss paste wax for maximum paint protection","static/images/FINAL/Car Wax.jpeg"],
  ["car-polish","Car Polish","Car Cleaning Accessories","Swirl and micro-scratch remover car paint polish compound","static/images/FINAL/Car Polish.jpeg"],
  ["interior-cleaner","Interior Cleaner","Car Cleaning Accessories","All-purpose fabric, upholstery and interior plastic cleaner","static/images/FINAL/Interior Cleaner.jpeg"],
  ["leather-cleaner","Leather Cleaner","Car Cleaning Accessories","pH-balanced leather seat cleaner and conditioning cream","static/images/FINAL/Leather Cleaner.jpeg"],
  ["air-freshener","Air Freshener","Car Cleaning Accessories","Long-lasting luxury car perfume diffuser & odor eliminator","static/images/FINAL/Air Freshener.jpeg"],
  ["vacuum-cleaner","Vacuum Cleaner","Car Cleaning Accessories","High-power handheld 12V portable car vacuum with attachments","static/images/FINAL/Vacuum Cleaner.jpeg"],
  ["pressure-washer","Pressure Washer","Car Cleaning Accessories","High-pressure portable electric car wash sprayer","static/images/FINAL/Pressure Washer.jpeg"],
  ["car-jump-starter","Car Jump Starter","Emergency / Utility Accessories","Portable 12V lithium vehicle jump starter and power bank","static/images/FINAL/Car Jump Starter.jpeg"],
  ["jumper-cable","Jumper Cable","Emergency / Utility Accessories","Heavy-gauge pure copper battery booster jumper cables","static/images/FINAL/Jumper Cable.jpeg"],
  ["emergency-hammer","Emergency Hammer","Emergency / Utility Accessories","Window glass punch breaker and seatbelt cutter escape tool","static/images/FINAL/Emergency Hammer.jpeg"],
  ["safety-triangle","Safety Triangle","Emergency / Utility Accessories","Foldable reflective roadside emergency breakdown warning triangle","static/images/FINAL/Safety Triangle.jpeg"],
  ["first-aid-kit","First Aid Kit","Emergency / Utility Accessories","Emergency automotive medical first aid kit in compact pouch","https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=700&q=80"],
  ["fire-extinguisher","Fire Extinguisher","Emergency / Utility Accessories","Compact vehicle ABC dry powder emergency fire extinguisher","static/images/FINAL/Fire Extinguisher.jpeg"],
  ["tow-rope","Tow Rope","Emergency / Utility Accessories","Heavy-duty 5-ton nylon car recovery tow rope with forged steel hooks","static/images/FINAL/Tow Rope.jpeg"],
  ["towing-strap","Towing Strap","Emergency / Utility Accessories","Reinforced off-road recovery tow strap with bow shackles","static/images/FINAL/Towing Strap.jpeg"],
  ["portable-air-compressor","Portable Air Compressor","Emergency / Utility Accessories","Dual cylinder metal portable 12V tyre air compressor","static/images/FINAL/Portable Air Compressor.jpeg"],
  ["emergency-flashlight","Emergency Flashlight","Emergency / Utility Accessories","Rechargeable magnetic high-beam LED emergency work light","static/images/FINAL/Emergency Flashlight.jpeg"],
  ["tool-kit","Tool Kit","Emergency / Utility Accessories","Comprehensive automotive socket wrench & mechanical hand tool set","static/images/FINAL/Tool Kit.jpeg"],
  ["jack","Jack","Emergency / Utility Accessories","Heavy-duty hydraulic floor trolley & scissor car lifting jack","static/images/FINAL/Jack.jpeg"],
  ["wheel-spanner","Wheel Spanner","Emergency / Utility Accessories","Telescopic extendable high-torque wheel lug nut spanner wrench","static/images/FINAL/Wheel Spanner.jpeg"],
  ["battery-tester","Battery Tester","Emergency / Utility Accessories","Digital 12V car battery condition and alternator load analyzer","static/images/FINAL/Battery Tester.jpeg"],

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

const state = {
  brand: "",
  category: null,
  categoryName: "",
  parts: new Set(),
  customPart: "",
  city: ""
};

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
const toast = msg => {
  const t = $("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2600);
};

function normalizeWhatsAppNumber(raw, defaultCountryCode = "91") {
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

function buildWhatsAppUrl(message, rawNumber, defaultCountryCode = "91") {
  const number = normalizeWhatsAppNumber(rawNumber, defaultCountryCode);
  if (!number) return "";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp(url) {
  if (!url) return;
  try {
    const win = window.open(url, "_blank");
    if (!win || win.closed || typeof win.closed === "undefined") {
      window.location.href = url;
    }
  } catch (err) {
    window.location.href = url;
  }
}

function getPartVisual(p) {
  const categoryIcon = partCategoryIcons[p[2]] || "🧰";
  const isSelected = state.parts.has(p[0]);
  const safeImgSrc = encodeURI(p[4]);
  return `
    <div class="part-media-wrap">
      <img class="part-img" src="${safeImgSrc}" alt="${p[1]}" loading="lazy" onerror="this.style.display='none'; this.closest('.part-media-wrap').classList.add('fallback');">
      <div class="part-card-fallback-art">${categoryIcon}</div>
      <div class="part-card-scrim"></div>
      <div class="part-card-top-bar">
        <span class="part-cat-badge">${categoryIcon} <span>${p[2]}</span></span>
        <div class="part-actions-row">
          <button type="button" class="select-part ${isSelected ? "selected" : ""}" data-part="${p[0]}" aria-label="Select ${p[1]}">
            <span class="sel-icon">${isSelected ? "✓" : "+"}</span>
            <span class="sel-text">${isSelected ? "Selected" : "Select"}</span>
          </button>
          <button type="button" class="part-direct-wa-btn" data-direct-part="${p[0]}" title="Instant WhatsApp Enquiry for this part">
            <span>💬 Enquire</span>
          </button>
        </div>
      </div>
      <div class="part-card-bottom-info">
        <b class="part-title">${p[1]}</b>
        <p class="part-desc">${p[3]}</p>
      </div>
    </div>
  `;
}

function renderBrands() {
  const brandsEl = $("brands");
  if (!brandsEl) return;
  brandsEl.innerHTML = Object.keys(cars).map(brand =>
    `<button class="brand ${state.brand === brand ? "active" : ""}" data-brand="${brand}"><span class="brand-logo">${brandIcons[brand] || "🚗"}</span>${brand}</button>`
  ).join("");
}

function selectBrand(brand) {
  state.brand = brand;
  renderBrands();

  if ($("selectedCar")) {
    $("selectedCar").textContent = `🚗 Selected Brand: ${brand}`;
  }
  updateSummary();
  toast(`Selected ${brand}. Next, choose your parts category!`);
}

function renderCategories() {
  const grid = $("categoryGrid");
  if (!grid) return;
  grid.innerHTML = categories.map(cat => {
    const isSelected = state.category === cat.id;
    return `
      <div class="category-card ${isSelected ? "selected" : ""}" data-category-id="${cat.id}">
        <div class="category-icon">${cat.icon}</div>
        <b>${cat.name}</b>
        <small>${cat.desc}</small>
      </div>
    `;
  }).join("");
}

function selectCategory(catId, smoothScroll = true) {
  const found = categories.find(c => c.id === catId);
  if (!found) return;

  state.category = found.id;
  state.categoryName = found.name;

  // Update category card selected UI matching user screenshot
  document.querySelectorAll(".category-card").forEach(card => {
    card.classList.toggle("selected", card.dataset.categoryId === found.id);
  });

  // Hide prompt notice and reveal category action bar
  if ($("categoryPromptBox")) {
    $("categoryPromptBox").classList.add("hidden");
  }
  if ($("categoryActionBar")) {
    $("categoryActionBar").classList.remove("hidden");
  }

  // Reveal spare parts section
  const partsSec = $("parts");
  if (partsSec) {
    partsSec.classList.remove("parts-locked");
  }

  // Sync toolbar dropdown if present
  if ($("partCategory")) {
    $("partCategory").value = found.id;
  }

  // Update category action bar
  if ($("activeCategoryName")) {
    $("activeCategoryName").textContent = found.name;
  }

  // Update parts section subheading
  if ($("partsSubtitle")) {
    $("partsSubtitle").innerHTML = `Showing genuine spare parts for <strong>${found.name}</strong>. Pick the parts you need or chat directly on WhatsApp.`;
  }

  renderParts();
  updateSummary();

  if (smoothScroll && partsSec) {
    partsSec.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function isPartInCategory(part, catId) {
  if (!catId) return false;
  if (catId === "all") return true;
  const catObj = categories.find(c => c.id === catId);
  if (!catObj) return true;
  if (catObj.matchCats.includes("all")) return true;
  const partCat = part[2].toLowerCase();
  return catObj.matchCats.some(m => m.toLowerCase() === partCat);
}

function renderParts() {
  const partsSec = $("parts");
  const partsGrid = $("partsGrid");
  if (!partsGrid) return;

  // IMPORTANT: Spare parts list only show after selecting category
  if (!state.category) {
    if (partsSec) partsSec.classList.add("parts-locked");
    partsGrid.innerHTML = "";
    return;
  }

  if (partsSec) {
    partsSec.classList.remove("parts-locked");
  }

  const q = $("partSearch") ? $("partSearch").value.trim().toLowerCase() : "";

  const filtered = parts.filter(p => {
    const text = (p[1] + " " + p[2] + " " + p[3]).toLowerCase();
    const matchesQuery = !q || text.includes(q);
    const matchesCategory = isPartInCategory(p, state.category);
    return matchesQuery && matchesCategory;
  });

  if ($("activeCategoryCount")) {
    $("activeCategoryCount").textContent = `(${filtered.length} Items Available)`;
  }

  partsGrid.innerHTML = filtered.map(p => `
    <article class="part-card ${state.parts.has(p[0]) ? "selected" : ""}" data-part-card="${p[0]}">
      ${getPartVisual(p)}
    </article>
  `).join("") || `<p style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: #747a80;">No spare parts found matching "${q}" in ${state.categoryName}. You can type custom requirements below or search across all categories.</p>`;
}

function togglePart(id) {
  if (state.parts.has(id)) {
    state.parts.delete(id);
  } else {
    state.parts.add(id);
  }
  renderParts();
  updateSummary();
}

function selectedPartNames() {
  return parts.filter(p => state.parts.has(p[0])).map(p => p[1]);
}

function directPartWhatsApp(partId) {
  const part = parts.find(p => p[0] === partId);
  if (!part) return;

  const carText = state.brand
    ? `Brand: ${state.brand}`
    : "Not specified yet (Please advise fitment)";

  const msg = `*SPARE PART ENQUIRY*\n*${BUSINESS_NAME}*\n\n` +
    `🚗 *CAR BRAND:* ${carText}\n` +
    `⚙️ *PART REQUESTED:* ${part[1]}\n` +
    `📦 *CATEGORY:* ${part[2]}\n` +
    `ℹ️ *SPECIFICATION:* ${part[3]}\n\n` +
    `_Hello Zee Auto Park! Is this part currently available for my car? Please share price and doorstep delivery details. Thank you!_`;

  const url = buildWhatsAppUrl(msg, WHATSAPP_NUMBER, WA_DEFAULT_COUNTRY_CODE);
  if (url) {
    toast(`Opening WhatsApp for ${part[1]}...`);
    openWhatsApp(url);
  }
}

function directCategoryWhatsApp() {
  const carText = state.brand
    ? `Brand: ${state.brand}`
    : "Not specified yet";

  const catText = state.categoryName || "Spare Parts";
  const msg = `*SPARE PARTS CATEGORY ENQUIRY*\n*${BUSINESS_NAME}*\n\n` +
    `🚗 *CAR BRAND:* ${carText}\n` +
    `📦 *CATEGORY:* ${catText}\n\n` +
    `_Hello Zee Auto Park! I would like to enquire about available spare parts in the ${catText} category for my car. Please share options and prices. Thank you!_`;

  const url = buildWhatsAppUrl(msg, WHATSAPP_NUMBER, WA_DEFAULT_COUNTRY_CODE);
  if (url) {
    toast(`Opening WhatsApp for ${catText}...`);
    openWhatsApp(url);
  }
}

function updateSummary() {
  const car = state.brand || "No brand selected";

  const partsList = selectedPartNames();
  const partsCount = partsList.length;
  const partsText = partsCount > 0
    ? partsList.join(", ")
    : (state.category ? "None selected (General category enquiry)" : "No parts selected yet (Choose category first)");

  if ($("sumCar")) $("sumCar").textContent = car;
  if ($("sumCategory")) $("sumCategory").textContent = state.categoryName || "Not selected yet (Choose category above)";
  if ($("sumParts")) $("sumParts").textContent = partsText;
  if ($("sumPartsCount")) $("sumPartsCount").textContent = partsCount;

  // Active step pill highlight
  if ($("pillStep1")) $("pillStep1").classList.toggle("active", !state.brand);
  if ($("pillStep2")) $("pillStep2").classList.toggle("active", Boolean(state.brand && !state.category));
  if ($("pillStep3")) $("pillStep3").classList.toggle("active", Boolean(state.category && partsCount === 0));
  if ($("pillStep4")) $("pillStep4").classList.toggle("active", partsCount > 0);

  // Sticky floating mobile bar
  const stickyBar = $("stickyOrderBar");
  if (stickyBar) {
    const hasAnySelection = Boolean(state.brand || partsCount > 0 || state.category);
    stickyBar.classList.toggle("visible", hasAnySelection);
    if ($("stickyCarText")) {
      $("stickyCarText").textContent = state.brand ? `Brand: ${state.brand}` : "Select Brand";
    }
    if ($("stickyPartsCount")) {
      $("stickyPartsCount").textContent = partsCount > 0
        ? `${partsCount} part${partsCount > 1 ? "s" : ""} selected`
        : (state.category ? `Category: ${state.categoryName}` : "Choose category above");
    }
  }
}

function makeMessage() {
  const carText = state.brand
    ? state.brand
    : "Not specified yet (Please assist with fitment for my car)";

  const catText = state.categoryName || "General Spare Parts Enquiry";
  const partsList = selectedPartNames();
  let partsSection = "";
  if (partsList.length > 0) {
    partsSection = `⚙️ *SELECTED SPARE PARTS (${partsList.length})*\n` + partsList.map(p => `• ${p}`).join("\n");
  } else {
    partsSection = `⚙️ *PARTS ENQUIRY*\n• Looking for parts in: ${catText}`;
  }

  const customPart = $("customPartInput") ? $("customPartInput").value.trim() : "";
  const customSection = customPart ? `\n\n📝 *CUSTOM PART / SPECIFIC REQUEST*\n• ${customPart}` : "";

  const city = $("cityInput") ? $("cityInput").value.trim() : "";
  const citySection = city ? `\n\n📍 *DELIVERY AREA / CITY*\n• ${city}` : "";

  return `*CAR SPARE PARTS ORDER / ENQUIRY*\n*${BUSINESS_NAME}*\n\n` +
    `🚗 *CAR BRAND*\n` +
    `• Brand: ${carText}\n\n` +
    `📦 *CATEGORY*\n` +
    `• ${catText}\n\n` +
    `${partsSection}` +
    `${customSection}` +
    `${citySection}\n\n` +
    `_Hello Zee Auto Park! Please verify part availability, prices, and doorstep delivery for my car._\n_Thank you!_`;
}

function sendWhatsApp() {
  try {
    if (!state.brand) {
      toast("Tip: Choose your car brand for guaranteed fitment!");
      const carsSec = $("cars");
      if (carsSec) carsSec.scrollIntoView({ behavior: "smooth" });
    }

    const message = makeMessage();
    const url = buildWhatsAppUrl(message, WHATSAPP_NUMBER, WA_DEFAULT_COUNTRY_CODE);
    if (!url) {
      toast("Could not generate WhatsApp link.");
      return;
    }
    toast("Opening WhatsApp with your spare parts order...");
    openWhatsApp(url);
  } catch (err) {
    console.error("WhatsApp error:", err);
    toast("Could not open WhatsApp. Please try calling us directly.");
  }
}

function clearAll() {
  state.brand = "";
  state.category = null;
  state.categoryName = "";
  state.parts.clear();

  if ($("selectedCar")) $("selectedCar").textContent = "🚗 No car brand selected";
  if ($("partSearch")) $("partSearch").value = "";
  if ($("partCategory")) $("partCategory").value = "all";
  if ($("customPartInput")) $("customPartInput").value = "";
  if ($("cityInput")) $("cityInput").value = "";

  // Hide spare parts list until a new category is selected
  const partsSec = $("parts");
  if (partsSec) partsSec.classList.add("parts-locked");

  // Show category prompt and hide action bar
  if ($("categoryPromptBox")) $("categoryPromptBox").classList.remove("hidden");
  if ($("categoryActionBar")) $("categoryActionBar").classList.add("hidden");

  renderBrands();
  renderCategories();
  renderParts();
  updateSummary();
  toast("Your selections were cleared.");
}

function init() {
  document.addEventListener("click", e => {
    // Brand selection
    const brand = e.target.closest("[data-brand]");
    if (brand) selectBrand(brand.dataset.brand);

    // Category card selection
    const catCard = e.target.closest("[data-category-id]");
    if (catCard) selectCategory(catCard.dataset.categoryId, true);

    // Part select toggle button
    const partBtn = e.target.closest("[data-part]");
    if (partBtn) {
      e.stopPropagation();
      togglePart(partBtn.dataset.part);
      return;
    }

    // Part direct WhatsApp button
    const directPart = e.target.closest("[data-direct-part]");
    if (directPart) {
      e.preventDefault();
      e.stopPropagation();
      directPartWhatsApp(directPart.dataset.directPart);
      return;
    }

    // Special offer button - directly to WhatsApp asking for current offers
    const offerTrigger = e.target.closest(".btn-special-offers, .nav-offer-link");
    if (offerTrigger) {
      e.preventDefault();
      const promoMsg = `Hello ${BUSINESS_NAME}, I would like to know about your current special offers and deals on genuine car spare parts and accessories. Please share details.`;
      const url = buildWhatsAppUrl(promoMsg, WHATSAPP_NUMBER, WA_DEFAULT_COUNTRY_CODE);
      if (url) {
        toast("Opening WhatsApp for special offers...");
        openWhatsApp(url);
      }
      return;
    }

    // Generic WhatsApp button
    const wa = e.target.closest("[data-whatsapp]");
    if (wa) {
      e.preventDefault();
      const messageUrl = buildWhatsAppUrl("Hello Zee Auto Park, I would like to enquire about genuine car spare parts and accessories for my vehicle.", WHATSAPP_NUMBER, WA_DEFAULT_COUNTRY_CODE);
      if (messageUrl) {
        toast("Opening WhatsApp...");
        openWhatsApp(messageUrl);
      }
    }
  });

  // Handle click on links to #parts (nav and pills) when no category is selected
  document.querySelectorAll('a[href="#parts"]').forEach(link => {
    link.addEventListener("click", e => {
      if (!state.category) {
        e.preventDefault();
        toast("Please choose a category above first to view spare parts!");
        const catSec = $("categories");
        if (catSec) catSec.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Part search input
  if ($("partSearch")) {
    $("partSearch").addEventListener("input", renderParts);
  }

  // Part category dropdown filter
  if ($("partCategory")) {
    $("partCategory").addEventListener("change", e => {
      selectCategory(e.target.value, false);
    });
  }

  // Custom inputs listeners
  if ($("customPartInput")) {
    $("customPartInput").addEventListener("input", updateSummary);
  }
  if ($("cityInput")) {
    $("cityInput").addEventListener("input", updateSummary);
  }

  // WhatsApp order button
  if ($("sendWhatsApp")) {
    $("sendWhatsApp").addEventListener("click", sendWhatsApp);
  }

  // Sticky mobile WhatsApp order button
  if ($("stickyWaBtn")) {
    $("stickyWaBtn").addEventListener("click", sendWhatsApp);
  }

  // Category instant WhatsApp button
  if ($("catWaDirectBtn")) {
    $("catWaDirectBtn").addEventListener("click", directCategoryWhatsApp);
  }

  // Clear button
  if ($("clearBtn")) {
    $("clearBtn").addEventListener("click", clearAll);
  }

  // Mobile navigation
  if ($("menuBtn")) {
    $("menuBtn").addEventListener("click", () => {
      if ($("mobileNav")) $("mobileNav").classList.toggle("open");
    });
  }

  document.querySelectorAll("#mobileNav a").forEach(a => {
    a.addEventListener("click", () => {
      if ($("mobileNav")) $("mobileNav").classList.remove("open");
    });
  });

  // Initial renders
  renderBrands();
  renderCategories();
  renderParts();
  updateSummary();
}

document.addEventListener("DOMContentLoaded", init);
