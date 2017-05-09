import {Injectable} from '@angular/core';

@Injectable()
export class MenuItemsService {

    menuItems: string[] = ['Home', 'Empresa', 'Contato'];

    constructor() {
    }

    getMenuItems(): string[] {
        return this.menuItems.map( m => m.toUpperCase() );
    }

}
