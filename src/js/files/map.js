import mapboxGl from 'mapbox-gl';

mapboxGl.accessToken = 'pk.eyJ1Ijoid2VuemEiLCJhIjoiY2xwYjA3YjY4MGJ5dzJpcXQ1YWQ5d2VjMyJ9.DjC9ZpYlypgT5ePaK-uvUQ';

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [53.654414, 23.872146],
      },
    },
  ],
};

if (document.querySelector('#map')) {
  const map = new mapboxGl.Map({
    container: 'map',
    style: 'mapbox://styles/wenza/clpb0jjcc006i01pk6cvt1qh2',
    center: [45.212293, 45.996184],
    projection: 'mercator',
  });

  const mq = window.matchMedia('(min-width: 420px)');

  if (mq.matches) {
    map.setZoom(2);
  } else {
    map.setZoom(1);
    map.setCenter([45.468754, -5.57875]);
  }

  map.scrollZoom.disable();

  const zoomButton = document.querySelector('.zoom');
  let isZoomEnabled = false;

  zoomButton.addEventListener('click', () => {
    if (isZoomEnabled) {
      map.scrollZoom.disable();
      zoomButton.textContent = 'Enable Zoom';
    } else {
      map.scrollZoom.enable();
      zoomButton.textContent = 'Disable Zoom';
    }
    isZoomEnabled = !isZoomEnabled;
  });

  // add markers to map
  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxGl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  }
}
