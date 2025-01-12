"use client"
import React from 'react';
import { Card } from 'antd';
import { useSelector } from 'react-redux';

// Définition du type pour un candidat
interface Candidat {
    id: string;
    nom: string;
    prenom: string;
    email: string;
     telephone?: string;
    cv?: string;
}

// Définition du type pour l'état de redux
interface RootState {
    candidats: {
        candidats: Candidat[];
    };
}

// Définition du type pour params
interface Params {
    params: {
        id: string;
    };
}

const CandidatDetails = ({ params }: Params) => { // Ajout du type pour params
    const candidats = useSelector((state: RootState) => state.candidats.candidats); // Ajout du type pour state
    const candidat = candidats.find((candidat: Candidat) => candidat.id === params.id); // Ajout du type pour candidat

    if (!candidat) {
        return <div>Candidat non trouvé.</div>;
    }

    return (
        <Card title="Détails du candidat">
            <p>Nom: {candidat.nom}</p>
             <p>Prénom: {candidat.prenom}</p>
            <p>Email: {candidat.email}</p>
             <p>Téléphone: {candidat.telephone}</p>
             <p>CV: {candidat.cv}</p>
         </Card>
    );
};

export default CandidatDetails;