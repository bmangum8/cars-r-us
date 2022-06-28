/*
-import getWheels and setWheels from database
*-set a const of wheels to getWheels()
*-In each of the modules, generate a <select> element that has child <option> elements as HTML representation of each object in the corresponding array in the database module.
*-Add an event listener that reacts to the customer choosing one of the options.
*/


import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()


//target.id is the id from html element
//setWheels temporarily adds the wheel id of the item the user chooses to the wheelId 
//in orderBuilder (the temporary empty object)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") { 
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>wheels</h2>"

    html += '<select id="wheel">'
    html += '<option value="0">Select a wheel package</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.wheel}</option>`
    }
    html += "</select>"
    return html
}