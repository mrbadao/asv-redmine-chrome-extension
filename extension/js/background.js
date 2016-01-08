/**
 * Created by hieunc on 05/01/2016.
 */

chrome.app.runtime.onLaunched.addListener(function () {
	// normal launch initiated by the user, let's start clean.
	// note that this is not related to the persistent state, which is
	// appropriately handled in the window code.
	runApp(false);
});

chrome.app.runtime.onRestarted.addListener(function () {
	// if restarted, try to get the transient saved state
	runApp(true);
});

function runApp(readInitialState) {
	chrome.app.window.create("window.html",
			{
				'id': 'main',
				'outerBounds': {
					'minWidth': 1300,
					'minHeight': 810,
					'maxWidth': 1300,
					'maxHeight': 810
				}
			});
}