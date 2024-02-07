import { initialState, courseReducer } from "./courseReducer";
import { Map, setIn, fromJS, toJS  } from 'immutable';

describe("courseReducer", () => {
    const data = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 }
    ];

    it("Tests that the default state returns an empty array", () => {
        const state = courseReducer(undefined, {});
        expect(state).toEqual(initialState);
    });
    
    it("Tests that FETCH_COURSE_SUCCESS returns the data passed", () => {
        const state = courseReducer(initialState, { type: "FETCH_COURSE_SUCCESS", data });
        expect(state).toEqual(fromJS([
            {
                id: 1,
                name: "ES6",
                credit: 60,
                isSelected: false
            },
            {
                id: 2,
                name: "Webpack",
                credit: 20,
                isSelected: false
            },
            {
                id: 3,
                name: "React",
                credit: 40,
                isSelected: false
            }
        ]));
    });
    
    it("Tests that SELECT_COURSE returns the data with the right item updated", () => {
        const state = courseReducer(fromJS(data), { type: "SELECT_COURSE", courseId: 2 });
        expect(state).toEqual([
            {
                id: 1,
                name: "ES6",
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                credit: 20,
                isSelected: true
            },
            {
                id: 3,
                name: "React",
                credit: 40
            }
        ]);
    });

    it("Tests that UNSELECT_COURSE returns the data with the right item updated", () => {
        const state = courseReducer(Map([data]), { type: "UNSELECT_COURSE", courseId: 2 });
        expect(state).toEqual([
            {
                id: 1,
                name: "ES6",
                credit: 60
            },
            {
                id: 2,
                name: "Webpack",
                credit: 20,
                isSelected: false
            },
            {
                id: 3,
                name: "React",
                credit: 40
            }
        ]);
    });
});
