
// File: dinner_guests.ts
let guestList: string[] = ["hamza", "muzammil", "gani"];

function inviteGuest(name: string): void {
    guestList.push(name);
    console.log(`${name} has been invited.`);
}

function cancelInvitation(name: string): void {
    const index = guestList.indexOf(name);
    if (index !== -1) {
        guestList.splice(index, 1);
        console.log(`${name}'s invitation has been canceled.`);
    } else {
        console.log(`${name} is not in the guest list.`);
    }
}

function printGuestList(): void {
    console.log("Current guest list:");
    for (const guest of guestList) {
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
