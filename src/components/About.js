import User from "./User";
import UserClass from "./UsersClass";

const About = ()=>{
return (
    <div>
        <h1>About</h1>
        <h2>This is Namaste React series</h2>
        <User name={"Pallavi(function)"} location={"Mumbai"} contact={"pallavi@abc.com"}/>

        <UserClass name={"Pallavi"} location={"Mumbai"} contact={"pallavi@abc.com"}/>
    </div>
)
}

export default About