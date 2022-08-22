import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Disc from "./Disc.js"

function UserDiscs({user}) {
    const [userDiscs, setUserDiscs] = useState([])

    useEffect(() => {
        async function goGetEm() {
            await fetch(`/users/${user.id}`)
                .then((p) => p.json())
                .then((p) => {
                    setUserDiscs(p.discs)
                })
        }
        goGetEm()
    }, [user.id])

    return(
        <>
        {userDiscs.length>0? 
            <div>
                <h1>{user.name}'s Submitted Discs</h1>
                <h2>Feel free to post another one <Link to="/disc/new">here.</Link></h2>
                {userDiscs.map((disc) => (
                    <Disc key={disc.id} disc={disc} edit={true}/>
                ))}
            </div>
        :
            <div>
                <h2>You don't have any discs. You can write one <Link to="/disc/new">here.</Link></h2>
            </div>
        }

        </>
        
    )
}

export default UserDiscs;