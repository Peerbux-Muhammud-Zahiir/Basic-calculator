import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
	displayValue:string='0';
	currentValue:number=0;
	operator:string | null=null;


	clear(){
		this.displayValue='0';
		this.currentValue=0;
		this.operator=null;
	}

	input(value:string){
		if(this.displayValue==='0'){
			this.displayValue=value;
		}else{
			this.displayValue+=value;
		}
		
	}

	add(){
		
		this.currentValue=parseFloat(this.displayValue);
		this.operator='+';
		this.displayValue='0';
	}


	subtract(){
		this.currentValue=parseFloat(this.displayValue);
		this.operator='-';
		this.displayValue='0';

	}


	multiply(){
		this.currentValue=parseFloat(this.displayValue);
		this.operator='*';
		this.displayValue='0';

	}

	divide(){
		this.currentValue=parseFloat(this.displayValue);
		this.operator='/';
		this.displayValue='0';

	}

	calculate(){
		const secondValue=parseFloat(this.displayValue);
		switch(this.operator){
			case '+':
				this.displayValue=String(this.currentValue+secondValue);
				break;
			case '-':
				this.displayValue=String(this.currentValue-secondValue);
				break;
			case '*':
				this.displayValue=String(this.currentValue*secondValue);
				break;
			case '/':
				this.displayValue=String(this.currentValue/secondValue);
				break;
		}
		this.operator=null;

	

	}

}
