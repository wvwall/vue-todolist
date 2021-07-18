
var app = new Vue({
    el: "#root",
    data: {
        inputTodo: "",
        todos: [
            {
                title : "Visitare portfolio",
                status : "done"
            },

            {
                title : "Apprezzare progetti",
                status : "todo"
            },

            {
                title : "Proporre colloquio",
                status : "todo"
            },

            {
                title : "Assumere",
                status : "todo"
            },

        ]
    },
    computed : {
        todosComputato : function () {

            let todosDone = this.todos.filter((todo) => todo.status == "done");
            let todosTodo = this.todos.filter((todo) => todo.status == "todo");
            
            return [...todosTodo, ...todosDone];
        }
        
    },
    methods: {
        add : function () {

            if(this.inputTodo != "") {
                let obj = {
                    title : this.inputTodo,
                    status :"todo"
                }
                this.todos.push(obj);
                this.inputTodo = "";
                
            } 
        },
        check: function (todo) {
            let i = this.todos.indexOf(todo);
            this.todos[i].status = "done";
        },
        remove: function(todo) {
            let i = this.todos.indexOf(todo);
            this.todos.splice(i, 1);
        },
        edit : function (todo) {
            let i = this.todos.indexOf(todo);
            this.inputTodo = this.todos[i].title;
            this.todos.splice(i, 1);  
        }
    }
    
        
});