import { Component } from "react";
import "./App.css";
import CouresForm from "./components/CourseForm";
import CourseList from "./components/CourseList";

class App extends Component {
  state = {
    courses: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    current: "",
  };
  //UpdateCourse
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };
  //AddCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses,
      current: "",
    });
  };

  //DeleteCourse
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses,
    });
  };

  //EditCourse

  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses,
    });
  };
  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return (
        <CourseList
          details={course}
          key={index}
          index={index}
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}
        />
      );
    });
    return (
      <section className="App">
        <h2>ADD YOUR SKILLS</h2>
        <CouresForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        <ul>{courseList}</ul>
      </section>
    );
  }
}
export default App;
