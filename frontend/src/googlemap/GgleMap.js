// import React from 'react';

// function GgleMap() {
//   const embeddedHTML = `
//     <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
//       <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3"></div>
//       <script>(function () {
//         var setting = {"query":"Andhra Pradesh, India","width":644,"height":717,"satellite":true,"zoom":7,"placeId":"ChIJf9STrvhGNToRg82tlb670TM","cid":"0x33d1bbbe95adcd83","coords":[15.9128998,79.7399875],"lang":"en","queryString":"Andhra Pradesh, India","centerCoord":[15.9128998,79.7399875],"id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"998485"};
//         var d = document;
//         var s = d.createElement('script');
//         s.src = 'https://1map.com/js/script-for-user.js?embed_id=998485';
//         s.async = true;
//         s.onload = function (e) {
//           window.OneMap.initMap(setting)
//         };
//         var to = d.getElementsByTagName('script')[0];
//         to.parentNode.insertBefore(s, to);
//       })();</script>
//       <a href="https://1map.com/map-embed">1 Map</a>
//     </div>
//   `;

//   return (
//     <div dangerouslySetInnerHTML={{ __html: embeddedHTML }} />
//   );
// }

// export default GgleMap;
import React from 'react';
import './GgleMap.css'; // Import the CSS file

function GgleMap() {
  return (
    <div className="map-container">
      <iframe
        className="map-iframe"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=india+(GymLocator)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Gym Locator Map"
      >
        <a href="https://www.maps.ie/population/">Find Population on Map</a>
      </iframe>
    </div>
  );
}

export default GgleMap;
