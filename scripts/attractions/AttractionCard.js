


export const attractionHTML = (attractionObj) => {
    return `
        
        <h3>${attractionObj.name}</h3>
        <ul>
            <li>City: ${attractionObj.city}</li>
            <li>State: ${attractionObj.state}</li>
            <li>About: ${attractionObj.description}</li>
        </ul>
        </section>
    `  
}