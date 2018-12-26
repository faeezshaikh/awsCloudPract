{
    "quiz": {
        "name": "Exam 4",
        "logo" : "assets/img/VPC.png",
        "time":"120 minutes"
    },
    "questions": [
      {
        "Id": 1,
        "Name": "Which of the following services allows you to run your application when needed, without having to own a server running all the time?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS EC2 instances", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Lambda", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS LightSail", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS RDS instances", "IsAnswer": false }],
        "Explanation": "AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running.",
        "Ref":"https://aws.amazon.com/lambda/"  
    } ,
    {
        "Id": 2,
        "Name": "What does Amazon ElastiCache provide?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A service by this name doesn't exist.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "A virtual server with a huge amount of memory.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A managed In-memory cache service.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "An Amazon EC2 instance with the Memcached software already pre-installed.", "IsAnswer": false }],
            "Explanation": "ElastiCache is a web service that makes it easy to set up, manage, and scale a distributed in-memory data store or cache environment in the cloud. It provides a high-performance, scalable, and cost-effective caching solution, while removing the complexity associated with deploying and managing a distributed cache environment. ",
            "Ref":"https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/WhatIs.html"  
    } ,
    {
        "Id": 3,
        "Name": "You decided to pay a low upfront fee and get a significantly discounted hourly rate. What is the payment model you are going to use?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Pay as you go", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Pay less when you reserve.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Pay even less as AWS grows", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Custom pricing", "IsAnswer": false }],
            "Explanation": "Pay less when you reserve. For certain products, you can invest in reserved capacity. In that case, you pay a low upfront fee and get a significantly discounted hourly rate, which results in overall savings between 42% and71%(depending on the type of instance you reserve) over equivalent on-demand capacity."
    } ,
    {
        "Id": 4,
        "Name": "What makes Cloud computing better than traditional data centers?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Eliminating SPOFs.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Distributed infrastructure.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "On-demand infrastructure for scaling applications or tasks.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Cost savings.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "All of the above", "IsAnswer": true }],
        "Explanation": "These are things that a traditional web host cannot provide. *High-availability (eliminating SPOFs: single points of failure) *Distributed infrastructure, reducing latency to all regions of the world *Cost savings (scaling down hardware to avoid over-spending) *On-demand infrastructure for scaling applications or tasks (adding servers or 'horizontally scaling' to massively increase the hardware power available to your application) *Resource planning convenience and cost savings. You don't have to run your own data center for internal or private servers, so your IT department doesn't have to make bulk purchases of servers which may never get used, or may be inadequate, and you don't have to pay an entire IT department to maintain that hardware -- you don't even have to pay an accountant to figure out how much hardware you can afford or how much you need to purchase. ",
        "Ref":"https://aws.amazon.com/what-is-cloud-computing/"  
    } ,
    {
        "Id": 5,
        "Name": "There is a need to automate the creation of sandbox accounts for developers and grant entities in those accounts access only to the necessary AWS services. Which of the following would help?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS organizations", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Dev Pay", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Trusted Advisor", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Cost Explorer", "IsAnswer": false }],
        "Explanation": "You can use the AWS Organizations APIs to automate the creation and management of new AWS accounts. The Organizations APIs enable you to create new accounts programmatically, and to add the new accounts to a group. The policies attached to the group are automatically applied to the new account. For example, you can automate the creation of sandbox accounts for developers and grant entities in those accounts access only to the necessary AWS services. ",
        "Ref":"https://aws.amazon.com/organizations/"  
    } ,
    {
        "Id": 6,
        "Name": "What is the feature provided by AWS that enables fast, easy, and secure transfers of files over long distances between your client and your Amazon S3 bucket?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Snowball", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "HTTP Snowball Transfer", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3 Transfer Acceleration", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "File transfer Accelerator", "IsAnswer": false }],
        "Explanation": "Amazon Snowball doesn’t support Cross region data transfer. There is nothing called HTTP Snowball transfer.  Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket. Transfer Acceleration takes advantage of Amazon CloudFront’s globally distributed edge locations. As the data arrives at an edge location, data is routed to Amazon S3 over an optimized network path.",
        "Ref":"https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html"  
    } ,
    {
        "Id": 7,
        "Name": "A company currently uses VM Templates to spin up virtual machines on their on-premise infrastructure. Which of the following can be used in a similar way to spin up EC2 instances on the AWS Cloud?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "EBS Volumes", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Machines Images", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "EBS Snapshots", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon VMware", "IsAnswer": false }],
        "Explanation": "An Amazon Machine Image (AMI) provides the information required to launch an instance, which is a virtual server in the cloud. You specify an AMI when you launch an instance, and you can launch as many instances from the AMI as you need. You can also launch instances from as many different AMIs as you need. ",
        "Ref":"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html"  
    } ,
    {
        "Id": 8,
        "Name": "Which of the following security features is associated with a Subnet in a VPC to protect against incoming traffic requests?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Inspector", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Subnet Groups", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "NACL", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Security Groups", "IsAnswer": false }],
        "Explanation": "A network access control list (ACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. You might set up network ACLs with rules similar to your security groups in order to add an additional layer of security to your VPNOTE: Security Group act as a firewall for associated Amazon EC2 instances, controlling both inbound and outbound traffic at the instance level, while ACLs act as a firewall for associated subnets, controlling both inbound and outbound traffic at the subnet level.",
        "Ref":"https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html"  
    } ,
    {
        "Id": 9,
        "Name": "Which of the following AWS Cloud services is designed according to the Multi-AZ principle? (Choose 2 answers)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon DynamoDB", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon ElastiCache", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Elastic Load Balancing", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Virtual Private Cloud (Amazon VPC)", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Simple Storage Service (Amazon S3)", "IsAnswer": true }],
        "Explanation": "** Amazon DynamoDB runs across AWS proven, high-availability data centers. The service replicates data across three facilities in an AWS region to provide fault tolerance in the event of a server failure or Availability Zone outage. ** Amazon S3 provides durable infrastructure to store important data and is designed for durability of 99.999999999% of objects. Your data is redundantly stored across multiple facilities and multiple devices in each facility. While Elastic Load Balancing and Amazon ElastiCache can be deployed across multiple Availability Zones, you must explicitly take such steps when creating them."
    } ,
    {
        "Id": 10,
        "Name": "Using Amazon RDS is under the shared responsibility model. Which of the following would be the customer responsibilities? (Select 2 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Managing the database settings.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Installing the database software.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Building the relational schema.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Performing backups.", "IsAnswer": false }],
        "Explanation": "Amazon RDS manages the work involved in setting up a relational database: from provisioning the infrastructure capacity you request to installing the database software. Once your database is up and running, Amazon RDS automates common administrative tasks such as performing backups and patching the software that powers your database. With optional Multi-AZ deployments, Amazon RDS also manages synchronous data replication across Availability Zones with automatic failover. Since Amazon RDS provides native database access, you interact with the relational database software as you normally would. This means you're still responsible for managing the database settings that are specific to your application. You'll need to build the relational schema that best fits your use case and are responsible for any performance tuning to optimize your database for your application’s workflow.",
        "Ref":"https://aws.amazon.com/rds/faqs/"  
    } 
 
    ]
}

