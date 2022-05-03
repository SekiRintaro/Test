const app = Vue.createApp({
    data: () => ({
      newItem: '',
      todos: [],
      unko:"img/unko.png",
      toire:"img/toire.jpg",
      goldunko:"img/gold.svg"
    }),
    methods: {
        addItem: function(event) {
            //console.log('Clicked!')
            if(this.newItem === "") return console.log("何か入れろ")
            let todo = {
                item: this.newItem ,
                isDone: false
            }
            this.todos.push(todo)
            this.newItem = ""
        },
        deleteItem: function(index) {
            //console.log('delete')
            //console.log(index)
            this.todos.splice(index, 1)
        }
    }
})
app.mount('#app')