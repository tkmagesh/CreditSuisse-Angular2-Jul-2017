import { Component, OnInit } from '@angular/core';
import { IBug } from './models/IBug';
import { BugServerService } from './services/bugServer.service';


@Component({
	selector : 'bug-tracker',
	templateUrl : 'bugTracker.component.html',
	styleUrls : ['bugTracker.component.css']
})
export class BugTrackerComponent implements OnInit{
	bugs : IBug[] = [];
	bugSortBy : string = '';
	bugSortDescending : boolean = false;
	newBugName : string = '';

	async ngOnInit(){
		this.bugServer
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}

	constructor(private bugServer : BugServerService){
		
	}

	onNewBugAdded(newBug : IBug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : IBug){
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug));
		
	}

	onRemoveClosedClick(){
		for(let index = this.bugs.length-1; index >= 0 ; index--){
			if (this.bugs[index].isClosed){
				this.bugs.splice(index,1);
			}
		}
	}
}