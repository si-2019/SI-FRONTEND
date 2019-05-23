import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { name: "2016/2017", prosjek: 7.8 },
  { name: "2017/2018", prosjek: 9 },
  { name: "2018/2019", prosjek: 6.5 }
];

class Chart extends Component {
  render() {
    return (
      <BarChart
        width={600}
        height={300}
        data={this.props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="godina" />
        <YAxis type="number" domain={[0, 10]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="prosjek" fill="#8884d8" />
      </BarChart>
    );
  }
}

export default Chart;
