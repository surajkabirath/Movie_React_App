import Pagination from "@material-ui/lab/Pagination";
import React from 'react'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});


const CustomPagination = ({ setPage, numOfPages = 100 }) => {
    const handlePagination = (page) =>{
        setPage(page)
        window.scroll(0,0)
    }
  return (
    <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
    }}
  >
    <ThemeProvider theme={darkTheme}>
      <Pagination 
        onChange={(e) => handlePagination(e.target.textContent)}
        count={numOfPages}
        color="secondary"
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
      />
    </ThemeProvider>
  </div>
  )
}

export default CustomPagination