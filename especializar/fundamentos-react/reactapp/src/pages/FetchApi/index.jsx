import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import { List } from '../../components/List';

export function FetchApi() {
  const [students, setStudents] = useState([]);

  async function fetchRepos() {
    await axios.get(
      "https://api.github.com/users/josuelustosadev/repos"
    ).then((res) => {
     setStudents(res.data);
    }).catch(err => console.log(err.response.data))
  }

  useEffect(()=>{
    fetchRepos();
  }, []);
  

  return (
    <div className="container">
      <h1>Lista de Repositórios </h1>

      {
        students.map((student) => <List key={student.id} name={student.name} url={student.git_url}  />)
      }
    </div>
  )
}