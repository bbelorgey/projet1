const axios = require('axios');
const app = document.getElementById('root');
const container = app.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

axios.get('https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&facet=tags&facet=placename&facet=department&facet=region&facet=city&facet=date_start&facet=date_end&facet=pricing_info&facet=updated_at&facet=city_district&refine.tags=Toulouse&refine.placename=La+Dynamo') 
  // Begin accessing JSON data here
  .then(function (response) {
    var data = JSON.parse(response);
    console.log(data);
    data.forEach(records => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
  
      const h1 = document.createElement('h1');
      h1.textContent = records.datasetid;
  
      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;
  
      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    }); 
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });





request.send();