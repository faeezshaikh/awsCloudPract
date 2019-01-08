{
    "quiz": {
        "name": "Exam 5",
        "logo" : "assets/img/VPC.png",
        "time":"120 minutes"
    },
    "questions": [
      {
        "Id": 1,
        "Name": "Why would a company decide to use AWS over an on-premises data center? (Select 4 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Highly available infrastructure", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Elastic resources based on demand", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "No upfront cost", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Cost-effective", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Better speed in general in the cloud", "IsAnswer": false },
            { "Id": 1060, "QuestionId": 1010, "Name": "Higher reliability of AWS", "IsAnswer": false }],
        "Explanation": "Besides the speed and reliability, all other options listed are reasons why a company may decide to use AWS over an on-premises data center."
    } ,
    {
        "Id": 2,
        "Name": "A company wants to add an extra layer of protection to the current authentication mechanism of usernames and passwords. Which of the following can be used?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Using Password Policies", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Using a mix of user names", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Using AWS WAF", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Using MFA", "IsAnswer": true }],
        "Explanation": "AWS Multi-Factor Authentication (MFA) is a simple best practice that adds an extra layer of protection on top of your user name and password. With MFA enabled, when a user signs in to an AWS website, they will be prompted for their user name and password (the first factor—what they know), as well as for an authentication code from their AWS MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for your AWS account settings and resources. ",
        "Ref":"https://aws.amazon.com/iam/details/mfa/"  
    },
    {
        "Id": 3,
        "Name": "Which is not a benefit of using DynamoDB?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Supports multiple known NoSQL database engines like MariaDB and Oracle NoSQL.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Automatic scaling of throughput capacity.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Single-digit millisecond latency.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Supports both document and key-value store data models.", "IsAnswer": false }],
        "Explanation": "DynamoDB does not use/support other NoSQL database engines. You only have access to use DynamoDB's built-in engine."
    },
    {
        "Id": 4,
        "Name": "A company needs to implement “resource change tracking” using the API call history. Which AWS service would help the company to achieve this goal?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Config", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS CloudFormation", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS CloudTrail", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS CloudWatch", "IsAnswer": false }],
        "Explanation": "AWS CloudTrail is a web service that records AWS API calls for your account and delivers log files to you. The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by the AWS service. With CloudTrail, you can get a history of AWS API calls for your account, including API calls made using the AWS Management Console, AWS SDKs, command line tools, and higher-level AWS services (such as AWS CloudFormation). The AWS API call history produced by CloudTrail enables security analysis, resource change tracking, and compliance auditing.",
        "Ref":"https://d1.awsstatic.com/whitepapers/aws-overview.pdf"  
    },
    {
        "Id": 5,
        "Name": "Which of the following is a factor in determining the right database technology for each workload? (Select 3 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The number of reads and writes per second.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Latency requirements.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Software bugs.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The nature of your queries.", "IsAnswer": true }],
        "Explanation": "The following questions can help you take decisions on which solutions to include in your architecture: ** Is this a read-heavy, write-heavy, or balanced workload? How many reads and writes per second are you going to need? How will those values change if the number of users increases? ** How much data will you need to store and for how long? How quickly do you foresee thiswill grow? Is there an upper limit in the foreseeablefuture? What is the size of each object (average, min, max)? How are these objects going to be accessed? ** What are the requirements in terms of durability of data? Is this data store going to be your “source of truth”? ** What are your latency requirements? How many concurrent users do you need to support? ** What is your data model and how are you going to query the data? Are your queries relational in nature (e.g.,JOINs between multiple tables)? Could you denormalize your schema to create flatter data structures that are easier to scale? ** What kind of functionality do you require? Do you need strong integrity controls or are you looking for more flexibility (e.g.,schema-less data stores)? Do you require sophisticated reporting or search capabilities? Are your developers more familiar with relational databases than NoSQL?",
        "Ref":"https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"  
    },
    {
        "Id": 6,
        "Name": "Which of the following should you consider when creating a tagging strategy for your AWS resources? (Select 3 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Implementing automated tools to help manage resource tags.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Using as much tags as you can to help filter your resources easily.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Ramifications of future changes in business requirements.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Using a standardized, case-sensitive format for tags.", "IsAnswer": true }],
        "Explanation": "The correct answers are ACD as they were mentioned as best practices for creating a tagging strategy for your AWS resources. However Option B is not correct as you must reduce the number of tags whenever possible.",
        "Ref":"https://aws.amazon.com/answers/account-management/aws-tagging-strategies/"  
    },
    {
        "Id": 7,
        "Name": "Which of the below-mentioned services is equivalent to hosting virtual servers on an on-premise location?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS IAM", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Server", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Regions", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS EC2", "IsAnswer": true }],
        "Explanation": "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. ",
        "Ref":"https://aws.amazon.com/ec2/"  
    },
    {
        "Id": 8,
        "Name": "Which of the following AWS services scale automatically without your intervention? (Select 3 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Simple Storage Service.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Snow family.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Elastic File System.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon EC2", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Lambda", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS PingFederate", "IsAnswer": false }],
        "Explanation": "Each of S3, EFS and Lambda scales automatically without any intervention to meet demand. However AWS AWS Snow family is physical device to migrate data into and out of AWS. Amazon EC2 does scale automatically, But you have to create a launch configuration then create an auto scaling group, determine the desired, minimum and maximum number of instances to provision and if your demand changes you have to modify the 'auto scaling' configuration manulally (For example changing the AMI to another or changing the instance type etc.). There is no such thing as AWS PingFederate."
    },
    {
        "Id": 9,
        "Name": "Amazon SWF is designed to help users___________.", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Design graphical user interface interactions.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Manage user identification and authorization.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Store Web content.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Coordinate synchronous and asynchronous tasks which are distributed and fault tolerant.", "IsAnswer": true }],
        "Explanation": "See reference for details.",
        "Ref":"https://aws.amazon.com/swf/faqs/"  
    },
    {
        "Id": 10,
        "Name": "Which of the following is a benefit of running an application across multiple Availability Zones?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Increase the compute capacity for your application", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Reduces the total cost of ownership.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Increases the availability of your application.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Increases the security for your application", "IsAnswer": false }],
        "Explanation": "By deploying your AWS resources to multiple Availability zones , you will avoid failure . So if one AZ were to go down , the other AZ’s would still be up and running and hence your application would be more available.",
        "Ref":"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-regions-availability-zones"  
    },
    {
        "Id": 11,
        "Name": "Which of the following support plans includes the AWS Support Concierge Service?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Basic", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Developer", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Business", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Enterprise", "IsAnswer": true }],
        "Explanation": "Only the Enterprise includes the AWS Support Concierge Service.",
        "Ref":"https://aws.amazon.com/premiumsupport/features/"  
    },
    {
        "Id": 12,
        "Name": "You want to take a snapshot of an EC2 Instance and create a new instance out of it. In AWS, what is this snapshot equivalent to?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "ELB Volume", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "EC2 Snapshot", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AMI", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "EBS Snapshot", "IsAnswer": false }],
        "Explanation": "An Amazon Machine Image (AMI) provides the information required to launch an instance, which is a virtual server in the cloud. You specify an AMI when you launch an instance, and you can launch as many instances from the AMI as you need. You can also launch instances from as many different AMIs as you need.",
        "Ref":"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html"  
    },
    {
        "Id": 13,
        "Name": "Which of the following AWS services can assist you with cost optimization?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Shield", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Inspector", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS WAF", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Trusted Advisor", "IsAnswer": true }],
        "Explanation": "An online resource to help you reduce cost, increase performance, and improve security by optimizing your AWS environment, Trusted Advisor provides real time guidance to help you provision your resources following AWS best practices. ",
        "Ref":"https://aws.amazon.com/premiumsupport/trustedadvisor/"  
    },
    {
        "Id": 14,
        "Name": "What are the benefits of having a managed service on AWS? (Select 4 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Lowering operational complexity.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Lowering cost.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Reduce the number of developers needed for Patching activities.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Reduce dependency on in-house specialized skills.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Deliver new solutions faster.", "IsAnswer": true }],
        "Explanation": "AWS Managed Services provides ongoing management of your AWS infrastructure so you can focus on your applications. By implementing best practices to maintain your infrastructure, AWS Managed Services helps to reduce your operational overhead and risk. AWS Managed Services automates common activities such as change requests, monitoring, patch management, security, and backup services, and provides full-lifecycle services to provision, run, and support your infrastructure. Our rigor and controls help to enforce your corporate and security infrastructure policies, and enable you to develop solutions and applications using your preferred development approach. AWS Managed Services improves agility, reduces cost, and unburdens you from infrastructure operations so you can direct resources toward differentiating your business. Because these services are instantly available to developers, they reduce dependency on in-house specialized skills and allow organizations to deliver new solutions faster. They are also designed for scalability and high availability, so they can reduce risk for your implementations. Option C is not correct as Patching activities are done automatically.",
        "Ref":"https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"  
    },
    {
        "Id": 15,
        "Name": "You have been asked to set up a database in AWS that will require frequent and granular updates. You know that you will need a reasonable amount of storage space but are not sure of the best option. What is the recommended storage option when you run a database on an instance with the above criteria?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon S3", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon EBS", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Storage Gateway", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Glacier", "IsAnswer": false }],
        "Explanation": "Amazon EBS provides durable, block-level storage volumes that you can attach to a running Amazon EC2 instance. You can use Amazon EBS as a primary storage device for data that requires frequent and granular updates. For example, Amazon EBS is the recommended storage option when you run a database on an instance."
    },
    {
        "Id": 16,
        "Name": "An organization has been using AWS for a few months. The finance team wants to visualize the pattern of AWS spending. Which of the below AWS tools will help for this requirement?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Cost Manager", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Cost Explorer", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS CloudWatch", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Consolidated Billing", "IsAnswer": false }],
        "Explanation": "The AWS Billing and Cost Management console includes the Cost Explorer tool for viewing AWS cost data as a graph. It does not charge extra to user for this service. With Cost Explorer the user can filter graphs using resource tags or with services in AWS. If the organization is using Consolidated Billing it helps generate report based on linked accounts. This will help organization to identify areas that require further inquiry. The organization can view trends and use that to understand spend and to predict future costs."
    },
    {
        "Id": 17,
        "Name": "Which AWS support plan would help provide general guidance when you request an Architecture Support?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Basic", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Developer", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Business", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Enterprise", "IsAnswer": false }],
        "Explanation": "See reference for details",
        "Ref":"https://aws.amazon.com/premiumsupport/compare-plans/"  
    },
    {
        "Id": 18,
        "Name": "Which of the following is used to control traffic in AWS? (Select 3 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Route Tables", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Routing Groups", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Security Groups", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Network Access Control lists.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "EBS volumes", "IsAnswer": false }],
        "Explanation": "** Security groups — Act as a firewall for associated Amazon EC2 instances, controlling both inbound and outbound traffic at the instance level. ** Network access control lists (ACLs) — Act as a firewall for associated subnets, controlling both inbound and outbound traffic at the subnet level. **Route Tables — A route table contains a set of rules, called routes, that are used to determine where network traffic is directed.",
        "Ref":"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html"  
    },
    {
        "Id": 19,
        "Name": "You want to quickly deploy your .NET application on the AWS cloud. Which of the following AWS services can help you?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Elastic Beanstalk", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Elastic Compute Cloud (Amazon EC2)", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS VPC", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS SQS", "IsAnswer": false }],
        "Explanation": "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS. ",
        "Ref":"https://aws.amazon.com/elasticbeanstalk/"  
    },
    {
        "Id": 20,
        "Name": "What are the main benefits of the AWS Service Catalog? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Centrally manage commonly deployed IT services.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Securely store various types of catalogs.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Store unlimited amounts of catalogs.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Quickly deploy approved IT services.", "IsAnswer": true }],
        "Explanation": "AWS Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS. These IT services can include everything from virtual machine images, servers, software, and databases to complete multi-tier application architectures. AWS Service Catalog allows you to centrally manage commonly deployed IT services, and helps you achieve consistent governance and meet your compliance requirements, while enabling users to quickly deploy only the approved IT services they need. ",
        "Ref":"https://aws.amazon.com/servicecatalog/"  
    },
    {
        "Id": 21,
        "Name": "Which of the following is an AWS managed database service that provides processing power up to 5X faster than a traditional MySQL database?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "MariaDB", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "PostgreSQL", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Aurora", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "DynamoDB", "IsAnswer": false }],
        "Explanation": "Amazon Aurora (Aurora) is a fully managed, MySQL- and PostgreSQL-compatible, relational database engine. It combines the speed and reliability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases. It delivers up to five times the throughput of MySQL and up to three times the throughput of PostgreSQL without requiring changes to most of your existing applications. ",
        "Ref":"https://aws.amazon.com/rds/aurora/"  
    },{
        "Id": 22,
        "Name": "Which of the following is AWS's responsibility under the AWS shared responsibility model?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configuring third-party applications", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Maintaining physical hardware", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Securing application access and data", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Managing custom Amazon Machine Images (AMIs)", "IsAnswer": false }],
            "Explanation": "See link for details",
            "Ref":"https://aws.amazon.com/compliance/shared-responsibility-model/"  
    },{
        "Id": 23,
        "Name": "What are the AWS recommendations about your root access keys?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Delete them.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Save them in a secure place.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Only share them with trusted people.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above.", "IsAnswer": false }],
        "Explanation": "AWS recommends that you delete your root access keys because you can’t restrict permissions for the root user credentials. If you want to manage a service that require administrative access create an IAM user, Grant administrator access and use those credentials to interact with AWS."
    },{
        "Id": 24,
        "Name": "How can you modify user permissions on AWS?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Using AWS KMS.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Using AWS IAM.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Using Security Groups.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "By contacting the AWS Support team.", "IsAnswer": false }],
        "Explanation": "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.",
        "Ref":"https://aws.amazon.com/iam/"  
    },{
        "Id": 25,
        "Name": "Which of the following would help the customer to delve deeply into the Amazon EC2 billing activity for the last month?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS TCO", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Cloud Trail logs", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Cost and Usage reports", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS CloudWatch", "IsAnswer": false }],
        "Explanation": "The AWS Cost & Usage Report gives you the ability to delve deeply into your AWS cost and usage data, understand how you are using your AWS implementation, and identify opportunities for optimization.",
        "Ref":"https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/"  
    },{
        "Id": 26,
        "Name": "A user is trying to save some cost on the AWS services. Which of the below mentioned options will not help him save cost?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Delete the unutilized EBS volumes once the instance is terminated", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Delete the AutoScaling launch configuration after the instances are terminated", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Release the elastic IP if not required once the instance is terminated", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Delete the AWS ELB after the instances are terminated", "IsAnswer": false }],
        "Explanation": "AWS bills the user on a as pay as you go model. AWS will charge the user once the AWS resource is allocated. Even though the user is not using the resource, AWS will charge if it is in service or allocated. Thus, it is advised that once the user's work is completed he should: Terminate the EC2 instance Delete the EBS volumes Release the unutilized Elastic IPs Delete ELB The AutoScaling launch configuration does not cost the user. Thus, it will not make any difference to the cost whether it is deleted or not."

    },{
        "Id": 27,
        "Name": "What would we get from having AWS Cloud services accessible through an API?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Improve performance of these resources", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Optimize AWS infrastructure cost", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Be able to manage Cloud resources programmatically", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Reduce the number of programmers", "IsAnswer": false }],
        "Explanation": "The Application Programming Interface allows developers to easily work with the various AWS resources programmatically."
    },{
        "Id": 28,
        "Name": "Which of the following services can be used for processing images uploaded to S3?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Glacier", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Lambda", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Artifact", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon PinPoint.", "IsAnswer": false }],
        "Explanation": "AWS Lambda has many use cases. one of its simplest use cases is using it to process objects created in S3 as follows: 1- User uploads an object to an S3 bucket (object-created event). 2- Amazon S3 detects the object-created event. 3- Amazon S3 invokes a Lambda function that is specified in the bucket notification configuration. 4- AWS Lambda executes the Lambda function by assuming the execution role that you specified at the time you created the Lambda function. 5- The Lambda function executes. For more use cases visit this link.",
        "Ref":"https://docs.aws.amazon.com/lambda/latest/dg/use-cases.html"  
    },{
        "Id": 29,
        "Name": "If you have big amounts of data that needs to be archived. Which of the following would be the most efficient way to store them in AWS?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Amazon Storage Gateway", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Use Amazon Glacier", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use Amazon EBS", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use Amazon S3", "IsAnswer": false }],
        "Explanation": "Amazon Glacier is a secure, durable, and extremely low-cost cloud storage service for data archiving and long-term backup. It is designed to deliver 99.999999999% durability, and provides comprehensive security and compliance capabilities that can help meet even the most stringent regulatory requirements.",
        "Ref":"https://aws.amazon.com/glacier/"  
    },{
        "Id": 30,
        "Name": "Once again, your customers are concerned about the security of their sensitive data and, with their latest inquiry, ask about what happens to old storage devices on AWS. What would be the best answer to this question?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS reformats the disks and uses them again.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS uses the techniques detailed in DoD 5220.22-M to destroy data as part of the decommissioning process.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS uses their own proprietary software to destroy data as part of the decommissioning process.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS uses a 3rd party security organization to destroy data as part of the decommissioning process.", "IsAnswer": false }],
        "Explanation": "When a storage device has reached the end of its useful life, AWS procedures include a decommissioning process that is designed to prevent customer data from being exposed to unauthorized indMduals. AWS uses the techniques detailed in DoD 5220.22-M ('National| Industrial Security Program Operating ManuaI '') or NIST 800-88 ('GuideIines for Media Sanitization') to destroy data as part of the decommissioning process. All decommissioned magnetic storage devices are degaussed and physically destroyed in accordance with industry-standard practices.",
        "Ref":"http://d0.awsstatic.com/whitepapers/Security/AWS%20Security%20Whitepaper.pdf"  
    },{
        "Id": 31,
        "Name": "Which of the following services would help in reducing the complexity and time in planning your application migration to the AWS cloud?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Migration Planner Service", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Application Discovery Service", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Snowball Migration Service", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
        "Explanation": "AWS Application Discovery Service helps systems integrators quickly and reliably plan application migration projects by automatically identifying applications running in on-premises data centers, their associated dependencies, and their performance profiles. Planning data center migrations can involve thousands of workloads that are often deeply interdependent. Application discovery and dependency mapping are important early first steps in the migration process, but these tasks are difficult to perform at scale due to the lack of automated tools.AWS Application Discovery Service automatically collects configuration and usage data from servers, storage, and networking equipment to develop a list of applications, how they perform, and how they are interdependent. This information is retained in encrypted format in an AWS Application Discovery Service database, which you can export as a CSV or XML file into your preferred visualization tool or cloud migration solution to help reduce the complexity and time in planning your cloud migration. ",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws-overview.pdf "  
    },{
        "Id": 32,
        "Name": "While working with Amazon S3, you found that six of your S3 buckets are deleted, and no one is taking responsibility. You decided to open an investigation in order to find out who deleted the S3 buckets. Which of the following may help you in your investigation?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Look at the SNS logs.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Look at the CloudWatch Logs.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Look at the CloudTrail logs.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Look at the S3 logs.", "IsAnswer": false }],
        "Explanation": "AWS CloudTrail can help you track AWS API calls made to S3 and identify who deleted the S3 buckets. AWS CloudTrail is a web service that records AWS API calls for your account and delivers log files to you. The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by the AWS service. With CloudTrail, you can get a history of AWS API calls for your account, including API calls made using the AWS Management Console, AWS SDKs, command line tools, and higher-level AWS services (such as AWS CloudFormation). The AWS API call history produced by CloudTrail enables security analysis, resource change tracking, and compliance auditing. ",
        "Ref":"https://d1.awsstatic.com/whitepapers/aws-overview.pdf"  
    },{
        "Id": 33,
        "Name": "There are substantial differences between AWS Marketplace and Amazon DevPay. One of these differences is ………………….", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "When you buy from AWS DevPay directly you will get great offers based on your usage.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Buying from the AWS DevPay is better than the AWS Marketplace especially when working with Amazon VPC.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Marketplace supports EBS-backed software, while DevPay does not.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Marketplace does not support Reserved and Spot instances while DevPay does.", "IsAnswer": false }],
        "Explanation": "There are substantial differences between AWS Marketplace and Amazon DevPay. Both help customers buy software that runs on AWS, but AWS Marketplace offers a more comprehensive experience. For software buyers the key differences are: **AWS Marketplace offers a more Amazon.com-like shopping experience, simplifying discovery of available software. **AWS Marketplace products work with other AWS features such as VPC and can be run on Reserved and Spot instances, in addition to normal On Demand Instances. **AWS Marketplace supports EBS-backed software, While DevPay does not . ** Additionally, software providers benefit from AWS Marketplace’s marketing outreach and ease of discovery. ",
        "Ref":"https://aws.amazon.com/marketplace/help/"  
    },{
        "Id": 34,
        "Name": "Which of the following are two options to pay for the AWS Developer Support Plan? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "4% of monthly AWS usage", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Greater of $29", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Greater of $39", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "3% of monthly AWS usage", "IsAnswer": true }],
        "Explanation": "See link for details.",
        "Ref":"https://aws.amazon.com/premiumsupport/pricing/"  
    },{
        "Id": 35,
        "Name": "For managed services like Amazon DynamoDB. What are the security tasks that AWS is responsible for? (Select 2 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Installing an antivirus software.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Configuring firewall.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create the required access policies.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Protect Credentials.", "IsAnswer": false }],
        "Explanation": "According to the shared responsibility model AWS is responsible for Installing an antivirus software, OS and database patching, Configuring firewall and Disaster recovery."
    },{
        "Id": 36,
        "Name": "What is a placement group in Amazon EC2?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "It is a group of EC2 instances within a single Availability Zone.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "It is the edge location of your web content.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "It is the AWS region where you run the EC2 instance of your web content.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "It is a group used to span multiple Availability Zones.", "IsAnswer": false }],
        "Explanation": "A placement group is a logical grouping of instances within a single Availability Zone. ",
        "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html"  
    },{
        "Id": 37,
        "Name": "You need to set up a security certificate for a client's eCommerce website as it will use the HTTPS protocol. Which of the below AWS services do you need to access in order to manage your SSL server certificate?(Select 2 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Directory Service", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Identity & Access Management", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS ACM", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Route 53", "IsAnswer": false }],
        "Explanation": "To enable HTTPS connections to your website or application in AWS, you need an SSL/TLS server certificate. You can use a server certificate provided by AWS Certificate Manager (ACM) or one that you obtained from an external provider. You can use ACM or IAM to store and deploy server certificates. Use IAM as a certificate manager only when you must support HTTPS connections in a region that is not supported by ACM. IAM supports deploying server certificates in all regions, but you must obtain your certificate from an external provider for use with AWS. Amazon Route 53 is used to register domain names or use your own domain name to route your end users to Internet applications. Route 53 is not responsible for creating SSL certifications. ** https://aws.amazon.com/certificate-manager/ ** ",
        "Ref":"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html"  
    },{
        "Id": 38,
        "Name": "Big Cloud Jumbo Corp is beginning to explore migrating their entire on-premises data center to AWS. They are very concerned about how much it will cost once their entire I.T. infrastructure is running on AWS. What tool can you recommend so that they can do a cost-benefit analysis of moving to the AWS Cloud?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS TCO calculator", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Estimate Calculator", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Cost Explorer", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Migration Cost Calculator", "IsAnswer": false }],
        "Explanation": "The AWS TCO (Total Cost of Ownership) Calculator is a free tool provided by AWS. It allows you to compare your current on-premises cost vs. estimated AWS cost."
    },{
        "Id": 39,
        "Name": "Which of the following AWS services would you use to register a new domain name in the AWS Platform?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Route 53", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Cloud Front", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Elastic Load Balancing", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Virtual Private Cloud (Amazon VPC)", "IsAnswer": false }],
        "Explanation": "Route53 allows for registration of new domain names in AWS. Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost effective way to route end users to Internet applications by translating names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other. Amazon Route 53 is fully compliant with IPv6 as well.",
        "Ref":"https://aws.amazon.com/route53/"  
    },{
        "Id": 40,
        "Name": "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "It can be used to launch as many or as few virtual servers as you need.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "It is considered a serverless web service.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "It eliminates your need to invest in hardware up front, so you can develop and deploy applications faster.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "It offers scalable computing capacity in the Amazon Web Services (AWS) cloud.", "IsAnswer": false }],
        "Explanation": "Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the Amazon Web Services (AWS) cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster. You can use Amazon EC2 to launch as many or as few virtual servers as you need, configure security and networking, and manage storage. Amazon EC2 enables you to scale up or down to handle changes in requirements or spikes in popularity, reducing your need to forecast traffic. ",
        "Ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html"  
    }

 
    ]
}

