# IAC Serverless Example

IAC using terraform and AWS CLI.  This code serverless example contains a simple GET function for deploy to AWS Lambda and a simple AWS Api Gateway proxy and was originally learned and taken from the tutorial site at:  http://registry.terraform.io/providers/hashicorp/aws/2.34.0/docs/guides/serverless-with-aws-lambda-and-api-gateway#preparation

I modified it in minor ways to learn and test various command line options/creation/update/versioning when using terraform and aws cli in their basic ways.  The pdf design is also uploaded and this code is a sample of what i would start with to prototype lambda serverless functions via an api gateway as a basis for going AWS serverless to support any app integration therein.

I got it running under Ubuntu 22.04 (Jammy) on PopOS 22.04 and using NodeJS16.x all in LXC/LXD containers with docker initially and then again using my free tier AWS account.  I ran out of time to customize it more and i spent roughly 4 hours on the whole thing with minor customizations.

To run, simply download and verify you have the prerequisites of Terraform+AWS(CLI)+AWS(IAM) free account setup.  Some basic commands i've added for typical terraforming that i executed below:

1) open terminal
2) clone this project
3) change directory to example folder with *.tf files.  In my case working folder name is 'IAC'.
4) set the following AWS environment variables for your AWS keys and region:
> export AWS_ACCESS_KEY_ID="anaccesskey"

> export AWS_SECRET_ACCESS_KEY="asecretkey"

> export AWS_DEFAULT_REGION="us-west-2"
5) create the s3 bucket for the zip upload:
> aws s3api create-bucket --bucket=tf-serverless-example --region=us-east-1

> aws s3 cp example-serverless.zip s3://tf-serverless-example/v1.0.0/example-serverless.zip
7)  execute '>terraform init'
8) execute '>terraform validate'
9) execute '>terraform apply -var="app_version=1.0.0"
10) use aws console to test function on command line:
> aws lambda invoke --region=us-east-1 --function-name=ServerlessExample output.txt
11) Load the URL given in the output from your run in your favorite web browser (from tutorial instructions).
12) Don't forget to clean up and 'terraform destroy -var="app_version=1.0.0" along with any AWS account console cleanup to clear out any leftover artifacts if you are wanting to clean it all up in AWS.

If you have any trouble with this, you can try to verify all the prerequisites at the link tutorial at the top and potentially this site as well:  https://learn.hashicorp.com/tutorials/terraform/aws-build?in=terraform/aws-get-started

