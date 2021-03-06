import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth/auth.service';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuth$: Observable<boolean>;

  constructor(
    private authSevice: AuthService,
private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
    this.authSevice.logout();
  }
}
