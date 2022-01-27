/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';

import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';

import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResizeEditing from '@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting';
import ImageResizeHandles from '@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Font from '@ckeditor/ckeditor5-font/src/font';
import { StrapiUploadAdapter } from '@gtomato/ckeditor5-strapi-upload-plugin';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import ImageResizeButtons from '@ckeditor/ckeditor5-image/src/imageresize/imageresizebuttons';
import sanitizeHtml from 'sanitize-html';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import SourceEditor from '@ckeditor/ckeditor5-source-editing/src/sourceediting';

import './styles.css';

export default class ClassicEditor extends ClassicEditorBase {}

function SpecialCharactersArrowsExtended(editor) {
	editor.plugins.get('SpecialCharacters').addItems('Arrows', [
		{ title: 'simple arrow left', character: '←' },
		{ title: 'simple arrow up', character: '↑' },
		{ title: 'simple arrow right', character: '→' },
		{ title: 'simple arrow down', character: '↓' },
	]);
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Underline,
	Strikethrough,
	Code,
	Subscript,
	Superscript,
	SourceEditor,
	HorizontalLine,
	SpecialCharacters,
	SpecialCharactersEssentials,
	SpecialCharactersArrowsExtended,
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	AutoLink,
	ImageResizeEditing,
	ImageResizeHandles,
	LinkImage,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Font,
	StrapiUploadAdapter,
	ImageResizeButtons,
	Clipboard,
	Alignment,
	HtmlEmbed,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'code',
			'subscript',
			'superscript',
			'link',
			'|',
			'alignment',
			'bulletedList',
			'numberedList',
			'|',
			'outdent',
			'indent',
			'|',
			'uploadImage',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'specialCharacters',
			'horizontalLine',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'htmlEmbed',
			'sourceEditing',
		],
		viewportTopOffset: 30,
		shouldNotGroupWhenFull: true,
	},
	image: {
		styles: [
			// This option is equal to a situation where no style is applied.
			'full',

			// This represents an image aligned to the left.
			'alignLeft',

			// This represents an image aligned to the right.
			'alignRight',
		],
		resizeOptions: [
			{
				name: 'resizeImage:original',
				value: null,
				label: 'Original',
			},
			{
				name: 'resizeImage:10',
				value: '10',
				label: '10%',
			},
			{
				name: 'resizeImage:40',
				value: '40',
				label: '40%',
			},
			{
				name: 'resizeImage:60',
				value: '60',
				label: '60%',
			},
		],
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'linkImage',
			'|',
			'resizeImage',
		],
	},
	htmlEmbed: {
		showPreviews: true,
		sanitizeHtml: (inputHtml) => {
			// Strip unsafe elements and attributes, e.g.:
			// the `<script>` elements and `on*` attributes.
			const outputHtml = sanitizeHtml(inputHtml);

			return {
				html: outputHtml,
				// true or false depending on whether the sanitizer stripped anything.
				hasChanged: true,
			};
		},
	},
	alignment: {
		options: ['left', 'right', 'center', 'justify'],
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
	},
	link: {
		defaultProtocol: 'https://',
		// Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
		addTargetToExternalLinks: true,

		// Let the users control the "download" attribute of each link.
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file',
				},
			},
			openInNewTab: {
				mode: 'manual',
				label: 'Open in a new tab',
				defaultValue: true, // This option will be selected by default.
				attributes: {
					target: '_blank',
					rel: 'noopener noreferrer',
				},
			},
		},
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
};
