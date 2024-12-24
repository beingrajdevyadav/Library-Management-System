// -------------------------------------------------------
// class to display the current date and time in the browser
// ---------------------------------------------------------
class PrintDateTime{
    constructor(dateTag, timeTag){
        this.dateElement = document.querySelector("#dateTag");
        this.timeElement = document.querySelector("#timeTag");
    }

    // function to display the current date and time
    updateDateTime(){
        let date = new Date();
        this.dateElement.innerHTML = date.toDateString();
        this.timeElement.innerHTML = date.toLocaleTimeString();
    }

    start(){
        this.updateDateTime();
        setInterval(() => {
            this.updateDateTime();
        }, 1000);
    }
}

let printDateTime = new PrintDateTime("#dateTag", "#timeTag");
printDateTime.start();

// ----------------------------------------------
//  student class 
// ----------------------------------------------

class Student{
    constructor(name){
        this.name = name;
    }
}

// ----------------------------------------------
// book class
// ----------------------------------------------

class Book{
    constructor(title){
        this.title = title;
    }
}

// ----------------------------------------------
// transaction class
// ----------------------------------------------

class Transaction{
    constructor(student, book, type, date, time){
        this.student = student;
        this.book = book;
        this.type = type;
        this.date = date;
        this.time = time;
    }
}

// ----------------------------------------------
// date time class
// ----------------------------------------------
class DateTime{
    constructor(){
        this.date = new Date();
    }

    getFormattedDate(){
        return this.date.toLocaleDateString();
    }
    getFormattedTime(){
        return this.date.toLocaleTimeString();
    }
}

// ----------------------------------------------
// function to add transaction
// ----------------------------------------------

function addTransaction(){
   // html elements selection
    const studentName = document.querySelector("#studentName").value;
    const bookTitle = document.querySelector("#bookTitle").value;
    const transactionType = document.querySelector("#transactionType").value;

    // check if the input fields are not empty
    if(studentName && bookTitle && transactionType){
        const student = new Student(studentName);
        const book = new Book(bookTitle);
        const dateTime = new DateTime();
        const transaction = new Transaction(student, book, transactionType, dateTime.getFormattedDate(), dateTime.getFormattedTime());
    
        console.log(transaction);
    
        let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    
        transactions.push(transaction);
    
        localStorage.setItem("transactions", JSON.stringify(transactions));

        displayTransactions();
    }
    
}

// ----------------------------------------------
// function to display transactions
// ----------------------------------------------

function displayTransactions(){
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    const transactionTableBody = document.querySelector("#transactionTableBody");
    transactionTableBody.innerHTML = "";

    transactions.forEach((transaction, index)=>{
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${transaction.student.name}</td>
        <td>${transaction.book.title}</td>
        <td>${transaction.type}</td>
        <td>${transaction.date}</td>
        <td>${transaction.time}</td>
        `;
        transactionTableBody.appendChild(tr);
    });
}

// ----------------------------------------------
// function to clear transactions
// ----------------------------------------------
function clearTransactions(){
    localStorage.clear();
    displayTransactions();
}

// ----------------------------------------------
// event listeners for add transaction and clear transaction
// ----------------------------------------------
window.onload = displayTransactions();