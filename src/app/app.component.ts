import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'number-input';

    value = '';
    newValue = '';

    onEnter(value: string) {
        this.value = value;
        this.newValue = this.value.replace(',', '.');
        console.log('this.value: ', this.newValue);
    }
}
