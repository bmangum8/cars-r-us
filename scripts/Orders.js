/*
Orders.js
-import getOrders, getColors, getSeats, getOptions, and getWheels from "./database.js"

-create a function that builds a list of orders and creates its html representation
-it will take an order (orderObject) as a parameter

-Now, create a function that invokes the function above. No parameter. 
*/

import { getOrders, getPaints, getInteriors, getTechnologies, getWheels } from "./database.js"

const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {
        const foundPaint = paints.find(
            (paint) => {
                   return paint.id === order.paintId 
            }  
        )
        const foundInterior = interiors.find(
            (interior) => {
                   return interior.id === order.interiorId 
            }  
        )
        const foundTechnology = technologies.find(
            (technology) => {
                   return technology.id === order.technologyId 
            }  
        )
        const foundWheel = wheels.find(
            (wheel) => {
                   return wheel.id === order.wheelId 
            }  
        )



        let totalCost = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheel.price
            const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
        return `<li>
            order #${order.id} was placed on ${order.timestamp} and costs ${costString}.
        </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem) //buildOrderList does not need a parameter bc the .map method implies an argument. It is like saying for order of orders.map. 

    html += listItems.join("")
    html += "</ul>"

    return html
}