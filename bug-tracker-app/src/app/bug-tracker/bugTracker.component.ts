import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	bugSortBy : string = '';
	bugSortDescening : boolean = false;
	
	constructor(private bugOperations : BugOperationsService){
		this.bugs.push(this.bugOperations.createNew('Server communication failure'));
		this.bugs.push(this.bugOperations.createNew('Data validation error'));
		this.bugs.push(this.bugOperations.createNew('Application not responsive'));
		this.bugs.push(this.bugOperations.createNew('User actions not recognized'));
	}

	onCreateClick(newBugName : string){
		let newBug = this.bugOperations.createNew(newBugName);
		this.bugs.push(newBug);
	}

	onBugClick(bug : IBug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length-1; index >= 0 ; index--){
			if (this.bugs[index].isClosed)
				this.bugs.splice(index,1);
		}
	}

	getClosedCount(){
		let result = 0;
		for(let index = 0; index < this.bugs.length; index++)
			if (this.bugs[index].isClosed)
				++result;
		return result;
	}
}