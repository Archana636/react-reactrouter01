import React from "react";
import { Link ,Route,useParams,useRouteMatch} from "react-router-dom";

const Item = () =>{
  const { name } = useParams();

  return (
    <div>
    <h3>{name}</h3>
    </div>
  );
}
const Category = () => {
  const { url, path } = useRouteMatch();

  return(
    <div>
    <ul>
    <li>
    <Link to={`${url}/Dress Materials`}>Dress Materials</Link>
    </li>
     <li>
     <Link to={`${url}/Sarees`}>Sarees</Link>
   </li>
     <li>
    <Link to={`${url}/footwear`}>Footwear</Link>
    </li>
    </ul>
    <Route path={`${path}/:name`}><Item/>
    </Route>
    </div>
  );
};
export default Category;