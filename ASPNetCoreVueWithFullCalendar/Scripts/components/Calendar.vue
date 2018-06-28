<template>
    <full-calendar :config="config"
                   :events="events"
                   @event-selected="eventSelected" />
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                events: [],
                config: {
                    defaultView: 'month',
                    eventRender: function (event, element) {
                        console.log(event)
                    }
                },
            }
        },
        methods: {
            getEvents() {
                axios.get(`/Home/GetEvents`).then(response => {
                    this.events = response.data;
                }).catch(error => {
                    console.log(error);
                });
            },
            eventSelected(calEvent) {
                alert(calEvent.title);
            }
        },
        created() {
            this.getEvents();
        }
    }
</script>