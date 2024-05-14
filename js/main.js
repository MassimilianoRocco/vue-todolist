const { createApp } = Vue

createApp({

    data() {
        return {
            todolist: ["alzarsi", "mangiare", "studiare", "chiamare cliente", "uscire", "preparare cena"],
            newActivity:"",
            
        }
    },
    methods: {
       addActivity(activity){
        this.todolist.push(activity);
        this.newActivity ="";
       },
       cancelActivity(index){
        this.todolist.splice(index,1);

       }
    },
    mounted() {
        
    }

}).mount('#app')