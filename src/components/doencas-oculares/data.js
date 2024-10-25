import React from "react";

const link1 = <a href="/catarata-cirurgia">Catarata e Cirurgia de Catarata</a>;
const link2 = <a href='/lentes'>Como escolher a lente intraocular para cirurgia de catarata mais adequada para o meu olho?</a>;
const link3 = <a href='/dica-oculos'>Como escolher seus óculos</a>;
const link31 = <a href='/cirurgia-refrativa'>Cirurgia refrativa</a>;
const link4 = <a href='/ceratocone'>Ceratocone</a>;
const link21 = <a href='/conjutivites-infecciosas'>Conjuntivites Infecciosas</a>;
const link22 = <a href='/conjutivites-alergicas'>Conjuntivites Alérgicas</a>;
const dicaPediatria = <a href='/dica-pediatria/'>Consultas oftalmológicas de rotina na infância</a>;
const corOlhos = <a href='/dica-pediatria-cor-olhos/'>Como vai ser formada a cor do olho do meu bebê?</a>;
const preparandoUsarLentes = <a href='/como-usar-lentes/'>Preparando-se para utilizar as lentes</a>;

export const catarataLente = [
  { id: 1, name: 'Catarata', nikName: link1 },
  { id: 2, name: 'Como escolher sua lente para cirurgia de catarata', nikName: link2 },
];

export const conjuntiva = [
  { id: 2.1, name: 'Conjuntivites Infecciosas', nikName: link21 },
  { id: 2.2, name: 'Conjuntivites Alérgicas', nikName: link22 },
];

export const cornea = [
  { id: 8, name: 'Ceratocone', nikName: link4 },
];

export const refracao = [
  { id: 7, name: 'Dicas para te ajudar a escolher seus óculos', nikName: link3 },
  { id: 7.1, name: 'Cirurgia refrativa', nikName: link31 },
];

export const lentes = [
  { id: 11, name: 'Preparando-se para utilizar as lentes', nikName: preparandoUsarLentes },
];

export const oftalmoPediatria = [
  { id: 9, name: 'Consultas oftalmológicas de rotina na infância', nikName: dicaPediatria },
  { id: 10, name: 'Cor dos olhos', nikName: corOlhos },
];
