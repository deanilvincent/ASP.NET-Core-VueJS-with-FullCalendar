<template>
    <div>
        <div class="modal is-active" v-show="showCreateSched">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">View Selected</p>
                    <button class="delete" aria-label="close" @click.prevent="closeModal"></button>
                </header>
                <section class="modal-card-body">
                    Start:{{startDateTime}} End: {{endDateTime}}
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button" @click.prevent="closeModal">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";

    export default {
        computed: {
            ...mapState({
                showCreateSched: state => state.showCreateSched,
                startDateTime: state => state.startDateTime,
                endDateTime: state => state.endDateTime
            })
        },
        methods: {
            ...mapActions([
                "openCreateSchedModal"
            ]),
            closeModal() {
                this.openCreateSchedModal({ showCreateSched: false })
            }
        }
    }
</script>