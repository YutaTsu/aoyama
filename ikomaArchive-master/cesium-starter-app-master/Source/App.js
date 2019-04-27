var viewer = new Cesium.Viewer('cesiumContainer');

var polygon = viewer.entities.add({
    name:"福井県庁",
    description:"ここは福井県庁です。",
    polygon : {
        hierarchy : Cesium.Cartesian3.fromDegreesArrayHeights([
           136.220266, 36.066095,0,
          136.220287, 36.063848,0,
          136.221542, 36.063857,0,
          136.222444, 36.063978,0,
          136.222529, 36.064239,0,
          136.223495, 36.064516,0,
          136.223238, 36.065704,0,
          136.223034, 36.065722,0,
          136.222948, 36.066190,0,
          136.222315, 36.066138,0,
          136.221435,36.066216,0]),
        extrudedHeight: 333.0,
        width : 5,
        material: Cesium.Color.RED.withAlpha(0.5),
        outline : true,
        outlinColor : Cesium.ColorBLACK
        }
});
