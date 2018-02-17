const Cheerio = require('cheerio');
const fs = require('fs');

const selector = 'entityset';
const file = 'files/ClientTemplateModel.edmx';

fs.readFile(file, (err, contents) => {
  if (err)
  {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }
    throw err;
  } 

  const $ = Cheerio.load(contents);
 
  const shapes = $(selector);
  
  let entityNames = [];

  for (let i = 0; i < shapes.length; i++) {
    entityNames.push(shapes[i].attribs.name);
  }

  let seen = {};
  entityNames.map(function(name) {
    if (seen.hasOwnProperty(name)) {
      console.log(name);
    } else {
      seen[name] = true;
    }
  });
});