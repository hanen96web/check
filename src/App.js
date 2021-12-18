import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuList from "./component/MenuList";
import { useState } from "react";
import Sshow from "./component/Sshow";

import Carouu from "./component/Carouu";
import Home from "./component/Home";
import Contact from "./component/Contact";
import MenuItem from "./component/MenuItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navig from "./component/Navig";
import Content from "./component/Content";
import Menu from "./component/Menu";

function App() {
  const [data, setData] = useState([
    //siamois
    {
      id: 1,
      name: "siamois",
      price: 50,
      description:
        "Le Siamois est un chat de taille moyenne. Mâles et femelles pèsent en moyenne de 2 kg à 6 kg et mesurent de 30 cm à 30 cm au garrot. C'est un chat élégant doté d'un poil fin et brillant. On peut le reconnaître grâce à son poil plus foncé aux extrémités de ses pattes, museau et oreilles",
      img: "https://siamoisthai.com/wp-content/uploads/2018/07/cute-3252251_640-1.jpg",
    },
    //persan
    {
      id: 2,
      name: "persan",
      price: 130,
      description:
        "Le persan est un chat de taille moyenne à grande, caractérisé par un corps musclé et des pattes assez courtes qui ne lui enlèvent en rien son apparence imposante. Ces chats ont une jolie tête ronde, avec de grands yeux et des joues développées ; le front lui aussi est de forme large et arrondie",
      img: "https://www.helloanimaux.fr/wp-content/uploads/2020/02/chat-persan-blanc.jpg",
    },
    //angora
    {
      id: 3,
      name: "angora",
      price: 180,
      description:
        "L'apparence physique du chat Angora Turc Sa corpulence est également unique pour un chat à poil mi-long : son corps élancé, musclé et gracieux est porté par de fines pattes, ce qui lui confère une certaine grâce. Sa queue est longue et touffue, et ne perd pas en volume, même en été.",
      img: "https://www.toutelaturquie.com/wp-content/uploads/2016/10/Angora-Turc-e1477312296506.jpg",
    },
    //Ragdoll
    {
      id: 4,
      name: "Ragdoll",
      price: 400,
      description:
        "Le Ragdoll est très doux et protecteur ; il apprécie également le jeu, mais n'aime pas être brusqué. Sociable avec les autres animaux, il s'entend généralement bien avec les chiens et il n'est pas rare qu'ils partagent le même lit !",
      img: "https://resize2.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/animaux/chat/races-chat/norvegien/790251-2-fre-FR/norvegien.jpg",
    },
    //tiffany
    {
      id: 5,
      name: "tiffany",
      price: 500,
      description:
        "Le Tiffany est également un chat qui est exceptionnellement facile à entrainer, pas exigeant et ravi de vivre dans la majorité des situations. Vous aurez donc un compagnon aimant pendant des années, si traité avec tout l'amour et le respect qu'il mérite.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tiffanie_at_cat_show.jpg/280px-Tiffanie_at_cat_show.jpg",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [searchPrice, setSearchPrice] = useState(999);
  //const [contact,setContact] = useState();
  return (
    <div>
      <Navig setSearchPrice={setSearchPrice} setSearchText={setSearchText} />

      <Routes>
        <Route
          path="/"
          element={
            <Content
              searchPrice={searchPrice}
              data={data}
              searchText={searchText}
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contact" element={<Contact contact={data} />} />
        <Route path="/contact/:id" element={<Sshow data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
