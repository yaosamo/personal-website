
      
  var cloudinary = require('cloudinary').v2;

  cloudinary.config({ 
    cloud_name: 'yaosamo', 
    api_key: '622765669138492', 
    api_secret: 'Bk3ZqXzZMXn5dwTIaOYM8_AD7go' 
  });

   cloudinary.v2.api.resources(
    { type: 'upload', max_results: 30 }, 
    function(error, result) {console.log(result, error); });
  
  //  https://622765669138492:Bk3ZqXzZMXn5dwTIaOYM8_AD7go@api.cloudinary.com/v1_1/yaosamo/resources/image
  