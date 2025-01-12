"use client"
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addCandidat } from '@/store/slices/candidats';

// Définition de l'interface pour les valeurs du formulaire
interface CandidatFormValues {
    nom: string;
    prenom: string;
    email: string;
    telephone?: string;
    cv?: string;
}


const CandidatForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values: CandidatFormValues) => {  // Ajout du type
    dispatch(addCandidat(values));
    form.resetFields();
    console.log('Candidat ajouté:', values);
  };
  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item label="Nom" name="nom" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Prénom" name="prenom" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Téléphone" name="telephone">
        <Input />
      </Form.Item>
       <Form.Item label="CV" name="cv">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Ajouter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CandidatForm;