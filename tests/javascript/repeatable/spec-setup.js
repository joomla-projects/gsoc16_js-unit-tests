/**
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @package     Joomla
 * @subpackage  JavaScript Tests
 * @since       3.6
 * @version     1.0.0
 */

define(['jquery', 'text!testsRoot/repeatable/fixtures/fixture.html', 'libs/repeatable', 'jasmineJquery'], function ($, fixture) {
	$('body').append(fixture);

	weready = jasmine.createSpy('weready');
	prepare_template = jasmine.createSpy('prepare-template');
	prepare_modal = jasmine.createSpy('prepare-modal');
	row_add = jasmine.createSpy('row-add');
	row_remove = jasmine.createSpy('row-remove');
	value_update = jasmine.createSpy('value-update');

	var element = $('input.form-field-repeatable');

	element.on('weready', weready)
		.on('prepare-template', prepare_template)
		.on('prepare-modal', prepare_modal)
		.on('row-add', row_add)
		.on('row-remove', row_remove)
		.on('value-update', value_update);

	element.JRepeatable();
});
