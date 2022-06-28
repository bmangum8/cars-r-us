/*
-import getInteriors and setInteriors from database
*-set a const of interiors to getInteriors()
*-In each of the modules, generate a <select> element that has child <option> elements as HTML representation of each object in the corresponding array in the database module.
*-Add an event listener that reacts to the customer choosing one of the options.
*/



import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

//target.id is the id from html element
//setPaint temporarily adds the interior id of the item the user chooses to the interiorId 
//in orderBuilder (the temporary empty object)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") { 
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select a interior option</option>'

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.interior}</option>`
    }
    html += "</select>"
    return html
}