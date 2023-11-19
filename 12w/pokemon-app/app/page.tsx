'use client'

import React, { useEffect, useState } from "react";
import Link from 'next/link';
import MainPage from '@/components/MainPage';


// import DetailPage from "../components/DetailPage";



export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
}

const fetchData = async (): Promise<Pokemon[]> => {
  const fetchedData: Pokemon[] = [];

  for (let id = 1; id <= 10; id++) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      fetchedData.push({
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types,
        // Add other properties as needed
      });
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  }

  return fetchedData.sort((a, b) => a.id - b.id);
};

export default function Home() {

  const [dataAll, setDataAll] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setDataAll(result);
    };

    fetchDataAsync();
  }, []);

  return (
    <div className="m-0 bg-black pt-10 text-center pd-[100px]">
      <nav className="flex h-16 items-center border-b-2 border-yellow-300">
        <h1 className="text-sandybrown ml-[340px] text-2xl font-bold no-underline">
          <Link href={"/"} className="text-yellow-300 no-underline visited:text-yellow-300 hover:text-yellow-300 active:text-yellow-300">Pokemon List</Link>
        </h1>
        <hr />
      </nav>

      <MainPage props={dataAll} />

    </div>
  )
}
