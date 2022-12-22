import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Align } from '@progress/kendo-angular-popup';
// import { AuthService } from 'src/app/services/admin/auth/auth.service';
import { Handlers } from 'src/app/utils/handlers';
import { Shared } from 'src/app/utils/shared';

@Component({
  selector: 'app-profile-btn',
  templateUrl: './profile-btn.component.html',
  styleUrls: ['./profile-btn.component.scss']
})
export class ProfileBtnComponent implements OnInit {

  toggleText = "Show";
  show = false;

  @ViewChild("anchor") public anchor!: ElementRef;
  @ViewChild("popup", { read: ElementRef }) public popup!: ElementRef;

  anchorAlign: Align = { horizontal: "center", vertical: "bottom" };
  popupAlign: Align = { horizontal: "center", vertical: "top" };

  @HostListener("keydown", ["$event"])
  public keydown(event: any): void {
    if (event.keyCode === 27) {
      this.toggle(false);
    }
  }

  @HostListener("document:click", ["$event"])
  public documentClick(event: any): void {
    if (!this.contains(event.target)) {
      this.toggle(false);
    }
  }

  public toggle(show?: boolean): void {
    this.show = show !== undefined ? show : !this.show;
    this.toggleText = this.show ? "Hide" : "Show";
  }

  private contains(target: any): boolean {
    return (
      this.anchor.nativeElement.contains(target) ||
      (this.popup ? this.popup.nativeElement.contains(target) : false)
    );
  }

  constructor(
    public handlers: Handlers,
    public shared: Shared,
    // private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    // this.authService.logout();
  }

}
