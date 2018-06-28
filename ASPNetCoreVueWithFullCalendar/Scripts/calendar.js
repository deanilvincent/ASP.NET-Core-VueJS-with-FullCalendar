import Vue from "vue";
import FullCalendar from "vue-full-calendar";
import AppCalendar from "./components/AppCalendar.vue";
import store from "./store/store";

Vue.use(FullCalendar);

const v = new Vue({
    el: "#app",
    store,
    components: {
        appCalendar: AppCalendar
    }
});

export default v;