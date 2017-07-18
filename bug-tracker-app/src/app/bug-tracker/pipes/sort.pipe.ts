import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sort'
})
export class SortPipe implements PipeTransform {
	transform(data: any[], attrName: any, isDescending : boolean = false): any[] {
		let comparer = getComparerFor(attrName);
		if (isDescending)
			comparer = getDescendingComparerFor(comparer);
		return data.sort(comparer);
	}
}

interface IComparer{
	(item1 : any, item2 : any) : number
}

function getComparerFor(attrName : string) : IComparer{
	return function(item1 : any, item2 : any){
		if (item1[attrName] < item2[attrName]) return -1;
		if (item1[attrName] > item2[attrName]) return 1;
		return 0;
	}
}

function getDescendingComparerFor(comparer : IComparer) : IComparer{
	return function(item1 : any, item2 : any){
		return comparer(item1, item2) * -1;
	}
}