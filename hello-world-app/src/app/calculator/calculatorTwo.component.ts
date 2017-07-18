import { Component } from '@angular/core';
import { Calculator } from '../models/Calculator';


@Component({
	selector : 'calculator-two',
	templateUrl : 'calculatorTwo.component.html'
})
export class CalculatorTwoComponent{
	model : Calculator = new Calculator();

	operation : string = '';

	calculate(){
		this.model[this.operation]();
		
		/*switch (this.operation) {
			case "add":
				this.model.add();
				break;
			case "subtract":
				this.model.subtract();
				break;
			case "multiply":
				this.model.multiply();
				break;
			case "divide":
				this.model.divide();
				break;
		}*/
	}
}