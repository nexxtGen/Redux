import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const app = combineReducers({
    comments,
    users
});

export default app;
/*
{
    comments: [
        {
            id: 12741danx1278,
            text: 'Nowy komentarz',
            votesUp: 0,
            votesDown: 0
        },
        {
            id: 12741danb1278,
            text: 'Stary komentarz',
            votesUp: 0,
            votesDown: 0
        }
    ],
    users: [
        {
            id: '121jk6d89h2d',
            firstName: 'Jan',
            lastName: 'Nowak',
            comments: ['12741danx1278'],
        },
        {
            id: '921jk6d89h2d',
            firstName: 'Kamil',
            lastName: 'Sz',
            comments: ['12741danb1278'],
        }
    ]
}
*/

