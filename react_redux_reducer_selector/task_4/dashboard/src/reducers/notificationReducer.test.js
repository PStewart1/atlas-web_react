import {initialState, notificationReducer } from "./notificationReducer";
import { set, setIn, fromJS, toJS } from 'immutable';
import {fetchNotificationsSuccess, markAsAread, setNotificationFilter} from '../actions/notificationActionCreators';
import { notificationsNormalizer } from '../schema/notifications';

describe("notificationReducer", () => {
    const notes = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" },
    ];

    const fetchedNotes = notes.map((note) => (
        set(note, 'isRead', false)
    ));

    const fetchedState = fromJS({
        filter: 'DEFAULT',
        notifications: notificationsNormalizer(fetchedNotes)
    });

    it("Tests that the default state returns the initial state", () => {
        const state = notificationReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it("Tests that FETCH_NOTIFICATIONS_SUCCESS returns the data with the notes marked as unread", () => {
        const state = notificationReducer(initialState, fetchNotificationsSuccess());
        expect(state).toEqual(fetchedState);
    });

    it("Tests that MARK_AS_READ returns the data with the right item updated", () => {
        const state = notificationReducer(fetchedState, markAsAread(2));
        expect(state).toEqual(setIn(fetchedState, ['notifications', 1, 'isRead'], true));
    });

    it("Tests that SET_TYPE_FILTER returns the data with the right filter", () => {
        const state = notificationReducer(fetchedState, setNotificationFilter("URGENT"));
        expect(state).toEqual(set(fetchedState, 'filter', "URGENT"));
    });


});
