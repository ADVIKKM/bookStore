import React from "react";
import Cards from "./Cards";
// import list from "../../public/list.json"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Course = () => {
  const [book, setBook]= useState([])

  useEffect(() => {
    const getBook = async ()=> {
      try {
        const res =await axios.get('http://localhost:4001/book')
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, [])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-ceter justify-center text-center">
            <h1 className="text-2xl md:text-4xl">We're delighted to have you <span className="text-pink-500">here :)</span></h1>
            <p className="mt-12">Explore a curated collection of enriching courses designed to ignite your passion for learning. Whether you're diving into fiction writing, mastering digital marketing, or sharpening your coding skills, our bookstore offers a range of free and premium courses to help you grow at your own pace. Discover expert-led content, practical projects, and engaging reads that turn learning into a lifelong adventure.</p>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
            {
                book.map((item) => (
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
        
      </div>
    </>
  );
};

export default Course;
