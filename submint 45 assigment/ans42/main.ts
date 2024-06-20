


//  sandwiches
function makeSandwich(...items: string[]): void {
    console.log("Your sandwich includes:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
}

makeSandwich("Ham", "Cheese", "Lettuce");
makeSandwich("Turkey", "Tomato", "Mayo");
makeSandwich("Peanut Butter", "Jelly");
