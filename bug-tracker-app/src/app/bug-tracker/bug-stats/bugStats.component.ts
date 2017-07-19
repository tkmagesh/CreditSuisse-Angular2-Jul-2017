import { Component, Input } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	selector : 'bug-stats',
	templateUrl : 'bugStats.component.html',
	styleUrls : ['bugStats.component.css']
})
export class BugStatsComponent{
	
	@Input()
	data : IBug[] = [];
}