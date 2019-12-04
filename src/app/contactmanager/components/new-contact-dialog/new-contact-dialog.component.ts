import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];

  user: User;

  name = new FormControl('', [Validators.required]);

  getErrorMessage(){
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new User();

  }

  save() {
    this.userService.addUser(this.user).then( user => {
      this.dialogRef.close(this.user);
    })
  }

  close() {
    this.dialogRef.close(null);
  }

}
