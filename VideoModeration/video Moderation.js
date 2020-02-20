//const request = require('request');
const AWS = require('aws-sdk');

const rekognition = new AWS.Rekognition({
  // Detect moderation labels is available on AWS region us-east-1, us-west-2 and eu-west-1
  region: "us-east-1",
  accessKeyId: "******",
  secretAccessKey: "*******"
});



// Video Moderation
var params = {
  Video: { /* required */
    S3Object: {
      Bucket: 'devansh-test',
      Name: '1H6bePF4bIaa.mp4'
      // Version: 'STRING_VALUE'
    }
  }


};
rekognition.startContentModeration(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

var params1 = {
  JobId: 'ccd6accaa3f4e52bdd27497033632', /* required */
  MaxResults: '10'
  //NextToken: '2'
  //SortBy: NAME | TIMESTAMP
};
rekognition.getContentModeration(params1, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});