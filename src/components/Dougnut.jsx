import { PieChart, Pie, Cell } from "recharts";
import {motion} from 'motion/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DataDescList from "./DataDescList";

const Dougnut = () => {
  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
  ];

  const colors = ["#8884d8", "#82ca9d", "#ff7300"];
  const total = data02.reduce((acc, curr) => acc + curr.value, 0);



  return (
    <div className="flex items-center justify-center mt-10">
      <Card className="h-auto w-[400px]">
        <CardHeader>
          <CardTitle>Donut Chart</CardTitle>
          <CardDescription>Aug 2024 - Sept 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={90}
              fill="#82ca9d"
              label
            >
              {data02.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <text

              x="50%"
              y="43%" 
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={24}
              fill="#333"
            >
              Total
            </text>
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={36}
                fill="#333"
              >
                {total}
              </text>
           
          </PieChart>
        </CardContent>
        <CardFooter className="flex flex-col">
          <DataDescList
            title="Dataset1"
            area= "45.54%"
            value= {data02[0].value}
          />
       <div className="border-b border-gray-300 my-2 w-full"></div>
          <DataDescList
            title="Dataset2"
            area= "30.54%"
            value= {data02[1].value}
          />
          <div className="border-b border-gray-300 my-2 w-full "></div>
          <DataDescList
            title="Dataset1"
            area= "20.54%"
            value= {data02[2].value}
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dougnut;
