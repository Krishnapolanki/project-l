import { NavigationMenu } from './../../models/navigation-menu.models';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidebar') sidebar: ElementRef;

  navMenus: NavigationMenu[];
  constructor() {
    this.navMenus = [
      {
        iconClass: 'bx bx-grid-alt',
        toolTip: 'Dashboard',
        routePath: '',
        label: 'Dashboard',
        labelClass: 'links_name',
        toolTipClass: 'tooltip',
      },
      {
        iconClass: 'bx bx-user',
        toolTip: 'User',
        routePath: 'users',
        label: 'User',
        labelClass: 'links_name',
        toolTipClass: 'tooltip',
      },
      {
        iconClass: 'bx bx-chat',
        toolTip: 'Messages',
        routePath: '',
        label: 'Messages',
        labelClass: 'links_name',
        toolTipClass: 'tooltip',
      },
      {
        iconClass: 'bx bx-pie-chart-alt-2',
        toolTip: 'Analytics',
        routePath: '',
        label: 'Analytics',
        labelClass: 'links_name',
        toolTipClass: 'tooltip',
      },
      {
        iconClass: 'bx bx-folder',
        toolTip: 'Files',
        routePath: '',
        label: 'File Manager',
        labelClass: 'links_name',
        toolTipClass: 'tooltip',
      },
      {
        iconClass: 'bx bx-cart-alt',
        toolTip: 'Order',
        routePath: '',
        label: 'Order',
        labelClass: 'links_name',
        toolTipClass: 'tooltip',
      },
      {
        iconClass: 'bx bx-heart',
        toolTip: 'Saved',
        routePath: '',
        label: 'Saved',
        labelClass: 'links_name',
        toolTipClass: 'tooltip',
      },
      {
        iconClass: 'bx bx-cog',
        toolTip: 'Setting',
        routePath: '',
        label: 'Setting',
        labelClass: 'links_name',
        toolTipClass: 'tooltip',
      },
    ];
  }

  ngOnInit(): void {}

  toggleNavigationMenu() {
    this.sidebar.nativeElement.classList.toggle('open');
  }
}
