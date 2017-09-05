
    MPLocationsProvider* locationsProvider = [[MPLocationsProvider alloc] init];
    MPDirectonsRenderer* renderer = [[MPDirectonsRenderer alloc] init];
    MPDirectionsService* directionsService = [[MPDirectionsService alloc] initWithMapsIndoorsSolutionId: sID googleApiKey: gApiKey];
    
    
    MPLocationQuery* q1 = [[MPLocationQuery alloc] init];
    q1.solutionId = sID;
    q1.query = @"location-name";
    q1.max = 1;
    
    MPLocationQuery* q2 = [[MPLocationQuery alloc] init];
    q2.solutionId = sID;
    q2.query = @"other-location-name";
    q2.max = 1;
    
    [locationsProvider getLocationsUsingQueryAsync:q1 language:@"en" completionHandler:^(MPLocationDataset *locationData, NSError *error) {
        
        MPLocation* from = locationData.list.firstObject;
        
        [locationsProvider getLocationsUsingQueryAsync:q2 language:@"en" completionHandler:^(MPLocationDataset *locationData, NSError *error) {
            
            MPLocation* to = locationData.list.firstObject;
            
            NSLog(@"Getting directions from %@ to %@", from.name, to.name);
            
            [directionsService routingFrom: from to: to by: @"WALKING" completionHandler:^(MPRoute *route, NSError *error) {
                
                renderer.map = myGoogleMap;
                renderer.route = route;
                renderer.routeLegIndex = 0;
                
                
            }];
            
        }];
        
    }];

