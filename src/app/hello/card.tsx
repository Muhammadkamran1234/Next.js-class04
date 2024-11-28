'use client'
import React from "react";
import Image from 'next/image';

interface Tcard {
    name: string;
    age: number;
    id: number;
    class: number;
    image: string;
}

export const Cards = (props: Tcard) => {
    return (
        <>
            <div id="studentCard" className="h-[230px] w-[400px] text-white/70 text-[40px] font-semibold bg-gray-400 flex items-center justify-center rounded-lg">
                
                <div className="h-[125px] w-[120px] border-2 border-black ml-8 relative">
                    <Image src={`${props.image}`} alt="Image Londing" layout="fill" objectFit="cover" />
                </div>
                <div id="detail" className=" h-[150px] w-[250px] leading-[35px] text-black text-[20px] font-bold pl-2 ml-5 pt-2">
                    <p>Name: {props.name}</p>
                    <p>Age: {props.age}</p>
                    <p>Roll No.: {props.id}</p>
                    <p>class: {props.class}</p>
                </div>
            </div>
        </>
    );
};