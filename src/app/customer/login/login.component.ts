import { Component, OnInit } from '@angular/core';
import { UserService } from '../../lib/user.service';
import { Router } from '@angular/router';

declare let alertify: any;
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { first } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return v.password === v.confirmPassword
    ? null
    : {
        passwordnotmatch: true,
      };
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Đăng nhập/Đăng ký';

  formLogin: FormGroup;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  onLogin() {
    var userLogin = {
      username: this.formLogin.get('username').value,
      userpassword: this.formLogin.get('password').value,
    };
    this.userService
      .login(userLogin)
      .pipe(first())
      .subscribe(
        (user) => {
          if (user == null) {
            alertify.error("Đăng nhập thất bại");
            
            this.clearFormLogin();
          } else {
            alertify.success("Đăng nhập thành công");
            
            setTimeout(() => {
              this.router.navigateByUrl('/home');
            }, 1000);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  clearFormLogin() {
    this.formLogin.reset();
  }
}
