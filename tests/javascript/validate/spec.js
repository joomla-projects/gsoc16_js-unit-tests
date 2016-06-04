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

    describe('Validate button', function () {

        beforeEach(function() {
            // console.log(document.formvalidator);
            spyOn(document.formvalidator, 'isValid');
            // $('#button').on('click', function() {
            //     console.log('clocked');
            // });
            // console.log($('#button'));
            $('#button').trigger( "click" );
        });


        it('Should call isValid() method', function () {
            expect(document.formvalidator.isValid).toHaveBeenCalled();
        });
    });

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
    
    // describe('Length of form.data(\'inputfields\')', function () {
    //
    //     it('should be equal to 13', function () {
    //         expect($('form').data('inputfields').length).toEqual(13);
    //     });
    // });

    describe('validate method', function () {
        it('should return true', function () {
            expect(document.formvalidator.validate(element.find('#validate-1'))).toEqual(true);
        });
    });

    


});
