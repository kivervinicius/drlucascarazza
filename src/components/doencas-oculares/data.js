import React from "react";

const createLink = (href, label) => (
  <a href={href} title={label}>
    {label}
  </a>
);

export const catarataLente = [
  {
    id: 1,
    name: "Catarata e Cirurgia de Catarata",
    nikName: createLink("/catarata-cirurgia", "Catarata e Cirurgia de Catarata"),
  },
  {
    id: 2,
    name: "Como escolher sua lente para cirurgia de catarata",
    nikName: createLink(
      "/lentes",
      "Como escolher a lente intraocular para cirurgia de catarata mais adequada para o meu olho?"
    ),
  },
];

export const conjuntiva = [
  {
    id: 2.1,
    name: "Conjuntivites Infecciosas",
    nikName: createLink("/conjutivites-infecciosas", "Conjuntivites Infecciosas"),
  },
  {
    id: 2.2,
    name: "Conjuntivites Alérgicas",
    nikName: createLink("/conjutivites-alergicas", "Conjuntivites Alérgicas"),
  },
];

export const cornea = [
  {
    id: 8,
    name: "Ceratocone",
    nikName: createLink("/ceratocone", "Ceratocone"),
  },
];

export const refracao = [
  {
    id: 7,
    name: "Dicas para te ajudar a escolher seus óculos",
    nikName: createLink("/dica-oculos", "Como escolher seus óculos"),
  },
  {
    id: 7.1,
    name: "Cirurgia refrativa",
    nikName: createLink("/cirurgia-refrativa", "Cirurgia refrativa"),
  },
];

export const lentes = [
  {
    id: 11,
    name: "Instruções para uso e conservação das lentes de contato",
    nikName: createLink(
      "/como-usar-lentes/",
      "Instruções para uso e conservação das lentes de contato"
    ),
  },
];

export const oftalmoPediatria = [
  {
    id: 9,
    name: "Consultas oftalmológicas de rotina na infância",
    nikName: createLink(
      "/dica-pediatria/",
      "Consultas oftalmológicas de rotina na infância"
    ),
  },
  {
    id: 10,
    name: "Cor dos olhos",
    nikName: createLink(
      "/dica-pediatria-cor-olhos/",
      "Como vai ser formada a cor do olho do meu bebê?"
    ),
  },
];

export const olhoSeco = [
  {
    id: 12,
    name: "Olho Seco",
    nikName: createLink(
      "/blefarite-olhos-secos/",
      "Blefarite e Olho Seco"
    ),
  },
];

export const glaucoma = [
  {
    id: 13,
    name: "Glaucoma",
    nikName: createLink(
      "/glaucoma/",
      "Glaucoma"
    ),
  },
];