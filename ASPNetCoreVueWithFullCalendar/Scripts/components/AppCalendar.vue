<template>
    <div>
        <app-calendar></app-calendar>
    </div>
</template>

<script>
    import Calendar from "../components/Calendar.vue";

    export default {
        components: {
            appCalendar: Calendar
        }
    }
</script>

<style>
    @import "~fullcalendar/dist/fullcalendar.min.css";
</style>