"use client"
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { addCandidat } from '@/store/slices/candidats';
import { useTranslation } from 'react-i18next';
import '@/i18n';

// Définition de l'interface pour les valeurs du formulaire
interface CandidatFormValues {
    nom: string;
    prenom: string;
    email: string;
    telephone?: string;
    cv?: string;
}

const CandidatForm = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const onFinish = (values: CandidatFormValues) => {
        dispatch(addCandidat(values));
        form.resetFields();
        console.log('Candidat ajouté:', values);
    };
    return (
        <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item label={t("nom")} name="nom" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label={t("prenom")} name="prenom" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label={t("email")} name="email" rules={[{ required: true, type: 'email' }]}>
                <Input />
            </Form.Item>
            <Form.Item label={t("telephone")} name="telephone">
                <Input />
            </Form.Item>
            <Form.Item label={t("cv")} name="cv">
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    {t("ajouter")}
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CandidatForm;