const elementNames = ["hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen", "fluorine", "neon", "sodium", "magnesium", "aluminium", "silicon", "phosphorus", "sulfur", "chlorine", "argon", "potassium", "calcium", "scandium", "titanium", "vanadium", "chromium", "manganese", "iron", "cobalt", "nickel", "copper", "zinc", "gallium", "germanium", "arsenic", "selenium", "bromine", "krypton", "rubidium", "strontium", "yttrium", "zirconium", "niobium", "molybdenum", "technetium", "ruthenium", "rhodium", "palladium", "silver", "cadmium", "indium", "tin", "antimony", "tellurium", "iodine", "xenon", "caesium", "barium", "lanthanum", "cerium", "praseodymium", "neodymium", "promethium", "samarium", "europium", "gadolinium", "terbium", "dysprosium", "holmium", "erbium", "thulium", "ytterbium", "lutetium", "hafnium", "tantalum", "tungsten", "rhenium", "osmium", "iridium", "platinum", "gold", "mercury", "thallium", "lead", "bismuth", "polonium", "astatine", "radon", "francium", "radium", "actinium", "thorium", "protactinium", "uranium", "neptunium", "plutonium", "americium", "curium", "berkelium", "californium", "einsteinium", "fermium", "mendelevium", "nobelium", "lawrencium", "rutherfordium", "dubnium", "seaborgium", "bohrium", "hassium", "meitnerium", "darmstadtium", "roentgenium", "copernicium", "nihonium", "flerovium", "moscovium", "livermorium", "tennessine", "oganesson"]

let currentElement;
let element = [];

let score;

window.onload = function() {

}

function calculate() {
	
	var refreshRate = document.getElementById("refreshrate").value;
	var time = document.getElementById("time").value;

	refreshRate = refreshRate.replace(",",".");
	time = time.replace(",",".");

	var result = time*((1/refreshRate)*60);
	result = Math.round((result + 0.00001) * 1000) / 1000
	
	document.getElementById("output").innerHTML = result;

}

function isNumber(event) {
  var keycode = event.keyCode;
  if ((keycode>47 && keycode<58) || keycode==44 || keycode==46) {
    calculate(); 
    return true;
  }
  return false;
}
