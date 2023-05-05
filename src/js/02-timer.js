// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/material_green.css");
const Russian = require("flatpickr/dist/l10n/ru.js").default.ru;
flatpickr.localize(Russian);

const input = document.querySelector('#datetime-picker')
let dataNow = 0
let dataFuture = 0

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    // minDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates, dateStr) {
        dataFuture = dateStr
        console.log(dateStr);
    },
    onOpen(selectedDates, dateStr){
        console.log(dateStr);
        dataNow = dateStr
    },
    
};



 const calendars =  flatpickr(input, options)



if(dataNow>dataFuture){
    window.alert("Please choose a date in the future")
}

