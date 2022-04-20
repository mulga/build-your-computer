const computer = [
  {
    model: "0Z15G-00160",
    display: "14 inches",
    keyboard: "English",
    memory: "16GB",
    storage: "1TB SSD",
    processor: "Apple M1 Pro",
  },
  {
    model: "25ABCDE",
    display: "17 inches",
    keyboard: "German",
    memory: "20GB",
    storage: "512 SSD",
    processor: "Intel i9",
  },
];

function Computer(model, display, keyboard, memory, storage, processor) {
  this.model = model;
  this.display = display;
  this.keyboard = keyboard;
  this.memory = memory;
  this.storage = storage;
  this.processor = processor;
}

const test = new Computer(
  "Z65",
  "15 inches",
  "Turkish",
  "32GB",
  "512 SSD",
  "i9"
);

console.log(test);

//

// let modelText = document.getElementsByClassName("model-text");

//
function createYourComputer() {
  let inputModel = document.getElementById("model").value;
  let inputDisplay = document.getElementById("display").value;
  let inputKeyboard = document.getElementById("keyboard").value;
  let inputMemory = document.getElementById("memory").value;
  let inputStorage = document.getElementById("storage").value;
  let inputProcessor = document.getElementById("processor").value;
  let listResult = document.getElementById("detailsList");

  //

  let modelText = document.getElementById("model-text");

  //

  const creatingComputer = new Computer(
    inputModel,
    inputDisplay,
    inputKeyboard,
    inputMemory,
    inputStorage,
    inputProcessor
  );

  computer.push(creatingComputer);
  console.log(computer);

  listResult.style.display = "block";

  modelText.innerHTML = inputModel;
  displayText.innerHTML = inputDisplay;
  keyboardText.innerHTML = inputKeyboard;
  memoryText.innerHTML = inputMemory;
  storageText.innerHTML = inputStorage;
  processorText.innerHTML = inputProcessor;
  //   document.getElementById("model-text").innerHTML = modelText;
}
