import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public loading: boolean;
  public profile: any;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getProfile();
  }

  private getProfile() {
    this.loading = true;
    this.api.getProfile().subscribe(
      ( data: any ) => {
        this.profile = data.result;
        console.log(this.profile);
        this.profile.birthdate = this.profile.birthdate.split("T")[0];
        this.loading = false;
      },
      error => {
        this.loading = false;
      }
    );
  }
}
