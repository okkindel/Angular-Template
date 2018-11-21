import { ThemesService } from './themes.service';
import { TestBed } from '@angular/core/testing';
import { Store,  StoreModule, combineReducers } from '@ngrx/store';

describe('ThemesService', () => {
  let service: ThemesService;
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          // ...fromRoot.reducers,
          // auth: combineReducers(fromAuth.reducer),
        }),
      ],
      providers: [ThemesService],
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
    service = TestBed.get(ThemesService);
  });


  it('should dispatch themes store', () => {
    const theme = 'dark-theme';
    // const action = new AuthActions.ChangeTheme(theme);
    // store.dispatch(action);
    expect(service.changeTheme('dark-theme')).toBeUndefined();
  });
});
