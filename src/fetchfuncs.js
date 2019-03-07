
import AES from 'crypto-js/aes'
import enc from 'crypto-js/enc-utf8'

class Fetcher {
    constructor() {
        this.events = this.getAllEvents
    }

    getAllEvents() {
        const httpOptions = {
            headers: { 'x-teamengine-test': "YfKFyOBnLBvudfn" }
        };
        const url = `https://projects.teamengine.com/calendar/events`;
        return fetch(url, httpOptions).then(response => { return response.text() });
    }

    processResponse(response) {
        return JSON.parse(AES.decrypt(response, 'teamengine-key').toString(enc));

    }

}
export default Fetcher;