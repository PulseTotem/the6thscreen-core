/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="../../libsdef/mocha.d.ts" />
/// <reference path="../../libsdef/node.d.ts" />
/// <reference path="../../scripts/infotype/Info.ts" />
/// <reference path="../../scripts/infotype/priorities/InfoPriority.ts" />

var assert = require("assert");

describe('Info', function() {
	describe('#constructor', function () {
		it('should work with an empty constructor and use default values', function () {
			var info : Info = new Info();

			assert.equal(info.getId(), "noId", "The default id is different from 'noId' : "+info.getId());
			assert.equal(info.getPriority(), InfoPriority.LOW, "The info priority is different from expected: "+InfoPriority[info.getPriority()]);
		});
	});
});