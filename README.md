# IAC Serverless Example

IAC using terraform and AWS CLI.  This code serverless example contains a simple GET function for deploy to AWS Lambda and a simple AWS Api Gateway proxy and was originally learned and taken from the tutorial site at:  http://registry.terraform.io/providers/hashicorp/aws/2.34.0/docs/guides/serverless-with-aws-lambda-and-api-gateway#preparation

I modified it in minor ways to learn and test various command line options/creation/update/versioning when using terraform and aws cli in their basic ways.

I got it running under Ubuntu 22.04 (Jammy) on PopOS 22.04 and using NodeJS16.x all in LXC/LXD containers with docker initially and then again using my free tier AWS account.  I ran out of time to customize it more and i spent roughly 4 hours on the whole thing with minor customizations.

To run, simply download and verify you have the prerequisites of Terraform+AWS(CLI)+AWS(IAM) free account setup.  Some basic commands i've added for typical terraforming that i executed below:

1) open terminal
2) clone this project
3) change directory to example folder with *.tf files
4) execute '>terraform init'
5) execute '>terraform validate'
6) execute '>terraform apply -var="app_version=1.0.0"

