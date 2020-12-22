import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Landing = () => {
    // let history = useHistory();

    // const handleClick = () => {
    //     alert("yay");
    //     history.push("/login");
    // };

    return (
        <div id="content-wrapper" align="center">
            <h1>Help Who Needs</h1>
            <p>
                Our TechForGood project aims to match a volunteer with a vulnerable
                person who is shielding in these unprecedented times. Hence our
                application is called HelpWhoNeeds. The app will aim to match a
                volunteer with a vulnerable person in their immediate local area helping
                with chores such as shopping, GP visits, prescriptions, dog walking or
                just some social contact with the appropriate measures in place. We hope
                this app brings some comfort and relief to the users with a sense of
                moral and social obligation.
    </p>
    <Link to={'/login'}>
              <Button
                variant="outlined"
                color="default"
                // onClick={() => {
                //     alert("This works on every component!"); }}
                
            >
                I need Help
    </Button>
    </Link>
    
            <Button variant="outlined" color="default" onClick={console.log('Hi!')}>
                I can Help
    </Button>
        </div>
    );
};

export default Landing;
