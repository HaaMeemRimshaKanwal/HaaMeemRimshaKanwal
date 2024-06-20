

// dream_vacation
interface VacationPoll {
    [name: string]: string;
}

const vacationPoll: VacationPoll = {};

function addVacationPoll(name: string, destination: string): void {
    vacationPoll[name] = destination;
}

addVacationPoll("ALI", "rahill");
addVacationPoll("hamza", "hammd");
addVacationPoll("shamshair", "kamran");

console.log("Dream vacation poll results:");
for (const name in vacationPoll) {
    if (vacationPoll.hasOwnProperty(name)) {
        console.log(`${name} would like to go to ${vacationPoll[name]}.`);
    }
}
