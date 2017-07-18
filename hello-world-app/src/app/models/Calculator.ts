export class Calculator{
	number1 : number = 0;
	number2 : number = 0;
	result : number = 0;

	add(){
		this.result = this.number1 + this.number2;
	}
	subtract(){
		this.result = this.number1 - this.number2;
	}
	multiply(){
		this.result = this.number1 * this.number2;
	}
	divide(){
		this.result = this.number1 / this.number2;
	}
}