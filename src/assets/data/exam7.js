
{
    "quiz": {
        "name": "Exam 7",
        "logo" : "assets/img/VPC.png",
        "time":"120 minutes"
    },
    "questions": [
        {
            "Id": 1,
            "Name": "Which of the following DynamoDB features provides fast, local, read and write performance for global applications?", 
            "Tag":"tech",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB DAX", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Global Tables", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Global PITR", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Point-in-time recovery", "IsAnswer": false }],
            "Explanation": "Global Tables builds upon DynamoDB’s global footprint to provide you with a fully managed, multi-region, and multi-master database that provides fast, local, read and write performance for massively scaled, global applications.",
            "Ref":"https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf"
        } ,
        {
            "Id": 2,
            "Name": "Which of the following storage options would you choose if low storage cost were paramount and there is no need for millisecond access to your data?", 
            "Tag":"tech,bill",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Elastic Block Store (EBS)", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Elastic File System (EFS)", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Glacier", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Amazon S3", "IsAnswer": false }],
            "Explanation": "Amazon Glacier is an extremely low-cost storage service that provides secure, durable, and flexible storage for data backup and archival. With Amazon Glacier, customers can reliably store their data for as little as $0.004 per gigabyte per month. /// Q: How should I choose between Amazon Glacier and Amazon Simple Storage Service (Amazon S3)? Amazon S3 is a durable, secure, simple, and fast storage service designed to make web-scale computing easier for developers. Use Amazon S3 if you need low latency or frequent access to your data. Use Amazon Glacier if low storage cost is paramount, and you do not require millisecond access to your data. ",
            "Ref":"https://aws.amazon.com/glacier/faqs/"
        } ,
        {
            "Id": 3,
            "Name": "If there is a need to build a tool for searching and comparing faces in your application, which of the following AWS services could help?", 
            "Tag":"tech",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Kinesis", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Polly", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Rekognition", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "None of the above", "IsAnswer": false }],
            "Explanation": "Amazon Rekognition is a service that makes it easy to add image analysis to your applications. With Rekognition, you can detect objects, scenes, and faces in images. You can also search and compare faces. The Amazon Rekognition API enables you to quickly add sophisticated deep-learning-based visual search and image classification to your applications.",
            "Ref":"https://d0.awsstatic.com/whitepapers/aws-overview.pdf"
        } ,
        {
            "Id": 4,
            "Name": "Due to the nature of the traditional infrastructure environments and its upfront cost model, they can only introduce fixed, long-running servers that cause a lot of problems like heterogeneous configurations emerging from continuing changes and software patches applied overtime. Which of the following approaches solved these problems in the AWS environment?", 
            "Tag":"bill,concepts",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Provisional resources Instead of Fixed Servers", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Continues Resources Instead of Fixed Servers", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Fixed Resources Instead of Disposable Servers", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Disposable Resources Instead of Fixed Servers", "IsAnswer": true }],
            "Explanation": "With the immutable infrastructure pattern, if a problem happens, rather than updating, it is replaced with a new server containing the latest configuration. When combined with patterns to remove or at least limit the need for administrative login, the opportunity for ad-hoc or unauthorized use of software is limited. This also addresses the issue of configuration drift by keeping a consistent and tested state, making rollbacks easier to perform. ",
            "Ref":"https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"
        } ,
        {
            "Id": 5,
            "Name": "Your company expects a response time of less than 15 minutes for Business-critical system hosted on AWS. Which support plan is best suited for this requirement?", 
            "Tag":"concepts",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Basic", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Developer", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Business", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Enterprise", "IsAnswer": true }],
            "Explanation": "See link for details",
            "Ref":"https://aws.amazon.com/premiumsupport/compare-plans/"
        } ,
        {
            "Id": 6,
            "Name": "Which of the following can be used to increase the security for your VPC? (Select 3 that apply)", 
            "Tag":"security",
            "manyoptions":true,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Security groups", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "ACLs", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Flow logs", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Lex", "IsAnswer": false }],
            "Explanation": "Amazon VPC provides features that you can use to increase and monitor the security for your VPC: *Security groups — Act as a firewall for associated Amazon EC2 instances, controlling both inbound and outbound traffic at the instance level ** Network access control lists (ACLs) — Act as a firewall for associated subnets, controlling both inbound and outbound traffic at the subnet level *** Flow logs — Capture information about the IP traffic going to and from network interfaces in your VPC. ",
            "Ref":"https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Security.html"
        } ,
        {
            "Id": 7,
            "Name": "Which of the following services can businesses use for video conferencing?", 
            "Tag":"tech",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Chime", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Amazon SES", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Polly", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Glue", "IsAnswer": false }],
            "Explanation": "Amazon Chime is a communications service that transforms online meetings with a secure, easy-to-use application that you can trust. Amazon Chime works seamlessly across your devices so that you can stay connected. You can use Amazon Chime for online meetings, video conferencing, calls, chat, and to share content, both inside and outside your organization. Amazon Chime frees you to work productively from anywhere.",
            "Ref":"https://d0.awsstatic.com/whitepapers/aws-overview.pdf"
        } ,
        {
            "Id": 8,
            "Name": "Your system is frequently facing an extra load. How could you automate the process of increasing capacity? Choose two.", 
            "Tag":"concepts",
            "manyoptions":true,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Using bootstrapping", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "Using Automated Beanstalk", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Using Golden Images", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Using AWS EBS", "IsAnswer": false }],
            "Explanation": "Whether you are deploying a new environment for testing, or increasing capacity of an existing system to cope with extra load, you will not want to manually set up new resources with their configuration and code. It is important that you make this an automated and repeatable process that avoids long lead times and is not prone to human error. There are a few approaches on how to achieve an automated and repeatable process: **Bootstrapping: When you launch an AWS resource like an Amazon EC2 instance or Amazon Relational Database (Amazon RDS)DB instance, you start with a default configuration. You can then execute automated bootstrapping actions. That is, scripts that install software or copy data to bring that resource to a particular state. You can parameterize configuration details that vary between different environments (e.g.,production, test, etc.) so that the same scripts can be reused without modifications.// **Golden Images: Certain AWS resource types like Amazon EC2instances, Amazon RDS DB instances, Amazon Elastic Block Store (Amazon EBS) volumes, etc., can be launched from a golden image: a snapshot of a particular state of that resource. When compared to the bootstrapping approach, a golden image results in faster start times and removes dependencies to configuration services or third-party repositories. This is important in auto-scaled environments where you want to be able to quickly and reliably launch additional resources as a response to demand changes.",
            "Ref":"https://d0.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf"
        } ,
        {
            "Id": 9,
            "Name": "What is the most cost effective EC2 purchasing options for users with urgent computing needs for large amounts of additional capacity?", 
            "Tag":"billing",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Dedicated instances", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Spot instances", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Reserved instances", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "On-demand instances", "IsAnswer": false }],
            "Explanation": "Amazon EC2 Spot instances allow you to request spare Amazon EC2 computing capacity for up to 90% off the On-Demand price. Spot instances are recommended for: *Applications that have flexible start and end times **Applications that are only feasible at very low compute prices ***Users with urgent computing needs for large amounts of additional capacity ",
            "Ref":"https://aws.amazon.com/ec2/pricing/"
        } ,
        {
            "Id": 10,
            "Name": "You have multiple accounts in AWS. What option can be used to ensure costs can be reduced?", 
            "Tag":"billing",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Combined billing", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Consolidated billing", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "Costs are automatically reduced for multiple accounts by AWS.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "It is not possible to reduce costs with multiple accounts", "IsAnswer": false }],
            "Explanation": "You can use the Consolidated Billing feature to consolidate payment for multiple Amazon Web Services (AWS) accounts or multiple Amazon International Services Pvt. Ltd (AISPL) accounts within your organization by designating one of them to be the payer account. With Consolidated Billing, you can see a combined view of AWS charges incurred by all accounts, as well as get a cost report for each individual account associated with your payer account.",
            "Ref":"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html"
        } ,
        {
            "Id": 11,
            "Name": "What can you use in order to have a common data source for multiple EC2 instances?", 
            "Tag":"tech,concepts",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "AWS Storage Gateway", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Elastic File Manager.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Elastic File System.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Simple Storage Service", "IsAnswer": false }],
            "Explanation": "Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use with Amazon EC2 instances in the AWS Cloud. Amazon EFS is easy to use and offers a simple interface that allows you to create and configure file systems quickly and easily. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and remove files, so your applications have the storage they need, when they need it. When mounted on Amazon EC2 instances, an Amazon EFS file system provides a standard file system interface and file system access semantics, allowing you to seamlessly integrate Amazon EFS with your existing applications and tools. Multiple EC2 instances can access an Amazon EFS file system at the same time, allowing Amazon EFS to provide a common data source for workloads and applications running on more than one EC2 instance. ",
            "Ref":"https://d0.awsstatic.com/whitepapers/aws-overview.pdf"
        } ,
        {
            "Id": 12,
            "Name": "What services does AWS offer for free? (Select 2 that apply)", 
            "Tag":"concepts,tech",
            "manyoptions":true,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Elastic Beanstalk", "IsAnswer": true},
                { "Id": 1056, "QuestionId": 1010, "Name": "AWS IAM", "IsAnswer": true },
                { "Id": 1057, "QuestionId": 1010, "Name": "AWS Lambda", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Amazon RDS", "IsAnswer": false }],
            "Explanation": "** AWS Identity and Access Management is a feature of your AWS account offered at no additional charge. You will be charged only for use of other AWS services by your Users. ** There is no additional charge for AWS Elastic Beanstalk. You pay for AWS resources (e.g. EC2 instances or S3 buckets) you create to store and run your application. You only pay for what you use, as you use it; there are no minimum fees and no upfront commitments.",
            "Ref":"https://aws.amazon.com/elasticbeanstalk/pricing/"
        } ,
        {
            "Id": 13,
            "Name": "A user is planning to use the AWS Cloud formation for automatic deployment requirements. Which of the below mentioned components are required as a part of the template?", 
            "Tag":"concepts,tech",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "Parameters", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "Outputs", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "Template version", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "Resources", "IsAnswer": true }],
            "Explanation": "AWS Cloud formation is an application management tool which provides application modeling, deployment, configuration, management and related activities. The template is a JSON-format, text-based file that describes all the AWS resources required to deploy and run an application. It can have option fields, such as Template Parameters, Output, Data tables, and Template file format version. The only mandatory value is Resource. The user can define the AWS services which will be used/created by this template inside the Resource section."
        } ,
        {
            "Id": 14,
            "Name": "You have bought 4 Amazon EC2 reserved instances for a 1 year term. After 7 months, and depending on your usage, you decide to sell 2 of your instances on the Amazon EC2 Reserved Instance Marketplace. Which of the following is true regarding the previous scenario?", 
            "Tag":"concepts",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "You cannot sell your reserved instances as there is only 5 months remaining in the term of the Reserved Instance you are listing.", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "The buyer can modify the instance type, Availability Zone, platform and the other configurations at any time.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "You can set only the upfront price for your reserved instances.", "IsAnswer": true },
                { "Id": 1058, "QuestionId": 1010, "Name": "Each Reserved Instance sold on the Amazon EC2 Reserved Instance Marketplace will be charged a service fee of 12% monthly.", "IsAnswer": false }],
            "Explanation": "Where you can sell your amazon EC2 instances which still has a remaining term of one month or more. the usage price and other configuration (e.g., instance type, Availability Zone, platform) will remain the same as when the Reserved Instance was initially purchased. Each Reserved Instance sold on the Amazon EC2 Reserved Instance Marketplace will be charged a service fee of 12% on the total upfront price NOT monthly. ",
            "Ref":"https://aws.amazon.com/ec2/purchasing-options/reserved-instances/marketplace/"
        } ,
        {
            "Id": 15,
            "Name": "While creating the snapshots using the API, what action should you implement?", 
            "Tag":"concepts,tech",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "MakeSnapShot", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "FreshSnapshot", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "DeploySnapshot", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "CreateSnapshot", "IsAnswer": true }],
            "Explanation": "CreateSnapshot: Creates a snapshot of an EBS volume and stores it in Amazon S3. You can use snapshots for backups, to make copies of EBS volumes, and to save data before shutting down an instance. When a snapshot is created, any AWS Marketplace product codes that are associated with the source volume are propagated to the snapshot. ",
            "Ref":"https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshot.html"
        } ,
        {
            "Id": 16,
            "Name": "Which of the following is true regarding the Amazon EC2 security group?", 
            "Tag":"security",
            "manyoptions":false,
            "Options": [
                { "Id": 1055, "QuestionId": 1010, "Name": "You can modify the outbound rules for EC2-Classic.", "IsAnswer": false},
                { "Id": 1056, "QuestionId": 1010, "Name": "You can modify the rules for a security group only if the security group controls the traffic for just one instance.", "IsAnswer": false },
                { "Id": 1057, "QuestionId": 1010, "Name": "You can modify the rules for a security group only when a new instance is created.", "IsAnswer": false },
                { "Id": 1058, "QuestionId": 1010, "Name": "You can modify the rules for a security group at any time.", "IsAnswer": true }],
            "Explanation": "A security group acts as a virtual firewall that controls the traffic for one or more instances. When you launch an instance, you associate one or more security groups with the instance. You add rules to each security group that allow traffic to or from its associated instances. You can modify the rules for a security group at any time; the new rules are automatically applied to all instances that are associated with the security group.",
            "Ref":"http://docs.amazonwebservices.com/AWSEC2/latest/UserGuide/using-network-security.html"
        } ,
        {
            "Id": 17,
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
        } ,
        {
            "Id": 18,
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
        } ,
        {
            "Id": 19,
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
        } ,
        {
            "Id": 20,
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

