let nameStored;
let dataStored;

function storeName() {
    let nameInput = document.querySelector(".inputBox"); // Use querySelector to select a single element
    nameStored = nameInput.value;

    let nameDisplay = document.querySelector(".namE"); // Select the element to display the name
    nameDisplay.textContent = nameStored; // Set the text content of the element

    let wrap = document.querySelector(".wrap");
    let wrap2 = document.querySelector(".wrap2");

    wrap.classList.remove("show"); // Remove 'show' class from the first wrap
    wrap2.classList.remove("visible"); // Remove 'visible' class from the second wrap

    wrap.classList.add("visible"); // Add 'visible' class to the first wrap
    wrap2.classList.add("show"); // Add 'show' class to the second wrap
}

function clearInputBox() {
    var inputBox = document.querySelector('.inputBox');
    inputBox.value = ''; // Clear the input box value
}

// Attach the clearInputBox function to the "Clear" button click event
var clearButton = document.querySelector('.btn.clear');
clearButton.addEventListener('click', clearInputBox);
