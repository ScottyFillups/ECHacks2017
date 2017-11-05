# EC Hacks 2017 - Attempt 1

### An ambitious attempt to make a real-time Google maps based game using the Google JS API and the HTML5 geolocation API.

##### Philip Scott, Joey Sokolon, Mark Vandenbosch, Cindy Wang

The plan was to make a game similar to the "hidden base" minigame found in Pokemon Gen. 3 (ie Ruby, Sapphire, and Emerald); players would be able to set up their own base, raid other bases for points, and spend points for cosmetics and tools. Players would use a simple "compass" to navigate and discover other players' bases, forcing exploration and creativity. 

Unfortunately, it became apparent that the precision of geolocation for phones and laptops was inadequate for this type of game. We "jumped the gun" so to speak, and foolishly put in time building the back-end before fully testing the geolocation capabilities. Had the precision been adequate, the game would've been a web game, using Node.js, Express, Socket.io, MongoDB, Redis, and APIs mentionned above.

Click [here](https://scottyfillups.io/ECHacks2017-attempt1) for a live demo of our quick client-side prototype. Warning: Tendencies to teleport up to 100m in random directions.

<img src="http://scottyfillups.github.io/ECHacks2017-attempt1/echacks2017.png" />

### Lessons learned

* It's crucial to create a quick prototype that tests your hardware, to ensure its adequate for your goal
* Tackle smaller problems sequentially, as opposed trying to develop the entire app in one go
* Laptops suck for geolocation
