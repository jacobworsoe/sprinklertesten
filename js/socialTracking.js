FB.Event.subscribe('edge.create',
    function(href, widget) {
        alert('You liked the URL: ' + href);
    }
);