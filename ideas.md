# EC Hacks 2017
##### Philip Scott, Joey Sokolon, Mark Vandenbosh, Cindy Wang

### Ideas
- Simple multiplayer platformer
  - Use P2 as physics engine
  - Socket.io for signalling
  - Phaser for the game engine
  - Bonus: Add clustering and deploy on AWS

- Pokemon Silver, muliplayer

##### Exploration/Adventure Game

### Key Concepts:
- Main purpose: adventure and exploration game
- We want to implement a game that gets players out and exploring in the real world
- Web application so that it can be accessed through all devices (phones etc..)

### Planned Features
- Players have a secret base that other players can look for 
- Base location is a real world location that player has to visit to interact with keep track of people’s locations
- Randomly generated resources that can be gathered by travelling distance compass system that tells you the direction of resources
- Players can use resources to buy tools to protect, reallocate base, etc

### What to implement first
- Keep track of player location in real world.
- Allow players to place base at real world locations
- Notify players when in close proximity to other bases 

### Development brainstorming:
- Run node server on heroku
- Establish web socket connection on clients, socket-io
- Get geo-location using browser location api (might run into browser compatibility)
- Send location, pub/sub in redis; periodic write to mongo?
- Events for raid/creating base, emit and nodejs server checks if within cutoff radius




