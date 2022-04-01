---
title: Update DisplayRules dynamically
eleventyNavigation:
  parent: legacy-webv3
  key: Update DisplayRules dynamically
---

## Overview

In this guide you will learn how to update the map based on external events; in this case a service that sets a status on meeting rooms to either "booked" or "not booked" by changing `DisplayRule`s programmatically.

The full code example is shown in full below, but will be run through bit by bit in this guide.

<script async src="//jsfiddle.net/mapspeople/m62t9zyc/embed/html,result/"></script>

### External events

In order to mimic external events we create a fake service that triggers a callback at a fixed interval, in this case one second.

The example below shows a service that updates the map with changes to the status of the meeting rooms.

```javascript
function FakeRoomBookings() {
    const idxs = ["88e94bd1f1d2434899995ae5", "aff4e53211d9421f83334663", "1b53174c2d714838ae78b3c3", "4fddc8609b18463ca19beaa6", "9dc244a52d364c40a0263e26", "4b9ba70d960b48d48796758e"];

    function get(arr) {
      let n = Math.floor(Math.random() * arr.length - 1) + 1;
      const length = arr.length;
      const results = [];

      while (n) {
        const x = Math.floor(Math.random() * length);
        if (!results.includes(arr[x])) {
          results.push(arr[x]);
          --n;
        }
      }


      return results.map(room => {
        return {
          id: room,
          isBooked: Math.random() >= 0.5
        };
      });
    }

    setInterval(() => {
      if (this.onUpdate) {
        let rooms = get(idxs);
        this.onUpdate(rooms);
      }
    }, 1000);
};
```

Then we create a new instance of the `FakeRoomBookings`.

```javascript
const bookings = new FakeRoomBookings();
```

### Updating the map

Now we register the `onUpdate` callback so we can update the map.

```javascript
bookings.onUpdate = (rooms) => {
    const booked = rooms.filter(room => room.isBooked).map(room => room.id);
    const notBooked = rooms.filter(room => !room.isBooked).map(room => room.id);;

    mapsIndoors.setDisplayRule(booked, {
        fillColor: '#ff0000',
        fillOpacity: 0.5
    });
    mapsIndoors.setDisplayRule(notBooked, {
        fillColor: '#00ff00',
        fillOpacity: 0.5
    });
}
```

The callback is provided with a list of rooms and their statuses. The rooms are then divided into two arrays based on their status (`booked` or `notBooked`).

Then the `DisplayRule`s are updated for each location in the two arrays. Doing this, we can color the room either green (for `notBooked`) or red (indicating the `booked` status).
