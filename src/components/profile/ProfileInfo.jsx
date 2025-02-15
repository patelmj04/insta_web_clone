import { Link } from "react-router-dom"
import { Settingmodal } from "./Settingmodal"
import { Followersmodal } from "./Followersmodal"
import { Followingmodal } from "./Followingmodal"


export const ProfileInfo = ()=>{
    return(
        <>
            <div className="profile-info px-2">
                <div className="d-flex align-items-center profile-info-1">
                    <h5 className="px-3 pt-2">itsmitbtw</h5>
                    <Link to="/accounts/edit" className="btn px-3 py-1">Edit profile</Link>
                    <svg style={{cursor:"pointer"}} data-bs-toggle="modal" data-bs-target="#settingModel" className="mx-3" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                </div>
                <div className="d-flex align-items-center profile-info-2 mt-4">
                    <div className="px-3">
                        <span className="numbers">0</span> 
                        <span className="px-2">posts</span>
                    </div>
                    <div className="px-3" data-bs-toggle="modal" data-bs-target="#followersModel">
                        <span className="numbers">590</span> 
                        <Link to="/its_mit_btw/followers" style={{color:"var(--text)",textDecoration:"none"}}><span className="px-2">followers</span></Link>
                    </div>
                    <div className="px-3" data-bs-toggle="modal" data-bs-target="#followingModel">
                        <span className="numbers">560</span> 
                        <Link to="/its_mit_btw/following" style={{color:"var(--text)",textDecoration:"none"}}><span className="px-2">following</span></Link>
                    </div>   
                </div>
                <div className="profile-info-3 mt-4 px-3">
                    <h6>Mit Patel at RCOEM, Nagpur 🇮🇳</h6>
                    <p>
                        <br />
                        Content creator <br />
                        The man behind <Link to="https://www.instagram.com/wecreate.__/">WeCreate</Link> <br />
                        📍Nagpur🇮🇳 <br /><br></br>
                        Website👇 <br />
                        <Link to="https://github.com/patelmj04" className="web-link">GitHub</Link>
                    </p>
                </div>
            </div>
            <Settingmodal />
            <Followersmodal />
            <Followingmodal />
        </>
    )
}
