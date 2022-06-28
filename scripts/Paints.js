/*
Colors.js
*-import getColors and setColors from database
*-set a const of colors to getColors()
*-In each of the modules, generate a <select> element that has child <option> elements as HTML representation of each object in the corresponding array in the database module.
*-Add an event listener that reacts to the customer choosing one of the options.
*/



import { getPaints, setPaint } from "./database.js"

const paints = getPaints()


//target.id is the id from html element
//setPaint temporarily adds the paint id of the item the user chooses to the paintId 
//in orderBuilder (the temporary empty object)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") { 
            setPaint(parseInt(event.target.value))
        }
    }
)

export const Paints = () => {
    let html = "<h2>Paints</h2>"

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.paint}</option>`
    }
    html += "</select>"
    return html
}

