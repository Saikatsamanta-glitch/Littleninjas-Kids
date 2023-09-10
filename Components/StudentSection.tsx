import './style/studentsection.css';
import CountUp from 'react-countup/build/CountUp';
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
      title: "classes taken",
      count: 500,
    },
    {
      title: "classes taken",
      count: 7500,
    },
    {
      title: "classes taken",
      count: 15,
    },
  ];
  return (
    <div className=" h-auto flex items-center justify-evenly bg-[rgb(255,246,222)] md:py-6 mt-16 flex-wrap ">
      {studentObj.map((val, i) => {
        return (
                <>

          <div key={val.title} className=" center_all  h-[80px] w-auto  font-[500]  flex-col">
            <div className="text-[rgb(105,105,105)] md:text-3xl text-xl" >
                {val.count} <span>+</span>
            </div>
            <div className="text-[rgb(255,132,126)] md:text-2xl text-lg"> {val.title} </div>
          </div>
          
                {
                     i!=studentObj.length-1 &&  <i className="fi fi-sr-tally-1 text-5xl hidden md:block text-slate-600"></i> 
                }
          
                
          
          </>
        );
      })}
    </div>
  );
};

export default StudentSection;
{
  /* 
<div className=' w-[100px] border-2 border-[rgb(148,148,148)] rotate-[-89.48deg] h-auto md:block hidden'></div>
*/
}
