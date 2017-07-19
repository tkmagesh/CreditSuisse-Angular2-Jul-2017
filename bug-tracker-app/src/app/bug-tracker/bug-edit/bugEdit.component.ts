import { Component, EventEmitter, Output } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugServerService } from '../services/bugServer.service';


@Component({
	selector : 'bug-edit',
	templateUrl : 'bugEdit.component.html',
	//styleUrls : ['bugEdit.component.css']
})
export class BugEditComponent{
	
	newBugName : string = '';

	@Output()
	newbug : EventEmitter<IBug> = new EventEmitter<IBug>();

	constructor(private bugServer : BugServerService){
		
	}
	onCreateClick(){
		this.bugServer
			.addNew(this.newBugName)
			.subscribe(newBug => this.newbug.emit(newBug));
			
	}
}