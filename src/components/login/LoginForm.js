import React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

function LoginForm() {
    return (
        <div>
            <h1>Login here!</h1>
            <Link to={'/vuln'}>
                <Button variant="contained" color="secondary">
                    Login!
                </Button>
            </Link>
        </div>
    )
}

export default LoginForm