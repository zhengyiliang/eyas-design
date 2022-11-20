import React from 'react';
import { Select, Radio } from 'eyas-ui';

const Option = Select.Option;
const RadioGroup = Radio.Group;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Wuhan'];

class App extends React.Component {
  state = {
    value: 'default',
  };

  render() {
    return (
      <div>
        <RadioGroup
          type="button"
          name="size"
          value={this.state.value}
          onChange={(value) => {
            this.setState({
              value,
            });
          }}
          style={{ marginBottom: 20, borderRadius: 4 }}
        >
          <Radio value="mini">mini</Radio>
          <Radio value="small">small</Radio>
          <Radio value="default">default</Radio>
          <Radio value="large">large</Radio>
        </RadioGroup>
        <div>
          <Select
            size={this.state.value}
            placeholder="Please select"
            showSearch
            style={{ width: 345, marginBottom: 20 }}
          >
            {options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
          <br />
          <Select
            mode={'multiple'}
            size={this.state.value}
            placeholder="Please select"
            showSearch
            style={{ width: 345 }}
          >
            {options.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </div>
      </div>
    );
  }
}

export default App;
