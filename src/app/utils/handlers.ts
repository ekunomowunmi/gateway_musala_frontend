import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, NavigationExtras } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class Handlers {

    constructor(
        public router: Router,
        public location: Location
    ) {}

    navigateSkipUrl(route: any) {
        this.router.navigateByUrl(route, {replaceUrl: true});
    }

    navigate(route: any, params?: any) {
        console.log(params);
        if(params) {
            this.router.navigate([route], {queryParams: params});
        } else {
            this.router.navigate([route]);
        }
    }

    navBack() {
        this.location.back();
    }

    getCurrentRoute() {
        return this.router.url;
    }

    getCurrentRoutePath(route: String) {
        let rt:any = route.split('/');
        rt = rt[rt.length - 1];
        return rt;
    }

    capitalize ([first,...rest]: string) {
        return first.toUpperCase() + rest.join('').toLowerCase();  
    }
}