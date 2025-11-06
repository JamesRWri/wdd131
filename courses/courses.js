const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 25, days: "TTh", instructor: "Sis A" }
  ],
  changeEnrollment: function (sectionNum, add = true) {
    const index = this.sections.findIndex(s => s.sectionNum == sectionNum);
    if (index >= 0) {
      this.sections[index].enrolled += add ? 1 : -1;
      renderSections(this.sections);
    }
  }
};

function setCourseInfo(course) {
  document.querySelector("#courseName").textContent = course.name;
  document.querySelector("#courseCode").textContent = course.code;
}

function renderSections(sections) {
  const html = sections.map(s => `
    <tr>
      <td>${s.sectionNum}</td>
      <td>${s.roomNum}</td>
      <td>${s.enrolled}</td>
      <td>${s.days}</td>
      <td>${s.instructor}</td>
    </tr>`).join("");
  document.querySelector("#sections").innerHTML = html;
}

document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, true);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);
