// create a  vue instance
let person = {
    name: 'Zachy'
}
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
        userInp: 'Zachy',
        person,
        url: 'https://codewithzachy.netlify.com'
    },
    // lifecycle methods - run code when an instance has been created
    created() {
        console.log(this.name)
    },
    // computed property
    computed: {
        visitPortofolio() {
           return this.url;
        }
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