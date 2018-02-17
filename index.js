const Cheerio = require('cheerio');
const fs = require('fs');

fs.readFile('files/ClientTemplateModel.edmx.diagram', (err, fd) => {
  if (err)
  {
    if (err.code === 'ENOENT') {
      console.error('myfile does not exist');
      return;
    }
    throw err;
  } 

  const $ = Cheerio.load(fd);

  console.log($.html());
});