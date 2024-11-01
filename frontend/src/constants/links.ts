import I from "@/components/icons/icons";

export const links = [
  {
    path: "",
    name: "Administrador",
    icon: I.Person,
    type: "submenu",
    admin: true,
    children: [
      {
        path: "boletins",
        name: "Boletins",
        icon: I.Paper,
        type: "submenu",
        admin: true,
        children: [
          {
            path: "",
            name: "Modificar",
            icon: I.Pencil,
            type: "link",
            admin: true,
          },
          {
            path: "create",
            name: "Criar novo",
            icon: I.Add,
            type: "link",
            admin: true,
          },
        ],
      },
      {
        path: "avisos",
        name: "Avisos",
        icon: I.Warning,
        type: "submenu",
        admin: true,
        children: [
          {
            path: "",
            name: "Modificar",
            icon: I.Pencil,
            type: "link",
            admin: true,
          },
          {
            path: "create",
            name: "Criar novo",
            icon: I.Add,
            type: "link",
            admin: true,
          },
        ],
      },
      {
        path: "uploads",
        name: "Uploads",
        icon: I.Image,
        type: "submenu",
        admin: true,
        children: [
          {
            path: "",
            name: "Modificar",
            icon: I.Pencil,
            type: "link",
            admin: true,
          },
          {
            path: "create",
            name: "Criar novo",
            icon: I.Add,
            type: "link",
            admin: true,
          },
        ],
      },
    ],
  },
  {
    path: "",
    name: "Principal",
    icon: I.Home,
    type: "link",
    admin: false,
  },
  {
    path: "/boletins",
    name: "Boletins",
    icon: I.Paper,
    type: "link",
    admin: false,
  },
  {
    path: "/warnings",
    name: "Avisos",
    icon: I.Warning,
    type: "link",
    admin: false,
  },
  {
    path: "",
    name: "Mais",
    icon: I.Add,
    type: "submenu",
    admin: false,
    children: [
      {
        path: "/cultos",
        name: "Cultos",
        icon: I.Book,
        type: "link",
        admin: false,
      },
      {
        path: "contribua",
        name: "Contribua",
        icon: I.Add,
        type: "link",
      },
      {
        path: "contato",
        name: "Contato",
        icon: I.Phone,
        type: "link",
      },
      {
        path: "login",
        name: "Entrar",
        icon: I.Login,
        type: "link",
      },
    ],
  },
];
