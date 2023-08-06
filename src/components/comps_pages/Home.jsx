import AboutMe from "../comps_home/AboutMe";
import MainInfo from "../comps_home/MainInfo";
import MySkills from "../comps_home/MySkills";
import Companies from "../comps_home/Companies";
import Portfolio from "../comps_home/Portfolio";


export default function Home() {

    return (
        <>
            <AboutMe/>
            <MainInfo/>
            {/*<Hobbies/>*/}
            <Portfolio/>
            <Companies/>
            <MySkills/>

        </>
    )
}
