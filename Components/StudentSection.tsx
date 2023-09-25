'use client';
import React from 'react';
import './style/studentsection.css';
import   CountUp  from 'react-countup';

const StudentSection = () => {
        const studentObj = [
                {
                        title: "Students taught",
                        count: 15000,
                },
                {
                        title: "classes taken",
                        count: 50000,
                },
                {
                        title: "registered mentors",
                        count: 500,
                },
                {
                        title: "projects created",
                        count: 7500,
                },
                {
                        title: "country presence",
                        count: 15
                },
        ];
        return (
                <div className="md:mx-8 h-auto flex items-center justify-evenly md:scale-100 scale-90 md:py-6 mt-16 flex-wrap ">
                        {studentObj.map((val, i) => {
                                return (
                                        <div key={val.title} className='flex items-center justify-evenly md:gap-5 m-2'>
                                                <div className=" center_all  h-[80px] w-auto  font-[500]  flex-col" >
                                                        <div className="text-[rgb(105,105,105)] md:text-3xl text-xl flex" >
                                                                <p><CountUp end={val.count} duration={3.2} /> </p>  <span>+</span>
                                                        </div>
                                                        <div className="text-[rgb(255,132,126)] md:text-2xl text-lg" > {val.title} </div>
                                                </div>
                                                {
                                                        i != studentObj.length - 1 && <i className="fi fi-sr-tally-1 text-5xl hidden md:block text-slate-600"></i>
                                                }
                                        </div>
                                );
                        })}
                </div>
        );
};

export default StudentSection;
