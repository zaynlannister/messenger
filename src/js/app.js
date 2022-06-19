import {User} from './user.js';
import {Chat} from './chat.js';

let person = new User({
    name: 'Mike',
    lastName: 'Johnson',
    username: 'sfdoskdsokd@gmail.com'
})

let chat = new Chat({id: 1});

chat.sendMessage(person, 'привет');

// console.log(chat)