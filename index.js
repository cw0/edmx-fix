const Cheerio = require('cheerio');
const fs = require('fs');

fs.readFile('files/ClientTemplateModel.edmx.diagram', (err, contents) => {
  if (err)
  {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }
    throw err;
  } 

  const $ = Cheerio.load(contents);

  const shapes = $('entitytypeshape');

  let entityNames = [];

  for (let i = 0; i < shapes.length; i++) {
    entityNames.push(shapes[i].attribs.entitytype);
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