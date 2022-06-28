/*
-import getTechnologies and setTechnology from database
*-set a const of technologies to getTechnologies()
*-In each of the modules, generate a <select> element that has child <option> elements as HTML representation of each object in the corresponding array in the database module.
*-Add an event listener that reacts to the customer choosing one of the options.
*/



import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()


//target.id is the id from html element
//setTechnology temporarily adds the technology id of the item the user chooses to the technologyId 
//in orderBuilder (the temporary empty object)
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technology") { 
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="technology">'
    html += '<option value="0">Select a technology package</option>'

    for (const technology of technologies) {
        html += `<option value="${technology.id}">${technology.technology}</option>`
    }
    html += "</select>"
    return html
}