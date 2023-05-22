# AngularJS $http

The AngularJS $http service makes a request to the server, and returns a response.

`Methods:`
.delete()
.get()
.head()
.jsonp()
.patch()
.post()
.put()

`Properties:`
The response from the server is an object with these properties:

'.config' the object used to generate the request.
'.data' a string, or an object, carrying the response from the server.
'.headers' a function to use to get header information.
'.status' a number defining the HTTP status.
'.statusText' a string defining the HTTP status.
