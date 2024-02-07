import { selectCourse, unSelectCourse, fetchCourseSuccess } from "./courseActionCreators";

describe("courseActionCreators", () => {
  it("returns the correct action for selectCourse", () => {
    const action = selectCourse(1);
    expect(action).toEqual({ type: "SELECT_COURSE", index: 1 });
  });

  it("returns the correct action for unSelectCourse", () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({ type: "UNSELECT_COURSE", index: 1 });
  });
});