import React, { useEffect, useState } from "react";
import Item from "../components/Common/Item";
import { fetchItems } from "../reducks/items/operations";
import { getItems } from "../reducks/items/selectors";
import { useDispatch, useSelector } from "react-redux";
import MainImage from "../components/Common/MainImage";
import { fetchCarts } from "../reducks/carts/operations";
import ImgScroll from "../assets/img/itemlist-1.png";
import ImgScroll1 from "../assets/img/scroll-item-1.png";
import ImgScroll2 from "../assets/img/scroll-item-2.png";
import ImgScroll3 from "../assets/img/scroll-item-3.png";

const Home = () => {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const items = getItems(selector);

  useEffect(() => {
    dispatch(fetchItems());
    if (localStorage.getItem("LOGIN_USER_KEY")) {
      dispatch(fetchCarts());
      console.log(items);
    }
  }, []);
  
  return (
    <>
      <MainImage />
      <section class="scroll">
      <h2>Recommended</h2>
      <div class="scrollitems">
        <div class="scrolltext">
        <img src={ImgScroll} alt="" />
        <img src={ImgScroll1} alt="" />
        <img src={ImgScroll2} alt="" />
        <img src={ImgScroll3} alt="" />
        <img src={ImgScroll} alt="" />
        </div>
      </div>
    </section>
    <section class="tags">
      <a href="#"><button>Mochi</button></a>
      <a href="#"><button>Dolls</button></a>
      <a href="#"><button>Fans</button></a>
    </section>
      <section class="main">
        <ul class="items">
          {items &&
            items.map((item) => (
              <li>
                <Item key={item.id} item={item} />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
