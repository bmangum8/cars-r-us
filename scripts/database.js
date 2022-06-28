//database contains all of the state for the application
/*
database.js
*-needs to contain empty object of orderBuilder that will hold temporary state
*-needs to contains arrays of: colors, seats, techOptions, wheels
*-create and export getters: getColors, getSeats, getOptions, getWheels
*-create and export setters: setColors, setSeats, setOptions, setWheels 

//this function sets the color property in the temporary orderBuilder object
*-create and export a function that will change temporary state stored in orderBuilder and change it to permenant state. Use example from KneelDiamonds
*/

const database = {
    paints: [
        {id: 1, paint: "Silver", price: 20},
        {id: 2, paint: "Midnight Blue", price: 40},
        {id: 3, paint: "Firebrick Red", price: 60},
        {id: 4, paint: "Spring Green", price: 80}
    ],
    interiors: [
        {id: 1, interior: "Beige Fabric", price: 10},
        {id: 2, interior: "Charcoal Fabric", price: 20},
        {id: 3, interior: "White Leather", price: 30},
        {id: 4, interior: "Black Leather", price: 40}
    ],
    technologies: [
        {id: 1, technology: "Basic", price: 20},
        {id: 2, technology: "Navigation", price: 40},
        {id: 3, technology: "Visibility", price: 60},
        {id: 4, technology: "Ultra", price: 80}
    ],
    wheels: [
        {id: 1, wheel: "17-inch Pair Radial", price: 20},
        {id: 2, wheel: "17-inch Pair Radial Black", price: 40},
        {id: 3, wheel: "18-inch Pair Spoke Silver", price: 60},
        {id: 4, wheel: "18-inch Pair Spoke Black", price: 80},

    ],
    orderBuilder: {},
    customOrders: [
        {
            id: 1,
            paintId: 3,
            interiorId: 2,
            technologyId: 3,
            wheelId: 1,
            timestamp: 1614659931693
        }
    ]
}


//getter functions return a copy of the arrays in the database 
export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}



//setter functions
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
    }

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
    }

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
    }

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
    }


//Changes temporary state to permentant state    
 export const addCustomOrder = () => {
        // Copy the current state of user choices
        const newOrder = {...database.orderBuilder}
    
        // Add a new primary key to the object
        const lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1
    
        // Add a timestamp to the order
        newOrder.timestamp = Date.now()
    
        // Add the new order object to custom orders state
        database.customOrders.push(newOrder)
    
        // Reset the temporary state for user choices
        database.orderBuilder = {}
    
        // Broadcast a notification that permanent state has changed
        document.dispatchEvent(new CustomEvent("stateChanged"))
    
    }