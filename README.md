<h1>Facebook Production README</h1>

[Live Site](https://facebook-app-bwzo.onrender.com)

<h2>App Description</h2>

<p>Facebook is a social networking website where users connect with friends.</p>

<p>If one user knows another, they can "friend" one another and each will appear in the respective friends lists' of one another.  Users also have the ability to "unfriend" users they are friends with.</p>

<p>Users can create a profile including a profile page where other users can post on the "wall" of their profile page.  Posters of wall posts can also edit and delete posts.</p>

<p>Finally, there is a News Feed page that displays all of the wall posts, both send and received of the currently logged in user.</p>

<h2>Technologies Utilized</h2>

1. React
2. Redux
3. Rails
4. AWS

<h2>Noteworthy Features</h2>

<h3>Wall Posts</h3>

<p>Wall Posts are a full CRUD feature where you can create, read, update and delete a wall post.</p>

<p>The Wall Posts feature allows a user's friends to post comments on their wall and as mentioned above is full CRUD.  Being the first time using the Rails/React stack, one of the challenges I faced was minimizing the amount of queries to the backend while keeping the frontend state clean.  In order to do this, once you got to a User's Show Page, all the information to be displayed on that User's Show Page is grabbed from the PostgreSQL server.  Below is a code snipping of the React App grabbing the received wall posts from the backend.</p>

![Alt text](frontend/src/assets/images/users_show.png)

<p>The above fetch did not work when I was displaying the show page since I also needed sent posts.  In order to overcome this</p>


<h3>Friending</h3>



Delve deep into ~2 features that show off your technical abilities. Discuss both the challenges faced and your brilliant solutions.

Code snippets to highlight your best code (markdown code snippets, NOT screenshots)