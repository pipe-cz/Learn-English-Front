import google from "../assets/buttons/google.svg"
import facebook from "../assets/buttons/facebook.svg"
// import AuthSocialMedia from "../Auth/AuthSocialMedia"

// interface IProps {
//    text: string
// }

function LoginSocialMedia({text}) {
   //const { handleSocialMediaAuth } = AuthSocialMedia()

   return (
      <>
         <button className="btn btn-default borderBtn googleBtn">
            <div
               className="d-flex justify-content-center align-items-center"
               style={{ gap: "10px" }}
            >
               <img width="20" src={google} alt="google" />{" "}
               <span>{text} Google</span>
            </div>
         </button>

         <button
            className="btn btn-default borderBtn googleBtn"
            id="facebook"
            // onClick={() => handleSocialMediaAuth("facebook")}
         >
            <div
               className="d-flex justify-content-center align-items-center"
               style={{ gap: "10px" }}
            >
               <img width="20" src={facebook} alt="facebook" />{" "}
               <span> {text} Facebook</span>
            </div>
         </button>
      </>
   )
}

export default LoginSocialMedia
