var vacationPoll = {};
function addVacationPoll(name, destination) {
    vacationPoll[name] = destination;
}
addVacationPoll("ALI", "rahill");
addVacationPoll("hamza", "hammd");
addVacationPoll("shamshair", "kamran");
console.log("Dream vacation poll results:");
for (var name_1 in vacationPoll) {
    if (vacationPoll.hasOwnProperty(name_1)) {
        console.log("".concat(name_1, " would like to go to ").concat(vacationPoll[name_1], "."));
    }
}
