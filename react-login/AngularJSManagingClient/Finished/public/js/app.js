angular.module('TestApp', []);
angular.module('TestApp')
    .controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.message = 'Hello';

    this.people = [
        {
            name: "Lizeth"
        },
        {
            name: "Mario"
        },
        {
            name: "Jacinto"
        },
        {
            name: "Simon"
        },
        {
            name: "Danna"
        }
    ];
}