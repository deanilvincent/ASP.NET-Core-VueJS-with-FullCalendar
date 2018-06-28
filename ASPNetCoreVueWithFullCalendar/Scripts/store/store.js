import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const SHOW_CREATESCHED_MODAL = "SHOW_CREATESCHED_MODAL";

const store = new Vuex.Store({
    state: {
        showCreateSched: false,
        startDateTime: null,
        endDateTime: null
    },
    getters: {

    },
    mutations: {
        [SHOW_CREATESCHED_MODAL]: (state, payload) => {
            state.showCreateSched = payload.showCreateSched;
            if (payload.startDateTime) {
                state.startDateTime = payload.startDateTime;
                state.endDateTime = payload.endDateTime;
            } else {
                state.startDateTime = null;
                state.endDateTime = null;
            }
        }
    },
    actions: {
        openCreateSchedModal: ({ commit }, payload) => {
            commit(SHOW_CREATESCHED_MODAL, payload);
        }
    }
});

export default store;