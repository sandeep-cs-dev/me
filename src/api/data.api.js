
const getData = ()=> {
  return fetch('https://raw.githubusercontent.com/sandeep-cs-dev/me/master/db.json')
  .then(response => response.json())
}


export default getData