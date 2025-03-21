// Ask user if they want to create a grocery list
let createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase();

if (createList === "y") {
    let itemCount = parseInt(prompt("How many items do you want to add?"));
    let grocery_list = [];

    // Collect grocery items
    for (let i = 0; i < itemCount; i++) {
        grocery_list.push(prompt(`Enter item ${i + 1}:`));
    }

    // Sort and reverse the list
    let groceryList_Sort = [...grocery_list].sort();
    let groceryList_Reverse = [...grocery_list].reverse();

    // Display lists
    alert(`Grocery List: ${grocery_list.join(", ")}`);
    alert(`Sorted List: ${groceryList_Sort.join(", ")}`);
    alert(`Reversed List: ${groceryList_Reverse.join(", ")}`);
}
