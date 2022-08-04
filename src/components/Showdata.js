import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {
  PostAction,
  deletePostAction,
  UpdateAction,
} from "../redux/actions/PostAction";

class Showdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      updateId: "",
      data: [],

      bu: false,
    };
  }

  nameHandler = (e) => {
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  };
  descHandler = (e) => {
    console.log(e.target.value);
    this.setState({ desc: e.target.value });
  };
  submitForm = () => {
    console.log(this.props.data.length);
    const newObj = {};
    newObj.id = this.props.data.length + 1;
    newObj.name = this.state.name;
    newObj.desc = this.state.desc;
    console.log(newObj);
    console.log(4545, this.props.addMyData);
    this.props.addMyData(newObj);
    console.log(newObj);
    this.setState({ name: "", desc: "" });
  };
  deleteData = (id) => {
    alert(id);
    // console.log("delete_id_func", this.props.deleteIdNumber());
    this.props.deleteMyDataByID(id);
  };
  editPost = (updateid, name, desc) => {
    console.log("nammeeeeeeeeeee", name);
    console.log("desccccccccc", desc);
    console.log("iiiiddddddddddd", updateid);
    this.setState({ bu: true });

    this.setState({ updateId: updateid, name: name, desc: desc });
  };
  updateData = () => {
    const neobj = {
      id: this.state.updateId,
      name: this.state.name,
      desc: this.state.desc,
    };
    this.props.UpdateMyData(neobj);
    this.setState({ bu: false });
    this.setState({ updateId: "", name: "", desc: "" });
  };
  render() {
    return (
      <>
        <h1>Showdata Table</h1>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th
                colspan="5"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.nameHandler}
                  placeholder="Enter name"
                />
                <input
                  type="text"
                  value={this.state.desc}
                  onChange={this.descHandler}
                  placeholder="Enter Description"
                />

                {this.state.bu ? (
                  <button onClick={this.updateData}>update</button>
                ) : (
                  <button onClick={this.submitForm}>submit</button>
                )}
              </th>
            </tr>
            <tr>
              <th>
                <h4>ID</h4>
              </th>
              <th>
                <h4> Name</h4>
              </th>
              <th>
                <h4> Description</h4>
              </th>
              <th colspan="2">
                {" "}
                <center>
                  {" "}
                  <h4>Action</h4>{" "}
                </center>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.data && this.props.data.length > 0
              ? this.props.data.map((ele, i) => {
                  return (
                    <>
                      <tr>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.desc}</td>
                        <td>
                          <center>
                            <Button
                              onClick={() =>
                                this.editPost(ele.id, ele.name, ele.desc)
                              }
                              variant="warning"
                            >
                              Edit
                            </Button>
                          </center>
                        </td>
                        <td>
                          <center>
                            {" "}
                            <Button
                              onClick={() => this.deleteData(ele.id)}
                              variant="danger"
                            >
                              Delete
                            </Button>
                          </center>
                        </td>
                      </tr>
                    </>
                  );
                })
              : "Loading"}
          </tbody>
        </Table>
      </>
    );
  }
}
function mapStateToProps(state) {
  return { data: state.post.postData };
}
function mapGetDataToProps(dispatch) {
  return {
    addMyData: (newData) => dispatch(PostAction(newData)),
    deleteMyDataByID: (id) => dispatch(deletePostAction(id)),
    UpdateMyData: (obj) => dispatch(UpdateAction(obj)),
  };
}

export default connect(mapStateToProps, mapGetDataToProps)(Showdata);
