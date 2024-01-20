import * as React from "react";
import GetTodos from "@/api/getTodos";
import { useSearchParams } from "next/navigation";
import Box from "@mui/material/Box";
import Link from "next/link";

global.React = React;

const Test = async () => {
  const data = await GetTodos(useSearchParams.toString() || ``);
  // console.log(data);
  return (
    <>
      {data !== undefined &&
        data?.length > 0 &&
        data?.map((elem) => (
          <Box key={elem.id}>
            <Link href={`/starred/${elem.id}`}>{elem.title}</Link>
          </Box>
        ))}
    </>
  );
};
export default Test;
