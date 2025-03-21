// Initialize an empty array
let colors = [];

// Collect three colors from the user
for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter color ${i + 1}:`);
    colors.push(color);
    console.log(`Current Colors: ${colors.join(", ")}`);
}
