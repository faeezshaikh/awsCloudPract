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
    }  ,
    {
        "Id": 11,
        "Name": "Which of the following is a Cloud Computing Model that removes the need for your organization to manage the underlying infrastructure (usually hardware and operating systems) and allows you to focus on the deployment and management of your applications?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "IaaS", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "PaaS", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "SaaS", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
        "Explanation": "Platform as a Service (PaaS) removes the need for your organization to manage the underlying infrastructure (usually hardware and operating systems) and allows you to focus on the deployment and management of your applications. This helps you be more efficient as you don’t need to worry about resource procurement, capacity planning, software maintenance, patching, or any of the other undifferentiated heavy lifting involved in running your application.",
        "Ref":"https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/aws-overview.pdf"  
    } ,
    {
        "Id": 12,
        "Name": "What does S3 stand for?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Simple Storage Service", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Simplified Storage Service", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Simple Store Service", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Service for Simple Storage", "IsAnswer": false }],
        "Explanation": "Companies today need the ability to simply and securely collect, store, and analyze their data at a massive scale. Amazon S3 is object storage built to store and retrieve any amount of data from anywhere – web sites and mobile apps, corporate applications, and data from IoT sensors or devices. It is designed to deliver 99.999999999% durability, and stores data for millions of applications used by market leaders in every industry. S3 provides comprehensive security and compliance capabilities that meet even the most stringent regulatory requirements. It gives customers flexibility in the way they manage data for cost optimization, access control, and compliance. S3 provides query-in-place functionality, allowing you to run powerful analytics directly on your data at rest in S3. And Amazon S3 is the most supported cloud storage service available, with integration from the largest community of third-party solutions, systems integrator partners, and other AWS services.",
        "Ref":"https://aws.amazon.com/s3/"  
    } ,
    {
        "Id": 13,
        "Name": "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS WAF", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "IAM", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Web application firewall", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Cognito", "IsAnswer": false }],
        "Explanation": "Services like AWS WAF, a web application firewall, can help protect your web applications from SQL injection and other vulnerabilities in your application code. For access control, you can use IAM to define a granular set of policies and assign them to users, groups, and AWS resources. Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0. ",
        "Ref":"https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"  
    } ,
    {
        "Id": 14,
        "Name": "Which of the following is not your responsibility when dealing with the PCI DSS?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You are responsible for designing, building, and maintaining a compliant environment in AWS.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "You are responsible for validating compliance annually and document the results in an AOC document.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "You are responsible for the network and firewall configuration.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You are responsible for the identity and access management.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You are responsible for Protecting Stored Cardholder Data", "IsAnswer": false }],
        "Explanation": "You are not responsible for creating such documents.",
        "Ref":" https://d1.awsstatic.com/whitepapers/compliance/AWS_Anitian_Workbook_PCI_Cloud_Compliance.pdf "  
    } ,
    {
        "Id": 15,
        "Name": "What are the pillars of the AWS Well-Architected Framework? (Select 2 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Reliability", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Validity", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Agility", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Performance Efficiency", "IsAnswer": true }],
        "Explanation": "Creating a software system is a lot like constructing a building. If the foundation is not solid, structural problems can undermine the integrity and function of the building. When architecting technology solutions on Amazon Web Services (AWS), if you neglect the five pillars of operational excellence, security, reliability, performance efficiency, and cost optimization, it can become challenging to build a system that delivers on your expectations and requirements. Incorporating these pillars into your architecture helps produce stable and efficient systems. This allows you to focus on the other aspects of design, such as functional requirements. The AWS Well-Architected Framework helps cloud architects build the most secure, high-performing, resilient, and efficient infrastructure possible for their applications. This framework provides a consistent approach for customers and AWS Partner Network (APN) Partners to evaluate architectures, and provides guidance to implement designs that scale with your application needs over time. ",
        "Ref":"https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/"  
    } ,
    {
        "Id": 16,
        "Name": "Which of the following security requirements is managed by AWS? (Select 2 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Password Policies", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "User permissions", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "VPC security", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Disk disposal", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Hardware patching", "IsAnswer": true }],
        "Explanation": "As per the Shared Responsibility model , the Patching of the underlying hardware and physical security of AWS resources is the responsibility of AWS. Disk disposal: Storage Device Decommissioning When a storage device has reached the end of its useful life, AWS procedures include a decommissioning process that is designed to prevent customer data from being exposed to unauthorized individuals. AWS uses the techniques detailed in DoD 5220.22-M (“National Industrial Security Program Operating Manual “) or NIST 800-88 (“Guidelines for Media Sanitization”) to destroy data as part of the decommissioning process. All decommissioned magnetic storage devices are degaussed and physically destroyed in accordance with industry-standard practices.",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws-security-whitepaper.pdf"  
    } ,
    {
        "Id": 17,
        "Name": "You are working with a large data set, and you need to import it into a relational database service. What AWS service will meet your needs?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "RDS", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Dynamodb", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "ElastiCache", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Redis", "IsAnswer": false }],
        "Explanation": "RDS is AWS's relational database service."
    } ,
    {
        "Id": 18,
        "Name": "Which of the following is NOT a feature of an edge location?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Distribute content to users", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Cache common responses", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Distribute load across multiple resources", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Used in conjunction with the Cloudfront service", "IsAnswer": false }],
        "Explanation": "The Edge location does not do the job of distributing load. It is used in conjunction with the Cloudfront service to cache the objects and deliver content."
    } ,
    {
        "Id": 19,
        "Name": "An organization has multiple running systems that use different AWS products. Which of the following services allow them to control access to each of these products?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon RDS", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Integrity Management", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Identity and Access Management", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon EMR", "IsAnswer": false }],
        "Explanation": "See Reference",
        "Ref":"https://aws.amazon.com/documentation/iam/"  
    } ,
    {
        "Id": 20,
        "Name": "Which services allow the customer to retain full administrative privileges of the underlying virtual infrastructure?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon DynamoDB", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon S3", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Lambda", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon EC2", "IsAnswer": true }],
        "Explanation": "All of the other services are all managed by AWS as serverless components. Only you have complete control over the EC2 service.",
        "Ref":"https://aws.amazon.com/ec2/faqs/"  
    } 
    ,
    {
        "Id": 21,
        "Name": "Which of the following features of RDS allows for data redundancy across regions and improves Disaster Recovery?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Multi-region replication", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Multi-AZ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Using snapshots", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Creating Read Replicas", "IsAnswer": true }],
        "Explanation": "You can use Cross-Region Read Replicas to implement a cross-region disaster recovery model, scale out globally, or migrate an existing database to a new region.",
        "Ref":"https://aws.amazon.com/blogs/aws/cross-region-read-replicas-for-amazon-rds-for-mysql/"  
    } 
    ,
    {
        "Id": 22,
        "Name": "Which of the following is one of the benefits of AWS Security?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Free for Aws premium members.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Starts automatically once you upload your data.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Scale Quickly", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
        "Explanation": "Security scales with your AWS Cloud usage. No matter the size of your business, the AWS infrastructure is designed to keep your data safe. Ref: Overview of Amazon Web Services",
        "Ref":"https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/aws-overview.pdf"  
    } 
    ,
    {
        "Id": 23,
        "Name": "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Elastic Container Service.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Elastic Docker Service.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Elastic Compute Service.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Docker Manager.", "IsAnswer": false }],
        "Explanation": "Amazon Elastic Container Service (Amazon ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers and allows you to easily run and scale containerized applications on AWS. Amazon ECS eliminates the need for you to install and operate your own container orchestration software, manage and scale a cluster of virtual machines, or schedule containers on those virtual machines.",
        "Ref":"https://aws.amazon.com/ecs/"  
    } 
    ,
    {
        "Id": 24,
        "Name": "You are trying to calculate the Total Cost of Ownership (TCO) for the AWS Cloud. Which of the following should you provide?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The number of endusers you are currently serving", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "The number of applications migrated to AWS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The number of active passwords.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The number of servers migrated to AWS", "IsAnswer": true }],
        "Explanation": "The TCO Calculator provides directional guidance on possible realized savings when deploying AWS. This tool is built on an underlying calculation model, that generates a fair assessment of value that a customer may achieve given the data provided by the user which includes the number of servers migrated to AWS, the server type, the number of Processors and so on. ",
        "Ref":"https://aws.amazon.com/tco-calculator/ https://awstcocalculator.com/"  
    } 
    ,
    {
        "Id": 25,
        "Name": "What are the services/features required to have highly available and fault-tolerant architecture in AWS? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Elastic Load Balancer", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "CloudFormation", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS NACL", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Auto Scaling", "IsAnswer": true }],
        "Explanation": "Amazon Web Services provides services and infrastructure to build reliable, fault-tolerant, and highly available systems in the cloud. These qualities have been designed into our services both by handling such aspects without any special action by you and by providing features that must be used explicitly and correctly. Elastic Load Balancer, Auto Scaling are required to have highly available and fault tolerant architecture in AWS."

    } 
    ,
    {
        "Id": 26,
        "Name": "A company is hosting a web application in the AWS cloud using a set of EC2 Instances. Which of the following can help to protect them from DDoS attacks? (Select 2 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Using Security Groups", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Using AWS Config", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Using Network Access Control Lists", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Using the Internet gateway", "IsAnswer": false }],
        "Explanation": "** A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. ** A network access control list (ACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets. Therefore they can reduce the overall threat to your EC2 Instances."
    } 
    ,
    {
        "Id": 27,
        "Name": "There is a need to analyze and process a large number of data sets. Which of the following services can help fulfill this requirement?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "S3", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "EMR", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Glacier", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Storage gateway", "IsAnswer": false }],
        "Explanation": "Amazon EMR helps you analyze and process vast amounts of data by distributing the computational work across a cluster of virtual servers running in the AWS Cloud. The cluster is managed using an open-source framework called Hadoop. Amazon EMR lets you focus on crunching or analyzing your data without having to worry about time-consuming setup, management, and tuning of Hadoop clusters or the compute capacity they rely on.",
        "Ref":"https://aws.amazon.com/emr/"  
    } 
    ,
    {
        "Id": 28,
        "Name": "Kim is managing a web application running on the AWS cloud. The application is currently utilizing eight EC2 servers for its computing platform. Earlier today, two of those web servers have crashed; however, none of her customers were affected. What has Kim done correctly in this scenario?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Properly built an elastic system.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Properly built a scalable system", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Properly build a fault tolerant system.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above.", "IsAnswer": false }],
        "Explanation": "A fault tolerant system is one that can sustain a certain amount of failure while still remaining operational."
    } 
    ,
    {
        "Id": 29,
        "Name": "Your company requires that all the data on your EBS-backed EC2 volumes be encrypted. How would you go about doing this?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You cannot enable EBS encryption on a specific volume", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS allows you to encrypt the file system on an EBS volume on EBS volume setup", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Encryption can be done on the OS layer of the EBS volume", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
        "Explanation": "Amazon EBS encryption offers a simple encryption solution for your EBS volumes without the need to build, maintain, and secure your own key management infrastructure. When you create an encrypted EBS volume and attach it to a supported instance type, the following types of data are encrypted: >> Data at rest inside the volume.>> All data moving between the volume and the instance.>> All snapshots created from the volume. >>All volumes created from those snapshots.",
        "Ref":"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html"  
    } 
    ,
    {
        "Id": 30,
        "Name": "AWS provides a storage option known as Amazon Glacier, which is designed for____________ & ______________. Please specify 2 correct options.", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Cached session data", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Infrequently accessed data", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Data archives", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Active database storage", "IsAnswer": false }],
        "Explanation": "Amazon Glacier is an extremely low-cost storage service that provides secure, durable, and flexible storage for data backup and archival. So Amazon glacier is used for Infrequently accessed data and Data archives."
    } 
    ,
    {
        "Id": 31,
        "Name": "Which of the following can be used to automate multiple AWS services through scripts?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Powershell", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Bash", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS CLI", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Console", "IsAnswer": false }],
        "Explanation": "The AWS Command Line Interface (CLI) is a unified tool to manage your AWS services. With just one tool to download and configure, you can control multiple AWS services from the command line and automate them through scripts.",
        "Ref":"https://aws.amazon.com/cli/"  
    } 
    ,
    {
        "Id": 32,
        "Name": "You have developed a microservices application. Which of the following should you use to make sure that each EC2 instance in a system gets the same amount of traffic?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Availability Zone", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Auto Scaling", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Classic Load Balancer", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Application Load Balancer", "IsAnswer": true }],
        "Explanation": "Elastic Load Balancing (ELB)automatically distributes incoming application traffic across multiple EC2 instances. It enables you to achieve greater levels of fault tolerance in your applications, seamlessly providing the required amount of load balancing capacity needed to distribute application traffic. Elastic Load Balancing offers two types of load balancers that both feature high availability, automatic scaling, and robust security. These include the Classic Load Balancer that routes traffic based on either application or network level information, and the Application Load Balancer that routes traffic based on advanced application-level information that includes the content of the request. The Classic Load Balancer is ideal for simple load balancing of traffic across multiple EC2 instances, while the Application Load Balancer is ideal for applications needing advanced routing capabilities, microservices, and container-based architectures. Application Load Balancer offers the ability to route traffic to multiple services or load balance across multiple ports on the same EC2 instance. ",
        "Ref":"https://d1.awsstatic.com/whitepapers/aws-overview.pdf"  
    } 
    ,
    {
        "Id": 33,
        "Name": "Which AWS network feature can help you make private connectivity between AWS and your data center?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS SnowBall", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon CloudFront", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Route 53", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Direct Connect", "IsAnswer": true }],
        "Explanation": "AWS Direct Connect makes it easy to establish a dedicated network connection from your premises to AWS. Using AWS Direct Connect, you can establish private connectivity between AWS and your data center, office, or co-location environment, which in many cases can reduce your network costs, increase bandwidth throughput, and provide a more consistent network experience than Internet-based connections.AWS Direct Connect lets you establish a dedicated network connection between your network and one of the AWS Direct Connect locations. Using industry standard 802.1Q virtual LANS (VLANs), this dedicated connection can be partitioned into multiple virtual interfaces. This allows you to use the same connection to access public resources, such as objects stored in Amazon S3 using public IP address space, and private resources such as EC2 instances running within a VPC using private IP address space, while maintaining network separation between the public and private environments. Virtual interfaces can be reconfigured at any time to meet your changing needs.",
        "Ref":"https://d1.awsstatic.com/whitepapers/aws-overview.pdf"  
    } 
    ,
    {
        "Id": 34,
        "Name": "Which of the following services allows you to analyze EC2 Instances against pre-defined security templates to check for vulnerabilities?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Trusted Advisor", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Inspector", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS WAF", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Shield", "IsAnswer": false }],
        "Explanation": "Amazon Inspector enables you to analyze the behavior of your AWS resources and helps you to identify potential security issues. Using Amazon Inspector, you can define a collection of AWS resources that you want to include in an assessment target. You can then create an assessment template and launch a security assessment run of this target.",
        "Ref":"https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"  
    } 
    ,
    {
        "Id": 35,
        "Name": "Your company is trying to deploy a two-tier, highly available web application to AWS. The application needs a storage layer to store artifacts such as photos and videos. Which of the following services can be used as the underlying storage mechanism?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon EBS volume", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon EC2 instance store", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon S3", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon RDS instance", "IsAnswer": false }],
        "Explanation": "You can store virtually any kind of data in any format.",
        "Ref":"https://aws.amazon.com/s3/faqs/"  
    } 
    ,
    {
        "Id": 36,
        "Name": "Which of the following storage mechanisms can be used to store messages effectively across distributed systems?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Glacier", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon EBS Volumes", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon EBS Snapshots", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon SQS", "IsAnswer": true }],
        "Explanation": "Amazon Simple Queue Service (Amazon SQS) offers a reliable, highly-scalable hosted queue for storing messages as they travel between applications or microservices. It moves data between distributed application components and helps you decouple these components",
        "Ref":"https://aws.amazon.com/sqs/"  
    } 
    ,
    {
        "Id": 37,
        "Name": "One of the main benefits of AWS as a cloud computing service is its reliability. What does it actually mean? (Choose 2)", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Ability to recover quickly from failures.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Applying the principle of least privilege to all of its resources.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Automatically provision new resources to meet demand.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Provide compensation to the customers if any issue occurred.", "IsAnswer": false }],
        "Explanation": "The reliability term encompasses the ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as mis-configurations or transient network issues.",
        "Ref":"https://d1.awsstatic.com/whitepapers/architecture/AWS-Reliability-Pillar.pdf"  
    } 
    ,
    {
        "Id": 38,
        "Name": "Which of the following reserved instances payment options provides a discounted hourly rate for the duration of the term? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "All Upfront option.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Partial Upfront option.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Percentage Upfront option.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "No Upfront option.", "IsAnswer": true }],
        "Explanation": "You can choose between three payment options when you purchase a Standard or Convertible Reserved Instance. With the All Upfront option, you pay for the entire Reserved Instance term with one upfront payment. This option provides you with the largest discount compared to On-Demand instance pricing. With the Partial Upfront option, you make a low upfront payment and are then charged a discounted hourly rate for the instance for the duration of the Reserved Instance term. The No Upfront option does not require any upfront payment and provides a discounted hourly rate for the duration of the term. ",
        "Ref":"https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/"  
    } 
    ,
    {
        "Id": 39,
        "Name": "You want all of your AWS resources to be available the majority of the time. Which of the following actions should you implement?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Route 53 health checking to configure Active-Active Failover.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Use Route 53 health checking to configure Active-Passive Failover.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use Route 53 health checking to configure Passive -Active Failover.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use Route 53 health checking to configure Passive-Passive Failover.", "IsAnswer": false }],
        "Explanation": "You should use Active-Active failover configuration when you want all of your resources to be available the majority of the time. When a resource becomes unavailable, Route 53 can detect that it's unhealthy and stop including it when responding to queries.In active-active failover, all the records that have the same name, the same type (such as A or AAAA), and the same routing policy (such as weighted or latency) are active unless Route 53 considers them unhealthy. Route 53 can respond to a DNS query using any healthy record.",
        "Ref":"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-types.html"  
    } 
    ,
    {
        "Id": 40,
        "Name": "When you create an S3 bucket, what rules must be followed regarding the bucket name? (Select 2 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Bucket names must be between 3-63 characters in length.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Bucket names must contain uppercase letters.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Bucket names must be unique across all of AWS.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Bucket name can be formatted as an IP address.", "IsAnswer": false }],
        "Explanation": "Although certain regions do allow for uppercase letters in the bucket name, uppercase letters are NOT required. Also, a bucket name cannot be formatted as an IP address.",
        "Ref":"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-s3-bucket-naming-requirements.html"  
    } ,
    {
        "Id": 41,
        "Name": "What does Amazon Elastic Beanstalk provide?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A scalable storage appliance on top of Amazon Web Services.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "An application container on top of Amazon Web Services.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "A service by this name doesn't exist.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A scalable cluster of EC2 instances.", "IsAnswer": false }],
        "Explanation": "AWS Elastic Beanstalk makes it even easier for developers to quickly deploy and manage applications in the AWS Cloud. Developers simply upload their application, and Elastic Beanstalk automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring.",
        "Ref":"https://aws.amazon.com/elasticbeanstalk/faqs/"  
    } ,
    {
        "Id": 42,
        "Name": "Victoria has created a web application, placing its underlining infrastructure in the N. Virginia (US-East-1) region. After several months, Tracy notices that much of the traffic coming to her website is coming from Japan. What can Tracy do to (best) help reduce latency for her users in Japan?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Change to a Japanese hosting service.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a CDN using CloudFront, making sure the proper content is cached at Edge Locations closest to Japan.,", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Recreate the website content.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
        "Explanation": "CloudFront is AWS's content delivery network (CDN) service. You can use it to cache web content at edge locations what are closest to your customers. This will decrease latency for the customer and improve overall performance."
    } ,
    {
        "Id": 43,
        "Name": "Which of the following allows you to use a drag-and-drop interface to edit cloudFormation templates?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "CloudFormation visualizer", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "CloudFormation Designer", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudFormationEditor", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "CloudFormationMaker", "IsAnswer": false }],
        "Explanation": "AWS CloudFormation Designer is a visual tool that provides a drag-and-drop interface for adding resources to templates. CloudFormation Designer allows you to spend more time designing your AWS infrastructure and less time manually coding your templates. For example, when you add or remove resources, CloudFormation Designer automatically modifies the underlying JSON for you. You can also use the integrated text editor to specify template details, such as resource property values and input parameters",
        "Ref":"https://aws.amazon.com/cloudformation/details/#designer"  
    } ,
    {
        "Id": 44,
        "Name": "You are working on two projects that require a completely different network configuration. Which of the following would allow you to isolate resources and network configuration for each of them?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Security Groups", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Edge Locations", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Virtual Public Cloud", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Virtual Private Cloud", "IsAnswer": true }],
        "Explanation": "Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways. You can use both IPv4 and IPv6 in your VPC for secure and easy access to resources and applications. ",
        "Ref":"https://aws.amazon.com/vpc/"  
    } ,
    {
        "Id": 45,
        "Name": "Which of the following are important principles when designing cloud based systems? Choose 2 answers", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Build Tightly-coupled components", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Use as many services as possible", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Assume everything will fail", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Build loosely-coupled components", "IsAnswer": true }],
        "Explanation": "Always build components which are loosely coupled. This is so that even if one component does fail, the entire system does not fail. Also if you build with the assumption that everything will fail, then you will ensure that the right measures are taken to build a highly available and fault tolerant system."
    } ,
    {
        "Id": 46,
        "Name": "When creating security groups, one of the best practices is to _____________ .", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Deny all unwanted traffic, which is allowed by default.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Allow only port 80,443 for HTTP,HTTPS requests.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Allow only the required traffic, which is denied by default.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Deny IPv6 traffic for all your public EC2 instances.", "IsAnswer": false }],
        "Explanation": "The main purpose of security groups is to control traffic to your EC2 instances. Allowing unwanted traffic to your instances may cause serious security risks. All traffic to your instances is denied by default. you should only allow the required traffic."
    } ,
    {
        "Id": 47,
        "Name": "Which of the following is a compatible MySQL database that also has the ability to grow in storage size on its own?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Aurora", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "RDS Microsoft SQL Server", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "RDS PostgreSQL", "IsAnswer": false }],
        "Explanation": "Amazon Aurora is a MySQL and PostgreSQL compatible relational database built for the cloud, that combines the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open source databases. Aurora is up to five times faster than standard MySQL databases and three times faster than standard PostgreSQL databases. It provides the security, availability, and reliability of commercial-grade databases at 1/10th the cost. Aurora is fully managed by Amazon Relational Database Service (RDS), which automates time-consuming administration tasks like hardware provisioning, database setup, patching, and backups.",
        "Ref":"https://aws.amazon.com/rds/aurora/"  
    } ,
    {
        "Id": 48,
        "Name": "Which of the following storage options is used to store the Amazon RDS DB instances?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon S3", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon EFS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon EBS", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Glacier", "IsAnswer": false }],
        "Explanation": "DB instances for Amazon RDS for MySQL, MariaDB, PostgreSQL, Oracle, and Microsoft SQL Server use Amazon Elastic Block Store (Amazon EBS) volumes for database and log storage. Amazon EBS encryption offers a simple encryption solution for your EBS volumes without the need to build, maintain, and secure your own key management infrastructure."

    } ,
    {
        "Id": 49,
        "Name": "You have the following options for protecting data in transit in Amazon S3: (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Server-Side Encryption", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Use Client-Side Encryption", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use SSL", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "RDS Encryption", "IsAnswer": false }],
        "Explanation": "Data protection refers to protecting data while in-transit (as it travels to and from Amazon S3) and at rest (while it is stored on disks in Amazon S3 data centers). You can protect data in transit by using SSL or by using client-side encryption. ",
        "Ref":"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingEncryption.html"  
    } ,
    {
        "Id": 50,
        "Name": "Which of the following features of Amazon RDS allows for better availability for databases? Choose 2 answers", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Multi-AZ", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "VPC Peering", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Read Replicas", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Automatic patching", "IsAnswer": false }],
        "Explanation": "If you are looking to use replication to increase database availability while protecting your latest database updates against unplanned outages, consider running your DB instance as a Multi-AZ deployment. You can use Multi-AZ deployments and Read Replicas in conjunction to enjoy the complementary benefits of each. You can simply specify that a given Multi-AZ deployment is the source DB instance for your Read Replica(s). That way you gain both the data durability and availability benefits of Multi-AZ deployments and the read scaling benefits of Read Replicas.",
        "Ref":"https://aws.amazon.com/rds/details/multi-az/ https://aws.amazon.com/rds/details/read-replicas/"  
    } ,
    {
        "Id": 51,
        "Name": "How much data can you store in S3?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Storage capacity is virtually unlimited.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "You can store up to 1 PetaByte of data.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Each account is given 50 gigabytes of storage capacity and no more can be used.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You can store up to 1 PetaByte of data, then you are required to pay an additional fee.", "IsAnswer": false }],
        "Explanation": "Although there is theoretically a capacity limit, as an S3 user, there is no limited on the amount of data you can store in S3."
    } ,
    {
        "Id": 52,
        "Name": "You can monitor the accepted and rejected IP traffic going to and from your VPC instances by creating:", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Access Log", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Monitor Log", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Security Log", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Flow Log", "IsAnswer": true }],
        "Explanation": "You can monitor the accepted and rejected IP traffic going to and from your instances by creating a flow log for a VPC, subnet, or individual network interface. Flow log data is published to CloudWatch Logs, and can help you diagnose overly restrictive or overly permissive security group and network ACL rules.",
        "Ref":"https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Security.html"  
    } ,
    {
        "Id": 53,
        "Name": "Which of the following needs a username and password to access AWS resources?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Management Console", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Application Programming Interface (API)", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Software Development Kit (SDK)", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS CLI", "IsAnswer": false }],
        "Explanation": "The AWS Management console allows you to access and manage Amazon Web Services through a simple and intuitive web-based user interface. You can also use the AWS Console mobile app to quickly view resources on the go. ",
        "Ref":"https://aws.amazon.com/console/"  
    } ,
    {
        "Id": 54,
        "Name": "What AWS service uses Edge Locations for content caching?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Glacier", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS KMS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS CloudFront", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Inspector", "IsAnswer": false }],
        "Explanation": "CloudFront is a content caching service provided by AWS that utilizes Edge Locations, which are AWS data centers located all around the world."
    } ,
    {
        "Id": 55,
        "Name": "Which of the following aws services are free to use? (choose 2)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Security Groups", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Route53", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Auto-scaling", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "EC2", "IsAnswer": false }],
        "Explanation": "AWS Auto Scaling can help you optimize your utilization and cost efficiencies when consuming AWS services so you only pay for the resources you actually need. When demand drops, AWS Auto Scaling will automatically remove any excess resource capacity so you avoid overspending. AWS Auto Scaling is free to use, and allows you to optimize the costs of your AWS environment. ** A security group acts as a virtual firewall that controls the traffic for one or more instances. When you launch an instance, you can specify one or more security groups; otherwise, we use the default security group. Security Groups are also offered at no additional charge. ",
        "Ref":"** AWS Auto Scaling can help you optimize your utilization and cost efficiencies when consuming AWS services so you only pay for the resources you actually need. When demand drops, AWS Auto Scaling will automatically remove any excess resource capacity so you avoid overspending. AWS Auto Scaling is free to use, and allows you to optimize the costs of your AWS environment. ** A security group acts as a virtual firewall that controls the traffic for one or more instances. When you launch an instance, you can specify one or more security groups; otherwise, we use the default security group. Security Groups are also offered at no additional charge. "  
    } 
    ,
    {
        "Id": 56,
        "Name": "Where can you store files on AWS? Choose 3 answers", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon CloudFormation", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Elastic File System", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Elastic Block Store (Amazon EBS)", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Chime", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Amazon Simple Storage Service (Amazon S3)", "IsAnswer": true }],
        "Explanation": "**B.Amazon Elastic File System (Amazon EFS) provides simple, scalable, elastic file storage for use with AWS Cloud services and on-premises resources. It is easy to use and offers a simple interface that allows you to create and configure file systems quickly and easily. Amazon EFS is built to elastically scale on demand without disrupting applications, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it. It is designed to provide massively parallel shared access to thousands of Amazon EC2 instances, enabling your applications to achieve high levels of aggregate throughput and IOPS that scale as a file system grows, with consistent low latencies. As a regional service, Amazon EFS is designed for high availability and durability storing data redundantly across multiple Availability Zones. https://aws.amazon.com/efs/ **Amazon Elastic Block Store (Amazon EBS) provides persistent block storage volumes for use with Amazon EC2 instances in the AWS Cloud. Each Amazon EBS volume is automatically replicated within its Availability Zone to protect you from component failure, offering high availability and durability. https://aws.amazon.com/ebs/ **Amazon S3 is object storage built to store and retrieve any amount of data from anywhere – web sites and mobile apps, corporate applications, and data from IoT sensors or devices. It is designed to deliver 99.999999999% durability, and stores data for millions of applications used by market leaders in every industry. ",
        "Ref":"https://aws.amazon.com/s3/"  
    }  ,
    {
        "Id": 57,
        "Name": "What service helps you to aggregate logs from your EC2 instance?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "S3", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Cloudtrail", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Cloudwatch Logs", "IsAnswer": true }],
        "Explanation": "You can use Amazon CloudWatch Logs to monitor, store, and access your log files from Amazon Elastic Compute Cloud (Amazon EC2) instances, AWS CloudTrail, and other sources. You can then retrieve the associated log data from CloudWatch Log. ",
        "Ref":"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html"  
    }  ,
    {
        "Id": 58,
        "Name": "How does one access an EC2 instance?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Using MFA.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Using the Instance Password.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Using key pairs.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Using Route Tables.", "IsAnswer": false }],
        "Explanation": "During the creation process of the Amazon EC2 instances you have the option to create and download -or select- your key pair which allows you to SSH (access) to the instance.",
        "Ref":"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html"  
    }  ,
    {
        "Id": 59,
        "Name": "A company needs to host a database for at least 2 years. Which of the following would be the most cost-effective?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Spot Instances", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Partial Upfront costs Reserved", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "No Upfront costs Reserved", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "On-Demand", "IsAnswer": false }],
        "Explanation": "Since the database server will be hosted for a minimum period of one year then it is better to use Reserved Instances as it provides you with a significant discount (up to 75%) compared to On-Demand instance pricing. With the Partial Upfront option, you make a low upfront payment and are then charged a discounted hourly rate for the instance for the duration of the Reserved Instance term. ",
        "Ref":"https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/"  
    }  ,
    {
        "Id": 60,
        "Name": "Your company is planning to host resources in the AWS Cloud. Which of the following services can be used to decouple distributed software systems and components?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS SNS", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS EBS Snapshots", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Glacier", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS SQS", "IsAnswer": true }],
        "Explanation": "Amazon Simple Queue Service (Amazon SQS) offers a reliable, highly-scalable hosted queue for storing messages as they travel between applications or micro services. It moves data between distributed application components and helps you decouple these components.",
        "Ref":"https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html"  
    }  ,
    {
        "Id": 61,
        "Name": "Which of the following will affect the price you pay for an EC2 instance? (Select all that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Machine Image (AMI).", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Instance Type.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "How long you use the instance for.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Storage capacity", "IsAnswer": true }],
        "Explanation": "EC2 instance pricing various depending on many variables. 1) The type of buying option 2) Selected Ami 3) Selected instance type 4) Region 5) Data in/out 6) Storage capacity"
    }  ,
    {
        "Id": 62,
        "Name": "Which of the following services is a fully managed, PetaByte-scale data warehouse service in the AWS cloud?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon DynamoDB", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Redshift", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon ElastiCache", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Aurora", "IsAnswer": false }],
        "Explanation": "Amazon Redshift is a fully managed, PetaByte-scale data warehouse service in the cloud. You can start with just a few hundred gigabytes of data and scale to a petabyte or more. This enables you to use your data to acquire new insights for your business and customers",
        "Ref":"https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html"  
    }  ,
    {
        "Id": 63,
        "Name": "Your company wants to migrate their website to AWS. Security is a major concern to them, so they need to host their website on an exclusive hardware that is NOT shared with any other AWS customers. Which of the following EC2 instance types would be more appropriate?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Reserved instances", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Independent instances", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Distinct instances", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Dedicated instances", "IsAnswer": true }],
        "Explanation": "Dedicated Instances are Amazon EC2 instances that run in a virtual private cloud (VPC) on hardware that's dedicated to a single customer. Dedicated Instances that belong to different AWS accounts are physically isolated at the hardware level. In addition, Dedicated Instances that belong to AWS accounts that are linked to a single payer account are also physically isolated at the hardware level. However, Dedicated Instances may share hardware with other instances from the same AWS account that are not Dedicated Instances.",
        "Ref":"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html"  
    }  ,
    {
        "Id": 64,
        "Name": "Which of the following AWS services can be used as a compute resource? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon S3", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon EC2", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon VPC", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Lambda", "IsAnswer": true }],
        "Explanation": "Although there is no servers to manage on AWS Lambda but this does not mean that there is no servers at all. Every application needs compute capacity to run. With Lambda AWS handles this compute capacity and manage it for you. Therefore AWS can be considered as a compute resource along with EC2. ",
        "Ref":"https://aws.amazon.com/ec2/ https://aws.amazon.com/lambda/"  
    }  ,
    {
        "Id": 65,
        "Name": "How does AWS Lambda Work?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Upload your code to an S3 bucket then link it to Lambda to run it.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Configure an AutoScaling group and attach the Lambda instance to it then upload and run your code.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Setup the storage, Compute Capacity, Security Groups then upload and run your code.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Just upload your code and watch it run.", "IsAnswer": true }],
        "Explanation": "AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability. You can set up your code to automatically trigger from other AWS services or call it directly from any web or mobile app. ",
        "Ref":"https://aws.amazon.com/lambda/"  
    } 
 
    ]
}

