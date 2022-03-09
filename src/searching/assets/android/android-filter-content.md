
| Parameter  | Description                                                                                                                               | Class    |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------|----------|
| take       | Max number of Locations to get                                                                                                            | MPFilter |
| Skip       | Skip the first number of entries                                                                                                          | MPFilter |
| categories | A list of Categories to limit the search to                                                                                               | MPFilter |
| Parents    | A list of Building or Venue IDs to limit the search to                                                                                     | MPFilter |
| Types      | A list of Types to limit the search to (coming in the Android SDK on 3.8.3)                                                                       | MPFilter |
| Bounds     | Limits the result of Locations to a bounding area                                                                                         | MPFilter |
| Geometry   | Limits the result of Locations to be within a given geometry                                                                              | MPFilter |
| Near       | Sorts the list of Locations on which Location is nearest the point given                                                                  | MPQuery  |
| Depth      | The Depth property makes it possible to get "x" amount of descendants to the given parent. The default for this is 1 (eg. Building > Floor) | MPFilter |
