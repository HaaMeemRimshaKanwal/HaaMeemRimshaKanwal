

//  more_guests
let guests: string[] = ["Akil", "Ans", "Abrar"];
console.log("Good news! We found a bigger dinner table.");

guests.unshift("Shanoor"); // Add a new guest at the beginning
guests.splice(2, 0, "Sham shair"); // Add a new guest in the middle
guests.push("Sultan"); // Add a new guest at the end

for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
