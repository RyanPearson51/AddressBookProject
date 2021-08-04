console.log('loading page')



fetch('https://randomuser.me/api/?results=10').then(function(response){
    //do something with response
    //extract json from respons
    console.log('response status', response.status)
    return response.json();
}) .then(function(json){
    //do something with the json payload
    console.log('response payload:', json)
    processJson(json);
})

// move on

//process the json payload
processJson = function(json){
    //loop through the results array and process one contact at a time
    for(let i=0; i<json.results.length; i++){
        let contact = json.results[i];
        processContact(contact);
    }
    
}

//process one contact at a time and update the dom with that contacts info
let processContact = function(contact){
    const contacts = document.getElementById('contacts');
    let firstName = contact.name.first;
    let lastName = contact.name.last;
    let email = contact.email;
    let city = contact.location.city;

    const li = document.createElement('li')
    const text = document.createTextNode(`Full name: ${firstName}  ${lastName}, Email: ${email}, Hometown: ${city}`);
    li.appendChild(text);
    contacts.append(li);
    

    //add the minimal contact info to the ul as an li
    //add an event listener to the li to show additional information
}