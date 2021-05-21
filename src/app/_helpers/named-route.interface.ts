import {Route} from "@angular/router";

export interface NamedRoute extends Route {
    name? : string;
}
