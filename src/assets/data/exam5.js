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
        "Name": "", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "", "IsAnswer": false }],
        "Explanation": "",
        "Ref":""  
    }

 
    ]
}

