/**
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @package     Joomla
 * @subpackage  JavaScript Tests
 * @since       3.6
 * @version     1.0.0
 */

define(['jquery', 'testsRoot/validate/spec-setup', 'jasmineJquery'], function ($) {
    var element = $('#validatejs');

    describe('The input fields in the form', function () {
        it('with class \'required\' should have attributes aria-required = true', function () {
            expect(element.find('#attach-to-form input')).toHaveAttr('aria-required', 'true');
        });
        it('with class \'required\' should have attributes required = required', function () {
            expect(element.find('#attach-to-form input')).toHaveAttr('required', 'required');
        });
    });

    describe('The textarea fields in the form', function () {
        it('with class \'required\' should have attributes aria-required = true', function () {
            expect(element.find('#attach-to-form textarea')).toHaveAttr('aria-required', 'true');
        });
        it('with class \'required\' should have attributes required = required', function () {
            expect(element.find('#attach-to-form textarea')).toHaveAttr('required', 'required');
        });
    });

    describe('The select fields in the form', function () {
        it('with class \'required\' should have attributes aria-required = true', function () {
            expect(element.find('#attach-to-form select')).toHaveAttr('aria-required', 'true');
        });
        it('with class \'required\' should have attributes required = required', function () {
            expect(element.find('#attach-to-form select')).toHaveAttr('required', 'required');
        });
    });

    describe('The fieldset fields in the form', function () {
        it('with class \'required\' should have attributes aria-required = true', function () {
            expect(element.find('#attach-to-form fieldset')).toHaveAttr('aria-required', 'true');
        });
        it('with class \'required\' should have attributes required = required', function () {
            expect(element.find('#attach-to-form fieldset')).toHaveAttr('required', 'required');
        });
    });

    
    describe('validate method on #validate-1', function () {
        var res = document.formvalidator.validate(element.find('#validate-1'))

        it('should return true', function () {
            expect(res).toEqual(true);
        });
        it('should remove class invalid from element', function () {
            expect(element.find('#validate-1')).not.toHaveClass('invalid');
        });
        it('should have aria-invalid = false in element', function () {
            expect(element.find('#validate-1')).toHaveAttr('aria-invalid', 'false');
        });
        it('should remove class invalid from the label for element', function () {
            expect(element.find('#validate-test label[for=validate-1]')).not.toHaveClass('invalid');
        });
    });

    describe('validate method on #validate-2', function () {
        var res = document.formvalidator.validate(element.find('#validate-2'));

        it('should return false', function () {
            expect(res).toEqual(false);
        });
        it('should add class invalid to element', function () {
            expect(element.find('#validate-2')).toHaveClass('invalid');
        });
        it('should have aria-invalid = true in element', function () {
            expect(element.find('#validate-2')).toHaveAttr('aria-invalid', 'true');
        });
    });

    describe('validate method on #validate-3', function () {
        var res = document.formvalidator.validate(element.find('#validate-3'));

        it('should return true', function () {
            expect(res).toEqual(true);
        });
    });

    describe('validate method on #validate-4', function () {
        var res = document.formvalidator.validate(element.find('#validate-4'));

        it('should return true', function () {
            expect(res).toEqual(true);
        });
        it('should remove class invalid from element', function () {
            expect(element.find('#validate-4')).not.toHaveClass('invalid');
        });
        it('should have aria-invalid = false in element', function () {
            expect(element.find('#validate-4')).toHaveAttr('aria-invalid', 'false');
        });
        it('should remove class invalid from the label for element', function () {
            expect(element.find('#validate-4-lbl')).not.toHaveClass('invalid');
        });
    });

    describe('validate method on #validate-5', function () {
        var $label = element.find('#validate-5-label');
        element.find('#validate-5').data('label', $label);

        var res = document.formvalidator.validate(element.find('#validate-5'));

        it('should return false', function () {
            expect(res).toEqual(false);
        });
        it('should add class invalid to element', function () {
            expect(element.find('#validate-5')).toHaveClass('invalid');
        });
        it('should have aria-invalid = true in element', function () {
            expect(element.find('#validate-5')).toHaveAttr('aria-invalid', 'true');
        });
        it('should add class invalid to the label for element', function () {
            expect(element.find('#validate-5-label')).toHaveClass('invalid');
        });
    });

    describe('validate method on #validate-6', function () {
        var res = document.formvalidator.validate(element.find('#validate-6'));

        it('should return true', function () {
            expect(res).toEqual(true);
        });
        it('should remove class invalid from element', function () {
            expect(element.find('#validate-6')).not.toHaveClass('invalid');
        });
        it('should have aria-invalid = false in element', function () {
            expect(element.find('#validate-6')).toHaveAttr('aria-invalid', 'false');
        });
    });

    describe('isValid method on button click', function () {
        Joomla.renderMessages = function() {
            return true;
        };
        $('#button').trigger( "click" );

        it('should add class invalid to element #isvalid-1', function () {
            expect(element.find('#isvalid-1')).toHaveClass('invalid');
        });
        it('should have aria-invalid = true in element #isvalid-1', function () {
            expect(element.find('#isvalid-1')).toHaveAttr('aria-invalid', 'true');
        });
        it('should not add class invalid to element #isvalid-2', function () {
            expect(element.find('#isvalid-2')).not.toHaveClass('invalid');
        });
    });
});
