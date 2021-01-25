
//Travel business logic
function Travel(location, landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}
let travelOutput = [];

// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function (contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

AddressBook.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function (id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
}

AddressBook.prototype.deleteContact = function (id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

// User Interface Logic ---------
let addressBook = new AddressBook();

$(document).ready(function () {
  $("#travelForm").submit(function (event) {
    event.preventDefault();
    const location = $("#location").val();
    const landmark = $("#landmark").val();
    const time = $("#time").val();
    const notes = $("#notes").val();
    let travelTotal = new Travel(location, landmark, time, notes);
    travelOutput.push(location);
    $(".travelLog").text(travelOutput);
    document.getElementById("travelForm").reset();

    $(".travelLog").click(function () {
      $(".travelLog").append(`
      <ul>
        <li>${travelTotal.location}</li>
        <li>${travelTotal.landmark}</li>
        <li>${travelTotal.time}</li>
        <li>${travelTotal.notes}</li>
      </ul>
      `)
    });
  });

  $("form#new-contact").submit(function (event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
  });
});

/*

1. Create 1 contructor hold all the todos

2. Create 1 contructor to take in a single todo
function Todo(task, deadline, notes) {
  this.task = task;
  this.deadlone = deadline;
  this.notes = notes;
}
3. single todo to take 2 parameters

4. Take in 2 form inputs

5. Append the singluar todo to the master todo list

6. Show on HTML

7. Add a feature to mark it complete (Add another parameter to the single todo constructor)

*/