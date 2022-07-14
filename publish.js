'use strict';
const AWS = require('aws-sdk');
require('dotenv').config();
AWS.config.update({
    region: 'us-west-1',
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY
});

function sendMessage() {
    const messageParams = {
        Message: 'use this code to save 70% of your next order : 70free',
        // TopicArn: process.env.TOPIC,
        TopicArn: 'arn:aws:sns:us-west-1:443875923139:notification'
    }
    const publishMsg = new AWS.SNS({
        apiVersion: '2010-03-31'

    }).publish(messageParams).promise();

    publishMsg.then((data) => {
        console.log('published: ', data.MessageId);
    })
}


sendMessage();