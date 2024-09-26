import {ref, computed, reactive} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'


export const useEventsStore = defineStore('events', () => {
    let events = reactive({
        events_ended: [],
        events_ongoing: [],
        events_upcoming: [],
    })
    const user_base_url = import.meta.env.VITE_PROJECT_API_SERVER;
    
    const load_data = () => {
        axios.get(`${user_base_url}/api/events?filter=ended&q=`).then((res) => {
            //events.all_events = res.data.data;
            events.events_ended = res.data.data;
            console.log(events);
        });

        axios.get(`${user_base_url}/api/events?filter=ongoing&q=`).then((res) => {
            //events.all_events = res.data.data;
            events.events_ongoing = res.data.data;
            console.log(events);
        });
        axios.get(`${user_base_url}/api/events?filter=upcoming&q=`).then((res) => {
            //events.all_events = res.data.data;
            events.events_upcoming = res.data.data;
            console.log(events);
        });
    };
    load_data()
    return {
        events,
        load_data,
        user_base_url

    };
})
export default useEventsStore