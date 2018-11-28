import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomSerializer } from './shared/utils';
import { CommonModule } from '@angular/common';
import { AppEffects } from './app/app.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app/app.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forRoot([
      AppEffects
    ]),
    // !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    },
  ],
  declarations: []
})
export class StateModule {

  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: []
    };
  }
}
