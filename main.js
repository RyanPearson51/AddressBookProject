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
}).catch(function(error){
    console.log("Error: ", error);
    document.getElementById('error').innerText = 'something went wrong'
});

// move on

//process the json payload
processJson = function(json){
    //loop through the results array and process one contact at a time
    for(let i=0; i<json.results.length; i++){
        let contact = json.results[i];
        try{
        processContact(contact);
        } catch(error){
            processError(error);
        }
    }
    
}

//process one contact at a time and update the dom with that contacts info
let processContact = function(contact){
    const contacts = document.getElementById('contacts');
    let firstName = contact.name.first;
    let lastName = contact.name.last;
    let email = contact.email;
    let city = contact.location.city;
    let photo = contact.picture.medium;


    const li = document.createElement('li')
    const basicInfo = document.createTextNode(`Full name: ${firstName}  ${lastName}`);
    //const expandedInfo = document.createTextNode(`Email: ${email}, Hometown: ${city}`)
    li.appendChild(basicInfo);
    contacts.append(li);
    
    const image = document.createElement('img');
    image.setAttribute('src', photo);
    contacts.append(image);

    const p = document.createElement('p');
    p.setAttribute('id', 'extraInfo')
    const expandedInfo = document.createTextNode(`Email: ${email}, Hometown: ${city}`)
    p.appendChild(expandedInfo);
    contacts.append(p);

    
    

   

    
    //add the minimal contact info to the ul as an li
    //add an event listener to the li to show additional information
}


let button = document.getElementById('button');


button.onclick = function() {
    let x = document.getElementById('contacts');
    if(x.style.display !=='none'){
        x.style.display = 'none';
    }
    else{
        x.style.display = 'block';
    }
}

/*function toggle(){
    let x = document.getElementsByClassName('extraInfo');
    if (x.style.display == 'none'){
        x.style.display == 'block';
    } else{
        x.style.display == 'none';
    }
}*/
