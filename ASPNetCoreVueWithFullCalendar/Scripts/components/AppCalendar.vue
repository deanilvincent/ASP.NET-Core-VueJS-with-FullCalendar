<template>
    <div>
        <app-calendar></app-calendar>
        <app-create-shed></app-create-shed>
    </div>
</template>

<script>
    import Calendar from "../components/Calendar.vue";
    import CreateSched from "../components/CreateSched.vue";

    export default {
        components: {
            appCalendar: Calendar,
            appCreateShed: CreateSched
        }
    }
</script>

<style>
    @import "~fullcalendar/dist/fullcalendar.min.css";
    @import "~bulma/css/bulma.min.css";
</style>