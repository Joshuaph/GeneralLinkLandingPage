const DATA = [
    {
        title: "HVFR Catalog",
        tags: ["Sportex", "HVFR"],
        resource: "http://online.fliphtml5.com/ptuo/rujx/",
        displaytitle: "HVFR Catalog",
        img: "images/hivis-flame.png"
    },
    {
        title: "Superior Catalog",
        tags: ["Sportex"],
        resource: "http://fliphtml5.com/ptuo/qrcf/",
        displaytitle: "Who We Are",
        img: "images/superior.png"
    },
    {
        title: "Superior Fall/Winter 18",
        tags: ["Sportex"],
        resource: "http://online.fliphtml5.com/ptuo/tyll/",
        displaytitle: "Fall/Winter Product Guide",
        img: "images/fall-winter2018.png"
    },
    {
        title: "Signs, Banners, Decals",
        tags: ["Sportex"],
        resource: "https://www.sportexsafety.com/links/files/Sportex_SignsBannersDecals-Catalog-2017.pdf",
        displaytitle: "Signs, Banners, & Decals",
        img: "images/signs-banners.png"
    },
    {
        title: "Hi-Vis PPE & Safety Recognition",
        tags: ["Sportex", "HIVIS", "PPE"],
        resource: "http://fliphtml5.com/ptuo/masb",
        displaytitle: "Hi-Vis PPE & Safety Recognition",
        img: "images/hivis-ppe.png"
    },
    {
        title: "BNSF",
        tags: ["BNSF"],
        img: "images/bnsf-workwear.png",
        resource: "https://www.sportexsafety.com/links/files/BNSF-workwear-guide-2019.pdf",
        displaytitle: "PPE/Workwear"
    },
    {
        title: "Watco",
        tags: ["Watco"],
        img: "images/watco.png",
        resource: "https://www.sportexsafety.com/links/files/watco16.pdf"
    },
    {
        title: "Corporate Awards",
        tags: ["Sportex"],
        resource: "https://www.sportexsafety.com/links/files/Sportex_Corporate-Awards.pdf",
        displaytitle: "Corporate Awards",
        img: "images/corporate-awards.png"
    },
    {
        title: "Star Awards",
        tags: ["Sportex"],
        resource: "https://www.sportexsafety.com/links/files/Sportex_Star-Awards.pdf",
        displaytitle: "Star Awards",
        img: "images/star-awards.png"
    },
    {
        title: "Golf Awards",
        tags: ["Sportex"],
        resource: "https://www.sportexsafety.com/links/files/Sportex_Golf-Awards.pdf",
        displaytitle: "Golf Awards",
        img: "images/golf-awards.png"
    },
    {
        title: "Acrylic Awards",
        tags: ["Sportex"],
        resource: "https://www.sportexsafety.com/links/files/Sportex_Acrylic-Awards.pdf",
        displaytitle: "Acrylic Awards",
        img: "images/acrylic-awards.png"
    },
    {
        title: "Crystal Awards",
        tags: ["Sportex"],
        resource: "https://www.sportexsafety.com/links/files/Sportex_Crystal-Awards.pdf",
        displaytitle: "Crystal Awards",
        img: "images/crystal-awards.png"
    },
    {
        title: "Plaques & Awards",
        tags: ["Sportex"],
        resource: "https://www.sportexsafety.com/links/files/Sportex_Plaques-Awards.pdf",
        displaytitle: "Plaques & Awards",
        img: "images/barhill-plaques.png"
    },
    {
        title: "Award Components",
        tags: ["Sportex"],
        resource: "https://www.sportexsafety.com/links/files/Sportex_Award-Components.pdf",
        displaytitle: "Award Components",
        img: "images/award-comp.png"
    },
    {
        title: "Ladies Of Kiewit V1",
        tags: ["Kiewit"],
        img: "images/kiewit-ladies.png",
        resource: "http://online.fliphtml5.com/ptuo/ulif/",
        displaytitle: "Ladies of Kiewit"
    },
    {
        title: "Preprint",
        tags: ["Sportex"],
        resource: "https://www.sportexsafety.com/links/files/Sportex-Preprint-Catalog-2019.pdf",
        displaytitle: "Preprint Catalog",
        img: "images/pre-print.png"
    }
];

//sort LINKS by tags & title before we use it in the app
DATA.sort((a, b) => (a.tags > b.tags ? 1 : a.tags === b.tags ? (a.title > b.title ? 1 : -1) : -1));
export default DATA;
