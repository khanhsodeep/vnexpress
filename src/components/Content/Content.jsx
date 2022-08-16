import React, { useState, useEffect } from "react";
import {ContentData} from "./Contentdata";
import { ContentData2 } from "./ContentData2";
import { ContentData3 } from "./Contentdata3";
const Content = () => {
  const axios = require("axios");

  // because newsapi is only used on localhost, I can't use it on Github pages. i created 3 fake API Contentdata,Contentdata2,Contentdata3 will display my content on Github pages
  const [data, setData] = useState([]);
  useEffect(() => {
    const handleGetData = async () => {
      try {
        const resp = await axios.get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5e233e96c6694c4cae038354f7406a95"
        );
        setData(resp.data.articles);
      } catch (err) {
        console.log(err);
      }
    };
    handleGetData();
  }, []);
  return (
    <>
      <div className="flex flex-col m-4 lg:hidden">
        {ContentData.map((acticle, index) => {
          return (
            <div
              key={index}
              className="flex flex-col border-b
                    md:grid md:grid-cols-2
                    "
            >
              <a className="text-xl font-bold dark:text-white my-3" href="">
                {acticle.title}
              </a>
              <img
                src={acticle.urlToImage}
                alt=""
                className="md:row-span-2 md:mt-5
                    "
              />
              <a className="text-[17px]  dark:text-white  mt-3 " href="">
                {acticle.description}
              </a>
              <a className="text-14 dark:text-gray-400 font-bold mb-3" href="">
                Tác giả {acticle.author}
              </a>
            </div>
          );
        })}
      </div>
      <div className="hidden container mx-auto lg:flex mt-4  px-[10px]">
        <div className="border-r w-[200%]">
          <h1 className="text-3xl font-bold dark:text-gray-100">
            TIN TỨC MỚI NHẤT
          </h1>
          {ContentData2.map((article, index) => {
            return (
              <div
                key={index}
                className="dark:text-gray-200 border-b last:border-none mr-20 mb-10 pb-4"
              >
                <h1 className="font-bold text-xl">{article.title}</h1>
                <img className="w-[90%]" src={article.urlToImage} alt="" />
                <p className="text-base">{article.description}</p>
                <h6 className="text-sm dark:text-gray-400">
                  Tác giả: {article.author}
                </h6>
              </div>
            );
          })}
        </div>
        <div className="">
          <h1 className="text-3xl font-bold dark:text-gray-100 pl-20">
            CÁC TIN TỨC LIÊN QUAN
          </h1>
          {ContentData3.map((article, index) => {
            return (
              <div className="flex pl-20">
                <div
                  key={index}
                  className="p-4 dark:text-gray-200 border-b  mr-20 mb-10"
                >
                  <div>
                  <img className=" mr-4" src={article.urlToImage} alt="" />
                  <h1 className="font-bold mb-2 text-base">{article.title}</h1>
                  </div>
                  <p className="">{article.description}</p>
                    <h6 className="text-sm dark:text-gray-400">
                      Tác giả: {article.author}
                    </h6>
                  <div>
                   
                  </div>
                </div>
                <div
                  key={index}
                  className="p-4  dark:text-gray-200 border-b  mr-20 mb-10"
                >
                  <img className=" mr-4 " src={article.urlToImage} alt="" />
                  <div>
                    <h1 className="font-bold mb-2 text-base">{article.title}</h1>
                    <p className="">{article.description}</p>
                    <h6 className="text-sm dark:text-gray-400">
                      Tác giả: {article.author}
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Content;
