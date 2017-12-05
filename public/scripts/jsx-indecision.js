'use strict';

var appRoot = document.getElementById('app');

var app = {
  title: 'In-Decision App',
  subtitle: 'Freeing up your mind from making menial decisions since 2017.',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderIndecisionApp();
};

var onMakeDecision = function onMakeDecision() {
  var randNum = Math.floor(Math.random() * app.options.length);
  var choice = app.options[randNum];
  alert(choice);
};

var renderIndecisionApp = function renderIndecisionApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title.toUpperCase()
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { disabled: app.options.length === 0, onClick: onMakeDecision },
        'Make Random Choice'
      ),
      React.createElement(
        'button',
        { disabled: app.options.length === 0, onClick: onRemoveAll },
        'Remove All'
      ),
      React.createElement(
        'p',
        null,
        'Options (',
        app.options.length,
        '):'
      ),
      React.createElement(
        'ul',
        null,
        app.options.map(function (option) {
          return React.createElement(
            'li',
            { key: 'opt' + app.options.indexOf(option) },
            option
          );
        })
      )
    ) : React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { disabled: app.options.length === 0, onClick: onMakeDecision },
        'Make Random Choice'
      ),
      React.createElement(
        'button',
        { disabled: app.options.length === 0, onClick: onRemoveAll },
        'Remove All'
      ),
      React.createElement(
        'p',
        null,
        'No Options Available (',
        app.options.length,
        ')'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderIndecisionApp(); // init app