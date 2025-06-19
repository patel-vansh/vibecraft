import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "A", value1: 549, value2: 875 },
  { name: "B", value1: 278, value2: 617 },
  { name: "C", value1: 506 },
  { name: "D", value1: 36, value2: 185 },
  { name: "E", value1: 191 },
  { name: "F", value1: 122 },
  { name: "G", value1: 550, value2: 881 },
  { name: "H", value1: 539 },
  { name: "I", value1: 269 },
  { name: "J", value1: 29 },
  { name: "K", value1: 82 },
  { name: "L", value1: 44 },
  { name: "M", value1: 109 },
  { name: "N", value1: 106 },
  { name: "O", value1: 607 },
  { name: "P", value1: 528 },
];

export default function GraphSection() {
  return (
    <div style={{ width: "100%", height: "600px", marginTop: "2rem" }}>
      <h2 style={{ textAlign: "center", color: "#5b2c2c" }}>
        Embodied Carbon Emissions <br />
        <small style={{ fontWeight: "normal", color: "#888" }}>
            Intensity measured by kgCO<sub>2</sub>e/m²
        </small>
        </h2>

      <ResponsiveContainer width="95%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            label={{
              value: "Embodied carbon intensity (kgCO₂e/m²)",
              angle: -90,
              position: "insideLeft",
            }}
            domain={[0, 1200]}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="value1" fill="#bb6b6b">
            <LabelList dataKey="value1" position="top" />
          </Bar>
          <Bar dataKey="value2" fill="#5b2c2c">
            <LabelList dataKey="value2" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
