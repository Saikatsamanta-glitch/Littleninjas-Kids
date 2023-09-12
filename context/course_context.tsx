"use client";
import { createContext, useEffect,useState } from "react";
export const Course_context = createContext([]);
import axios from "axios";
export const Course_Context = ({
        children,
}: {
        children: React.ReactNode;
}) => {
        const [data,setData] =useState([]);
        useEffect(() => {
                (async function () {
                        const res = await axios('api/course')
                        // console.log(res);
                        setData(res.data);
                })()
        }, [])
        return (
                <Course_context.Provider value={ data }>
                        {children}
                </Course_context.Provider>
        );
};
