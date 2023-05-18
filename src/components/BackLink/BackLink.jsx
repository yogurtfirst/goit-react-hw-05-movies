import { useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
// import { AiFillCaretLeft } from "react-icons/ai";
import { Button } from './BackLink.styled'; 

const BackLink = () => {
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/movies');

    return (
        <Button> 
            <Link to={backLinkHref.current}> &#60; Go back</Link>
        </Button>
    );
};

export default BackLink;