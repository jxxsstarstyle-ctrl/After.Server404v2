// Home.jsx — Página inicial do ChatMatch
// Responsável por: entrada do usuário, seleção de apelido e interesses
// Rota: /
 
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
 
// Opções de interesses disponíveis para match
const INTEREST_OPTIONS = [
  'Música', 'Filmes', 'Jogos', 'Viagens', 'Tecnologia', 
  'Arte', 'Esportes', 'Culinária', 'Livros', 'Anime',
  'Moda', 'Fotografia', 'Natureza', 'Ciência', 'História'
];
 
export default function Home() {
  const [displayName, setDisplayName] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [step, setStep] = useState(1); // step 1: nome | step 2: interesses
  
  // Polling de usuários na fila de espera (a cada 5s)
  const { data: waitingUsers = [] } = useQuery({
    queryKey: ['waitingUsers'],
    queryFn: () => base44.entities.WaitingUser.list(),
    refetchInterval: 5000
  });
 
  const handleStart = () => {
    const url = createPageUrl('Chat') + 
      `?name=${encodeURIComponent(displayName)}&interests=${encodeURIComponent(selectedInterests.join(','))}`;
    window.location.href = url;
  };
  // ...render
}
