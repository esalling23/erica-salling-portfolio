/**
 * (Site name here) 
 * 
 * Index page Model
 * @module index
 * @class index
 * @author Erica Salling
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * index model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Index = new keystone.List('Index', 
	{
		label: 'Index Page',
		singular: 'Index Page',
		nodelete: true
	});

/**
 * Model Fields
 * @main Index
 */
Index.add({
	name: { type: String, default: "Index Page", hidden: true, required: true, initial: true },
	intro: { type: Types.Markdown, label: "Intro Text",  initial: true, required: true }, 
	backgroundImg: { type: Types.CloudinaryImage, label: 'Background Image', note: 'If blank, will use hex color'}, 
	backgroundClr: { type: Types.Color, label: 'Background Color', note: 'Will be overridden by background image'}
	
});

/**
 * Model Registration
 */
Index.defaultSort = '-createdAt';
Index.defaultColumns = 'name, updatedAt';
Index.register();
