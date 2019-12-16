# Patio 

   Patio is a single-page app, inspired by Facebook, where users can connect with friends and family to share posts, photos, and other media
about their lives. Users can share posts about their activities, comment on theirs and friend's posts, and create  profiles to highlight how great they are!  

---

![Homepage](https://user-images.githubusercontent.com/51393952/68999277-82fb7400-0873-11ea-990e-4851d99cc54c.jpg)

## Demo

[Hang out on the Patio here!](https://patio-fsp.herokuapp.com/?#/)

## Technologies
  + Ruby on Rails
  + PostgreSQL
  + JBuiler
  + Javascript
  + JQuery
  + HTML/CSS
  + React
  + Redux
  + Amazon Web Services (AWS S3)
  + Heroku
  
 ## Feature Highlights
 
 ### Posts
   Users can seemlessly post statuses with text about their lives, photos, and other media for friends to 
   see and comment on.
   
   ![Posts](https://media.giphy.com/media/KCdUhACqLy02Js4gfT/giphy.gif)
   
### Comments
  Users can comment on posts, delete only their own comments, and smoothly, edit their comments in-line.
  
  ![Comments](https://user-images.githubusercontent.com/51393952/69013220-7b4ed480-0932-11ea-8a06-35cf07b498f4.gif)
  
### Friending
  Profiles are private until Users become friends. You can navigate to another user's page, send a friend request, and cancel your current request!
  
  ![Friending](https://user-images.githubusercontent.com/51393952/70950892-bcf89b00-2016-11ea-8341-869bae7ec78f.gif)
  
### Likes
   Users can like both comments and posts! Rails polymorphic associations used for DRY code and the React Redux framework provides seemless Liking and Unliking.
   
   ![Likes](https://user-images.githubusercontent.com/51393952/70949742-79506200-2013-11ea-85c3-c1e58ea4c29d.gif)
   
  
### Code Snippets
#### Inline Comment Edits
   This code demonstrates inline edits of comments. The component conditionally renders either the comment's text or a textarea to edit the comment by using a slice of the Redux state.
   
  ![Comment Code](https://user-images.githubusercontent.com/51393952/70081144-d59b9680-15bc-11ea-8cbf-824f6b579e13.jpg)
  
#### Custom Index Route
   This snippet has a custom index route which fetches different posts depending on the users current location (either a profile page or the main news feed). The database query is optimized using `.includes` to avoid N+1 for likes, comments, and likes on comments and sanatized to avoid any malicious users attacks including SQL Injections.  

![Index Route](https://user-images.githubusercontent.com/51393952/70410120-d3916780-1a02-11ea-8de0-8a1c62b9c848.png)
  
## Future Goals
 + Videos on posts 
 + Photo carousel
 + Search 
 + Nested Comments 
