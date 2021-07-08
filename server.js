'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// DOCKER
// docker  build -t node-app .
// docker run -d -p 8080:8080 node-app
// docker tag node-app voti/node-app:v1.0.0

// KUBERNETES
// vagrant up - start vargrant box and provision a VM with the specification in the Vagrant file
// vagrant ssh - connect to the box
// curl -sfL https://get.k3s.io | sh - (This will install k3s to create clusters)
// check the installed node kubectl get no
// kubectl cluster-info
// kubectl get no -o wide

// Inspect  the endpoints for the cluster and installed add-ons 
//kubectl cluster-info

//# List all the nodes in the cluster. 
//# To get a more detailed view of the nodes, the `-o wide` flag can be passed
//kubectl get nodes [-o wide] 

//# Describe a cluster node.
//# Typical configuration: node IP, capacity (CPU and memory), a list of running pods on the node, podCIDR, etc.
//kubectl describe node {{ NODE NAME }}

// KUBERNETES CREATE DEPLOYMENT
// 1. kubectl get deploy - deployment
// 2. kubectl get rs - replica set
// 3. kubectl get po - pods
// 4. kubectl create deploy node-helloworld --image=voti/node-helloworld:v1.0.0
// 5. create port forwarding to allow access to application from localhost 
//    kubectl port-forward po/node-app-7d9ccb6d6b-2n5bm 8080:8080

// kubectl describe pod -p node-helloworld-54f86fc9-tgnz2 > /tmp/runbooks_describe_pod.txt

// APPLICATION REACHABILITY
// expose the `node-app` deployment on port 8081
// note: the application is serving requests on port 8082
// kubectl expose deploy node-app --port=8081 --target-port=8081
// kubectl run test-$RANDOM --namespace=default --rm -it --image=alpine -- sh


//# create a Configmap to store the color value
//kubectl create configmap test-cm --from-literal=color=yellow
// kubectl describe cm test-cm

//# create a Secret to store the secret color value
//kubectl create secret generic test-secret --from-literal=color=red
// kubectl get secret test-secret -o yaml

//# create a `test-udacity` Namespace
//kubectl create ns test-udacity
//# get all the pods in the `test-udacity` Namespace
//kubectl get po -n test-udacity


//Create Resources
//To create resources, use the following command:

//kubectl create RESOURCE NAME [FLAGS]
//Describe Resources
//To describe resources, use the following command:

//kubectl describe RESOURCE NAME 
//Get Resources
//To get resources, use the following command, where -o yaml instructs that the result should be YAML formated.

//kubectl get RESOURCE NAME [-o yaml]
//Edit Resources
//To edit resources, use the following command, where -o yaml instructs that the edit should be YAML formated.

//kubectl edit RESOURCE NAME [-o yaml]
//Label Resources
//To label resources, use the following command:

//kubectl label RESOURCE NAME [PARAMS]
//Port-forward to Resources
//To access resources through port-forward, use the following command:

//kubectl port-forward RESOURCE/NAME [PARAMS]
//Logs from Resources
//To access logs from a resource, use the following command:

//kubectl logs RESOURCE/NAME [FLAGS]
//Delete Resources
//To delete resources, use the following command:

//kubectl delete RESOURCE NAME//