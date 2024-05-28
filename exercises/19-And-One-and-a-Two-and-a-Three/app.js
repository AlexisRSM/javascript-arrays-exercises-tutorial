let contact = {
    fullName: "John Doe",
    phone: " 123-123-2134",
    email: "test@nowhere.com"
}

for (let key in contact) {
    if (contact.hasOwnProperty(key)) { 
        console.log(`${key} : ${contact[key]}`);
    }
}