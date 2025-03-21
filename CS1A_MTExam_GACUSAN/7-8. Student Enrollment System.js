// Initialize subjects
let DSA = [];
let WebDev = [];

// Function to handle operations
function manageEnrollment() {
    let subjectChoice = prompt("Choose a subject to enroll in: (A) DSA, (B) WebDev").toUpperCase();
    let selectedSubject = subjectChoice === "A" ? DSA : WebDev;
    
    while (true) {
        let operation = prompt("(A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit").toUpperCase();
        
        if (operation === "A") {
            let studentName = prompt("Enter student name to enroll:");
            selectedSubject.push(studentName);
        } 
        else if (operation === "B") {
            console.log("Enrolled students:", selectedSubject);
            let studentToRemove = prompt("Enter student name to unenroll:");
            let index = selectedSubject.indexOf(studentToRemove);
            if (index !== -1) {
                selectedSubject.splice(index, 1);
            } else {
                console.log("Student not found.");
            }
        } 
        else if (operation === "C") {
            manageEnrollment();
            return;
        } 
        else if (operation === "D") {
            console.log("DSA Students:", DSA);
            console.log("WebDev Students:", WebDev);
            return;
        }
    }
}

// Start enrollment
manageEnrollment();
