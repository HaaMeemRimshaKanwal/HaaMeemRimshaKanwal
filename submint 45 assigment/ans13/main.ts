





//  changing_guest_list
let guests: string[] = ["Ansr", "anwer", "nadeem"];
const guestUnavailable = guests.pop();
console.log(`Unfortunately, ${guestUnavailable} can't make it.`);

guests.push("David"); // Replace with a new guest
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
