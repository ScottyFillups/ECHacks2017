# Database ECHacks 2017 spec

### Overview

* Players will be able to create "bases" where their standing
* The database must store the position of created bases
* NOTE: Player position doesn't need to be stored for this to work
  * Although, they will be able to cheat easily by passing custom data via sockets


### Data to be stored:
* Relational data, but we're going to brute force it with document-style mongo
* {
  base: {
    lat: x,
    lon: y,
    owner: z
  }
}
* {
  player: {
    basesRaided: x,
    timesRaided: y,
    baseOn: b,
    uuid: u
  }
}
  * Not going to store position for now, but could be done in the future
  * ^ This prevents cheating, use the deltas to find speed, and kick if you surpass a specific acceleration
  * Can't raid unless you've placed your own base
  * Can't move base around once placed (for now)
  * For now, store UUID as cookie, and clients send UUID over

### Implementation

* On page visit, players establish web socket connection
* On creating a base, event is fired along with player position data
  * Data is stored in DB

### Deliverables
1. Be able to let user place base, client-side only
2. Make bases persist; store in MongoDB
3. Compute closest base, use trig to compute angle, display to user
