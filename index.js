// Add your code here
function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    })
  })
  .then((resp) => (resp.json()))
  .then(newObject => {
    // document.body.innerHTML = newObject[id]
    // let id = document.querySelector(`${newObject}`).id
    document.body.innerHTML = newObject['id']
  })
  .catch(error => {
    document.body.innerHTML = error.message;
  })
}
