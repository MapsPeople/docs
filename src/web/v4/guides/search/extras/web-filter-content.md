
| Parameter         | Description                                                                                                                          |
|-------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| take              | Max number of locations to get                                                                                                       |
| Skip              | Skip the first number of entries                                                                                                     |
| categories        | A list of categories to limit the search to                                                                                          |
| Building          | Limit the search for locations to a building                                                                                         |
| Venue             | Limit the search for locations to a venue (id or name)                                                                               |
| Types             | A list of types to limit the search to                                                                                               |
| Bounding box      | Limits the result to inside the bounding box. `{east: number, north: number, south: number, west: number}`                           |
| Floor             | Limits the result of locations to be on a specific floor                                                                             |
| Near              | Sorts the list of locations on which location is nearest the point given                                                             |
| Radius            | A radius in meters. When using near with a point a radius must be supplied to limit the search to within that radius from the point. |
| SortOrder         | Specifies in which order the results is sorted either "ASC" or "DESC"                                                                |
| IncludeOutsidePOI | When set to true all POIs that are outside buildings will be included in the result regardless of floor level specified in the path. |
| lr                | Sets the preferred language that the result should be returned in.                                                                   |
