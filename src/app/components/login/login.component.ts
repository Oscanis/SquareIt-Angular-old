import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFormControl = new FormControl("", [Validators.required]);
  passFormControl = new FormControl("", [Validators.required]);

  constructor(private router: Router, private player: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.player.login(this.userFormControl.value, this.passFormControl.value);
    this.router.navigateByUrl('/');
  }

  onNew() {
    this.router.navigateByUrl('/newplayer');
  }

  onPlay() {
    this.router.navigateByUrl('/game');
  }

}
