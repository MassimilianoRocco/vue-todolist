const { createApp } = Vue

createApp({

    data() {
        return {
            todolist: [
                {titolo: "alzarsi", done: true}, 
                {titolo:"mangiare", done: false},
                {titolo:"studiare", done: false},
                {titolo:"chiamare cliente", done: true},
                {titolo:"uscire", done: true},
                {titolo:"preparare cena", done: false}
            ],
            newActivity:"",     
        }
    },
    methods: {
       addActivity(activity){
        let newObj = {titolo:activity, done:false};
        this.todolist.push(newObj);
        this.newActivity ="";
       },
       cancelActivity(index){
        this.todolist.splice(index,1);
       },
       checkIfDone(index){
            if(this.todolist[index].done == true){
                return "color_green";
            }
            else if(this.todolist[index].done == false){
                return "color_red";
            }
       },
       changeStatus(index){
        if(this.todolist[index].done == true){
            this.todolist[index].done = false;
        }
        else if(this.todolist[index].done == false){
            this.todolist[index].done = true;
        }
       }

    },
    mounted() {
        
    }

}).mount('#app')