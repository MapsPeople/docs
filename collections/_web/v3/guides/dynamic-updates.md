---
title: Update DisplayRules dynamically
parent: guides
layout: tutorial
nav_weight: 1000
published: true
date: 2019-11-04
---

## Overview
Learn how to dynamically update the pressentation of POIs on the map by changing display rules programmatically.

<script async src="//jsfiddle.net/mapspeople/7fzyqhn3/embed/html,result/"></script>

## Getting started
In this tutorial we are giving an example on how to update the map based on external events. 
For this demo we are using a fake service that will trigger a callback with a fixed interval.

```javascript
   function FakeRoomBookings() {
        const idxs = ["88e94bd1f1d2434899995ae5", "aff4e53211d9421f83334663", "1b53174c2d714838ae78b3c3", "4fddc8609b18463ca19beaa6", "9dc244a52d364c40a0263e26", "4b9ba70d960b48d48796758e"];

        function get(arr) {
          let n = Math.floor(Math.random() * arr.length - 1) + 1;
          let length = arr.length;
          let results = [];

          while (n) {
            var x = Math.floor(Math.random() * length);
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
The above shows the fake service that updates the map with changes to the status of the meeting rooms.

```javascript
const bookings = new FakeRoomBookings();
```
Create a new instance of the FakeRoomBookings.

```javascript
bookings.onUpdate = (rooms) => {
    let booked = rooms.filter(room => room.isBooked).map(room => room.id);
    let notBooked = rooms.filter(room => !room.isBooked).map(room => room.id);;

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
Register the onUpdate callback. 
The callback is called with a list of rooms and their status. Based on that status the rooms are divided into two arrays.
Then the display rules are updated for each location in thies arrays.

Reference: [MapsIndoors]("https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/MapsIndoors.html"), [DisplayRule]("https://app.mapsindoors.com/mapsindoors/js/sdk/latest/docs/global.html#DisplayRule")

