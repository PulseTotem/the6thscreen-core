/**
 * @author Simon Urli <simon@the6thscreen.fr>
 */

/// <reference path="../../libsdef/mocha.d.ts" />
/// <reference path="../../libsdef/node.d.ts" />
/// <reference path="../../scripts/infotype/Picture.ts" />

var assert = require("assert");

describe('Picture', function() {
	describe('#constructor', function () {
		it('should work with an empty constructor and use default values', function () {
			var pic : Picture = new Picture();

			// same as for simple info
			assert.equal(pic.getId(), "noId", "The default id is different from 'noId' : "+pic.getId());
			assert.equal(pic.getPriority(), InfoPriority.LOW, "The info priority is different from expected: "+InfoPriority[pic.getPriority()]);
			assert.equal(pic.getCreationDate(), null, "The info creation date is different from null :"+pic.getCreationDate());
			assert.equal(pic.getObsoleteDate(), null, "The info obsolete date is different from null :"+pic.getObsoleteDate());
			assert.equal(pic.getDurationToDisplay(), Info.DEFAULT_DURATION, "The duration to display is different from default value :"+pic.getDurationToDisplay());
			assert.equal(pic.getCastingDate(), null, "The info casting date is different from null :"+pic.getCastingDate());
			assert.equal(pic.getServiceLogo(), "", "The info service logo is different from empty string :"+pic.getServiceLogo());
			assert.equal(pic.getServiceName(), "", "The info service name is different from empty string :"+pic.getServiceName());

			assert.equal(pic.getTitle(), null, "The info title is different from expected :"+pic.getTitle());
			assert.equal(pic.getDescription(), null, "The info description is different from expected :"+pic.getDescription());
			assert.equal(pic.getOriginal(), null, "The original pic is different from expected : "+pic.getOriginal());
			assert.equal(pic.getSmall(), null, "The small pic is different from expected: "+pic.getSmall());
			assert.equal(pic.getMedium(), null, "The medium pic is different from expected: "+pic.getMedium());
			assert.equal(pic.getLarge(), null, "The large pic is different from expected :"+pic.getLarge());
			assert.equal(pic.getThumb(), null, "The thumb pic is different from expected :"+pic.getThumb());
			assert.equal(pic.getOrientation(), null, "The orientation is different from expected: "+pic.getOrientation());
			assert.deepEqual(pic.getTags(), [], "The tags is different from expected :"+pic.getTags());
			assert.equal(pic.getOwner(), null, "The owner is different from expected :"+pic.getOwner());
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

			var title = "superPic";
			var description = "une super photo !";
			var original = new PictureURL();
			original.setURL("blabla");
			var small = new PictureURL();
			small.setHeight(82);
			var medium = new PictureURL();
			medium.setWidth(345);
			var large = new PictureURL();
			large.setURL("bidup");
			var thumb = new PictureURL();
			thumb.setHeight(23);
			var orientation = "truc";
			var tags = [new Tag(), new Tag(), new Tag()];
			tags[0].setName("bla");
			tags[1].setName("bidu");
			var owner = new User();
			owner.setRealname("Moi");

			var pic : Picture = new Picture(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName,
				title, description, original, small, medium, large, thumb, orientation, tags, owner);

			assert.equal(pic.getId(), id, "The default id is different from expected : "+pic.getId());
			assert.equal(pic.getPriority(), priority, "The info priority is different from expected: "+InfoPriority[pic.getPriority()]);
			assert.equal(pic.getCreationDate(), creationDate, "The info creation date is different from expected :"+pic.getCreationDate());
			assert.equal(pic.getObsoleteDate(), obsoleteDate, "The info obsolete date is different from expected :"+pic.getObsoleteDate());
			assert.equal(pic.getDurationToDisplay(), durationToDisplay, "The duration to display is different from expected :"+pic.getDurationToDisplay());
			assert.equal(pic.getCastingDate(), castingDate, "The info casting date is different from expected :"+pic.getCastingDate());
			assert.equal(pic.getServiceLogo(), serviceLogo, "The info service logo is different from expected :"+pic.getServiceLogo());
			assert.equal(pic.getServiceName(), serviceName, "The info service name is different from expected :"+pic.getServiceName());

			assert.equal(pic.getTitle(), title, "The info title is different from expected :"+pic.getTitle());
			assert.equal(pic.getDescription(), description, "The info description is different from expected :"+pic.getDescription());
			assert.equal(pic.getOriginal(), original, "The original pic is different from expected : "+pic.getOriginal());
			assert.equal(pic.getSmall(), small, "The small pic is different from expected: "+pic.getSmall());
			assert.equal(pic.getMedium(), medium, "The medium pic is different from expected: "+pic.getMedium());
			assert.equal(pic.getLarge(), large, "The large pic is different from expected :"+pic.getLarge());
			assert.equal(pic.getThumb(), thumb, "The thumb pic is different from expected :"+pic.getThumb());
			assert.equal(pic.getOrientation(), orientation, "The orientation is different from expected: "+pic.getOrientation());
			assert.equal(pic.getTags(), tags, "The tags is different from expected :"+pic.getTags());
			assert.equal(pic.getOwner(), owner, "The owner is different from expected :"+pic.getOwner());
		});
	});

	describe('#fromJSONObject', function () {
		it('should return a proper new info if the json is ok', function () {
			var id = "toto";
			var priority = InfoPriority.HIGH;
			var creationDate = new Date();
			var obsoleteDate = new Date();
			var durationToDisplay = 43;
			var castingDate = new Date();
			var serviceLogo = "tutu";
			var serviceName = "service";

			var title = "superPic";
			var description = "une super photo !";
			var original = new PictureURL();
			original.setURL("blabla");
			var small = new PictureURL();
			small.setHeight(82);
			var medium = new PictureURL();
			medium.setWidth(345);
			var large = new PictureURL();
			large.setURL("bidup");
			var thumb = new PictureURL();
			thumb.setHeight(23);
			var orientation = "truc";
			var tags = [new Tag(), new Tag(), new Tag()];
			tags[0].setName("bla");
			tags[1].setName("bidu");
			var owner = new User();
			owner.setRealname("Moi");

			var json = {
				"_id": id,
				"_priority": priority,
				"_creationDate": creationDate,
				"_obsoleteDate": obsoleteDate,
				"_durationToDisplay": durationToDisplay,
				"_castingDate": castingDate,
				"_serviceLogo": serviceLogo,
				"_serviceName": serviceName,
				"_title": title,
				"_description": description,
				"_original": original,
				"_small": small,
				"_medium": medium,
				"_large": large,
				"_thumb": thumb,
				"_orientation": orientation,
				"_tags": tags,
				"_owner": owner
			};

			var expectedPic : Picture = new Picture(id, priority, creationDate, obsoleteDate, durationToDisplay, castingDate, serviceLogo, serviceName,
				title, description, original, small, medium, large, thumb, orientation, tags, owner);

			var pic : Picture = Picture.fromJSONObject(json);

			assert.deepEqual(pic, expectedPic, "The retrieve information is different from expected");
		});
	});
});