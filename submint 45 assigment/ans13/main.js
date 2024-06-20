//  changing_guest_list
var guests = ["Ansr", "anwer", "nadeem"];
var guestUnavailable = guests.pop();
console.log("Unfortunately, ".concat(guestUnavailable, " can't make it."));
guests.push("David"); // Replace with a new guest
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
}
