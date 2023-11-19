'use client'

import { Pokemon } from "@/app/page";
import React from "react";
// import router from "next/router";
import { useRouter } from "next/navigation";
import Image from "next/image";


type Props = {
    data: Pokemon
}
export default function MainDetail({ data }: Props) {
    const router = useRouter()
    console.log(router)
    return (
        <div
            className="flex justify-start items-center h-[110px] w-1/3 border border-yellow-300 rounded-[10px] m-[20px]"
            onClick={() =>
                router.push(`/detail/${data.id}`)
            }
        >
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id
                    }.png`}
                alt={`${data.name}'s picture`}
                width={70}
                height={100}
                className="w-3/20 m-[10px] h-3/5 items-center"
            />
            <div>
                <div>
                    <h2 className="my-[2px] text-white">{data.name}</h2>
                    <p className="my-[2px] font-thin text-gray-300">
                        Height: {data.height} dm
                    </p>
                    <p className="my-[2px] font-thin text-gray-300">
                        Weight: {data.weight} hg
                    </p>
                    <p className="my-[2px] font-thin text-gray-300">
                        Types: {data.types.map((type) => type.type.name)}
                    </p>
                </div>
            </div>
        </div>
    )
}

{/* <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          props.i + 1
        }.png`}
        alt={props.a.name}
        className="w-3/20 m-[10px] h-3/5 items-center"
      /> */}