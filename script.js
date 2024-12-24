// class to display the current date and time in the browser

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