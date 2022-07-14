# AWS-SNS
* SQS and SNS are important components for scalable, large scale, distributed, cloud-based applications:

Comparisons: SQS vs SNS in AWS — Simple Notification Service and Simple Queue Service.

SNS is a distributed publish-subscribe service.

SQS is distributed queuing service.

Amazon SNS is a fast, flexible, fully managed push notification service that lets you send individual messages or to bulk messages to large numbers of recipients. Amazon SNS makes it simple and cost effective to send push notifications to mobile device users, email recipients or even send messages to other distributed services.

Amazon SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.

SQS is distributed queuing system. Messages are not pushed to receivers. Receivers have to poll SQS to receive messages. Messages can be stored in SQS for short duration of time (max 14 days).

* in this lap I will do the same as what we did in the lecture , to keep this cool service from Amazon , it is the SNS service 
* we will do it in two way , first way by GUI and the second way using CLI 

### First GUI 

* We open the Amazon account and in the search bar we search for SNS service then we will create new Topic as shown below 

![link](./image/Screenshot%20(402).png)

* After that we have to create subscribtion , to the service and we can also choose the protocol , like email or sms service , here we will choose the email service 

![link](./image/Screenshot%20(403).png)

* then we create subscribtion , so we will recive confirmation email to this service as shown 

![link](./image/Screenshot%20(404).png)

* then we confirm the email to get access to this service 

![link](./image/Screenshot%20(405).png)

* after that we prepare the notification message that we want to send to the clinet 

![link](./image/Screenshot%20(406).png)

![link](./image/Screenshot%20(407).png)


### this is the CLI waye 

* first we start with creating new file.js and we need to install **aws-sdk** package 

* after that we have to do coding parts as shown below 
````
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

````
* After that we have to make sure we are in the same region , and we run the mainJS file  we will recive the Id from the console 

![link](./image/Screenshot%20(408).png)

* and I will check the Email that we recived notification 

![link](./image/Screenshot%20(410).png)

