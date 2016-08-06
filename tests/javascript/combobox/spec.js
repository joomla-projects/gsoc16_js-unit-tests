/**
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @package     Joomla
 * @subpackage  JavaScript Tests
 * @since       3.6
 * @version     1.0.0
 */

define(['jquery', 'testsRoot/combobox/spec-setup', 'jasmineJquery'], function ($) {
	var $container = $('#comboboxjs');

	describe('Combobox render', function () {
		it('Should set CSS of drop down menu', function () {
			var inputWidth = $('#cbox').width();
			var btnWidth = $('#cbox-btn-group').width();
			var totalWidth = inputWidth - 3;
			var dropDownLeft = -inputWidth + btnWidth;

			expect($('#cbox-drop-menu')).toHaveCss({'left': dropDownLeft+'px', 'max-height': '150px', 'overflow-y': 'scroll'});
		});
	});

	describe('Combobox addEventHandlers', function () {
		it('Should bind focus handler for <input>', function () {
			expect($('#cbox-input')).toHandle('focus');
		});
		it('Should bind blur handler for <input>', function () {
			expect($('#cbox-input')).toHandle('blur');
		});
		it('Should bind keyup handler for <input>', function () {
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
		it('Should bind click handler for <li> elements', function () {
			expect($container.find('li').first()).toHandle('click');
			expect($container.find('li').last()).toHandle('click');
		});
		// it('Should bind mouseenter handler for a elements inside li', function () {
		// 	expect($('#comboboxjs li a').first()).toHandle('mouseenter');
		// 	expect($('#comboboxjs li a').last()).toHandle('mouseenter');
		// });
	});

	// describe('Combobox li a elements mouseenter handler', function () {
	// 	beforeEach(function () {
	// 		$container.find('li a').first().mouseenter();
	// 		$container.find('li a').last().mouseenter();
	// 	});
	// 	it('Should add class hover to first <a> element', function () {
	// 		expect($container.find('li a').first()).toHaveClass('hover');
	// 	});
	// 	it('Should add class hover to last <a> element', function () {
	// 		expect($container.find('li a').last()).toHaveClass('hover');
	// 	});
	// });
    //
	// describe('Combobox li a elements mouseleave handler', function () {
	// 	beforeEach(function () {
	// 		$container.find('li a').first().mouseleave();
	// 		$container.find('li a').last().mouseleave();
	// 	});
	// 	it('Should remove class hover from first <a> element', function () {
	// 		expect($container.find('li a').first()).not.toHaveClass('hover');
	// 	});
	// 	it('Should remove class hover from last <a> element', function () {
	// 		expect($container.find('li a').last()).not.toHaveClass('hover');
	// 	});
	// });

	describe('Combobox drop', function () {
		beforeEach(function () {
			$('#cbox-input').focus();
		});

		it('Should add class nav-hover to combobox div', function () {
			expect($('#cbox')).toHaveClass('nav-hover');
		});

		it('Should add class open to dropBtnDiv div', function () {
			expect($('#cbox-btn-group')).toHaveClass('open');
		});

		it('Should bind keydown handler for <input>', function () {
			expect($('#cbox-input')).toHandle('keydown');
		});

		it('Should bind keypress handler for <input>', function () {
			expect($('#cbox-input')).toHandle('keypress');
		});

		it('Should bind keyup handler for <input>', function () {
			expect($('#cbox-input')).toHandle('keyup');
		});
	});

	describe('Combobox pick', function () {
		beforeEach(function () {
			$('#cbox-input').blur();
		});

		it('Should remove class nav-hover from combobox div', function () {
			expect($('#cbox')).not.toHaveClass('nav-hover');
		});

		it('Should remove class open from dropBtnDiv div', function () {
			expect($('#cbox-btn-group')).not.toHaveClass('open');
		});

		it('Should unbind keydown handler from <input>', function () {
			expect($('#cbox-input')).not.toHandle('keydown');
		});

		it('Should unbind keypress handler from <input>', function () {
			expect($('#cbox-input')).not.toHandle('keypress');
		});

	});

	// describe('Combobox updateList', function () {
	// 	describe('When input an 1 in the input box', function () {
	// 		beforeEach(function () {
	// 			$('#cbox-input').trigger(jQuery.Event('keypress', {which: 49}));
	// 			// $('#cbox-input').val('1').trigger('keyup');
	// 		});
    //
	// 		it('Should make link1 not visible', function () {
	// 			expect($('#cbox-link1')).not.toBeVisible();
	// 		});
    //
	// 		it('Should make link2 not visible', function () {
	// 			expect($('#cbox-link2')).not.toBeVisible();
	// 		});
	// 	});
	// });

	describe('Combobox focusCombo', function () {
		describe('When trigger click on button', function () {
			beforeEach(function () {
				$('#cbox-btn').click();
			});

			it('Should make link1 visible', function () {
				expect($('#cbox-link1')).toBeVisible();
			});
			it('Should make link2 visible', function () {
				expect($('#cbox-link2')).toBeVisible();
			});
			it('Should focus on input', function () {
				expect($('#cbox-input')).toBeFocused();
			});
		});
	});

	describe('Combobox updateCombo', function () {
		describe('When trigger click on li element', function () {
			beforeEach(function () {
				$('#cbox-item1').click();
			});

			it('Should set link1 as value of input', function () {
				expect($('#cbox-input').val()).toEqual('link1');
			});
			it('Should remove class nav-hover from combobox div', function () {
				expect($('#cbox')).not.toHaveClass('nav-hover');
			});

			it('Should remove class open from dropBtnDiv div', function () {
				expect($('#cbox-btn-group')).not.toHaveClass('open');
			});
		});
	});
});
