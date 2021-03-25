
var app = new Vue({
    el: "#root",
    data: {
        inputTodo: "",
        todos: [
            {
                title : "Iniziare esercizio Boolean",
                status : "done"
            },

            {
                title : "Avere scompensi emotivi",
                status : "done"
            },

            {
                title : "Aprire ticket",
                status : "todo"
            },

            {
                title : "Pushare esercizio",
                status : "todo"
            }
        ]
    },
    methods: {
        add : function () {

            if(this.inputTodo != "") {
                let obj = {
                    title : this.inputTodo
                }
                this.todos.push(obj);
            }
            this.inputTodo = ""

            
        }
    }
});