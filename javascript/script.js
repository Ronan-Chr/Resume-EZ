// Save application page
var saveBtn = document.getElementById("save-btn");

if (saveBtn) {
    saveBtn.addEventListener("click", function() {
        var company = document.getElementById("company").value;
        var role = document.getElementById("role").value;
        var status = document.getElementById("status").value;
        var date = document.getElementById("date").value;
        var comp = document.getElementById("comp").value;
        var notes = document.getElementById("notes").value;
        var job = {
            company: company,
            role: role,
            status: status,
            date: date,
            comp: comp,
            notes: notes
        };
        var jobs = localStorage.getItem("jobs");
        if (jobs) {
            jobs = JSON.parse(jobs);
        } else {
            jobs = [];
        }
        jobs.push(job);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        alert("Application Saved");
    });
}
// Display table logic for the INDEX page
var tableBody = document.getElementById("job-table-body");
if (tableBody) {
    var jobs = localStorage.getItem("jobs");
    if (jobs) {
        jobs = JSON.parse(jobs);
    } else {
        jobs = [];
    }
    for (var i = 0; i < jobs.length; i++) {
        var row = document.createElement("tr");
// Company in table fetched upper case initialized to first character 
        var company = document.createElement("td");
        company.textContent = jobs[i].company.charAt(0).toUpperCase() + jobs[i].company.slice(1);
// Role in table fetched upper case initialized to first character 
        var role = document.createElement("td");
        role.textContent = jobs[i].role.charAt(0).toUpperCase() + jobs[i].role.slice(1);
// Status fetched and displayed
        var statusCell = document.createElement("td");
        var badge = document.createElement("span");
        badge.textContent = jobs[i].status;
// pill styling shape of colored status icon
        badge.style.padding = "6px 12px";
        badge.style.borderRadius = "20px";
        badge.style.color = "white";
        badge.style.fontSize = "0.85rem";
        badge.style.display = "inline-block";
// color logic for status
        if (jobs[i].status === "Applied") {
            badge.style.backgroundColor = "gray";
        }
        else if (jobs[i].status === "Assessment") {
            badge.style.backgroundColor = "orange";
        }
        else if (jobs[i].status === "Interview") {
            badge.style.backgroundColor = "blue";
        }
        else if (jobs[i].status === "Offer") {
            badge.style.backgroundColor = "green";
        }
        else if (jobs[i].status === "Accepted") {
            badge.style.backgroundColor = "purple";
        }
        else if (jobs[i].status === "Rejected") {
            badge.style.backgroundColor = "red";
        }
        statusCell.appendChild(badge);
// Details button which brings you from index to details page
        var details = document.createElement("td");
        var button = document.createElement("button");
        button.textContent = "View";
        button.className = "btn btn-sm btn-primary";
        details.appendChild(button);
// Creates a new appendage to table adding new applications
        row.appendChild(company);
        row.appendChild(role);
        row.appendChild(statusCell);
        row.appendChild(details);
        tableBody.appendChild(row);
    }
}
// Details page logic 
var detailsBody = document.getElementById("details-table-body");
if (detailsBody) {
    var jobs = localStorage.getItem("jobs");
    if (jobs) {
        jobs = JSON.parse(jobs);
    } else {
        jobs = [];
    }
    for (var i = 0; i < jobs.length; i++) {
        var row = document.createElement("tr");
// Company fetched and makes first character capitalized
        var company = document.createElement("td");
        company.textContent = jobs[i].company.charAt(0).toUpperCase() + jobs[i].company.slice(1);
// Role fecthed and makes the first character capitalized 
        var role = document.createElement("td");
        role.textContent = jobs[i].role.charAt(0).toUpperCase() + jobs[i].role.slice(1);
// Status is fetched and displayed and uses badge logic to add aestcthic to the page / color
        var statusCell = document.createElement("td");
        var badge = document.createElement("span");
        badge.textContent = jobs[i].status;
//Badges logic AKA pill shaped color behind statuss in tables
        badge.style.padding = "6px 12px";
        badge.style.borderRadius = "20px";
        badge.style.color = "white";
        badge.style.fontSize = "0.85rem";

        if (jobs[i].status === "Applied") {
            badge.style.backgroundColor = "gray";
        }
        else if (jobs[i].status === "Assessment") {
            badge.style.backgroundColor = "orange";
        }
        else if (jobs[i].status === "Interview") {
            badge.style.backgroundColor = "blue";
        }
        else if (jobs[i].status === "Offer") {
            badge.style.backgroundColor = "green";
        }
        else if (jobs[i].status === "Accepted") {
            badge.style.backgroundColor = "purple";
        }

        statusCell.appendChild(badge);
// Date is fetched
        var date = document.createElement("td");
        date.textContent = jobs[i].date;
// Compensation is fetched
        var comp = document.createElement("td");
        comp.textContent = jobs[i].comp;
// Notes are fetched for display
        var notes = document.createElement("td");
        notes.textContent = jobs[i].notes;
// Appends new rows into the table 
        row.appendChild(company);
        row.appendChild(role);
        row.appendChild(statusCell);
        row.appendChild(date);
        row.appendChild(comp);
        row.appendChild(notes);

        detailsBody.appendChild(row);
    }
}