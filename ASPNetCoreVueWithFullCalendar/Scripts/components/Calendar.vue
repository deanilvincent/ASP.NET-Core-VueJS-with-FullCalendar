<template>
    <full-calendar :config="config"
                   :events="events"
                   @event-selected="eventSelected"
                   @event-created="eventCreated" />
</template>

<script>
    import axios from "axios";
    import { mapState, mapActions } from "vuex";

    export default {
        computed: {
            ...mapState({
                showCreateSched: state => state.showCreateSched,
                startDateTime: state => state.startDateTime,
                endDateTime: state => state.endDateTime
            })
        },
        data() {
            return {
                events: [],
                config: {
                    defaultView: 'month',
                    eventRender: function (event, element) {
                        console.log(event)
                    }
                }
            }
        },
        methods: {
            ...mapActions([
                "openCreateSchedModal"
            ]),
            getEvents() {
                axios.get(`/Home/GetEvents`).then(response => {
                    this.events = response.data;
                }).catch(error => {
                    console.log(error);
                });
            },
            eventSelected(calEvent) {
                alert(calEvent.title);
            },
            eventCreated(calEvent) {
                this.openCreateSchedModal({
                    showCreateSched: true,
                    startDateTime: calEvent.start,
                    endDateTime: calEvent.end
                })
            }
        },
        created() {
            this.getEvents();
        }
    }
</script>