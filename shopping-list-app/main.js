const inputElement = document.getElementById('productInput');
const addButtonElement = document.getElementById('addButton');
const listElement = document.getElementById('shoppingList');

const productsList = [];

function render() {
    let htmlContent = '';
    productsList.forEach((product, i) => {
        htmlContent += `
            <li>
                ${product}
                <a href="#" data-remove-index="${i}">\u274C</a>
            </li>
        `;
    });
    listElement.innerHTML = htmlContent;
}


function addNewProduct() {
    const inputValue = inputElement.value;
    if (!inputValue) {
        return;
    }
    productsList.push(inputValue);
    inputElement.value = '';
    render();
}


addButtonElement.addEventListener('click', addNewProduct);

inputElement.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        addNewProduct();
    }
});

listElement.addEventListener('click', (event) => {
    const { removeIndex } = event.target.dataset;
    if (removeIndex) {
        productsList.splice(removeIndex, 1);
        render();
    }
});