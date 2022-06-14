// Add your code here
function submitData(name, email){
    const configurationObject = {
        method : 'POST',
        headers : {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body : JSON.stringify({
            'name' : name,
            'email' : email,
        })
    }
    //console.log(configurationObject)
    const fetchedData = fetch(`http://localhost:3000/users`, configurationObject)
        .then(response => response.json())
        .then(function(user){
            document.body.innerHTML = `<p>${user.id}</p>`
        })
        .catch(function(error){
            document.body.innerHTML = `<p>${error.message}</p>`
        })
    return fetchedData;
}

//submitData('Chief', 'chief@cg')