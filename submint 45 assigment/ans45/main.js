// File: dinner_guests.ts
var guestList = ["hamza", "muzammil", "gani"];
function inviteGuest(name) {
    guestList.push(name);
    console.log("".concat(name, " has been invited."));
}
function cancelInvitation(name) {
    var index = guestList.indexOf(name);
    if (index !== -1) {
        guestList.splice(index, 1);
        console.log("".concat(name, "'s invitation has been canceled."));
    }
    else {
        console.log("".concat(name, " is not in the guest list."));
    }
}
function printGuestList() {
    console.log("Current guest list:");
    for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
        var guest = guestList_1[_i];
        console.log(guest);
    }
}
// Inviting more guests
inviteGuest("junaid");
inviteGuest("yousuf");
// Canceling an invitation
cancelInvitation("hammad");
// Printing the final guest list
printGuestList();
