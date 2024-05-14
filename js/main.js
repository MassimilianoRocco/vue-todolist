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
       }
    },
    mounted() {
        
    }

}).mount('#app')