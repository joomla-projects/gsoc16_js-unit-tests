/**
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @package     Joomla
 * @subpackage  JavaScript Tests
 * @since       3.6
 * @version     1.0.0
 */

define(['jquery', 'testsRoot/frontediting/spec-setup', 'jasmineJquery'], function ($) {

	describe('Frontediting jEditMakeAbsolute with argument true', function () {
		beforeAll(function () {
			$('.fr-ed-make-abs-true').jEditMakeAbsolute(true);
		});

		it('Should change style of all selected elements ', function () {
			var $elements = $('.fr-ed-make-abs-true');
			var $first = $elements.first();
			var $second = $elements.last();

			expect($first).toHaveCss({position: "absolute", marginLeft: '0px', marginTop: '0px'});
			expect($second).toHaveCss({position: "absolute", marginLeft: '0px', marginTop: '0px'});
		});

		it('Should detach all selected elements from jEditMakeAbsolute div', function () {
			expect($('#jEditMakeAbsolute')).not.toContainElement('.fr-ed-make-abs-true');
		});

		it('Should append all detached elements to body', function () {
			expect($('body>div.fr-ed-make-abs-true').length).toEqual(2);
		});
	});

	describe('Frontediting jEditMakeAbsolute with argument false', function () {
		beforeAll(function () {
			$('.fr-ed-make-abs-false').jEditMakeAbsolute(false);
		});

		it('Should change style of all selected elements ', function () {
			var $elements = $('.fr-ed-make-abs-false');
			var $first = $elements.first();
			var $second = $elements.last();

			expect($first).toHaveCss({position: "absolute", marginLeft: '0px', marginTop: '0px'});
			expect($second).toHaveCss({position: "absolute", marginLeft: '0px', marginTop: '0px'});
		});

		it('Should not detach any selected elements from jEditMakeAbsolute div', function () {
			expect($('#jEditMakeAbsolute')).toContainElement('.fr-ed-make-abs-false');
		});
	});

	describe('Frontediting modules jmoddiv on mouseenter', function () {
		beforeAll(function () {
			$('#jmoddiv-module').mouseenter();
			this.$editBtn = $('body>a.btn.jmodedit');
		});

		it('Should add class jmodinside to the div', function () {
			expect($('#jmoddiv-module')).toHaveClass('jmodinside');
		});

		it('Should prepend edit icon element and move it to end of body', function () {
			expect(this.$editBtn).toExist();
		});

		it('Should set jmodedit class on the added element', function () {
			expect(this.$editBtn).toHaveClass('jmodedit');
		});

		it('Should set attribute href = "url" on the added element', function () {
			expect(this.$editBtn).toHaveAttr('href', 'url');
		});

		it('Should set attribute title = "title" on the added element', function () {
			expect(this.$editBtn).toHaveAttr('data-original-title', 'mod-title');
		});

		it('Should set attribute target = "target" on the added element', function () {
			expect(this.$editBtn).toHaveAttr('target', 'target');
		});

		describe('Edit icon on mouseenter', function () {
			beforeAll(function () {
				this.$editBtn.mouseenter();
			});

			it('Should show tooltip', function () {
				expect($('body>div.tooltip')).toExist();
			});
			it('Should set content as "title" inside tooltip', function () {
				expect($('.tooltip-inner').first()).toHaveText('mod-title');
			});
		});

		describe('Edit icon on mouseleave', function () {
			beforeEach(function () {
				jasmine.clock().install();
				this.$editBtn.mouseleave();
			});

			afterEach(function () {
				jasmine.clock().uninstall();
			});

			it('Should remove tooltip and button after a 500 millisecond delay', function () {
				expect($('body>div.tooltip')).toExist();
				expect($('body>a.btn.jmodedit')).toExist();

				jasmine.clock().tick(501);

				expect($('body>div.tooltip')).not.toExist();
				expect($('body>a.btn.jmodedit')).not.toExist();
			});
		});
	});

	describe('Frontediting modules jmoddiv on mouseleave', function () {
		beforeEach(function () {
			jasmine.clock().install();
			$('#jmoddiv-module').mouseenter();
		});

		afterEach(function () {
			jasmine.clock().uninstall();
		});

		it('Should remove tooltip after a 500 millisecond delay', function () {
			$('#jmoddiv-module').mouseleave();

			expect($('body>a.btn.jmodedit')).toExist();

			jasmine.clock().tick(501);

			expect($('body>a.btn.jmodedit')).not.toExist();
		});
	});

	describe('Frontediting menu jmoddiv li on mouseenter', function () {
		beforeAll(function () {
			$('#frontediting-menu-li').mouseenter();
			this.$popover = $('body>div.popover');
			this.$popoverContent = $('body>div.popover .btn.jfedit-menu');
		});

		it('Should show popover', function () {
			expect(this.$popover).toExist();
		});

		it('Should have popover content an <a> tag having class btn jfedit-menu', function () {
			expect(this.$popoverContent).toExist();
		});

		it('Should have href value of <a> element set', function () {
			expect(this.$popoverContent).toHaveAttr('href', '/administrator/index.php?option=com_menus&view=item&layout=edit&id=123');
		});

		it('Should have target value of <a> element set to _blank', function () {
			expect(this.$popoverContent).toHaveAttr('target', '_blank');
		});

		it('Should have title value of <a> element set to menu-title-123', function () {
			expect(this.$popoverContent).toHaveAttr('data-original-title', 'menu-title-123');
		});

		describe('a.jfedit-menu on mouseenter', function () {
			beforeAll(function () {
				$('body>div.popover').find('a.jfedit-menu').mouseenter()
			});

			it('Should show tooltip', function () {
				expect($('.popover-content div.tooltip')).toExist();
			});
		});

		describe('popover on mouseleave', function () {
			beforeAll(function () {
				this.$popover.mouseleave();
			});

			it('Should show tooltip', function () {
				expect($('body>div.popover')).not.toExist();
			});
		});
	});

	describe('Frontediting menu jmoddiv li on mouseleave', function () {
		beforeEach(function () {
			jasmine.clock().install();
			$('#frontediting-menu-li').mouseenter();
		});

		afterEach(function () {
			jasmine.clock().uninstall();
		});

		it('Should remove tooltip after a 500 millisecond delay', function () {
			$('#frontediting-menu-li').mouseleave();

			expect($('body>div.popover')).toExist();

			jasmine.clock().tick(1501);

			expect($('body>div.popover')).not.toExist();
		});
	});
});
