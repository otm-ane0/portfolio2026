export const PROJECT_META = [
  {
    id: 1,
    slug: "diabetes-classification",
    title: "Sales, Profit & Delivery Dashboard",
    category: "full-Stack Development",
    color: "bg-lime-400",
    img: "/dash.png",
  },
  {
    id: 2,
    slug: "leadsup",
    title: "ik Nettoyage",
    category: "ik Nettoyage — Cleaning Services Website Redesign",
    color: "bg-purple-400",
    img: "/nett.png",
  },
  {
    id: 3,
    slug: "polsekrembang",
    title: "Education Question Platform",
    category: "Full-stack Developer",
    color: "bg-orange-400",
    img: "/edu.png",
  },
  {
    id: 4,
    slug: "floodsegmen",
    title: "Inventory Management Application",
    category: "full-Stack Development",
    color: "bg-blue-400",
    img: "/ima.png",
  },
  {
    id: 5,
    slug: "qmeal",
    title: "Event Management Application",
    category: "Event & Planning System",
    color: "bg-pink-400",
    img: "/aui.png",
  },
  {
    id: 6,
    slug: "lostandfound",
    title: "exam preparation platform",
    category: "full-Stack Development",
    color: "bg-cyan-400",
    img: "/prep1.png",
  },
  {
    id: 7,
    slug: "imageclas",
    title: "Dawn Shopify WebSite",
    category: "full-Stack Development",
    color: "bg-green-400",
    img: "/h2o1.png",
  },
  {
    id: 8,
    slug: "financial-assistant-bot",
    title: "fashion e-commerce platform",
    category: "ecommerce website",
    color: "bg-amber-400",
    img: "/eco1.png",
  },
];

export const PROJECT_META_BY_SLUG = PROJECT_META.reduce((accumulator, item) => {
  accumulator[item.slug] = item;
  return accumulator;
}, {});
