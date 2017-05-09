import {Component, OnInit} from '@angular/core';
import {MenuItemsService} from "./menu-items.service";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [MenuItemsService]
})

export class MenuComponent implements OnInit {

    private _username = 'Renato Lovizotto';

    constructor(private menuItems: MenuItemsService) {

    }

    ngOnInit() {
    }

    public get items() {
        return this.menuItems.getMenuItems();
    }

    public get username() {
        return this._username;
    }

    public getPhrase(value?: string): string {
        return `${ value && value.length > 0 ? value : 'Bem-vindo '} ${this.username}`;
    }

}
