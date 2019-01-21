
{
    "quiz": {
        "name": "Exam 6",
        "logo" : "assets/img/VPC.png",
        "time":"120 minutes"
    },
    "questions": [
        {
            "Id": 1,
            "Name": "Which of the following has the greatest impact on cost? (Choose two)", 
            "Tag":"",
            "manyoptions":true,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Compute", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Number of running services", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Data Transfer In", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Data Transfer out", "IsAnswer": true }],
            "Explanation": "The correct answers are Compute, Storage and Data Transfer out. Their pricing differ according to the service you use. However AWS does not charge any money for Data Transfer In."
        } ,
    {
        "Id": 2,
        "Name": "Which of the following services can be used to build video analytics applications?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Athena", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon EMR", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Kinesis", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon QuickSight", "IsAnswer": false }],
        "Explanation": "You can use Amazon Kinesis to securely stream video from camera-equipped devices in homes, offices, factories, and public places to AWS. You can then use these video streams for video playback, security monitoring, face detection, machine learning, and other analytics.",
        "Ref":"https://aws.amazon.com/kinesis/"  
    },
    {
        "Id": 3,
        "Name": "You are using Amazon RDS, which of the following features would help making automatic failover when the primary database fails to respond?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "RDS Multi-AZ", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "RDS Write Replica", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "RDS Standby Replica", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "RDS Single-AZ", "IsAnswer": false }],
        "Explanation": "Amazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable. In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete. Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.",
        "Ref":"https://aws.amazon.com/rds/details/multi-az/"  
    },
    {
        "Id": 4,
        "Name": "What does the term “Economies of scale” mean?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "It means that you save more when you consume more.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "It means that you have the ability to pay as you go.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "It means that AWS will continuously lowering costs as it grows.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above.", "IsAnswer": false }],
        "Explanation": "By using cloud computing, you can achieve a lower variable cost than you can get on your own. Because usage from hundreds of thousands of customers is aggregated in the cloud, providers such as AWS can achieve higher economies of scale, which translates into lower pay as-you-go prices. ",
        "Ref":"https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/six-advantages-of-cloud-computing.html"  
    },
    {
        "Id": 5,
        "Name": "You host a web application across multiple AWS regions in the world, and you need to configure your DNS so that your end users will get the fastest network performance possible. Which routing policy should you apply?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Simple routing policy", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Failover routing policy", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Geolocation routing policy", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Latency routing policy", "IsAnswer": true }],
        "Explanation": "The correct answer is Latency routing policy which can be used when you have resources in multiple AWS Regions and you want to route traffic to the region that provides the best latency and get the fastest network performance possible.// ** Simple routing policy – Use for a single resource that performs a given function for your domain, for example, a web server that serves content for the example.com website. ** Failover routing policy – Use when you want to configure active-passive failover. ** Geolocation routing policy – Use when you want to route traffic based on the location of your users.",
        "Ref":"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html"  
    },
    {
        "Id": 6,
        "Name": "Your CTO has asked you to contact the AWS support using the chat feature to ask for guidance related to EBS. However, when you open the AWS support center you can't see a way to contact support via Chat feature. What is missing?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Chat feature is available only in Enterprise plan", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Upgrade to minimum Business support plane", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "There is no chat feature in AWS support", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Upgrade from Basic plane to Developer plane", "IsAnswer": false }],
        "Explanation": "Chat option is available in Business and Enterprise plan only. ",
        "Ref":"https://aws.amazon.com/premiumsupport/compare-plans/"  
    },
    {
        "Id": 7,
        "Name": "What AWS storage class should be used for long-term, archival storage?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Glacier", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Long-Term", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Standard", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Infrequent Access", "IsAnswer": false }],
        "Explanation": "Glacier should be used for (and is specifically designed for) long-term , archival storage.",
        "Ref":"https://aws.amazon.com/s3/storage-classes/"  
    },
    {
        "Id": 8,
        "Name": "Which of the following can be used to reduce Amazon DynamoDB costs?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Reserved Capacity", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Reserved Instances", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Reserved Nodes", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Reserved Storage", "IsAnswer": false }],
        "Explanation": "If you can predict your need for Amazon DynamoDB read-and-write throughput, Reserved Capacity offers significant savings over the normal price of DynamoDB provisioned throughput capacity. You pay a one-time upfront fee and commit to paying for a minimum usage level at specific hourly rates for the duration of the Reserved Capacity term. Any throughput you provision in excess of your Reserved Capacity is billed at standard rates for provisioned throughput. ",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf"  
    },
    {
        "Id": 9,
        "Name": "Which of the following AWS services would help to prevent data from being exchanged between devices when they communicate among each other and the cloud?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Cognito", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Glue", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Greengrass", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Inspector", "IsAnswer": false }],
        "Explanation": "AWS Greengrass authenticates and encrypts device data at all points of connection using the AWS IoT security and access management capabilities. This way data is never exchanged between devices when they communicate with each other and the cloud without proven identity. ",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws-overview.pdf"  
    },
    {
        "Id": 10,
        "Name": "Which of the following AWS services uses Puppet to automate how servers are configured, deployed, and managed across your EC2 Instances?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS CloudTrail", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS OpsWorks", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS CloudFormation", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon CloudWatch", "IsAnswer": false }],
        "Explanation": "AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet. Chef and Puppet are automation platforms that allow you to use code to automate the configurations of your servers. OpsWorks lets you use Chef and Puppet to automate how servers are configured, deployed, and managed across your Amazon EC2 instances or on-premises compute environments. ",
        "Ref":"https://aws.amazon.com/opsworks/"  
    },
    {
        "Id": 11,
        "Name": "Which of the following storage classes is more appropriate for dynamic websites with predictable access patterns?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "S3 Standard-IA", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "S3 Intelligent-Tiering", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3 Standard", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "S3 Glacier", "IsAnswer": false }],
        "Explanation": "S3 Standard offers high durability, availability, and performance object storage for frequently accessed data. Because it delivers low latency and high throughput, S3 Standard is appropriate for a wide variety of use cases, including cloud applications, dynamic websites, content distribution, mobile and gaming applications, and big data analytics. S3 Storage Classes can be configured at the object level and a single bucket can contain objects stored across S3 Standard, S3 Intelligent-Tiering, S3 Standard-IA, and S3 One Zone-IA. You can also use S3 Lifecycle policies to automatically transition objects between storage classes without any application changes. ",
        "Ref":"https://aws.amazon.com/s3/storage-classes/"  
    },
    {
        "Id": 12,
        "Name": "A user has launched an EC2 Instance. The instance was terminated as soon as it was launched. Which of the below mentioned options is not a possible reason for this?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The user account has reached the maximum EC2 instance limit.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "The snapshot is corrupt.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The AMI is missing. It is the required part.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The user account has reached the maximum volume limit.", "IsAnswer": false }],
        "Explanation": "When the user account has reached the maximum number of EC2 instances, it will not be allowed to launch an instance. AWS will throw an `InstanceLimitExceeded' error. For all other reasons, such as 'AMI is missing part', 'Corrupt Snapshot' or 'Volume limit has reached' it will launch an EC2 instance and then terminate it."
    },
    {
        "Id": 13,
        "Name": "What are the benefits of using the AWS cloudFormation? (select 3 that apply)", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Allows you to model your entire infrastructure in a text file.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Provisions your resources in a safe, repeatable manner.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Applies advanced IAM security features automatically.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Allows you to treat your infrastructure as just code.", "IsAnswer": true }],
        "Explanation": "The benefits using AWS cloudFormation AWS CloudFormation are as follows: 1- Allows you to model your entire infrastructure in a text file. This template becomes the single source of truth for your infrastructure. This helps you to standardize infrastructure components used across your organization, enabling configuration compliance and faster troubleshooting.\\ 2- AWS CloudFormation provisions your resources in a safe, repeatable manner, allowing you to build and rebuild your infrastructure and applications, without having to perform manual actions or write custom scripts. CloudFormation takes care of determining the right operations to perform when managing your stack, and rolls back changes automatically if errors are detected.\\ 3- Codifying your infrastructure allows you to treat your infrastructure as just code. You can author it with any code editor, check it into a version control system, and review the files with team members before deploying into production. IAM security is the responsibility of the customer and never been created automatically.",
        "Ref":"https://aws.amazon.com/cloudformation"  
    },
    {
        "Id": 14,
        "Name": "Which of the following services could help you track the impact of your Mobile App campaign?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Kinesis", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Polly", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Rekognition", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Pinpoint", "IsAnswer": true }],
        "Explanation": "Amazon Pinpoint makes it easy to run targeted campaigns to drive user engagement in mobile apps. Amazon Pinpoint helps you understand user behavior, define which users to target, determine which messages to send, schedule the best time to deliver the messages, and then track the results of your campaign.",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws-overview.pdf"  
    },
    {
        "Id": 15,
        "Name": "How are S3 storage classes rated?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Availability", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Durability", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Availability & Durability", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above.", "IsAnswer": false }],
        "Explanation": "Each S3 storage class is rated on its availability and durability."
    },
    {
        "Id": 16,
        "Name": "What are the advantages of AWS security? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Meet Compliance Requirements", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Performed automatically", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Save Money", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Completely Free", "IsAnswer": false }],
        "Explanation": "The Benefits of AWS Security are as follows : 1- Keep Your Data Safe: The AWS infrastructure puts strong safeguards in place to help protect your privacy. All data is stored in highly secure AWS data centers.// 2- Meet Compliance Requirements: AWS manages dozens of compliance programs in its infrastructure. This means that segments of your compliance have already been completed.// 3- Save Money: Cut costs by using AWS data centers. Maintain the highest standard of security without having to manage your own facility.// 4- Scale Quickly: Security scales with your AWS Cloud usage. No matter the size of your business, the AWS infrastructure is designed to keep your data safe./// Option B is not correct as it follows the shared responsibility model. Option D is not correct as it is not completely free and you have to pay for certain services. ",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws-overview.pdf"  
    },
    {
        "Id": 17,
        "Name": "What is the standard language that can be used to perform queries in Amazon Athena?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "NoSQL", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "SQL", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "DBMS", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "DMX", "IsAnswer": false }],
        "Explanation": "Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run. Athena is easy to use. Simply point to your data in Amazon S3, define the schema, and start querying using standard SQL. Most results are delivered within seconds. With Athena, there’s no need for complex ETL jobs to prepare your data for analysis. This makes it easy for anyone with SQL skills to quickly analyze large-scale datasets.",
        "Ref":"https://aws.amazon.com/athena/"
    },
    {
        "Id": 18,
        "Name": "Which of the following can be attached to EC2 Instances to store data?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Glacier", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon SQS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon EBS Snapshots", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon EBS Volumes", "IsAnswer": true }],
        "Explanation": "An Amazon EBS volume is a durable, block-level storage device that you can attach to a single EC2 instance. You can use EBS volumes as primary storage for data that requires frequent updates, such as the system drive for an instance or storage for a database application. ",
        "Ref":"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html"  
    },
    {
        "Id": 19,
        "Name": "Which of the following can be used to upload data to Amazon Glacier? (Choose 3 answers)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Management Console", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Glacier SDK", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS CLI", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "REST API", "IsAnswer": true }],
        "Explanation": "Amazon Glacier provides a management console, which you can use to create and delete vaults. However, you cannot upload archives to Amazon Glacier by using the management console. To upload data, such as photos, videos, and other documents, you must either use the AWS CLI or write code to make requests, by using either the REST API directly or by using the AWS SDKs. ",
        "Ref":"https://docs.aws.amazon.com/amazonglacier/latest/dev/uploading-an-archive.html"  
    },
    {
        "Id": 20,
        "Name": "Which of the following services gives you access to all AWS auditor-issued reports?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Artifact", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS CloudWatch", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Audit", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon SNS", "IsAnswer": false }],
        "Explanation": "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS’ security and compliance reports and select online agreements. Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls. Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA). ",
        "Ref":"https://aws.amazon.com/artifact/"  
    }
    ,
    {
        "Id": 21,
        "Name": "A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn’t have any experience with cloud computing to get started. Which of the following AWS services would help him achieve his goal?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS X-Ray", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Elastic Beanstalk", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Fargate", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Batch", "IsAnswer": false }],
        "Explanation": "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS. You can simply upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring. At the same time, you retain full control over the AWS resources powering your application and can access the underlying resources at any time. There is no additional charge for Elastic Beanstalk - you pay only for the AWS resources needed to store and run your applications. ",
        "Ref":"https://aws.amazon.com/elasticbeanstalk/faqs/"  
    } ,
    {
        "Id": 22,
        "Name": "Which of the following are use cases of Amazon EMR? (select 4 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Real-time Analytics", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Clickstream Analysis", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Log Analysis", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Financial analysis", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Data ingestion", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Data archival", "IsAnswer": false }],
        "Explanation": "Data ingestion and archival are not the use cases for EMR. See link for details.",
        "Ref":"https://aws.amazon.com/emr/"  
    } ,
    {
        "Id": 23,
        "Name": "How does one protect his/her EC2 Instances? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "By using Security Groups", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "By using AMI’s", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "By using the Internet gateway", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "By using Network Access Control Lists", "IsAnswer": true }],
        "Explanation": "A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. A network access control list (ACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.",
        "Ref":"https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_ACLs.html"  
    } ,
    {
        "Id": 24,
        "Name": "Which of the following would help you collecting important metrics from AWS RDS and EC2 Instances?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon CloudFront", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon CloudSearch", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon CloudWatch", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Config", "IsAnswer": false }],
        "Explanation": "Amazon CloudWatch is a monitoring service for AWS cloud resources and the applications you run on AWS. You can use Amazon CloudWatch to collect and track metrics, collect and monitor log files, set alarms, and automatically react to changes in your AWS resources.",
        "Ref":"https://aws.amazon.com/cloudwatch"  
    } ,
    {
        "Id": 25,
        "Name": "A company has infrastructure hosted in an on-premises data center. They currently have an operational team that takes care of ID management. If they decided to move to the AWS cloud, which of the following services would help them performing the same role in AWS?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS X-Ray", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Cloud Trail", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS KMS", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS IAM", "IsAnswer": true }],
        "Explanation": "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.",
        "Ref":"https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html"  
    } ,
    {
        "Id": 26,
        "Name": "Which of the following is NOT a factor when estimating the cost of Amazon CloudFront?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The number and type of requests (HTTP or HTTPS) made.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Inbound traffic.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Data Transfer Out", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The edge location through which your content is served.", "IsAnswer": false }],
        "Explanation": "Amazon CloudFront charges are based on the data transfers and requests used to deliver content to your customers. There are no upfront payments or fixed platform fees, no long-term commitments, no premiums for dynamic content, and no requirements for professional services to get started. There is no charge for data transferred from AWS services such as Amazon S3 or Elastic Load Balancing. And, best of all, you can get started with CloudFront for free.// When you begin to estimate the cost of Amazon CloudFront, consider the following: **Traffic distribution: Data transfer and request pricing varies across geographic regions, and pricing is based on the edge location through which your content is served. **Requests: The number and type of requests (HTTP or HTTPS) made and the geographic region in which the requests are made. **Data transfer out: The amount of data transferred out of your Amazon CloudFront edge locations.",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf"  
    } ,
    {
        "Id": 27,
        "Name": "Which of the following AWS services should you use to migrate an existing database to AWS?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Lambda", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Storage gateway", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS DMS", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Snowball", "IsAnswer": false }],
        "Explanation": "AWS Database Migration Service helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. The AWS Database Migration Service can migrate your data to and from most widely used commercial and open-source databases."
    } ,
    {
        "Id": 28,
        "Name": "Your company uses on-demand EC2 Instances dedicated to a project that has just been cancelled. The company does not want to incur charges for these on-demand Instances. However, it also does not want to lose the data yet because there is a chance the project may be revived in the next few days. What should you do to minimize charges for these Instances in the meantime? Sell the instances on the AWS On-Demand Instance Marketplace as you can buy other on-demand EC2 instances later if needed.", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Terminate the instances as soon as possible", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Stop the instances as soon as possible", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "You cannot minimize charges for this type of instances", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Delete the instances asap.", "IsAnswer": false }],
        "Explanation": "The best way to minimize charges is to stop the instances to avoid any data transfer charges that the instance might incur if left running."
    } ,
    {
        "Id": 29,
        "Name": "What are the key design principles of the AWS Cloud? (select all that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Disposable resources", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Managed services instead of servers", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Reserved capacity instead of on demand.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Loose coupling.", "IsAnswer": true }],
        "Explanation": "The AWS Cloud includes many design patterns and architectural options that you can apply to a wide variety of use cases. Some key design principles of the AWS Cloud include scalability, disposable resources, automation, loose coupling managed services instead of servers, and flexible data storage options.",
        "Ref":"https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"  
    } ,
    {
        "Id": 30,
        "Name": "Your web application has periodic workloads that run only a few days per week. Which of the following reserved Instance utilization models would be the best?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Light", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Periodic", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Medium", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Heavy", "IsAnswer": false }],
        "Explanation": "If you know how much you plan to utilize your Reserved Instances, you can save even more. AWS offers Light, Medium, and Heavy Utilization Reserved Instances. The Light Utilization model is a great option if you have periodic workloads that run only a couple of hours a day or a few days a week. Medium Utilization Reserved Instances are the same Reserved Instances that Amazon EC2 has offered for last several years. They are a great option if you don’t plan to run your instances all the time, and if you want the option to shut down your instances when you’re not using them. If you need a consistent baseline of capacity or if you run steady-state workloads, the Heavy Utilization model is the best option.",
        "Ref":"https://d1.awsstatic.com/whitepapers/aws-tco-web-applications.pdf"  
    }
    ,
    {
        "Id": 31,
        "Name": "Engineers are facing a lot of problems when aiming to install and manage batch computing software on traditional data centers. Which of the following AWS services would allow them to easily run hundreds of thousands of batch computing jobs?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS computing", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS optimizer", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Batch", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS inspector", "IsAnswer": false }],
        "Explanation": "AWS Batch enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs on AWS. AWS Batch dynamically provisions the optimal quantity and type of compute resources (e.g., CPU or memory-optimized instances) based on the volume and specific resource requirements of the batch jobs submitted. With AWS Batch, there is no need to install and manage batch computing software or server clusters that you use to run your jobs, allowing you to focus on analyzing results and solving problems. AWS Batch plans, schedules, and executes your batch computing workloads across the full range of AWS compute services and features, such as Amazon EC2 and Spot Instances.",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws-overview.pdf"  
    },
    {
        "Id": 32,
        "Name": "Which of the following services can be used in Real-Time Auditing for compliance or vulnerabilities? (select 3 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Config", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon MQ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Inspector", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Trusted Advisor", "IsAnswer": true }],
        "Explanation": "Services like AWS Config, Amazon Inspector, and AWS Trusted Advisor continually monitor for compliance or vulnerabilities giving you a clear overview of which IT resources are in compliance, and which are not. With AWS Config rules you will also know if some component was out of compliance even for a brief period of time, making both point-in-time and period-in-time audits very effective. ",
        "Ref":"https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"  
    }
    ,
    {
        "Id": 33,
        "Name": "Which of the following allows you to manage your encryption keys on the AWS Cloud? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS KMS", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS QMS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Cloud FSM", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Cloud HSM", "IsAnswer": true }],
        "Explanation": "** AWS Key Management Service (KMS) is a managed service that makes it easy for you to create and control the encryption keys used to encrypt your data, and uses FIPS 140-2 validated hardware security modules to protect the security of your keys. AWS Key Management Service is integrated with most other AWS services to help you protect the data you store with these services. AWS Key Management Service is also integrated with AWS CloudTrail to provide you with logs of all key usage to help meet your regulatory and compliance needs. ** AWS CloudHSM is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud. With CloudHSM, you can manage your own encryption keys using FIPS 140-2 Level 3 validated HSMs. CloudHSM offers you the flexibility to integrate with your applications using industry-standard APIs, such as PKCS#11, Java Cryptography Extensions (JCE), and Microsoft CryptoNG (CNG) libraries. ",
        "Ref":"https://aws.amazon.com/kms/ https://aws.amazon.com/cloudhsm/"  
    }
    ,
    {
        "Id": 34,
        "Name": "If your organization is concerned about storing sensitive data in the cloud, you should __________. (Select 2 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Enable S3 Encryption", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Encrypt this data prior to uploading it.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Delete the encryption keys once your data is encrypted", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "With AWS you do not need to worry about encryption", "IsAnswer": false }],
        "Explanation": "Deletion is not an option as keys are required to decrypt. AWS  provides encryption but you still need have a responsibility and options to use your own encryption. See reference for details.",
        "Ref":"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingEncryption.html"  
    }
    ,
    {
        "Id": 35,
        "Name": "You need to run a number of Amazon EC2 Instances that are physically isolated at the host hardware level from instances that belong to other AWS accounts. How can you meet this requirement in a cost effective way?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Using Amazon EC2 Spot Instances", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Using Amazon EC2 Reserved Instances", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Using Amazon EC2 Dedicated Hosts", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Using Amazon EC2 Dedicated Instances", "IsAnswer": true }],
        "Explanation": "Dedicated Instances are Amazon EC2 instances that run in a VPC on hardware that's dedicated to a single customer. Your Dedicated instances are physically isolated at the host hardware level from instances that belong to other AWS accounts. Dedicated instances may share hardware with other instances from the same AWS account that are not dedicated instances. Option C is not true as it is not cost effective compared to the Amazon EC2 Dedicated Instances. ",
        "Ref":"https://aws.amazon.com/ec2/purchasing-options/dedicated-instances/ https://aws.amazon.com/ec2/dedicated-hosts/pricing/"  
    }
    ,
    {
        "Id": 36,
        "Name": "Which of the following is a cloud computing deployment model that connects infrastructure and applications between cloud-based resources and existing resources that are not located in the cloud ?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Cloud", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Hybrid", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "On-premises", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
        "Explanation": "A hybrid deployment is a way to connect infrastructure and applications between cloud-based resources and existing resources that are not located in the cloud. The most common method of hybrid deployment is between the cloud and existing on-premises infrastructure to extend, and grow, an organization's infrastructure into the cloud while connecting cloud resources to the internal system. ",
        "Ref":"https://docs.aws.amazon.com/aws-technical-content/latest/aws-overview/aws-overview.pdf"  
    }
    ,
    {
        "Id": 37,
        "Name": "What best describes penetration testing?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Testing your applications ability to penetrate other applications.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Testing your IAM users access to AWS services.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Testing your own network/application for vulnerabilities.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above.", "IsAnswer": false }],
        "Explanation": "See link for details",
        "Ref":"https://aws.amazon.com/security/penetration-testing/"  
    }
    ,
    {
        "Id": 38,
        "Name": "Which of the following will affect how much you are charged for storing objects in S3? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The storage class used for the objects stored.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Using default encryption for any number of S3 buckets.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Creating and deleting S3 buckets", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The total size in gigabytes of all objects stored.", "IsAnswer": true }],
        "Explanation": "Please note that there are no new charges for using default encryption for S3 buckets however Requests to configure the default encryption feature incur standard Amazon S3 request charges.",
        "Ref":"https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html"  
    }
    ,
    {
        "Id": 39,
        "Name": "What is the document that provides a formal statement of one or more permissions?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Role", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Permission", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Policy", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Resource", "IsAnswer": false }],
        "Explanation": "A policy is a JSON document that specifies what a user can do on AWS. This document consists of >> Actions: what actions you will allow. Each AWS service has its own set of actions. >> Resources: which resources you allow the action on. >> Effect: what the effect will be when the user requests access—either allow or deny. Additionally: A policy is an entity in AWS that, when attached to an identity or resource, defines their permissions. AWS evaluates these policies when a principal, such as a user, makes a request. Permissions in the policies determine whether the request is allowed or denied"
    }
    ,
    {
        "Id": 40,
        "Name": "You are planning to run Amazon Redshift for at least 13 months. Which of the following approaches would be cost effective?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Purchasing reserved-capacity offerings.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Purchasing reserved-node offerings.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Purchasing reserved-instances offerings.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Purchasing On-demand offerings.", "IsAnswer": false }],
        "Explanation": "If you intend to keep an Amazon Redshift cluster running continuously for a prolonged period, you should consider purchasing reserved-node offerings. These offerings provide significant savings over on-demand pricing, but they require you to reserve compute nodes and commit to paying for those nodes for either a 1- or 3-year duration.",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf"  
    }
    ,
    {
        "Id": 41,
        "Name": "What does Amazon DynamoDB provide?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A predictable and scalable MySQL database", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "A fast and reliable PL/SQL database cluster", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A standalone Cassandra database, managed by Amazon Web Services", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "A fast, highly scalable managed NoSQL database service", "IsAnswer": true }],
        "Explanation": "Amazon DynamoDB is a managed NoSQL database service offered by Amazon. It automatically manages tasks like scalability for you while it provides high availability and durability for your data, allowing you to concentrate in other aspects of your application.",
        "Ref":"https://aws.amazon.com/running_databases/"  
    },
    {
        "Id": 42,
        "Name": "Why is AWS more economical than traditional data centers for applications with varying computing workloads?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Customers retain full administrative access to their Amazon EC2 instances.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon EC2 instances can be launched on-demand when needed.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Customers can permanently run enough instances to handle peak workloads.", "IsAnswer": false }],
        "Explanation": "The ability to launch instances on-demand when needed allows customers launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premises servers to handle the peak load."
    },
    {
        "Id": 43,
        "Name": "Which of the following services is a serverless compute service in AWS?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS EC2", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Config", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Opswork", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Lambda", "IsAnswer": true }],
        "Explanation": "AWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second. ",
        "Ref":"https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"  
    },
    {
        "Id": 44,
        "Name": "When giving permission to users via the AWS Identity and Access Management tool , which of the following principles should be applied when granting permissions?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Principle of least privilege", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Principle of greatest privilege", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Principle of most privilege", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Principle of lower privilege", "IsAnswer": false }],
        "Explanation": "The principle of least privilege (PoLP, also known as the principle of minimal privilege or the principle of least authority) requires that in a particular abstraction layer of a computing environment, every module (such as a process, a user, or a program, depending on the subject) must be able to access only the information and resources that are necessary for its legitimate purpose. For example, a user account for the sole purpose of creating backups does not need to install software: hence, it has rights only to run backup and backup-related applications. Any other privileges, such as installing new software, are blocked. ",
        "Ref":"https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege"  
    },
    {
        "Id": 45,
        "Name": "You want to transfer 1.3 petabytes of data from on-premises locations to the AWS Cloud, which of the following can be used?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Import/Export", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS EC2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Snowball", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Transfer", "IsAnswer": false }],
        "Explanation": "Snowball is a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data into and out of the AWS cloud. Using Snowball addresses common challenges with large-scale data transfers including high network costs, long transfer times, and security concerns. Transferring data with Snowball is simple, fast, secure, and can be as little as one-fifth the cost of high-speed Internet.",
        "Ref":"https://aws.amazon.com/snowball/"  
    },
    {
        "Id": 46,
        "Name": "What does the AWS Storage Gateway provide?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "It allows to integrate on premises IT environments with Cloud Storage.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "A direct encrypted connection to Amazon S3.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "It's a backup solution that provides an on-premises Cloud storage.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "It provides an encrypted SSL endpoint for backups in the Cloud.", "IsAnswer": false }],
        "Explanation": "AWS Storage Gateway connects an on-premises software appliance with cloud-based storage to provide seamless integration with data security features between your on-premises IT environment and the AWS storage infrastructure. You can use the service to store data in the AWS Cloud for scalable and cost-effective storage that helps maintain data security. ",
        "Ref":"https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html"  
    },
    {
        "Id": 47,
        "Name": "Which of the following are features of an edge location? Choose 3 answers", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Distribute content to users", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Distribute load across multiple resources", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Cache common responses", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Used in conjunction with the Cloudfront service", "IsAnswer": true}],
        "Explanation": "Amazon CloudFront employs a global network of edge locations and regional edge caches that cache copies of your content close to your viewers. Amazon CloudFront ensures that end-user requests are served by the closest edge location. As a result, viewer requests travel a short distance, improving performance for your viewers. For files not cached at the edge locations and the regional edge caches, Amazon CloudFront keeps persistent connections with your origin servers so that those files can be fetched from the origin servers as quickly as possible. Option B is not correct AWS CloudFront does not distribute traffic to AWS resources, this is the ELB job. ",
        "Ref":"https://aws.amazon.com/cloudfront/details/"  
    },
    {
        "Id": 48,
        "Name": "What is the main difference between NACLS and security groups? (Choose two)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "NACLS are stateful however security groups are stateless.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "NACLS are stateless however security groups are stateful.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "NACLS controls a subnet however security groups controls an instance.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "NACLS controls an instance however security groups controls a subnet.", "IsAnswer": true }],
        "Explanation": "A security group acts as a virtual firewall for your instance to control inbound and outbound traffic. When you launch an instance in a VPC, you can assign up to five security groups to the instance. Security groups act at the instance level, not the subnet level. Therefore, each instance in a subnet in your VPC could be assigned to a different set of security groups. If you don't specify a particular group at launch time, the instance is automatically assigned to the default security group for the VPC. A security group is stateful: Return traffic is automatically allowed, regardless of any rules. ** Network access control lists (ACLs) — Act as a firewall for associated subnets, controlling both inbound and outbound traffic at the subnet level. NACLS are stateless: Return traffic must be explicitly allowed by rules. ",
        "Ref":"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html#VPC_Security_Comparison"  
    },
    {
        "Id": 49,
        "Name": "You can access the Amazon SNS service by: (Select 3 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Management Console", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS SQS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Command Line Interface (CLI)", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon SNS Query API", "IsAnswer": true }],
        "Explanation": "If you have an AWS account, you can access Amazon SNS in any of the following ways. 1- AWS Management Console The AWS Management Console provides a web interface where you can manage your compute, storage, and other cloud resources. Within the AWS Management Console, individual services have their own console. To open the Amazon SNS console, log in to https://console.aws.amazon.com/ and choose SNS from the console home page, or use the SNS console direct URL: https://console.aws.amazon.com/sns/. 2- AWS Command Line Interface (CLI) Provides commands for a broad set of AWS products, and is supported on Windows, Mac, and Linux. To get started, see AWS Command Line Interface User Guide. 3- AWS Tools for Windows PowerShell Provides commands for a broad set of AWS products for those who script in the PowerShell environment. To get started, see the AWS Tools for Windows PowerShell User Guide. 4- AWS SDKs AWS provides SDKs (software development kits) that consist of libraries and sample code for various programming languages and platforms (Java, Python, Ruby, .NET, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to Amazon SNS and AWS. For example, the SDKs take care of tasks such as cryptographically signing requests, managing errors, and retrying requests automatically. 5- Amazon SNS Query API You can access Amazon SNS and AWS programmatically by using the Amazon SNS Query API, which lets you issue requests directly to the service. ",
        "Ref":"https://docs.aws.amazon.com/sns/latest/dg/welcome.html"  
    },
    {
        "Id": 50,
        "Name": "Which of the following are factors to consider for the Amazon EBS pricing? (Select 2 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The amount of GB you provision per month for the Volume storage.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "The compute capacity you consume.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The compute time you consume.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The amount of data transferred out of your application.", "IsAnswer": true }],
        "Explanation": "Amazon EBS pricing includes three factors: **Volumes: Volume storage for all EBS volume types is charged by the amount of GB you provision per month, until you release the storage. **Snapshots: Snapshot storage is based on the amount of space your data consumes in Amazon S3. Because Amazon EBS does not save empty blocks, it is likely that the snapshot size will be considerably less than your volume size. Copying EBS snapshots is charged based on the volume of data transferred across regions. For the first snapshot of a volume, Amazon EBS saves a full copy of your data to Amazon S3. For each incremental snapshot, only the changed part of your Amazon EBS volume is saved. After the snapshot is copied, standard EBS snapshot charges apply for storage in the destination region. **Data transfer: Consider the amount of data transferred out of your application. Inbound data transfer is free, and outbound data transfer charges are tiered.",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf"  
    }
    ,
    {
        "Id": 51,
        "Name": "Which of the following affects the Amazon CloudFront costs? (Select 3 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Traffic Distribution", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Volumes", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Requests", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Data Transfer Out", "IsAnswer": true }],
        "Explanation": "When you want to estimate the costs of Amazon CloudFront you need to consider the following: ** Data Transfer Out. ** Traffic Distribution. ** Requests. Volumes is not true as it is a caching service not a storage service.",
        "Ref":"https://aws.amazon.com/cloudfront/pricing/"  
    }
    ,
    {
        "Id": 52,
        "Name": "Your company has just started using the resources on the AWS Cloud. They want to get an idea about the costs being incurred so far for the resources being used. How can this be achieved?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "By going to the Amazon EC2 dashboard. Here you can see the costs of the running EC2 resources.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "By using the AWS Cost and Usage reports Explorer. Here you can see the running and forecast costs.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "By using the AWS Trusted Advisor dashboard. This dashboard will give you all the costs.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "By seeing the AWS Cloud Trail logs.", "IsAnswer": false }],
        "Explanation": "The AWS Cost & Usage Report is a single location for accessing comprehensive information about your AWS costs and usage. The AWS Cost & Usage Report lists AWS usage for each service category used by an account and its IAM users in hourly or daily line items, as well as any tags that you have activated for cost allocation purposes.",
        "Ref":"https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/"  
    }
    ,
    {
        "Id": 53,
        "Name": "When dealing with Container Services AWS is responsible for: (Select all that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Managing the underlying infrastructure and foundation services.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Managing the operating system.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Managing firewall rules", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Managing the application platform.", "IsAnswer": true }],
        "Explanation": "The AWS shared responsibility model also applies to container services, such as Amazon RDS and Amazon EMR. For these services, AWS manages the underlying infrastructure and foundation services, the operating system and the application platform. For example, Amazon RDS for Oracle is a managed database service in which AWS manages all the layers of the container, up to and including the Oracle database platform. For services such as Amazon RDS, the AWS platform provides data backup and recovery tools; but it is your responsibility to configure and use tools in relation to your business continuity and disaster recovery (BC/DR) policy. For AWS Container services, you are responsible for the data and for firewall rules for access to the container service. For example, Amazon RDS provides RDS security groups, and Amazon EMR allows you to manage firewall rules through Amazon EC2 security groups for Amazon EMR instances. ",
        "Ref":"https://d1.awsstatic.com/whitepapers/Security/AWS_Security_Best_Practices.pdf"  
    }
    ,
    {
        "Id": 54,
        "Name": "Which of the following is not a supported database in the AWS RDS service?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Aurora", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "DB2", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "MySQL", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "MariaDB", "IsAnswer": false }],
        "Explanation": "Amazon RDS is available on several database instance types - optimized for memory, performance or I/O - and provides you with six familiar database engines to choose from, including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle, and Microsoft SQL Server. ",
        "Ref":"https://aws.amazon.com/rds/"  
    }
    ,
    {
        "Id": 55,
        "Name": "On the monthly statement, there is a section where you can see the charges of an outbound data transfer. What is the name of that section?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Out Transfer", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Outbound Data Transfer", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Outbound", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Data Transfer Out", "IsAnswer": true }],
        "Explanation": "Outbound data transfer is aggregated across services and then charged at the outbound data transfer rate. This charge appears on the monthly statement as AWS Data Transfer Out. ",
        "Ref":"https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf"  
    }
    ,
    {
        "Id": 56,
        "Name": "Which of the following is true regarding elastic IP addresses?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You can have one EIP free of charge.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "You can have any number of EIPs free of charge.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You can have three EIPs free of charge for each EC2 instance you provision.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "EIPs are not free.", "IsAnswer": false }],
        "Explanation": "An Elastic IP address doesn’t incur charges as long as the following conditions are true: ** The Elastic IP address is associated with an EC2 instance. ** The instance associated with the Elastic IP address is running. ** The instance has only one Elastic IP address attached to it. // You're charged by the hour for each Elastic IP address that doesn't meet these conditions. ",
        "Ref":"https://aws.amazon.com/premiumsupport/knowledge-center/elastic-ip-charges/"  
    }
    ,
    {
        "Id": 57,
        "Name": "Which AWS Cloud service is used to enable the Virtual Multi-Factor Authentication?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Config", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Elastic Compute Cloud (Amazon EC2)", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Identity and Access Management (IAM)", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Inspector", "IsAnswer": false }],
        "Explanation": "You can use IAM in the AWS Management Console to enable a virtual MFA device for an IAM user in your account.",
        "Ref":"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html"  
    }
    ,
    {
        "Id": 58,
        "Name": "You have a real-time IoT application that requires sub-millisecond latency. Which of the following services would you use?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon ElastiCache for Redis", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon IoT caching", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon polly", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon IoT Accelerator", "IsAnswer": false }],
        "Explanation": "Amazon ElastiCache for Redis is a blazing fast in-memory data store that provides sub-millisecond latency to power internet-scale real-time applications. Built on open-source Redis and compatible with the Redis APIs, ElastiCache for Redis works with your Redis clients and uses the open Redis data format to store your data. Your self-managed Redis applications can work seamlessly with ElastiCache for Redis without any code changes. ElastiCache for Redis combines the speed, simplicity, and versatility of open-source Redis with manageability, security, and scalability from Amazon to power the most demanding real-time applications in Gaming, Ad-Tech, E-Commerce, Healthcare, Financial Services, and IoT. ",
        "Ref":"https://aws.amazon.com/elasticache/redis/"  
    }
    ,
    {
        "Id": 59,
        "Name": "You need to migrate a large number of on-premises workloads to AWS. Which of the following is the fastest way to achieve your goal?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Using the AWS Database Migration Service.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Using the AWS Server Migration Service.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Using the AWS Application Discovery Service.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "None of the above.", "IsAnswer": false }],
        "Explanation": "AWS Server Migration Service (SMS) is an agentless service which makes it easier and faster for you to migrate thousands of on-premises workloads to AWS. AWS SMS allows you to automate, schedule, and track incremental replications of live server volumes, making it easier for you to coordinate large-scale server migrations. ",
        "Ref":"https://aws.amazon.com/server-migration-service/"  
    }
    ,
    {
        "Id": 60,
        "Name": "Which of the following AWS services provides very high query performance on datasets ranging from 100 GB to 1 PB or more?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Redshift", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS RDS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS DynamoDB", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS ElastiCache", "IsAnswer": false }],
        "Explanation": "Amazon Redshift uses a variety of innovations to obtain very high query performance on datasets ranging in size from a hundred gigabytes to a petabyte or more. It uses columnar storage, data compression, and zone maps to reduce the amount of I/O needed to perform queries. Amazon Redshift has a massively parallel processing (MPP) data warehouse architecture, parallelizing and distributing SQL operations to take advantage of all available resources. The underlying hardware is designed for high performance data processing, using local attached storage to maximize throughput between the CPUs and drives, and a 10GigE mesh network to maximize throughput between nodes.",
        "Ref":"https://d1.awsstatic.com/whitepapers/aws-overview.pdf"  
    }
    ,
    {
        "Id": 61,
        "Name": "AWS provides the ability to create backups of any Amazon EC2 volume into what is known as: ____________", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Snapshots", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Images", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Instance backups", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Mirrors", "IsAnswer": false }],
        "Explanation": "AWS allows you to make backups of the data stored in your EBS volumes through snapshots that can later be used to create a new EBS volume. ",
        "Ref":"http://docs.amazonwebservices.com/AWSEC2/latest/UserGuide/Storage.htmI"  
    }
    ,
    {
        "Id": 62,
        "Name": "How are the Amazon EBS snapshots backed up on Amazon S3 in order to reduce storage costs?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Using Exponential backups.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Using Incremental backups.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Using Decremental backups", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "EBS snapshots are not stored in the Amazon S3", "IsAnswer": false }],
        "Explanation": "You can back up the data on your Amazon EBS volumes to Amazon S3 by taking point-in-time snapshots. Snapshots are incremental backups, which means that only the blocks on the device that have changed after your most recent snapshot are saved. This minimizes the time required to create the snapshot and saves on storage costs by not duplicating data. When you delete a snapshot, only the data unique to that snapshot is removed. Each snapshot contains all of the information needed to restore your data (from the moment when the snapshot was taken) to a new EBS volume.",
        "Ref":"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSSnapshots.html"  
    }
    ,
    {
        "Id": 63,
        "Name": "Which of the following AWS services could help you in security analysis and compliance auditing? (Select 3 that apply)", 
        "Tag":"",
        "manyoptions":true,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS CloudTrail", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Config", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS ECS", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Inspector", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS Service Catalog", "IsAnswer": false }],
        "Explanation": "**With CloudTrail, you can get a history of AWS API calls for your account, including API calls made using the AWS Management Console, AWS SDKs, command line tools, and higher-level AWS services (such as AWS CloudFormation). The AWS API call history produced by CloudTrail enables security analysis, resource change tracking, and compliance auditing. **With AWS Config, you can discover existing and deleted AWS resources, determine your overall compliance against rules, and dive into configuration details of a resource at any point in time. These capabilities enable compliance auditing, security analysis, resource change tracking, and troubleshooting.** Amazon Inspector provides an engine that analyzes system and resource configuration and monitors activity to determine what an assessment target looks like, how it behaves, and its dependent components. The combination of this telemetry provides a complete picture of the assessment target and its potential security or compliance issues. ",
        "Ref":"https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"  
    }
    ,
    {
        "Id": 64,
        "Name": "You are running a financial services web app on AWS. which of the following AWS services would improve the performance of your app by allowing you to retrieve information from fast in-memory caches?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS ElastiCache", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS DynamoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS S3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS EFS", "IsAnswer": false }],
        "Explanation": "Amazon ElastiCache offers fully managed Redis and Memcached. Seamlessly deploy, operate, and scale popular open source compatible in-memory data stores. Build data-intensive apps or improve the performance of your existing apps by retrieving data from high throughput and low latency in-memory data stores. Amazon ElastiCache is a popular choice for Gaming, Ad-Tech, Financial Services, Healthcare, and IoT apps.",
        "Ref":"https://d1.awsstatic.com/whitepapers/aws-overview.pdf"  
    }
    ,
    {
        "Id": 65,
        "Name": "Your company experiences fluctuations in traffic patterns to their e-commerce website based on flash sales. What service can help your company dynamically match the required compute capacity to the spike in traffic during flash sales?", 
        "Tag":"",
        "manyoptions":false,
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Glacier", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Auto Scaling", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Simple Notification Service (Amazon SNS)", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Virtual Private Cloud (Amazon VPC)", "IsAnswer": false }],
        "Explanation": "Auto Scaling helps maintain application availability and allows organizations to scale Amazon Elastic Compute Cloud (Amazon EC2) capacity up or down automatically according to conditions defined for the particular workload. Not only can it be used to help ensure that the desired number of Amazon EC2 instances are running, but it also allows resources to scale in and out to match the demands of dynamic workloads. Amazon Glacier, Amazon SNS, and Amazon VPC do not provide services to scale compute capacity automatically. ",
        "Ref":"https://aws.amazon.com/autoscaling/"  
    }

 
    ]
}

