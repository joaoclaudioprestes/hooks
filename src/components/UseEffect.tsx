import { useState, useEffect } from "react";

const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [resourceType]);

  const handleResourceType = (resourceType: string) => {
    setResourceType(resourceType);
  };

  return (
    <div>
      <h1>UseEffect</h1>
      <h1>{resourceType}</h1>
      <div>
        <button onClick={() => handleResourceType("posts")}>Posts</button>
        <button onClick={() => handleResourceType("comments")}>Comments</button>
        <button onClick={() => handleResourceType("todos")}>Todos</button>
      </div>
      <div>
        {/* {data?.map((item: any) => (
          <p>{item.id}</p>
        ))} */}
      </div>
    </div>
  );
};

export default UseEffect;
