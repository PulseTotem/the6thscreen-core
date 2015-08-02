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
			assert.equal(info.getCreationDate(), null, "The info creation date is different from null :"+info.getCreationDate());
			assert.equal(info.getObsoleteDate(), null, "The info obsolete date is different from null :"+info.getObsoleteDate());
			assert.equal(info.getDurationToDisplay(), Info.DEFAULT_DURATION, "The duration to display is different from default value :"+info.getDurationToDisplay());
			assert.equal(info.getCastingDate(), null, "The info casting date is different from null :"+info.getCastingDate());
			assert.equal(info.getServiceLogo(), "", "The info service logo is different from empty string :"+info.getServiceLogo());
			assert.equal(info.getServiceName(), "", "The info service name is different from empty string :"+info.getServiceName());
		});

		it('should fill attributes with right values when given', function () {
			var id = "toto";
			var priority = InfoPriority.HIGH;
			var creationDate = new Date();
			var obsoleteDate = new Date();
			var durationToDisplay = 43;
			var castingDate = new Date();
			var serviceLogo = "tutu";
			var serviceName = "service";

			var info : Info = new Info(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName);

			assert.equal(info.getId(), id, "The default id is different from expected : "+info.getId());
			assert.equal(info.getPriority(), priority, "The info priority is different from expected: "+InfoPriority[info.getPriority()]);
			assert.equal(info.getCreationDate(), creationDate, "The info creation date is different from expected :"+info.getCreationDate());
			assert.equal(info.getObsoleteDate(), obsoleteDate, "The info obsolete date is different from expected :"+info.getObsoleteDate());
			assert.equal(info.getDurationToDisplay(), durationToDisplay, "The duration to display is different from expected :"+info.getDurationToDisplay());
			assert.equal(info.getCastingDate(), castingDate, "The info casting date is different from expected :"+info.getCastingDate());
			assert.equal(info.getServiceLogo(), serviceLogo, "The info service logo is different from expected :"+info.getServiceLogo());
			assert.equal(info.getServiceName(), serviceName, "The info service name is different from expected :"+info.getServiceName());
		});
	});

	describe('#getInfoFromJSONObject', function () {
		it('should return a proper new info if the json is ok', function () {
			var json = {
				"_id": "blurp",
				"_priority": InfoPriority.HIGH,
				"_creationDate": new Date(),
				"_obsoleteDate": new Date(),
				"_durationToDisplay": 42,
				"_castingDate": new Date(),
				"_serviceLogo": "blorf",
				"_serviceName": "blarf"
			};

			var info : Info = Info.getInfoFromJSONObject<Info>(json, Info);

			var expectedInfo = new Info(json._id, json._priority, json._creationDate, json._obsoleteDate, json._durationToDisplay, json._castingDate, json._serviceLogo, json._serviceName);
			assert.deepEqual(info, expectedInfo, "The obtained info is not same as expected");
		});

		it('should throw an error if the ID is not defined', function () {
			var json = {
				"_priority": InfoPriority.HIGH,
				"_creationDate": new Date(),
				"_obsoleteDate": new Date(),
				"_durationToDisplay": 42,
				"_castingDate": new Date(),
				"_serviceLogo": "blorf",
				"_serviceName": "blarf"
			};

			assert.throws(function() { Info.getInfoFromJSONObject(json, Info); }, InfoException, "The exception has not been thrown.");
		});

		it('should throw an error if the priority is not defined', function () {
			var json = {
				"_id": "blurp",
				"_creationDate": new Date(),
				"_obsoleteDate": new Date(),
				"_durationToDisplay": 42,
				"_castingDate": new Date(),
				"_serviceLogo": "blorf",
				"_serviceName": "blarf"
			};

			assert.throws(function() { Info.getInfoFromJSONObject(json, Info); }, InfoException, "The exception has not been thrown.");
		});

		it('should throw an error if the creationDate is not defined', function () {
			var json = {
				"_id": "blurp",
				"_priority": InfoPriority.HIGH,
				"_obsoleteDate": new Date(),
				"_durationToDisplay": 42,
				"_castingDate": new Date(),
				"_serviceLogo": "blorf",
				"_serviceName": "blarf"
			};

			assert.throws(function() { Info.getInfoFromJSONObject(json, Info); }, InfoException, "The exception has not been thrown.");
		});

		it('should throw an error if the obsoleteDate is not defined', function () {
			var json = {
				"_id": "blurp",
				"_priority": InfoPriority.HIGH,
				"_creationDate": new Date(),
				"_durationToDisplay": 42,
				"_castingDate": new Date(),
				"_serviceLogo": "blorf",
				"_serviceName": "blarf"
			};

			assert.throws(function() { Info.getInfoFromJSONObject(json, Info); }, InfoException, "The exception has not been thrown.");
		});

		it('should throw an error if the durationToDisplay is not defined', function () {
			var json = {
				"_id": "blurp",
				"_priority": InfoPriority.HIGH,
				"_creationDate": new Date(),
				"_obsoleteDate": new Date(),
				"_castingDate": new Date(),
				"_serviceLogo": "blorf",
				"_serviceName": "blarf"
			};

			assert.throws(function() { Info.getInfoFromJSONObject(json, Info); }, InfoException, "The exception has not been thrown.");
		});

		it('should throw an error if the castingDate is not defined', function () {
			var json = {
				"_id": "blurp",
				"_priority": InfoPriority.HIGH,
				"_creationDate": new Date(),
				"_obsoleteDate": new Date(),
				"_durationToDisplay": 42,
				"_serviceLogo": "blorf",
				"_serviceName": "blarf"
			};

			assert.throws(function() { Info.getInfoFromJSONObject(json, Info); }, InfoException, "The exception has not been thrown.");
		});

		it('should throw an error if the serviceLogo is not defined', function () {
			var json = {
				"_id": "blurp",
				"_priority": InfoPriority.HIGH,
				"_creationDate": new Date(),
				"_obsoleteDate": new Date(),
				"_durationToDisplay": 42,
				"_castingDate": new Date(),
				"_serviceName": "blarf"
			};

			assert.throws(function() { Info.getInfoFromJSONObject(json, Info); }, InfoException, "The exception has not been thrown.");
		});

		it('should throw an error if the serviceName is not defined', function () {
			var json = {
				"_priority": InfoPriority.HIGH,
				"_creationDate": new Date(),
				"_obsoleteDate": new Date(),
				"_durationToDisplay": 42,
				"_castingDate": new Date(),
				"_serviceLogo": "blorf"
			};

			assert.throws(function() { Info.getInfoFromJSONObject(json, Info); }, InfoException, "The exception has not been thrown.");
		});
	});

	describe('#equal', function () {
		it('should always return false for Info', function () {
			var i1 : Info = new Info("titi");
			var i2 = i1;

			assert.ok(!i1.equals(i2));
		});
	});

	describe('#replaceServiceInfoInChildren', function () {
		it('should put the same serviceName and serviceLogo values in children', function () {
			var array = [new Info(), new Info(), new Info()];
			array[2].setServiceName("blurf");

			var parent = new Info();
			parent.setServiceLogo("trucmuche");
			parent.setServiceName("bidule");

			parent.replaceServiceInfoInChildren(array, parent);

			for(var i = 0; i < array.length; i++) {
				assert.equal(array[i].getServiceLogo(), parent.getServiceLogo(), "The serviceLogo is not the one expected for i="+i+" : "+array[i].getServiceLogo());
				assert.equal(array[i].getServiceName(), parent.getServiceName(), "The serviceName is not the one expected for i="+i+" : "+array[i].getServiceName());
			}
		});
	});
});