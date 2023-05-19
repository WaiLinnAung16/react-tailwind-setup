import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: "Monthly Follower",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Facebook",
      data: labels.map(() => faker.number.int({ min: 100, max: 1000 })),
      borderColor: "#3b5998",
      backgroundColor: "#3b5998",
    },
    {
      label: "Twitter",
      data: labels.map(() => faker.number.int({ min: 100, max: 1000 })),
      borderColor: "#00acee",
      backgroundColor: "#00acee",
    },
    {
      label: "Instagram",
      data: labels.map(() => faker.number.int({ min: 100, max: 1000 })),
      borderColor: "#fa7e1e",
      backgroundColor: "#fa7e1e",
    },
    {
      label: "YouTube",
      data: labels.map(() => faker.number.int({ min: 100, max: 1000 })),
      borderColor: "#c4302b",
      backgroundColor: "#c4302b",
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}
