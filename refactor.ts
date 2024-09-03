// Cr: ExplainThis.io
// Method 1: replace switch case with Map

function choose(subtitle: string) {
    switch (subtitle) {
        case "a":
            return "00:16";
        case "b":
            return "00:39";
    }
}

// Replaced with
const subtitleMap = new Map([
    ["a", "00:16"],
    ["b", "00:39"]
]);


// Method 2: Handle return earlier

function getMonthDays(year: number, month: number): number {
    if (Number.isInteger(month) && month <= 12 && month >= 1) {
        if (Number.isInteger(year) && year > 0) {
            return 0; // randomValue
        } else {
            throw new Error("The parameter 'year' is invalid");
        }
    } else {
        throw new Error("The parameter 'month' is invalid");
    }
}

// Replaced with
function getMonthDays2(year: number, month: number): number {
    if (!Number.isInteger(month) && month > 12 && month < 1) {
        throw new Error("The parameter 'month' is invalid");
    }
    if (!Number.isInteger(year) && year < 0) {
        throw new Error("The parameter 'year' is invalid");
    }
    return 0;
}


// Method 3: Use functional programming
let result = Array<JobPosition>();
for (let position of positions) {
    if (position.name.includes("Software")) {
        result.push(position);
    }
}

// Replaced with
let result = positions.filter(position => position.name.includes("Software"));
