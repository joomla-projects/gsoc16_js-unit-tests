/**
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @package     Joomla
 * @subpackage  JavaScript Tests
 * @since       3.6
 * @version     1.0.0
 */

define(['jquery', 'text!testsRoot/highlighter/fixtures/fixture.html', 'libs/highlighter'], function ($, fixture) {
	$('body').append(fixture);
	$start = 'highlighter-start', $end = 'highlighter-end', $className = 'highlight', $tag = 'span'
	var start = document.getElementById('" . $start . "');
	var end = document.getElementById('" . $end . "');
	if (!start || !end || !Joomla.Highlighter) {
		return true;
	}
	highlighter = new Joomla.Highlighter({
		startElement: start,
		endElement: end,
		className: '" . $className . "',
		onlyWords: false,
		tag: '" . $tag . "'
	}).highlight([\"" . implode('","', $terms) . "\"]);
});
