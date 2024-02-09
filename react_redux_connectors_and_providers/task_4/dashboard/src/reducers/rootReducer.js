import { courseReducer, initialState as initialCourse } from "./courseReducer";
import { notificationReducer, initialState as initialNote} from "./notificationReducer";
import { uiReducer, initialState as initialUI } from "./uiReducer";
import { Map } from "immutable";

export const initialState = Map({
  course: initialCourse,
  notification: initialNote,
  ui: initialUI,
});

export const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
};
