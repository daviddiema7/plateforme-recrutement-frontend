"use client"
import React from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import Link from 'next/link';

// Définition du type pour un candidat
interface Candidat {
  id: string;
  nom: string;
  prenom: string;
  email: string;
}

// Définition du type pour l'état de redux
interface RootState {
  candidats: {
    candidats: Candidat[];
  };
}


const RecruteurListe = () => {
  // Ajout du type pour state
  const candidats = useSelector((state: RootState) => state.candidats.candidats);

  const columns = [
    {
      title: 'Nom',
      dataIndex: 'nom',
      key: 'nom',
     render: (text: string, record: Candidat) => ( // Ajout du type pour text et record
          <Link href={`/recruteur/${record.id}`}>{text}</Link>
        ),
    },
    {
      title: 'Prénom',
      dataIndex: 'prenom',
      key: 'prenom',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={candidats}
       rowKey={(record) => record.id} // Important pour les clés uniques
    />
  );
};
export default RecruteurListe;