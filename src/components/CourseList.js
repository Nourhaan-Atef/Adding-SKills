import React, { Component } from "react";

class CourseList extends Component {
  state = {
    isEdit: false,
  };
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button
          onClick={() => {
            this.toggleState();
          }}
        >
          Edit Skill
        </button>
        <button
          onClick={() => {
            this.props.deleteCourse(this.props.index);
          }}
        >
          Delete Skill
        </button>
      </li>
    );
  };

  //ToggleState
  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  //UpdateCourseItem
  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
  };
  //RenderUpdateForm
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.details.name}
        />
        <button>Update Skill</button>
      </form>
    );
  };
  render() {
    let { isEdit } = this.state;
    return <>{isEdit ? this.renderUpdateForm() : this.renderCourse()}</>;
  }
}

export default CourseList;
