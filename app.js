import Controller from './app/controller.js';
import Model from './app/model.js';
import View from './app/view.js';

const app = new Controller(new Model(), new View());
