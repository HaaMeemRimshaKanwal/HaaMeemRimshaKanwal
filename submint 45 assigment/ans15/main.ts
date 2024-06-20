
// shrinking_guest_list
let guests: string[] = ["Hasnan", "kamal", "umar", "Daniyal", "maiz", "shah jahn", "Ghani"];
console.log("Sorry, the new dinner table won't arrive in time.");

const maxGuests: number = 2;
while (guests.length > maxGuests) {
    const removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

guests = []; // Empty the list
console.log(`Guest list: ${guests}`);
