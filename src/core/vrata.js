let routeList = [];

export default class Vrata {
    constructor(routes) {
        routeList = routes;
        window["Vrata"] = this;
        return window["Vrata"];
    }

    matchRoute(route1, route2) {
        // Check if the route exists
        if(route1 !== route2) return false;
        return true;
    }

    navigate(event, url) {
        if(event != null) event.preventDefault();
        routeList.forEach(route => {
            if(this.matchRoute(route.path, url)) {
                // Load the DOM
                document.getElementById("rootApp").innerHTML = route.controller();
            }
        })
    }

    init() {
        console.log(window.location.pathname)
        this.navigate(null, window.location.pathname)
    }
}