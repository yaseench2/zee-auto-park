// =========================
// Zee Auto Park Website Settings
// =========================
const WHATSAPP_NUMBER = "7034041366"; // WhatsApp number for sending request messages
const CALL_NUMBER = "918078050269";
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
  ["engine-block","Engine Block","Engine","Main engine block assembly","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["cylinder-head","Cylinder Head","Engine","Cylinder head assembly","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["cylinder","Cylinder","Engine","Engine cylinder component","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["combustion-chamber","Combustion Chamber","Engine","Combustion chamber component","https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=700&q=80"],
  ["piston","Piston","Engine","Engine piston","https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=700&q=80"],
  ["piston-rings","Piston Rings","Engine","Piston ring set","https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=700&q=80"],
  ["connecting-rod","Connecting Rod","Engine","Connecting rod assembly","https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=700&q=80"],
  ["crankshaft","Crankshaft","Engine","Engine crankshaft","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["main-bearings","Main Bearings","Engine","Main bearing kit","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["connecting-rod-bearings","Connecting Rod Bearings","Engine","Con rod bearing set","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["flywheel","Flywheel","Engine","Flywheel assembly","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["flexplate","Flexplate","Engine","Flexplate for automatic transmission","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["timing-chain","Timing Chain","Engine","Timing chain kit","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["timing-belt","Timing Belt","Engine","Timing belt replacement","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["timing-gears","Timing Gears","Engine","Timing gear assembly","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["camshaft","Camshaft","Engine","Engine camshaft","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["camshaft-bearing","Camshaft Bearing","Engine","Camshaft bearing set","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["intake-valve","Intake Valve","Engine","Intake valve","https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=700&q=80"],
  ["exhaust-valve","Exhaust Valve","Engine","Exhaust valve","https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=700&q=80"],
  ["valve-spring","Valve Spring","Engine","Valve spring set","https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=700&q=80"],
  ["valve-retainer","Valve Retainer","Engine","Valve retainer","https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=700&q=80"],
  ["valve-stem-seal","Valve Stem Seal","Engine","Valve stem seal kit","https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=700&q=80"],
  ["rocker-arm","Rocker Arm","Engine","Rocker arm assembly","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["rocker-shaft","Rocker Shaft","Engine","Rocker shaft","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["tappet-lifter","Tappet / Valve Lifter","Engine","Valve lifter / tappet","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["push-rod","Push Rod","Engine","Push rod","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["valve-guide","Valve Guide","Engine","Valve guide","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["valve-seat","Valve Seat","Engine","Valve seat","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["cylinder-head-gasket","Cylinder Head Gasket","Engine","Head gasket","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["fuel-tank","Fuel Tank","Fuel System","Fuel tank assembly","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["fuel-pump","Fuel Pump","Fuel System","Electric or mechanical fuel pump","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["fuel-filter","Fuel Filter","Fuel System","Fuel filter","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["fuel-rail","Fuel Rail","Fuel System","Fuel delivery rail","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["fuel-injector","Fuel Injector","Fuel System","Fuel injector","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["throttle-body","Throttle Body","Fuel System","Air and fuel control body","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["tps","Throttle Position Sensor","Fuel System","TPS sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["fuel-pressure-regulator","Fuel Pressure Regulator","Fuel System","Pressure regulator","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["high-pressure-fuel-pump","High Pressure Fuel Pump","Fuel System","GDI / diesel high-pressure fuel pump","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["carburetor","Carburetor","Fuel System","Older vehicle carburetor","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["air-filter","Air Filter","Air / Intake System","Air filter element","https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=700&q=80"],
  ["air-filter-housing","Air Filter Housing","Air / Intake System","Air filter housing","https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=700&q=80"],
  ["intake-manifold","Intake Manifold","Air / Intake System","Intake manifold","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["intake-pipe","Intake Pipe","Air / Intake System","Intake pipe","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["maf-sensor","MAF Sensor","Air / Intake System","Mass air flow sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["map-sensor","MAP Sensor","Air / Intake System","Manifold absolute pressure sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["iat-sensor","IAT Sensor","Air / Intake System","Intake air temp sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["intercooler","Intercooler","Air / Intake System","Intercooler unit","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["turbocharger","Turbocharger","Air / Intake System","Turbocharger assembly","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["supercharger","Supercharger","Air / Intake System","Supercharger assembly","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["spark-plug","Spark Plug","Ignition System","Spark plug","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["ignition-coil","Ignition Coil","Ignition System","Ignition coil","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["coil-pack","Coil Pack","Ignition System","Ignition coil pack","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["spark-plug-wire","Spark Plug Wire","Ignition System","Spark plug lead","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["distributor","Distributor","Ignition System","Distributor assembly","https://images.unsplash.com/photo-1635784063385-3b2f7b1c0f75?auto=format&fit=crop&w=700&q=80"],
  ["crankshaft-position-sensor","Crankshaft Position Sensor","Ignition System","Crank sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["camshaft-position-sensor","Camshaft Position Sensor","Ignition System","Cam sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["exhaust-manifold","Exhaust Manifold","Exhaust System","Exhaust manifold","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["exhaust-pipe","Exhaust Pipe","Exhaust System","Exhaust pipe","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["catalytic-converter","Catalytic Converter","Exhaust System","Catalytic converter","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["oxygen-sensor","Oxygen Sensor","Exhaust System","O2 sensor","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["egr-valve","EGR Valve","Exhaust System","EGR valve","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["egr-cooler","EGR Cooler","Exhaust System","EGR cooler","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["diesel-particulate-filter","Diesel Particulate Filter","Exhaust System","DPF filter","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["muffler","Muffler / Silencer","Exhaust System","Silent muffler","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["resonator","Resonator","Exhaust System","Exhaust resonator","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["radiator","Radiator","Cooling System","Car radiator","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["radiator-fan","Radiator Fan","Cooling System","Radiator cooling fan","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["water-pump","Water Pump","Cooling System","Coolant water pump","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["thermostat","Thermostat","Cooling System","Engine thermostat","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["thermostat-housing","Thermostat Housing","Cooling System","Thermostat housing","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["coolant-reservoir","Coolant Reservoir","Cooling System","Coolant tank","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["radiator-cap","Radiator Cap","Cooling System","Radiator cap","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["coolant-hose","Coolant Hose","Cooling System","Coolant hose","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["ect-sensor","Temperature Sensor","Cooling System","ECT sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["cooling-fan-motor","Cooling Fan Motor","Cooling System","Cooling fan motor","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["oil-pan","Oil Pan / Sump","Lubrication / Engine Oil System","Oil pan assembly","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["oil-pump","Oil Pump","Lubrication / Engine Oil System","Engine oil pump","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["oil-filter-2","Oil Filter","Lubrication / Engine Oil System","Oil filter cartridge","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["oil-pickup-tube","Oil Pickup Tube","Lubrication / Engine Oil System","Oil pickup tube","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["oil-pressure-sensor","Oil Pressure Sensor","Lubrication / Engine Oil System","Oil pressure sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["oil-cooler","Oil Cooler","Lubrication / Engine Oil System","Engine oil cooler","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["dipstick","Dipstick","Lubrication / Engine Oil System","Engine oil dipstick","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["oil-filler-cap","Oil Filler Cap","Lubrication / Engine Oil System","Oil filler cap","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["pcv-valve","PCV Valve","Lubrication / Engine Oil System","Positive crankcase ventilation valve","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["timing-chain-guide","Timing Chain Guide","Lubrication / Engine Oil System","Timing chain guide","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["timing-chain-tensioner","Timing Chain Tensioner","Lubrication / Engine Oil System","Chain tensioner","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["timing-belt-tensioner","Timing Belt Tensioner","Lubrication / Engine Oil System","Belt tensioner","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["camshaft-gear","Camshaft Gear / Sprocket","Lubrication / Engine Oil System","Camshaft gear","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["crankshaft-pulley","Crankshaft Pulley","Lubrication / Engine Oil System","Crankshaft pulley","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["vvt-solenoid","VVT Solenoid","Lubrication / Engine Oil System","Variable valve timing solenoid","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["vvt-actuator","VVT Actuator / Cam Phaser","Lubrication / Engine Oil System","Cam phaser actuator","https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=700&q=80"],
  ["knock-sensor","Knock Sensor","Engine Sensors","Knock sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["fuel-pressure-sensor","Fuel Pressure Sensor","Engine Sensors","Fuel pressure sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["boost-pressure-sensor","Boost Pressure Sensor","Engine Sensors","Boost sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["egr-position-sensor","EGR Position Sensor","Engine Sensors","EGR position sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["starter-motor","Starter Motor","Engine Electrical Parts","Starter motor","https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80"],
  ["alternator-part","Alternator","Engine Electrical Parts","Alternator unit","https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80"],
  ["battery-part","Battery","Engine Electrical Parts","Car battery","https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=700&q=80"],
  ["ecu","Engine Control Module","Engine Electrical Parts","ECU / ECM module","https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80"],
  ["engine-wiring-harness","Engine Wiring Harness","Engine Electrical Parts","Wiring harness","https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80"],
  ["fuses","Fuses","Engine Electrical Parts","Electrical fuses","https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80"],
  ["relays","Relays","Engine Electrical Parts","Electrical relay","https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80"],
  ["ground-cable","Ground Cable","Engine Electrical Parts","Ground cable","https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80"],
  ["starter-solenoid","Starter Solenoid","Engine Electrical Parts","Starter solenoid","https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=700&q=80"],
  ["serpentine-belt","Serpentine Belt","Belts & External Engine Parts","Serpentine belt","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["drive-belt","Drive Belt","Belts & External Engine Parts","Drive belt","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["belt-tensioner","Belt Tensioner","Belts & External Engine Parts","Belt tensioner","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["idler-pulley","Idler Pulley","Belts & External Engine Parts","Idle pulley","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["crankshaft-pulley-2","Crankshaft Pulley","Belts & External Engine Parts","Crankshaft pulley","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["water-pump-pulley","Water Pump Pulley","Belts & External Engine Parts","Water pump pulley","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["alternator-pulley","Alternator Pulley","Belts & External Engine Parts","Alternator pulley","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["power-steering-pump","Power Steering Pump","Belts & External Engine Parts","Power steering pump","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["ac-compressor","AC Compressor","Belts & External Engine Parts","Air conditioning compressor","https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80"],
  ["glow-plug","Glow Plug","Diesel Engine","Glow plug","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["glow-plug-relay","Glow Plug Relay","Diesel Engine","Glow plug relay","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["diesel-injector","Diesel Injector","Diesel Engine","Diesel injector","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["common-rail","Common Rail","Diesel Engine","Common rail system","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["diesel-high-pressure-fuel-pump","High Pressure Fuel Pump","Diesel Engine","Diesel high pressure pump","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["diesel-turbocharger","Turbocharger","Diesel Engine","Diesel turbocharger","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["diesel-intercooler","Intercooler","Diesel Engine","Diesel intercooler","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["diesel-dpf","DPF","Diesel Engine","Diesel particulate filter","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["diesel-oxidation-catalyst","Diesel Oxidation Catalyst","Diesel Engine","DOC catalytic converter","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["nox-sensor","NOx Sensor","Diesel Engine","NOx sensor","https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=700&q=80"],
  ["adblue-def-system","AdBlue / DEF System","Diesel Engine","DEF / AdBlue system","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=700&q=80"],
  ["brake-pads","Brake Pads","Brake","Brake pad replacement","https://images.unsplash.com/photo-1600705722908-bab1e75b4c4c?auto=format&fit=crop&w=700&q=80"],
  ["brake-disc","Brake Disc","Brake","Brake disc / rotor","https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80"],
  ["shock","Shock Absorber","Suspension","Suspension component","https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80"],
  ["clutch","Clutch Kit","Other","Clutch replacement kit","https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=700&q=80"],
  ["headlight","Headlight","Other","Headlamp replacement","https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=700&q=80"]
];

const state = {brand:"", model:"", year:"", services:new Set(), parts:new Set(), location:"Home", coordinates:null};
const partCategoryIcons = {
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
  "Brake": "🛑",
  "Suspension": "🛞",
  "AC": "❄️",
  "Other": "🧰"
};

const $ = id => document.getElementById(id);
const toast = msg => { $("toast").textContent=msg; $("toast").classList.add("show"); setTimeout(()=> $("toast").classList.remove("show"),2600); };

function getPartVisual(p){
  const categoryIcon = partCategoryIcons[p[2]] || "🧰";
  return `
    <div class="part-visual">
      <img class="part-img" src="${p[4]}" alt="${p[1]}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('fallback');">
      <div class="part-icon-badge">${categoryIcon}</div>
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

  if (!q && (cat === "all" || cat === "none")) {
    $("partsGrid").innerHTML = `<p>Search for a part or choose a category to view available spare parts.</p>`;
    return;
  }

  const filtered=parts.filter(p => {
    const text = (p[1] + " " + p[2] + " " + p[3]).toLowerCase();
    const matchesQuery = !q || text.includes(q);
    const matchesCategory = cat === "all" || cat === "none" || p[2] === cat;
    return matchesQuery && matchesCategory;
  });

  $("partsGrid").innerHTML=filtered.map(p=>`<article class="part-card ${state.parts.has(p[0])?"selected":""}">
    ${getPartVisual(p)}
    <div class="part-info"><small>${p[2]}</small><b>${p[1]}</b><p>${p[3]}</p><button class="select-part" data-part="${p[0]}">${state.parts.has(p[0])?"✓ Selected":"Select Part"}</button></div>
  </article>`).join("") || `<p>No parts found.</p>`;
}
function togglePart(id){state.parts.has(id)?state.parts.delete(id):state.parts.add(id);renderParts();updateSummary();}
function selectedPartNames(){return parts.filter(p=>state.parts.has(p[0])).map(p=>p[1]);}
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
}
function getValue(id){return $(id).value.trim();}
function makeMessage(){
  const date=$("date").value||"Not specified", time=$("time").value||"Not specified";
  const coords=state.coordinates?`\nMap location: https://maps.google.com/?q=${state.coordinates.lat},${state.coordinates.lng}`:"";
  return `Hello, I would like to request a car service from ${BUSINESS_NAME}.\n\nCUSTOMER DETAILS\nName: ${getValue("name")}\nWhatsApp: ${getValue("phone")}\n\nVEHICLE\nBrand: ${state.brand||"Not selected"}\nModel: ${state.model||"Not selected"}\nYear: ${state.year||"Not specified"}\n\nREPAIR & SERVICES REQUESTED\n${selectedServiceNames().length?selectedServiceNames().map(x=>"- "+x).join("\n"):"- None selected"}\n\nSPARE PARTS REQUIRED\n${selectedPartNames().length?selectedPartNames().map(x=>"- "+x).join("\n"):"- None selected"}\n\nSERVICE LOCATION\nType: ${state.location}\nAddress: ${getValue("address")||"Not provided"}${coords}\n\nPREFERRED DATE: ${date}\nPREFERRED TIME: ${time}\n\nADDITIONAL NOTES\n${getValue("notes")||"None"}\n\nPlease contact me regarding availability and quotation.\nThank you.`;
}
function sendWhatsApp(){
  const name=getValue("name"), phone=getValue("phone"), address=getValue("address");
  if(!state.brand||!state.model){toast("Please select your car brand and model.");$("cars").scrollIntoView({behavior:"smooth"});return;}
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
  const service=e.target.closest("[data-service]"); if(service) toggleService(service.dataset.service);
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
