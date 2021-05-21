import {Directive, Input} from "@angular/core";
import {ActivatedRoute, Router, RouterLinkWithHref} from "@angular/router";
import {LocationStrategy} from "@angular/common";

@Directive({
    selector: 'a[namedRouterLink]'
})
export class NamedRouterLinkDirective extends RouterLinkWithHref{

    @Input() set namedRouterLink(routes: unknown[]) {
        const selectedRoute = this.myRoute.config.filter( x => x['name'] == routes[0])[0];
        routes[0] = "/" + selectedRoute['path'];
        console.log(routes);
        this.routerLink = routes;
    }

    constructor(router: Router, route: ActivatedRoute, locationStrategy: LocationStrategy, private myRoute: Router){
        super(router, route, locationStrategy)
    }

}

