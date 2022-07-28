resource "aws_api_gateway_rest_api" "example_serverless" {
  name        = "ExampleServerless"
  description = "TF Example Serverless App"
}

output "base_url" {
  value = aws_api_gateway_deployment.example_serverless.invoke_url
}

