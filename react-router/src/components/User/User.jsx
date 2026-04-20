import React from "react";
import { useParams } from "react-router";

export default function User() {
    const id = useParams().id;
  return (
    <div className="p-4 text-2xl text-white bg-gray-600 text-center">User: {id} </div>
  )}