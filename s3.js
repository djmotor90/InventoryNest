require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');



//Create an instance of our s3
const s3 = new S3({
    region: 'us-east-2',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACESS_KEY
});

// uploads a file to s3
function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)
  
    const uploadParams = {
      Bucket: process.env.BUCKET_NAME,
      Body: fileStream,
      Key: file.filename
    }
  
    return s3.upload(uploadParams).promise()
  }
  exports.uploadFile = uploadFile
  
  
  // downloads a file from s3
  function getFileStream(fileKey) {
    try{
        const downloadParams = {
          Key: fileKey,
          Bucket: process.env.BUCKET_NAME
        }
        return s3.getObject(downloadParams).createReadStream()
    }catch(err){
        console.error(err);
        return null;
    }
  }
  exports.getFileStream = getFileStream