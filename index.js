// create a  vue instance

new Vue({
    el: '#root',
    data: {
        message: `Welcome to vue.js training.You loaded this page on ${ new Date().toLocaleString()}`,
        student: true,
        todos: [
            { id: 1,task: 'Learn Vue',completed: true },
            { id: 2,task: 'Learn Vue Directives',completed: false },
            { id: 3,task: 'Learn API',completed: true }
        ],
        name: 'Moseti',
        userInp: 'Zachy'
    },
    methods: {
        reverseString: function() {
            this.name = this.name.split('').reverse().join('');
        },
        userInput(event) {
            this.userInp = event.target.value
        }
    }
})