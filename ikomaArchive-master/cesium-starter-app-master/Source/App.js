var viewer = new Cesium.Viewer('cesiumContainer');

viewer.dataSources.add(Cesium.KmlDataSource.load("https://yutatsu.github.io/aoyama/ikomaArchive-master/cesium-starter-app-master/Source/hukui.kml"));