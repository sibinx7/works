import { JSDOM } from 'jsdom';
import $ from 'jquery';
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
global.window = dom.window;
window.$ = $(window);

global.document = dom.window.document;
global.navigator = {
  userAgent: 'node.js'
};