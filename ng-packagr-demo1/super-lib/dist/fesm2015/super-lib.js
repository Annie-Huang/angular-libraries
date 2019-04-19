import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

let SuperLibComponent = class SuperLibComponent {
};
SuperLibComponent = __decorate([
    Component({
        selector: 'super-lib-component',
        template: '<p>Hello from the library</p>'
    })
], SuperLibComponent);

let SuperLibModule = class SuperLibModule {
};
SuperLibModule = __decorate([
    NgModule({
        declarations: [SuperLibComponent],
        exports: [SuperLibComponent]
    })
], SuperLibModule);

/**
 * Generated bundle index. Do not edit.
 */

export { SuperLibComponent, SuperLibModule };
//# sourceMappingURL=super-lib.js.map
