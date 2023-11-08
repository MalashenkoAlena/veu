const Counter ={
    data() {
        return {
          counter: 0,
          title: "счетчик",
        }
    }
    methods: {
       increaseCounter() {
        this.Counter++
       } ,
       decreaseCounter() {
        this.Counter--;
       }
    }
}

Vue.createApp(Counter).mount("#app");


