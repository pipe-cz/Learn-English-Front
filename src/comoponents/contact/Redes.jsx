import {
  Facebook,
  Whatsapp,
  Instagram,
  Github,
  TwitterX,
} from "react-bootstrap-icons"
function Redes() {
  return (
    <div className="redes-container">
    <a href="https://www.facebook.com/profile.php?id=100003058881384" target="_blank" rel="noreferrer">
      <Facebook size={35} />
    </a>
    <a href="https://wa.me/3134673612" target="_blank" rel="noreferrer">
      <Whatsapp size={35} />
    </a>
    <a href="https://www.instagram.com/radoom_z?igsh=M3N6ZTRpZHpwemRp" target="_blank" rel="noreferrer">
      <Instagram size={35} />
    </a>
    <a href="https://github.com/pipe-cz" target="_blank" rel="noreferrer">
      <Github size={35} />
    </a>
    <a href="https://twitter.com/_felipe29_1" target="_blank" rel="noreferrer">
      <TwitterX size={35} />
    </a>
  </div>
)
}

export default Redes