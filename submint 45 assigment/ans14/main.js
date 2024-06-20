//  more_guests
var guests = ["Akil", "Ans", "Abrar"];
console.log("Good news! We found a bigger dinner table.");
guests.unshift("Shanoor"); // Add a new guest at the beginning
guests.splice(2, 0, "Sham shair"); // Add a new guest in the middle
guests.push("Sultan"); // Add a new guest at the end
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
