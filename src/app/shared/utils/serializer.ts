import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

const typeCache: { [label: string]: boolean } = {};

export function createActionType<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }
  typeCache[<string>label] = true;
  return <T>label;
}

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
