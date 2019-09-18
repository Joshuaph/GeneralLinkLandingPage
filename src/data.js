const DATA = [
  {
    title: "HVFR Catalog",
    category: "Sportex Catalogs",
    resource: "http://online.fliphtml5.com/ptuo/rujx/",
    displaytitle: "HVFR Catalog"
  },
  {
    title: "Superior Catalog",
    category: "Sportex Catalogs",
    resource: "http://fliphtml5.com/ptuo/qrcf/",
    displaytitle: "Who We Are"
  },
  {
    title: "Superior Fall/Winter 18",
    category: "Sportex Catalogs",
    resource: "http://online.fliphtml5.com/ptuo/tyll/",
    displaytitle: "Fall/Winter Product Guide"
  },
  {
    title: "Signs, Banners, Decals",
    category: "Sportex Catalogs",
    resource: "https://www.sportexsafety.com/links/files/Sportex_SignsBannersDecals-Catalog-2017.pdf",
    displaytitle: "Signs, Banners, & Decals"
  },
  {
    title: "Hi-Vis PPE & Safety Recognition",
    category: "Sportex Catalogs",
    resource: "http://fliphtml5.com/ptuo/masb",
    displaytitle: "Hi-Vis PPE & Safety Recognition"
  },
  {
    title: "BNSF",
    category: "Sportex Catalogs",
    img: "images/bnsf-logo.jpg",
    resource: "https://www.sportexsafety.com/links/files/BNSF-workwear-guide-2019.pdf",
    displaytitle: "PPE/Workwear"
  },
  {
    title: "Watco",
    category: "Sportex Catalogs",
    img: "images/watco-logo.jpg",
    resource: "https://www.sportexsafety.com/links/files/watco16.pdf"
  },
  {
    title: "Corporate Awards",
    category: "Sportex Catalogs",
    resource: "https://www.sportexsafety.com/links/files/Sportex_Corporate-Awards.pdf",
    displaytitle: "Corporate Awards"
  },
  {
    title: "Star Awards",
    category: "Sportex Catalogs",
    resource: "https://www.sportexsafety.com/links/files/Sportex_Star-Awards.pdf",
    displaytitle: "Star Awards"
  },
  {
    title: "Golf Awards",
    category: "Sportex Catalogs",
    resource: "https://www.sportexsafety.com/links/files/Sportex_Golf-Awards.pdf",
    displaytitle: "Golf Awards"
  },
  {
    title: "Acrylic Awards",
    category: "Sportex Catalogs",
    resource: "https://www.sportexsafety.com/links/files/Sportex_Acrylic-Awards.pdf",
    displaytitle: "Acrylic Awards"
  },
  {
    title: "Crystal Awards",
    category: "Sportex Catalogs",
    resource: "https://www.sportexsafety.com/links/files/Sportex_Crystal-Awards.pdf",
    displaytitle: "Crystal Awards"
  },
  {
    title: "Plaques & Awards",
    category: "Sportex Catalogs",
    resource: "https://www.sportexsafety.com/links/files/Sportex_Plaques-Awards.pdf",
    displaytitle: "Plaques & Awards"
  },
  {
    title: "Award Components",
    category: "Sportex Catalogs",
    resource: "https://www.sportexsafety.com/links/files/Sportex_Award-Components.pdf",
    displaytitle: "Award Components"
  },
  {
    title: "Ladies Of Kiewit V1",
    category: "Sportex Catalogs",
    img: "images/kiewit-logo.jpg",
    resource: "http://online.fliphtml5.com/ptuo/ulif/",
    displaytitle: "Ladies of Kiewit"
  },
  {
    title: "Preprint",
    category: "Sportex Catalogs",
    resource: "https://www.sportexsafety.com/links/files/Sportex-Preprint-Catalog-2019.pdf",
    displaytitle: "Preprint Catalog"
  }
];

//sort LINKS by category & title before we use it in the app
DATA.sort((a, b) => (a.category > b.category ? 1 : a.category === b.category ? (a.title > b.title ? 1 : -1) : -1));
export default DATA;
