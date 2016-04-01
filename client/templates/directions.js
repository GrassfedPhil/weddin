Template.directions.onRendered(function () {
    var mapCanvas = document.getElementById('map');
    var latLang = {lat: 39.848138, lng: -82.958731};
    var mapOptions = {
        center:latLang,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    new google.maps.Marker({
        position: latLang,
        map: map,
        title: "Holy Matrimony"
    });
});