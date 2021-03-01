//sets variables
let firstName = ""
let state = ""
let temperature = ""

//sets prompts that will pop up
firstName = prompt("What is your first name?")
state = prompt("Do you live in FL or NE?")
temperature = prompt("What is the temperature?")

//these are the messages to be output
let message = ["Wear a warm coat, hat, scarf and gloves.", "Wear a warm coat but you won't need a hat, scarf or gloves.",
"Wear your warmest coat, a warm hat, a scarf, and warm gloves.", "Wear a warm coat, hat and gloves. Maybe a scarf too."]

//ifelse statements
if(temperature < 32 && state == 'NE'){
    console.log(`${firstName}, ${message[0]}.`)
}
else if(temperature > 32 && temperature < 50 && state == 'NE'){
    console.log(`${firstName}, ${message[1]}.`)      
}    
else if(temperature > 32 && temperature < 50 && state == 'FL'){
    console.log(`${firstName}, ${message[2]}.`)
}    
else if(temperature > 50 && temperature < 70 && state == 'FL'){
    console.log(`${firstName}, ${message[3]}.`)
}    
else {
    console.log('Invalid input.')
}
