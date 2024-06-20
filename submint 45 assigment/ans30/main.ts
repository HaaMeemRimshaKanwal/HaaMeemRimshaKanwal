


// checking_usernames
const currentUsers: string[] = ['hamza', 'muzammil', 'junaid', 'yousf', 'ali'];
const newUsers: string[] = ['ashfaq', 'umar', 'ubad', 'farooq', 'akilS'];

for (const newUser of newUsers) {
    const isTaken = currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase());
    if (isTaken) {
        console.log(`The username '${newUser}' is already taken. Please choose a different username.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}
