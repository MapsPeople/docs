A Leg represents a logical subset of the journey from Origin to Destination. A Route will break into Legs when:

* Travelling from one floor level to another.
{% if 'web/v4/' not in page.url %}
* Changing context, such as entering or exiting a building.
{% endif %}
* Changing travel mode, for example parking your car and continuing by foot.

If you examine the illustration above, you will see that the blue line representing the Route have been marked with blue circles where the Route would be seperated into Legs.
