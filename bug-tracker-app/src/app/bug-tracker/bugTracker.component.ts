import { Component } from '@angular/core';
import { IBug } from './models/IBug';
import { BugStorageService } from './services/bugStorage.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	bugSortBy : string = '';
	bugSortDescending : boolean = false;
	newBugName : string = '';

	constructor(private bugStorage : BugStorageService){
		this.bugs = this.bugStorage.getAll();
	}

	onCreateClick(){
		let newBug = this.bugStorage.addNew(this.newBugName);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug){
		let toggledBug = this.bugStorage.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length-1; index >= 0 ; index--){
			if (this.bugs[index].isClosed){
				this.bugStorage.remove(this.bugs[index]);
				this.bugs.splice(index,1);
			}
		}
	}

	getClosedCount(){
		console.log('getClosedCount triggered');
		let result = 0;
		for(let index = 0; index < this.bugs.length; index++)
			if (this.bugs[index].isClosed)
				++result;
		return result;
	}
}