import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table } from "@/components/ui/table";

const fetchWhaleData = async () => {
  try {
    const response = await fetch("https://whale-tracker-backend.onrender.com/api/investments");
    if (!response.ok) throw new Error("Failed to fetch data");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

const WhaleTracker = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchWhaleData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">High Stakeholders Investments</h1>
      <Card>
        <CardContent>
          <Table>
            <thead>
              <tr>
                <th>Investor</th>
                <th>Stock</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.investor}</td>
                  <td>{item.stock}</td>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default WhaleTracker;
