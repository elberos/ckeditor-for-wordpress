/*
Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/

/**
 * Documentation:
 * http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html
 */

CKEDITOR.editorConfig = function(config) {
	// The minimum editor width, in pixels, when resizing it with the resize handle.
	config.resize_minWidth = 450;

	// Protect PHP code tags (<?...?>) so CKEditor will not break them when
	// switching from Source to WYSIWYG.
	config.protectedSource.push(/<\?[\s\S]*?\?>/g);

	// Define toolbars, you can remove or add buttons.
	// List of all buttons is here: http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.config.html#.toolbar_Full

	// WordPress basic toolbar
	config.toolbar_WordpressBasic = [
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Strike', '-', 'RemoveFormat' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight'] },
		{ name: 'links', items: [ 'Link', 'Unlink' ] },
		{ name: 'insert', items: [ 'Image', 'SpecialChar' ] }
	];

	// The equivalent of "WordpressFull" toolbar, defined in a way that makes adding buttons from plugins easier.
	config.toolbarGroups = [
		{ name: 'document',    groups: [ 'mode' ] },
		{ name: 'styles' },
		'/',
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		'/',
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'links' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'colors' },
		'/',
		{ name: 'insert' },
		{ name: 'wordpress' },
		{ name: 'about' },
	];

	// Remove buttons in "WordpressFull" toolbar
	//config.WordpressFull_removeButtons = 'Save,NewPage,Preview,Print,Templates,CreateDiv,PageBreak,Styles';
	config.removeButtons = 'Save,NewPage,Preview,Print';

	//IE: remove border of image when is as a link
	config.extraCss = "a img { border: 0px\\9; }";

	// mediaembed plugin
	// config.extraPlugins += (config.extraPlugins ? ',mediaembed' : 'mediaembed' );
	// CKEDITOR.plugins.addExternal('mediaembed', ckeditorSettings.pluginPath + 'plugins/mediaembed/');
	
	// code snippet plugin
	config.removePlugins += (config.removePlugins ? ',' : '' ) + 'insertpre,scayt';
	config.extraPlugins += (config.extraPlugins ? ',' : '' ) + 'youtube,codesnippet,mathjax';
	config.mathJaxLib = '/wp-content/plugins/ckeditor-for-wordpress/ckeditor/plugins/MathJax-2.7.7/latest.js?config=TeX-AMS_HTML-full.js';
	//config.mathJaxLib = '/wp-content/plugins/ckeditor-for-wordpress/ckeditor/plugins/mathjax/MathJax-2.7.7/latest.js?config=TeX-AMS_HTML';
	//config.mathJaxLib = '//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML';
	CKEDITOR.plugins.addExternal('youtube', ckeditorSettings.pluginPath + 'ckeditor/plugins/youtube/');
	CKEDITOR.plugins.addExternal('codesnippet', ckeditorSettings.pluginPath + 'ckeditor/plugins/codesnippet/');
    //config.codeSnippet_theme = 'vs';
};