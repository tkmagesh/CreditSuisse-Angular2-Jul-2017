import { Component } from '@angular/core';

@Component({
	selector : 'greeter',
	templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
	message : string = 'Welcome to Angular!!';
	userName : string = '';

	clearMessage(){
		this.message = '';
	}
	greet() : void {
		//let userName = prompt('Enter the name :');
		this.message = `Hi ${this.userName}, Welcome to Angular!!`;
		this.userName = '';
	}
}