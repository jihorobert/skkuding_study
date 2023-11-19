import { Pokemon } from "@/app/page";
import React from "react";
import MainDetail from "./MainDetail";


interface Props {
  props: Pokemon[]
}


export default function MainPage({ props }: Props) {
  return (
    <div className="flex flex-wrap justify-center pb-[100px] pl-[250px] pr-[250px]">
      {props.map((a, i) => (
        <MainDetail data={a}></MainDetail>
      ))}
    </div>
  )
}

