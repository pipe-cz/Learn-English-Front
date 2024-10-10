import { useEffect, useState } from "react";
import { getUser } from "../../../utils/users";
import { axiosInstance as axios } from "../../../config/axios";
import "./profile.css";

function Profile() {
  const [stats, setStats] = useState({ correct: 0, errors: 0 });
  const [user, setUser] = useState(getUser());

  const getStats = async () => {
    const response = await axios.get("/api/qualifications");
    if (response.status === 200) {
      const qualifications = response.data.data;
      console.log(qualifications);

      const totalCorrect = qualifications.reduce((sum, entry) => sum + entry.correct, 0);
      const totalErrors = qualifications.reduce((sum, entry) => sum + entry.errors, 0);

      setStats({ correct: totalCorrect, errors: totalErrors });
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  };

  const totalAttempts = stats.correct + stats.errors;
  const correctPercentage = totalAttempts ? (stats.correct / totalAttempts) * 100 : 0;
  const errorPercentage = totalAttempts ? (stats.errors / totalAttempts) * 100 : 0;

  useEffect(() => {
    getStats();
  }, []);

  return (
    <>
      <div className="profile-container">
      <h4 className="subtitle-profile">Perfil</h4>
       <div className="profile-content">
         <div className="profile-info">
           <div className="profile-circle">
             {getInitials(user.name)}
           </div>
           <h4>{user.name}</h4>
           <p>{user.email}</p>
         </div>
         <div className="profile-stats">
           <p><strong>Promedio general:</strong></p>
           <p>Aciertos: {correctPercentage.toFixed(2)}%</p>
           <p>Errores: {errorPercentage.toFixed(2)}%</p>
         </div>
       </div>
      </div>
    </>
  );
}

export default Profile;
