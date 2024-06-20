

// File: seeing_the_world.ts
let placesToVisit: string[] = ["Japan", "Italy", "Australia", "Iceland", "Canada"];

// Original order
console.log("Original order:");
console.log(placesToVisit);

// Alphabetical order
console.log("Alphabetical order:");
console.log(placesToVisit.slice().sort());

// Original order (verify)
console.log("Original order (verify):");
console.log(placesToVisit);

// Reverse alphabetical order
console.log("Reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());

// Original order (verify)
console.log("Original order (verify):");
console.log(placesToVisit);

// Reverse the array
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);

// Reverse again to restore original order
placesToVisit.reverse();
console.log("Restored original order:");
console.log(placesToVisit);

// Sort in alphabetical order
placesToVisit.sort();
console.log("Sorted alphabetically:");
console.log(placesToVisit);

// Sort in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit);
