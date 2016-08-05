/**
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @package     Joomla
 * @subpackage  JavaScript Tests
 * @since       3.6
 * @version     1.0.0
 */

define(['jquery', 'testsRoot/combobox/spec-setup', 'jasmineJquery'], function ($) {

	describe('Combobox render', function () {
		it('Should set CSS of drop down menu', function () {
			var inputWidth = $('#cbox').width(),
				btnWidth = $('#cbox-btn-group').width(),
				totalWidth = inputWidth - 3,
				dropDownLeft = -inputWidth + btnWidth;
			expect($('#cbox-drop-menu')).toHaveCss({'left': dropDownLeft+'px', 'max-height': '150px', 'overflow-y': 'scroll', 'left': dropDownLeft+'px'});
		});
	});

	describe('Combobox addEventHandlers', function () {
		it('Should bind focus handler for input', function () {
			expect($('#cbox-input')).toHandle('focus');
		});
		it('Should bind blur handler for input', function () {
			expect($('#cbox-input')).toHandle('blur');
		});
		it('Should bind keyup handler for input', function () {
			expect($('#cbox-input')).toHandle('keyup');
		});
		// it('Should bind mouseenter handler for drop menu', function () {
		// 	expect($('#cbox-drop-menu')).toHandle('mouseenter');
		// });
		// it('Should bind mouseleave handler for input', function () {
		// 	expect($('#cbox-drop-menu')).toHandle('mouseleave');
		// });
		it('Should bind click handler for button', function () {
			expect($('#cbox-btn')).toHandle('click');
		});
		it('Should bind click handler for li elements', function () {
			expect($('#comboboxjs li').first()).toHandle('click');
			expect($('#comboboxjs li').last()).toHandle('click');
		});
	});
});
