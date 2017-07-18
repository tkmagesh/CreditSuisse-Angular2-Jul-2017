import { Component } from '@angular/core';
import { Calculator } from '../models/Calculator';

@Component({
	selector : 'calculator-one',
	templateUrl : 'calculatorOne.component.html'
})
export class CalculatorOneComponent{
	model : Calculator = new Calculator();
}
