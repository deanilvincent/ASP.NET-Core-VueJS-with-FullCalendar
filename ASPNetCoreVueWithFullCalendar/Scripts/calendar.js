import Vue from "vue";
import FullCalendar from "vue-full-calendar";
import AppCalendar from "./components/AppCalendar.vue";

Vue.use(FullCalendar);

const v = new Vue({
    el: "#app",
    components: {
        appCalendar: AppCalendar
    }
});

export default v;