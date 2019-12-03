import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit, OnDestroy {
  matcher: MediaQueryList;

  users: Observable<User[]>;


  constructor(public mediaMatcher: MediaMatcher,
    private userService: UserService,
    private router: Router) {}

    @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    this.matcher = this.mediaMatcher.matchMedia('(max-width: 760px)');

    this.matcher.addListener(this.myListener);

    this.users= this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(() => {
      if (this.myListener())
      this.sidenav.close();
      // TODO close our sidenav
    })
  }

  ngOnDestroy() {
    this.matcher.removeListener(this.myListener);
  }

  myListener() {
    return this.matcher.matches;
  }
}
