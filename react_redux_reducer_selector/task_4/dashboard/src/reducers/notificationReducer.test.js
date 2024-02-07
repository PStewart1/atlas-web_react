import {initialState, notificationReducer } from "./notificationReducer";

describe("notificationReducer", () => {
    const notes = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" },
    ];
    const defaultState = {
        notifications: notes,
        filter: "DEFAULT",
    };

    it("Tests that the default state returns the initial state", () => {
        const state = notificationReducer(undefined, {});
        expect(state).toEqual(initialState);
    });

    it("Tests that MARK_AS_READ returns the data with the right item updated", () => {
        const state = notificationReducer(defaultState, { type: "MARK_AS_READ", index: 2 });
        expect(state).toEqual({
            filter: "DEFAULT",
            notifications: [
                {
                    id: 1,
                    isRead: false,
                    type: "default",
                    value: "New course available"
                  },
                  {
                    id: 2,
                    isRead: true,
                    type: "urgent",
                    value: "New resume available"
                  },
                  {
                    id: 3,
                    isRead: false,
                    type: "urgent",
                    value: "New data available"
                  }
            ],
        });
    });

    it("Tests that SET_TYPE_FILTER returns the data with the right filter", () => {
        const state = notificationReducer(defaultState, { type: "SET_TYPE_FILTER", filter: "URGENT" });
        expect(state).toEqual({
            filter: "URGENT",
            notifications: [
                { id: 1, isRead: false, type: "default", value: "New course available" },
                { id: 2, isRead: false, type: "urgent", value: "New resume available" },
                { id: 3, isRead: false, type: "urgent", value: "New data available" },
            ],
        });
    });

    it("Tests that FETCH_NOTIFICATIONS_SUCCESS returns the data with the right item updated", () => {
        const state = notificationReducer(undefined, { type: "FETCH_NOTIFICATIONS_SUCCESS", data: notes });
        expect(state).toEqual({
            filter: "DEFAULT",
            notifications: [
                {
                    id: 1,
                    type: "default",
                    value: "New course available",
                    isRead: false
                },
                {
                    id: 2,
                    type: "urgent",
                    value: "New resume available",
                    isRead: false
                },
                {
                    id: 3,
                    type: "urgent",
                    value: "New data available",
                    isRead: false
                }
            ]
        });
    });
});
