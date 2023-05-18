const EARTH_RADIUS = 6371; // Earth's radius in kilometers

export function calculateBboxRadius(
  latitude: number,
  longitude: number,
  distance: number
) {
  const latRadian = (latitude * Math.PI) / 180;
  const lonRadian = (longitude * Math.PI) / 180;
  const angularDistance = distance / EARTH_RADIUS;

  const minLat = latRadian - angularDistance;
  const maxLat = latRadian + angularDistance;

  const minLon = lonRadian - angularDistance / Math.cos(latRadian);
  const maxLon = lonRadian + angularDistance / Math.cos(latRadian);

  const minLatDegree = (minLat * 180) / Math.PI;
  const maxLatDegree = (maxLat * 180) / Math.PI;
  const minLonDegree = (minLon * 180) / Math.PI;
  const maxLonDegree = (maxLon * 180) / Math.PI;

  return [
    minLatDegree.toString(),
    maxLatDegree.toString(),
    minLonDegree.toString(),
    maxLonDegree.toString(),
  ];
}
