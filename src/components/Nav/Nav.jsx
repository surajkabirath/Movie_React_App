import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";
import {MdMovieFilter} from "react-icons/md"
import {CgProfile} from "react-icons/cg"
import {RiComputerFill} from "react-icons/ri"
import {AiFillHome} from "react-icons/ai"
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#092b4c",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
    } else if (value === 1) {
      navigate("/movies");
    } else if (value === 2) {
      navigate("/series");
    } else if (value === 3) {
      navigate("/search");
    }
    else if (value === 4) {
      navigate("/about");
    }
  }, [value,navigate]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "#fff" ,}}
       
        icon={<AiFillHome style={{fontWeight:1000 ,fontSize:30}}/>}
      />
      <BottomNavigationAction
        style={{ color: "#fff" ,fontWeight:"800" }}
      
        icon={<MdMovieFilter style={{fontWeight:1000 ,fontSize:30}}/>}
      />
      <BottomNavigationAction
        style={{ color: "#fff" ,fontWeight:"800" }}
       
        icon={<RiComputerFill style={{fontWeight:1000 ,fontSize:30}}/>}
      />
      <BottomNavigationAction
        style={{ color: "#fff" ,fontWeight:"800"}}
        
        icon={<SearchIcon style={{fontWeight:1000 ,fontSize:30}}/>}
      />
      <BottomNavigationAction
        style={{ color: "#fff" ,fontWeight:"800"}}
        
        icon={<CgProfile style={{fontWeight:1000 ,fontSize:30, }}/>}
      />
    </BottomNavigation>
  );
}
// surajkabirath
// kabirath!@#$