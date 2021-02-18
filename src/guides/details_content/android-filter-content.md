# Android

| Parameter  | Description                                                                                                                               | Class    |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------|----------|
| take       | Max number of locations to get                                                                                                            | MPFilter |
| Skip       | Skip the first number of entries                                                                                                          | MPFilter |
| categories | A list of categories to limit the search to                                                                                               | MPFilter |
| Parents    | A list of building or venue id to limit the search to                                                                                     | MPFilter |
| Types      | A list of types to limit the search to (coming in android on 3.8.3)                                                                       | MPFilter |
| Bounds     | Limits the result of locations to a bounding area                                                                                         | MPFilter |
| Geometry   | Limits the result of locations to be within a given geometry                                                                              | MPFilter |
| Near       | Sorts the list of locations on which location is nearest the point given                                                                  | MPQuery  |
| Depth      | The Depth property makes it possible to get x amount of descendants to the given parent. The default for this is 1 (eg. building > floor) | MPFilter |
