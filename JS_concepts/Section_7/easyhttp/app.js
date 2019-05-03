const http = new eassyHttp;

//GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
//   if(err){
//     console.log(err);
//   }else {
//     console.log(posts);
    
//   }
// });

//GET single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
//   if(err){
//     console.log(err);
//   }else {
//     console.log(post);
//   }
// });

//Create POst
const data = {
  title: "Cust post updated",
  body: "custom posts data"
};

// http.post('https://jsonplaceholder.typicode.com/posts',  data , function(err, post){
//   if(err){
//     console.log(err);
//   }else {
//     console.log(post);
//   }
// });

// PUT POST request

http.put('https://jsonplaceholder.typicode.com/posts/1',  data , function(err, post){
  if(err){
    console.log(err);
  }else {
    console.log(post);
  }
});

//DELETE Posts
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){
  if(err){
    console.log(err);
  }else {
    console.log(posts);
  }
});



