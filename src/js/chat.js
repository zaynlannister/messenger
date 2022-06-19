import {Message} from "./message.js";

export class Chat {
    constructor(props) {
        this.id = props.id;
        this.messages = [];
    }

    sendMessage(author, text, isMyMessage = true) {
        this.messages.push({
            ...new Message({author, text}),
            isMyMessage
        })
    }
}