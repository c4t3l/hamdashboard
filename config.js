const topBarCenterText = `WX - DASHBOARD`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  [
    "2196F3",
    "⚡ OUTAGES",
    "https://tracker.centerpointenergy.com/map/?_ga=2.252619849.1966996515.1724901712-568936517.1724901710",
    "1",
  ],
  [
    "2196F3",
    "TRANSTAR",
    "http://traffic.houstontranstar.org/layers/",
    "1",
  ],
  [
    "2196F3",
    "FLOOD MAP",
    "https://www.harriscountyfws.org/",
    "1",
  ],
  [
    "0a6ebd",
    "📷 HOU FEED",
    "https://www.youtube.com/embed/wUQc3RoLAPs",
    "1",
  ],
  [
    "0a6ebd",
    "📷 GV FEED",
    "https://www.youtube.com/embed/loADg1ptgjA",
    "1",
  ],
  [
    "0a6ebd",
    "📷 CON FEED",
    "https://www.youtube.com/embed/UqrwUKSkMEE",
    "1",
  ],
  [
    "2196F3",
    "RADAR",
    "https://radar.weather.gov/?settings=v1_eyJhZ2VuZGEiOnsiaWQiOiJ3ZWF0aGVyIiwiY2VudGVyIjpbLTk1LjM3LDI5Ljc2MV0sImxvY2F0aW9uIjpbLTk1LjM3LDI5Ljc2MV0sInpvb20iOjcsImxheWVyIjoiYnJlZl9xY2QifSwiYW5pbWF0aW5nIjp0cnVlLCJiYXNlIjoic3RhbmRhcmQiLCJhcnRjYyI6ZmFsc2UsImNvdW50eSI6ZmFsc2UsImN3YSI6ZmFsc2UsInJmYyI6ZmFsc2UsInN0YXRlIjpmYWxzZSwibWVudSI6dHJ1ZSwic2hvcnRGdXNlZE9ubHkiOmZhbHNlLCJvcGFjaXR5Ijp7ImFsZXJ0cyI6MC44LCJsb2NhbCI6MC42LCJsb2NhbFN0YXRpb25zIjowLjgsIm5hdGlvbmFsIjowLjZ9fQ%3D%3D",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=29.7633&lon=-95.3633&zoom=12",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-97.04,31.59,3142",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KHGX_loop.gif",
  ],
  [
    "SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif",
  ],
  [
    "LOCAL SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/GA/GEOCOLOR/GOES16-GA-GEOCOLOR-1000x1000.gif",
  ],
  [
    "TROPICAL OUTLOOK",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_7d0.png",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_tx.png",
  ],
  [
    "AVG FUEL COST",
    "https://charts.gasbuddy.com/ch.gaschart?Country=USA&Crude=f&Period=1&Areas=USA%20Average%2CHouston%2CDallas&Unit=US%20%24%2FG",
  ],
  [
    "CLIMATE",
    "https://www.weather.gov/images/hgx/climate/climate_KIAH_2026.png",
  ],
  [
    "US 290 NW",
    "https://www.houstontranstar.org/snapshots/cctv/422.jpg",
    "https://www.houstontranstar.org/snapshots/cctv/425.jpg",
    "https://www.houstontranstar.org/snapshots/cctv/430.jpg",
    "https://www.houstontranstar.org/snapshots/cctv/4480.jpg",
    "https://traffic.houstontranstar.org/cctv_construction/txdot/US-290_at_FM-1155_in_Chappell_Hill_live_image.jpg",
    "https://traffic.houstontranstar.org/cctv_construction/txdot/US-290_at_SH-36_Cloverleaf_in_Brenham_live_image.jpg",
    "https://traffic.houstontranstar.org/cctv_construction/txdot/US-290_at_US-77_in_Giddings_live_image.jpg",
  ],
  [
    "I-45 S",
    "https://www.houstontranstar.org/snapshots/cctv/4480.jpg",
    "https://www.houstontranstar.org/snapshots/cctv/102.jpg",
    "https://www.houstontranstar.org/snapshots/cctv/214.jpg",
    "https://www.houstontranstar.org/snapshots/cctv/228.jpg",
  ],
  [
    "SH-99 N",
    "https://www.houstontranstar.org/snapshots/cctv/2318.jpg",
    "https://www.houstontranstar.org/snapshots/cctv/2319.jpg",
    "https://www.houstontranstar.org/snapshots/cctv/2321.jpg",
    "https://www.houstontranstar.org/snapshots/cctv/2323.jpg",
  ],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,10400,10700,10900,10800];
