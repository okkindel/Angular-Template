import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface IRouterStateUrl {
  queryParams: Params;
  params: Params;
  url: string;
}

export class CustomSerializer
  implements RouterStateSerializer<IRouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): IRouterStateUrl {
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    const params = route.params;
    return { url, params, queryParams };
  }
}
