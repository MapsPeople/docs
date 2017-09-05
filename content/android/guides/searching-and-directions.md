
//Locations provider, used for search
MPLocationsProvider locs = new MPLocationsProvider(this);

//Directions renderer, used to display route on map
DirectionsRenderer directionsRenderer = new DirectionsRenderer(this, selectionListener); 
                
//Listen for query results
locs.setOnLocationsReadyListener(new OnLocationsReadyListener() {
    @Override
    public void onLocationsReady(List<Location> locations) {

        //Origin hard-coded here
        Location origin = new MPLocation(new Point(57.956, 8.667, 0), "My location");
        
        //Destination is first location in list
        Location destination = locations.get(0);

        RoutingProvider routingProvider = new MPRoutingProvider();
        //Add listener
        routingProvider.setOnRouteResultListener(new OnRouteResultListener() 
        {
            @Override
            public void onRouteResult(final Route newRoute)
            {
                
                //Render the route you get from the service (you need to create a selectionListener too)
                directionsRenderer.setMap(myGoogleMap); 
                directionsRenderer.setRoute(newRoute); 
                //Show only first part of route
                directionsRenderer.setRouteLegIndex(0);
            
            }
            @Override
            public void onRoutingInfoResult(Object info)
            {
            }
        });
        routingProvider.query(myOriginLocation.getPoint(), myDestinationLocation.getPoint());
   }
 
   @Override
   public void onLocationDetailsReady(Location location) {
 
   }
});

//Location query used to search by name
LocationQuery lc = new LocationQuery();

lc.arg = "my-mapsindoors-solutionId";
lc.setQuery("location-name");
lc.max = 1;

//Do the query
locs.getLocationsUsingQueryAsync(lc, Locale.ENGLISH);


