'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: 'getGreeting',
    value: function getGreeting() {
      return this.name !== 'Anonymous' ? 'Hi! I\'m ' + this.name + '.' : 'Hi! I\'ll tell you my name at a later time.';
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      return this.name + ' is ' + this.age + ' years old.';
    }
  }]);

  return Person;
}();

var me = new Person('benyang00', 32);
var other = new Person();

console.log('me:', me.getGreeting());
console.log('other:', other.getGreeting());
console.log('me:', me.getDescription());
console.log('other:', other.getDescription());

// creating a Person subclass, Student

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(name, age, major) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this));

    _this.major = major;
    return _this;
  }

  _createClass(Student, [{
    key: 'hasMajor',
    value: function hasMajor() {
      return !!this.major;
    }
  }, {
    key: 'getDescription',
    value: function getDescription() {
      // override getDescription method inherited from Person class
      var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), 'getDescription', this).call(this);

      this.hasMajor() ? description += ' And their major is ' + this.major + '.' : description += ' And they are still undecided about their major.';

      return description;
    }
  }]);

  return Student;
}(Person);

var meStudent = new Student('ben yang', 32, 'Psychology');
var otherStudent = new Student();

console.log('meStudent:', meStudent.getDescription());
console.log('otherStudent:', otherStudent.getDescription());

// Challenge: create another Person subclass, Traveler

var Traveler = function (_Person2) {
  _inherits(Traveler, _Person2);

  function Traveler(name, age, origin) {
    _classCallCheck(this, Traveler);

    var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, name, age));

    _this2.origin = origin;
    return _this2;
  }

  _createClass(Traveler, [{
    key: 'hasOrigin',
    value: function hasOrigin() {
      return !!this.origin;
    }
  }, {
    key: 'getGreeting',
    value: function getGreeting() {
      // override getGreeting method inherited from Person class
      var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), 'getGreeting', this).call(this);
      this.hasOrigin() ? greeting += ' And I\'m from ' + this.origin + '.' : greeting += ' Can you guess where I\'m from?';
      return greeting;
    }
  }]);

  return Traveler;
}(Person);

var meTraveler = new Traveler('travel ben', 32, 'Singapore');
var otherTraveler = new Traveler();

console.log('meTraveler:', meTraveler.getGreeting());
console.log('otherTraveler:', otherTraveler.getGreeting());