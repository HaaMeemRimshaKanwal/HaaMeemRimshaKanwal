// checking_usernames
var currentUsers = ['hamza', 'muzammil', 'junaid', 'yousf', 'ali'];
var newUsers = ['ashfaq', 'umar', 'ubad', 'farooq', 'akilS'];
var _loop_1 = function (newUser) {
    var isTaken = currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); });
    if (isTaken) {
        console.log("The username '".concat(newUser, "' is already taken. Please choose a different username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
