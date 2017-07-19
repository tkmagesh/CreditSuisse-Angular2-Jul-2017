import { Component, EventEmitter, Output } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugStorageService } from '../services/bugStorage.service';

@Component({
	selector : 'bug-edit',
	templateUrl : 'bugEdit.component.html',
	//styleUrls : ['bugEdit.component.css']
})
export class BugEditComponent{
	
	newBugName : string = '';

	@Output()
	newbug : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugStorage : BugStorageService){
		
	}
	onCreateClick(){
		let newBugItem = this.bugStorage.addNew(this.newBugName);
		this.newbug.emit(newBugItem);	
	}
}