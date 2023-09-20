import React from 'react'

const Cards = ({courses}) => {

  const allCourses=[];
  const getCourses=()=>{
    Object.values.forEach((courseCatagory) => {
      courseCatagory.forEach((courses)=>{
          allCourses.push(courses);
      })
    });

    return allCourses;
  }


  return (
    <>
     {
      getCourses().map((course)=>{
          return <Card/>
      })
    }
    </>
   
  )
}

export default Cards