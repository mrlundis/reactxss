/** @jsx createElement */
import { render } from 'inferno';
import Component from 'inferno-component';
import createElement from 'inferno-create-element';

class SploitList extends Component {
  render() {
    const testNodes = this.props.data.map(function(comment, index) {
      return (
        <div key={index}>
          "-------------------"<br />
          {comment.exploit}
          <input type="text" value={comment.exploit} />
        </div>
      );
    });
    return (
      <div className="commentList">
        {testNodes}
      </div>
    );
  }
}

class TestBox extends Component {
  state = { sploits: [] };

  componentDidMount() {
    fetch(this.props.url, { headers: { Accept: 'application/json' } })
      .then(res => res.json())
      .then(
        sploits => {
          this.setState({ sploits });
        },
        error => {
          console.error(this.props.url, err.toString());
        }
      );
  }

  render() {
    return (
      <div className="commentBox">
        <SploitList data={this.state.sploits} />
      </div>
    );
  }
}

render(<TestBox url="sploits.json" />, document.getElementById('content'));
