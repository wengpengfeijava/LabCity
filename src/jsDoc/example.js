/**
 * @constructor
 */
function Project() {

}
/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
Project.prototype.assign = function (employee) {
    // ...
};

/**
 * @param {string} [uhu] - xixi's name.
 */
function sayHello(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    }
    alert('Hello ' + somebody);
}

/**
 * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
 */
function sayHello1(somebody) {
    if (!somebody) {
        somebody = 'John Doe';
    } else if (Array.isArray(somebody)) {
        somebody = somebody.join(', ');
    }
    alert('Hello ' + somebody);
}
/**
 * @param {String=} playMode - listen|learn|previewLesson
 * @link localhost:8000/play/#/learn/{trainClassId}/{lessonId}/{courseWareId}/{exts}
 */
function MyClass(opt_value) {
    /**
     * Some value.
     * @type {Object|undefined}
     */
    this.myValue = opt_value;
}

var a = {
    /**
     * @param {String=} playMode - listen|learn|previewLesson  localhost:8000/play/#/learn/{trainClassId}/{lessonId}/{courseWareId}/{exts}
     */
    sdfk: ''
}