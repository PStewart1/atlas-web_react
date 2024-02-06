import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Test utils.js file", () => {
  it("Test getFullYear", () => {
    expect(getFullYear()).toEqual(new Date().getFullYear());
  });

  it("Test getFooterCopy without argument", () => {
    expect(getFooterCopy()).toEqual("Holberton School main dashboard");
  });

  it("Test getFooterCopy with argument", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  it("Test getLatestNotification", () => {
    expect(getLatestNotification()).toEqual(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});


