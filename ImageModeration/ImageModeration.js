//const request = require('request');
const AWS = require('aws-sdk');

const rekognition = new AWS.Rekognition({
  // Detect moderation labels is available on AWS region us-east-1, us-west-2 and eu-west-1
  region: "us-east-1",
  accessKeyId: "***",
  secretAccessKey: "********"
});

//var rekognition = new AWS.Rekognition({region: "us-west-2"});


//AWS.config.update({region:'us-east-1'});
var params = {
  
  Image: { /* required */
    //Bytes: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
    S3Object: {
      Bucket: 'devansh-test',
      Name: 'udTHtdLQDyS0.png'
      /*Version: 'STRING_VALUE'*/
    }
  },
  MinConfidence: '30'
};
rekognition.detectModerationLabels(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});