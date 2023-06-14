// Your code here
function createEmployeeRecord(employee){
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
}
function createEmployeeRecords(employees){
    return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(event, dateHour){
    let [date, hour] = dateHour.split(" ")

  let obj = {
        type:"TimeIn",
        hour: parseInt(hour),
        date: date,
    }
    event.timeInEvents.push(obj)
    return event
}

 function createTimeOutEvent(event, dateHour){
    let [date, hour] = dateHour.split(" ")
    let obj= {
        type:"TimeOut",
        hour: parseInt(hour),
        date:date,
    }
    event.timeOutEvents.push(obj)
    return event
 }

function hoursWorkedOnDate(event, date){
let timeIn =  event.timeInEvents.find(element => element.date === date)
let timeOut = event.timeOutEvents.find(element => element.date === date)
let hoursWorked = (timeOut.hour - timeIn.hour) / 100
return hoursWorked 
}



function wagesEarnedOnDate(event, date) {
   let hours = hoursWorkedOnDate(event, date)
    return event.payPerHour * hours
}

function allWagesFor(employee){
let employeeArray= employee.timeInEvents.map(emp => emp.date)
let wagesArray= employeeArray.map(date => wagesEarnedOnDate(employee,date))

    const initialValue = 0;
    const sumWithInitial = wagesArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
 return sumWithInitial

    }


function calculatePayroll(employees){

const allEmployees = employees.map(employee => allWagesFor(employee))

   const initialValue = 0;
   const sumWithInitial = allEmployees.reduce(
     (accumulator, currentValue) => accumulator + currentValue,
     initialValue
   );
     return sumWithInitial

}