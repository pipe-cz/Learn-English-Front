import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { axiosInstance as axios } from '../../config/axios';
import './stats.css';

function BasicExample() {
  const [stats, setStats] = useState([]);

  const getStats = async () => {
    const response = await axios.get('/api/qualifications');
    if (response.status === 200) {
      setStats(response.data.data);
    }
    console.log(response.data.data);
  };

  useEffect(() => {
    getStats();
  }, []);

  const calculateAverages = (data) => {
    const totalCorrect = data.reduce((acc, curr) => acc + curr.correct, 0);
    const totalErrors = data.reduce((acc, curr) => acc + curr.errors, 0);
    const totalQuestions = totalCorrect + totalErrors;

    return {
      averageCorrect: ((totalCorrect / totalQuestions) * 100).toFixed(2),
      averageErrors: ((totalErrors / totalQuestions) * 100).toFixed(2),
    };
  };

  const averages = calculateAverages(stats);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Fecha</th>
          <th>Correctas</th>
          <th>Errores</th>
        </tr>
      </thead>
      <tbody>
        {stats.map((attempt, index) => (
          <tr key={attempt.id}>
            <th>{index + 1}</th>
            <td>{new Date(attempt.created_at).toLocaleString()}</td>
            <td>{attempt.correct}</td>
            <td>{attempt.errors}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <th>Promedios</th>
          <td>{averages.averageCorrect}%</td>
          <td>{averages.averageErrors}%</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;
