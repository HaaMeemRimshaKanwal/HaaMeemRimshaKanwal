// shrinking_guest_list
var guests = ["Hasnan", "kamal", "umar", "Daniyal", "maiz", "shah jahn", "Ghani"];
console.log("Sorry, the new dinner table won't arrive in time.");
var maxGuests = 2;
while (guests.length > maxGuests) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
guests = []; // Empty the list
console.log("Guest list: ".concat(guests));
