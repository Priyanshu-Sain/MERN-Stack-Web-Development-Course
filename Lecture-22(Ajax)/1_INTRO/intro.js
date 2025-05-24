/*
--> AJAX :- Asynchronous Javascript and XML( eXtensible Markup Language).
    It was introduced to improve the user experience on web pages by allowing data to
    be exchanged with a server without needing to reload the entire page.
    It is used when we don't want to refresh the page.
    Web applications can send and receive data from a server in the background without refreshing the page.
--> To implement AJAX , we have different methods :-
    1) XML HTTP Request :-
       -> This is the in built way of vanilla javascript
       -> Data as a string is obtained and it needs to be parsed manually to convert it
          to the JS object by JSON.parse()
    2) Fetch :-
       -> It has built in res.json() which automatically parses the response body into
          the JS object.
       ->This returns a promise that resolves to the parsed object
    3) Axios
    4) JQuery
*/