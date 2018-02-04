window.onload = function () {
	initShoppingList();
};

function initShoppingList() {
	let form = document.getElementByID("item-form");

	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}

function handleItemForm (event, formRef) {
	if(event.preventDefault) {
		event.preventDefault();
	}

	addItemToShoppingList();

	return false;
}

function addItemToShoppingList() {
	let itemName = document.getElementByID("item-name");
	let itemAmount = document.getElementByID("item-amount");
	let itemHtml = createListItemHtml(itemName.value, itemAmount.value);
	let itemListRef = document.getElementById("shopping-list");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);
}

function createListItemHtml(itemName, itemAmount) {
	return '<li>
				${itemName} - ${itemAmount}
				<button type="button">Delete Item</button>
 	</li>';
}