var app = (function(){
	/* Sync */
	function addSync(x,y){
		console.log(`	[@Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`	[@Service] returning the result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[@Consumer] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[@Consumer] result = ${result}`);
	}

	/* Async - Callback*/
	function addAsyncCallback(x,y, onResult){
		console.log(`	[@Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`	[@Service] returning the result`);
			if (typeof onResult === 'function')
				onResult(result);
		}, 4000);
	}

	function addAsyncCallbackClient(x,y){
		console.log(`[@Consumer] triggering addAsyncCallback`);
		addAsyncCallback(x,y, function(result){
			console.log(`[@Consumer] result = ${result}`);
		});
	}

	/* Async */
	var addAsyncEvents = (function(){
		var _callbacks = [];
		function process(x,y){
			console.log(`	[@Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`	[@Service] returning the result`);
				_callbacks.forEach(callbackFn => callbackFn(result));
			}, 4000);
		}
		function subscribe(callbackFn){
			_callbacks.push(callbackFn);
		}
		return {
			process : process,
			subscribe : subscribe
		}
	})();

	return {
		addSyncClient : addSyncClient,
		addAsyncCallbackClient : addAsyncCallbackClient,
		addAsyncEvents : addAsyncEvents
	}
})();
