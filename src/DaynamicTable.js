import React from "react";

class DaynamicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ firstName: "", lastName: "" }],
      submitList: []
    };
  }

  addClick = () => {
    this.setState(prevState => ({
      users: [...prevState.users, { firstName: "", lastName: "" }]
    }));
  };

  handleChange = (i, e) => {
    const { name, value } = e.target;
    let users = [...this.state.users];
    users[i] = { ...users[i], [name]: value };
    this.setState({ users });
  };

  removeClick = i => {
    let users = [...this.state.users];
    users.splice(i, 1);
    this.setState({ users });
  };

  handleSubmit = () => {
    alert("A name was submitted: " + JSON.stringify(this.state.users));
    this.setState({ submitList: this.state.users });
  };

  render() {
    const { users, submitList } = this.state;
    return (
      <div>
        {users.map((el, i) => (
          <div key={i}>
            <input
              placeholder={`First Name ${i + 1}`}
              name="firstName"
              value={el.firstName || ""}
              onChange={e => this.handleChange(i, e)}
            />

            <input
              placeholder={`Last Name ${i + 1}`}
              name="lastName"
              value={el.lastName || ""}
              onChange={e => this.handleChange(i, e)}
            />
            <button onClick={() => this.removeClick(i)}>Remove</button>
          </div>
        ))}
        <hr />
        <button onClick={this.addClick}>Add</button>
        <button onClick={this.handleSubmit}>Submit</button>
        <hr />
        {submitList.length > 0 && (
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
            {submitList.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{item.firstName}</th>
                  <th>{item.lastName}</th>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    );
  }
}
export default DaynamicTable;
