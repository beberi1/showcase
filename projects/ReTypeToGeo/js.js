// Toggle state: true = Eng→Geo, false = Geo→Eng
let engToGeo = true;
// Variant state: 0 = Variant 1, 1 = Variant 2
let variant = 0;

const langToggle = document.getElementById("langToggle");
const flagImg = document.getElementById("flagImg");
let currentLang = "geo"; // default language


const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const toggleBtn = document.getElementById("toggleBtn");
const variantBtn = document.getElementById("variantBtn");

// --- Variant 1 ---
const engGeoMapV1 = {
  A: "ა", a: "ა", B: "ბ", b: "ბ", G: "გ", g: "გ", 
  D: "დ", d: "დ", E: "ე", e: "ე", V: "ვ", v: "ვ",
  z: "ზ", Z: "ძ", t: "ტ", T: "თ", I: "ი", i: "ი", 
  K: "კ", k: "კ", L: "ლ", l: "ლ", M: "მ", m: "მ",
  N: "ნ", n: "ნ", O: "ო", o: "ო", P: "პ", p: "პ",
  j: "ჯ", J: "ჟ", r: "რ", R: "ღ", s: "ს", S: "შ",
  U: "უ", u: "უ", F: "ფ", f: "ფ", Q: "ქ", q: "ქ", 
  Y: "ყ", y: "ყ", c: "ც", C: "ჩ", w: "წ", W: "ჭ",
  X: "ხ", x: "ხ", H: "ჰ", h: "ჰ", 
};

// --- Variant 2 ---
const engGeoMapV2 = {
  A: "ა", a: "ა", B: "ბ", b: "ბ", G: "გ", g: "გ", 
  D: "დ", d: "დ", E: "ე", e: "ე", V: "ვ", v: "ვ",
  z: "ზ", Z: "ძ", t: "ტ", T: "თ", I: "ი", i: "ი", 
  K: "კ", k: "კ", L: "ლ", l: "ლ", M: "მ", m: "მ",
  N: "ნ", n: "ნ", O: "ო", o: "ო", P: "პ", p: "პ",
  j: "ჯ", J: "ჟ", r: "რ", R: "ღ", s: "ს", S: "შ",
  U: "უ", u: "უ", F: "ფ", f: "ფ", Q: "ქ", q: "ქ", 
  Y: "ყ", y: "ყ", c: "ც", C: "ჩ", w: "წ", W: "ჭ",
  X: "ხ", x: "ხ", H: "ჰ", h: "ჰ", sh: "შ", ch: "ჩ",
  ts: "ც", dz: "ძ", ts2: "წ", ch2: "ჭ", kh: "ხ",
  gh: "ღ", h: "ჰ", x: "ხ", t: "ტ", c: "ც", 
};

// Function to get current map
function getCurrentMap() {
  return variant === 0 ? engGeoMapV1 : engGeoMapV2;
}

// Build reverse map
function buildReverseMap(map) {
  const reverse = {};
  for (let [k, v] of Object.entries(map)) {
    reverse[v] = k;
  }
  return reverse;
}

function transliterate(text) {
  const map = getCurrentMap();
  const reverseMap = buildReverseMap(map);

  if (!engToGeo) {
    // Geo → Eng
    return text.split("").map(ch => reverseMap[ch] || ch).join("");
  } else {
    // Eng → Geo
    let result = text;

    // handle combos (only for variant 2)
    if (variant === 1) {
      const combos = ["sh","ch2","ch","ts2","ts","dz","kh","gh"];
      for (let combo of combos) {
        if (map[combo]) {
          result = result.replaceAll(combo, map[combo]);
        }
      }
    }

    // then handle single characters
    result = result.split("").map(ch => map[ch] || ch).join("");
    return result;
  }
}

// Fucntion caller when user inputs the text into the field
inputText.addEventListener("input", () => {
  outputText.value = transliterate(inputText.value);
});

// Toggle Eng ↔ Geo
toggleBtn.addEventListener("click", () => {
  engToGeo = !engToGeo;
  if (currentLang === "geo"){
    toggleBtn.textContent = engToGeo ? "ინგლისური → ქართული" : "ქართული → ინგლისური";
  } else {
    toggleBtn.textContent = engToGeo ? "Eng → Geo" : "Geo → Eng";
  }
    outputText.value = transliterate(inputText.value);
});

// Toggle Variant 1 ↔ Variant 2
variantBtn.addEventListener("click", () => {
  variant = variant === 0 ? 1 : 0;
  if (currentLang === "geo"){
    variantBtn.textContent = variant === 0 ? "ვარიანტი 1" : "ვარიანტი 2";
  } else {
    variantBtn.textContent = variant === 0 ? "Variant 1" : "Variant 2";
  }
    outputText.value = transliterate(inputText.value);
});


// Copy output text to clipboard
document.getElementById("copytext").addEventListener("click", () => {
  outputText.select();                       // select all text inside the textarea
  outputText.setSelectionRange(0, 99999);    // for mobile support
  navigator.clipboard.writeText(outputText.value)
    .then(() => {
      if (currentLang === "geo") {
        alert("წარმატებით დაკოპირდა!");
      } else {
        alert("Copied to clipboard!");
      }
    })
    .catch(err => {
      console.error("Copy failed", err);
    });
});





// ენის შეცვლის ნაწილი - Language change part


// text references
const texts = {
  geo: {
    mygit: "ჩემი გითჰაბი:",
    toggleBtn: "ინგლისური → ქართული",
    variantBtn1: "ვარიანტი 1",
    variantBtn2: "ვარიანტი 2",
    copytext: "კოპირება",
    inputPlaceholder: "შეიყვანეთ ტექსტი...",
    outputPlaceholder: "გადმოქართულებული ტექსტი...",
    variantTooltip: "ვარიანტი 1 - a=ა, C=ჩ | ვარიანტი 2 - ch=ჩ, kh=ხ",
    inputTextLabel: "შეიყვანეთ ტექსტი",
    outputTextLabel: "ნათარგმნი ტექსტი",
  },
  eng: {
    mygit: "My GitHub:",
    toggleBtn: "Eng → Geo",
    variantBtn1: "Variant 1",
    variantBtn2: "Variant 2",
    copytext: "Copy",
    inputPlaceholder: "Type or paste your text here...",
    outputPlaceholder: "Converted text will appear here...",
    variantTooltip: "Variant 1 - a=ა, C=ჩ | Variant 2 - ch=ჩ, kh=ხ",
    inputTextLabel: "Input Text",
    outputTextLabel: "Translated Text",
  },
};

// Function to update all visible text
function updateLanguage() {
  const lang = texts[currentLang];
  document.getElementById("mygit").textContent = lang.mygit;
  toggleBtn.textContent = lang.toggleBtn;
  variantBtn.textContent = variant === 0 ? lang.variantBtn1 : lang.variantBtn2;
  variantBtn.setAttribute("data-tooltip", lang.variantTooltip);
  document.getElementById("copytext").textContent = lang.copytext;
  inputText.placeholder = lang.inputPlaceholder;
  outputText.placeholder = lang.outputPlaceholder;
  document.getElementById("inputTextLabel").textContent = lang.inputTextLabel;
  document.getElementById("outputTextLabel").textContent = lang.outputTextLabel;
}

// Language toggle button logic
langToggle.addEventListener("click", () => {
  if (currentLang === "geo") {
    currentLang = "eng";
    flagImg.src = "resources/eng.png"; // change to your English flag image
    flagImg.alt = "English";
  } else {
    currentLang = "geo";
    flagImg.src = "resources/geo.png";
    flagImg.alt = "Georgian";
  }
  updateLanguage();
});

// Initialize default (Georgian)
updateLanguage();
