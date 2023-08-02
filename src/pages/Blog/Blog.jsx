import React from "react";
import blogbar from "../../assets/image/blogbar.webp";
import searchIcon from "../../assets/image/searchIcon.webp";
import blogImage1 from "../../assets/image/blogImage1.webp";
import ceo from "../../assets/image/ceo.webp";
import Card from "../../components/BlogCard/bcard";
import blogData from "../../store/blogData";
import NewsLetter from "../../containers/NewsLetter";
import { Link } from "react-router-dom";

function Blog() {
  const blogCard = blogData.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="bg-black bg-[#110F0F] blogtitle"
    >
      <div className="grid justify-center p-6 text-center pt-[2%] ">
        <p className="text-lg md:text-xl lg:text-3xl m-4 text-[#9400D3] font-bold">
          Our Blog
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#D8BFD8]">
          Resouces and Insights
        </p>
        <p className="text-sm md:text-lg lg:text-xl mt-4 font-thin text-[#D8BFD8]">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>

      <div className="flex justify-center lg:m-6 items-center p-2 align-items items-center gap-5">
        <img src={blogImage1} alt="blogImage 1" className="md:m-2 m-3" />
        <div className="flex flex-col rounded-md md:backdrop-blur-md text-white font-medium max-w-[760px]">
          <p className="text-sm lg:text-lg m-2 border-2 p-2 max-w-[200px] items-center text-center rounded-lg mt-5">
            Ecosystem
          </p>
          <p className="text-lg md:text-xl lg:text-4xl m-2 font-semibold text-[#9400D3]">
            Introducing the captivating ecosystem of T-shirt design
          </p>
          <p className="font-light text-xs lg:text-lg m-2 text-[#D8BFD8]">
            Embark on an exciting journey to master the art of crafting mesmerizing
            T-shirt designs that ignite imaginations and steal glances. Prepare to
            unleash your creative prowess, armed with indispensable tips that will
            elevate your designs to new heights of excellence.
          </p>
          <div className="inline-flex md:mb-6 mt-4 align-items items-center">
            <img src={ceo} alt="ceo image" className="ml-4  h-[10%] w-[10%]" />
            <div className="flex flex-col m-6">
              <p className="font-bold text-white">AMAN JAIMAN</p>
              <p className="font-light text-slate-100">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* blog subsription */}
      <div className="blog flex justify-between mt-10 mb-10 border align-items items-center p-5 ml-60 mr-60 rounded-2xl blogtitle">
        <div className="text ml-2">
          <h1 className="text-xl p-2 text-[#D8BFD8]">
            {" "}
            <span className="font-semibold text-2xl text-[#9400D3]">
              Subscribe
            </span>{" "}
            to our blog!
          </h1>
          <p className="text-xl p-2 text-[#D8BFD8]">
            Get our fresh, new content straight to your inbox
          </p>
        </div>
        <div className="mr-2">
          <button className="border-2 rounded-3xl p-3 bg-gradient-to-r from-violet-600 to-purple-500 border-2 border-gray-400">
            Subscribe now
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-20 blogtitle">
        <div className="inline-flex bg-white shadow-md shadow-slate-600 rounded-xl w-[70%]">
          <img src={searchIcon} alt="search icon" className="p-3 w-12 lg:w-16" />
          <input
            className="w-[40vw] lg:w-[40vw] lg:h-16 rounded-xl p-2 outline-none"
            label="Search"
            placeholder="Search for articles"
            type="search"
          />
        </div>
      </div>
      <div className="grid justify-center p-4">
        <div className="inline-flex font-normal md:text-sm text-xs">
          <div className="w-auto h-auto text-slate-300 p-2 hover:bg-purple-300 hover:font-semibold hover:text-slate-800 border rounded-2xl border-slate-500 m-2">
            All posts
          </div>
          <div className="w-auto h-auto text-slate-300 p-3 hover:bg-purple-300 hover:font-semibold hover:text-slate-800 border rounded-2xl border-slate-500 m-2">
            T-shirt design tips
          </div>
          <div className="w-auto h-auto text-slate-300 p-3 hover:bg-purple-300 hover:font-semibold hover:text-slate-800 border rounded-2xl border-slate-500 m-2">
            Printing Techniques
          </div>
          <div className="w-auto h-auto text-slate-300 p-3 hover:bg-purple-300 hover:font-semibold hover:text-slate-800 border rounded-2xl border-slate-500 m-2">
            Fashion Trends
          </div>
        </div>
      </div>
      <div className="items-center">
        <p className="font-semibold text-2xl lg:text-4xl m-2 mb-4 mt-4 grid justify-center items-center text-[#9400D3]">
          Our Articles
        </p>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 w-9/12">{blogCard}</div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

export default Blog;
