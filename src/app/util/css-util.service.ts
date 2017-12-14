import { Injectable } from '@angular/core';
import { Elements } from './elements.enum';

@Injectable()
export class CssUtilService {

    constructor() { }

    protected removeOrAddClass(elementId: string, className: string, addClass: boolean) {
        if (!(document.getElementById(elementId) == null)) {
            if (!addClass) {
                document.getElementById(elementId).classList.remove(className);
            } else {
                document.getElementById(elementId).className += ' ' + className;
            }
        }
    }

    public makeTabActive(element: Elements) {
        // Object.keys(Elements).filter(key => !isNaN(Number(Elements[key])));
        for (const item in Elements) {
            if (isNaN(Number(item))) {
                this.removeOrAddClass(item.toString(), 'is-active', false);
            }
        }
        this.removeOrAddClass(Elements[element].toString(), 'is-active', true);
    }

}
