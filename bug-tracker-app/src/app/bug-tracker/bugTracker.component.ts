import { Component } from '@angular/core';


interface IBug{
	name : string,
	isClosed : boolean,
	createdAt : Date
}


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent{
	bugs : IBug[] = [];
	onCreateClick(newBugName : string){
		let newBug : IBug = {
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		this.bugs.push(newBug);
	}
}