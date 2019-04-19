import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

// template: '<p>Hello from the library</p>'
let SuperLibComponent = class SuperLibComponent {
};
SuperLibComponent = __decorate([
    Component({
        selector: 'super-lib-component',
        template: "<p>\r\n  Hello from an external template\r\n</p>\r\n"
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
