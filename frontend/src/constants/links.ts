import I from "@/components/icons/icons";

export const links = [
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
    path: "/cultos",
    name: "Cultos",
    icon: I.Book,
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
    path: "/",
    name: "Mais",
    icon: I.Add,
    type: "submenu",
    admin: false,
    children: [
      {
        path: "/contribua",
        name: "Contribua",
        icon: I.Add,
        type: "submenu",
        children: [
          {
            path: "/cultos",
            name: "Cultos",
            icon: I.Book,
            type: "link",
            admin: false,
          },
          {
            path: "/avisos",
            name: "Avisos",
            icon: I.Warning,
            type: "link",
            admin: false,
          },
        ],
      },
      {
        path: "/contato",
        name: "Contato",
        icon: I.Phone,
        type: "link",
      },
      {
        path: "/login",
        name: "Entrar",
        icon: I.Login,
        type: "link",
      },
    ],
  },
  {
    path: "/admin",
    name: "Administrador",
    icon: I.Person,
    type: "submenu",
    admin: true,
    children: [
      {
        path: "/boletins",
        name: "Boletins",
        icon: I.Paper,
        type: "link",
      },
      {
        path: "/warnings",
        name: "Avisos",
        icon: I.Warning,
        type: "link",
      },
      {
        path: "/upload",
        name: "Uploads",
        icon: I.Image,
        type: "link",
      },
    ],
  },
];
