"use client";
import { SiTodoist } from "react-icons/si";
import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Button from "@/components/basic/Button";
import Edit from "./Edit";
import RemoveData from "@/components/forms/RemoveData";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import conf from "@/conf/config";

const page = () => {
  const [activitiesData, setActivitiesData] = useState(null);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [visibilty, setVisibilty] = useState(false);
  const [rmAlert, setRmAlert] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [rmDocId, setRmDocId] = useState(null);
  const collectionId = conf.collections.activities;

  let coCurricularData = [];
  let quotesData = [];

  useEffect(() => {
    appwriteService
      .getAllData(collectionId)
      .then((res) => {
        setActivitiesData(res.documents.reverse());
      })
      .catch((err) => {
        setError(err);
      });
    appwriteService
      .isLoggedIn()
      .then(setLoggedIn)
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (activitiesData) {
    coCurricularData = activitiesData.filter(
      (item) => item.type === "curricular"
    );
    quotesData = activitiesData.filter((item) => item.type === "quote");
  }

  const removeData = (docId) => {
    setRmDocId(docId);
    setRmAlert(true);
  };

  const updateData = (docId) => {
    setUpdateId(docId);
    setVisibilty(true);
  };

  return (
    <section className="py-10 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        {loggedIn && (
          <button className="w-56" onClick={() => setVisibilty(true)}>
            <Button>Add new co-curriculer activities or quote</Button>
          </button>
        )}
        <h2 className="text-3xl mt-20 font-bold">
          Extra-Curricular Activities
        </h2>
        {error && (
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        {loggedIn && visibilty && <Edit updateId={updateId} />}
        {loggedIn && rmAlert && (
          <RemoveData docId={rmDocId} clId={collectionId} />
        )}

        <div className="flex flex-col justify-center w-full mt-5 flex-wrap gap-2">
          {coCurricularData.map((activity, index) => (
            <div
              key={index}
              className="flex flex-wrap items-baseline gap-1 my-2"
            >
              <SiTodoist />
              <h3 className="text-sm  md:text-base lg:text-lg">
                {activity.date} -
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                {activity["desc-quote"]}
              </p>
              {loggedIn && (
                <div className="flex justify-end gap-3">
                  <button
                    className="text-red-500 font-bold border rounded hover:border-red-500 px-5"
                    onClick={() => removeData(activity.$id)}
                  >
                    Remove
                  </button>
                  <button
                    className="text-blue-500 font-bold px-5 border  rounded hover:border-blue-700 "
                    onClick={() => updateData(activity.$id)}
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <h2 className="text-3xl mt-20 font-bold">My Quote</h2>
        <ul className="flex flex-col w-full my-5 py-5">
          {quotesData.map((quote, index) => (
            <li key={index} className="my-1 flex flex-wrap items-center gap-3">
              <BsFillChatSquareQuoteFill />
              <strong>{quote["desc-quote"]}</strong>
              {loggedIn && (
                <div className="flex justify-end gap-3">
                  <button
                    className="text-red-500 font-bold border rounded hover:border-red-500 px-5"
                    onClick={() => removeData(quote.$id)}
                  >
                    Remove
                  </button>
                  <button
                    className="text-blue-500 font-bold px-5 border  rounded hover:border-blue-700 "
                    onClick={() => updateData(quote.$id)}
                  >
                    Update
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
