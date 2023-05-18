const EARTH_RADIUS = 6371; // Earth's radius in kilometers

export function calculateBboxRadius(
  latitude: number,
  longitude: number,
  distance: number | undefined
) {
  if (distance === undefined) {
    distance = 10;
  }

  const latRadian = latitude * (Math.PI / 180); // convert latitude to radians

  const deltaLat = distance / EARTH_RADIUS; // 1 kilometer in latitude
  const deltaLng = Math.asin(Math.sin(deltaLat) / Math.cos(latRadian)); // 1 kilometer in longitude

  const minLat = latitude - deltaLat * (180 / Math.PI);
  const maxLat = latitude + deltaLat * (180 / Math.PI);
  const minLng = longitude - deltaLng * (180 / Math.PI);
  const maxLng = longitude + deltaLng * (180 / Math.PI);

  console.log(minLng + minLat + maxLng + maxLat);

  return `${minLng},${minLat},${maxLng},${maxLat}`;
}
