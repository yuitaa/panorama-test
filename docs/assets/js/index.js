window.onload = () => {
  var container, panorama, viewer;
  const path = "assets/img/test/";
  const format = ".png";

  container = document.querySelector("#container");
  panorama = panorama = new PANOLENS.CubePanorama([
    path + "px" + format,
    path + "nx" + format,
    path + "py" + format,
    path + "ny" + format,
    path + "pz" + format,
    path + "nz" + format,
  ]);

  viewer = new PANOLENS.Viewer({
    container: container,
    controlButtons: ["fullscreen"],
    cameraFov: 80,
    rotateSpeed: -1.5,
    viewIndicator:true
  });
  viewer.OrbitControls.noZoom = true;
  viewer.add(panorama);
};
