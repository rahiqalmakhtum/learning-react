import React, { use, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData();
    
    // const [data, setData]  = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/rahiqalmakhtum")
    //     .then((response) => response.json())
    //     .then((Data) => {
    //         console.log(Data);
    //         setData(Data);
    //     });
    // }, []);
    
  return (
    <div className="p-4 text-2xl text-white bg-gray-600 text-center">
      GitHub followers: {data.followers}
      <img src={data.avatar_url} alt="GitHub Profile" width={300}/>
    </div>
  );
}

export const GithubLoader = async () => {
    const response = await fetch("https://api.github.com/users/rahiqalmakhtum");
    return response.json();
}