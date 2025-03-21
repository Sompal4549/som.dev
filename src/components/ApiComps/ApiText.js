import { Heading, List, ListItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
async function fetchData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Network Error");
    }
    let data = await res.json();
    console.log(data);
    return await data;
  } catch (err) {
    console.error("error fetching data: ", err.message);
    throw new Error(err);
  }
}
function ApiText() {
  useEffect(() => {
    const posts = fetchData()
      .then((res) => res)
      .catch((err) => console.err(err));
    console.log(posts);
  }, []);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  return (
    <section>
      <h1>Why Error Handling Matters</h1>
      <div>
        <List>
          <ListItem>
            API calls can fail due to network issues or sever errors.
          </ListItem>
          <ListItem>
            Unhandled errors can crash applications or break UI functionality.
          </ListItem>
          <ListItem>
            Proper error handling improves user experience and debugging.
          </ListItem>
          <ListItem>
            Helps display meaningful messages instead of broken UI.
          </ListItem>
          <ListItem>
            Prevents performance issues caused by unnecessary re-renders.
          </ListItem>
        </List>
        <Heading>Posts Data</Heading>
        <List>
          {data.map((post, index) => {
            return <ListItem key={index}>{post.title}</ListItem>;
          })}
        </List>
        {error && <Text>{error}</Text>}
      </div>
    </section>
  );
}

export default ApiText;
