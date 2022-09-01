# Node.js/Express Skeleton Application

> The purpose of this application is to provide a quick template to get up and running with a node.js application backed by Express.

> This is essentially the same application as [node-express-skeleton](https://github.com/atria-digital-marketing/node-express-skeleton), but is run and deployed using Docker

## Running the project

To get started from root directory, there are two ways to run the project:

1. Without Docker

   - run `npm install`
   - run `npm run start`
   - navigate to `localhost:3000` or whatever port specified in your `.env` file

2. With Docker
   - docker build . -t node-express-skeleton
   - docker run -p 3000:3000 node-express-skeleton
   - navigate to `localhost:3000` or whatever port specified in your `.env` file

That's it! You're up and running, you can now start fleshing out your new API.

## Deploying the project

The following steps assume that an [Azure Web App for Containers](https://azure.microsoft.com/en-us/services/app-service/containers/) has been created, along with an [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry/) Instance

To deploy the project to an Azure Container Registry, you will need the [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) installed locally

Once that's been installed, login to your account by running `az login`

Once you're authenticated, you can build the image and host it in the registry of your choice by running the following command:

`az acr build -g <RESOURCE_GROUP> --registry <AZURE_CONTAINER_REGISTRY_NAME> --image node-express-skeleton .`

After you've confirmed the new artifact is in the desired registry, you can update your Azure Web App by going to the resource, clicking on "Deployment Center" and choosing the registry selected above, as well as the image name that you specified in the previous command.
