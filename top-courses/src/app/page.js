
"use client"
import React from 'react';
import { useEffect , useState} from 'react';
import { ToastContainer } from 'react-toastify';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import {apiUrl, filterData} from "./data"

const page = () => {

  const [courses, setCourses]= useState(null)

  const fetchApi=async ()=>{

    try {
      const response=await fetch(apiUrl);
      const output=await response.json();
      // console.log(output);
      setCourses(output.data);

    } catch (error) {
      toast.error("Something went wrong");
    }

  }

  
  useEffect(() => {

    fetchApi();
  
  }, [])
  

  return (
    <div> 
      <Navbar/>

      <Filter filterData={filterData}/>

      <Cards courses={courses}/>
    </div>
  )
}

export default page