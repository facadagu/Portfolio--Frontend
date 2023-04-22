import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo-ap-y-redes',
  templateUrl: './logo-ap-y-redes.component.html',
  styleUrls: ['./logo-ap-y-redes.component.css']
})
export class LogoAPComponent implements OnInit{
  isLogged = false;

  constructor(private router: Router, private tokenService: TokenService){}
  
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }




  login(){
    this.router.navigate(['/login'])
  }

}
