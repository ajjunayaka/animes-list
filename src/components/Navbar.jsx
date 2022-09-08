import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
         <nav>
            <h1></h1>
            <input type="search" />
            <button>search</button>
            <Link to="/wishlist">wishlist</Link>
         </nav>

     );
}
 
export default Navbar;