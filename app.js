const app = Vue.createApp({
data(){
    return{
        courseGoal:"Learn Vue",
        courseGoalA:"Finish the course and learn vue",
        courseGoalB:"Master in Vue in build app",
        vueLink:'https://vuejs.org',
    };
    
},methods:{
outPutGoal(){
    const randomNumber = Math.random();
    if(randomNumber < 0.5){
        return this.courseGoalA;
    }else{
        return this.courseGoalB;
    }
}
},
});

app.mount('#user-goal');