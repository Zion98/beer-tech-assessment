import React from "react";
import { Card } from "./Card";

type MoviesItem = {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  actors: string;
  plot: string;
  posterUrl: string;
};
export const List: React.FC<{
  title: string;
  moviesList: MoviesItem[];
  validateFunc: () => void;
}> = ({ title, moviesList, validateFunc}) => {
  const uuid = () => crypto.randomUUID();
  return (
    <>
      <h2 className="text-white text-2xl font-extralight mb-6">{title}</h2>
      <div className={`grid grid-cols-1 lg:grid-cols-5 gap-12`}>
        {moviesList.map((item: any, _index: any) => {
          return <Card key={uuid()} item={item} validateFunc={validateFunc} />;
        })}
      </div>
    </>
  );
};
