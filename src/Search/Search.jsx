import { useState, useEffect, useContext } from "react";
import { ProductContext } from '../Components/ProductProvider.jsx';
import MainMenu from '../Components/Mainmenu.jsx';
import Footer from '../Components/Footer.jsx';
import Card from '../Components/Card.jsx';
import ServiceBox from '../Components/ServiceBox.jsx';
import ProductInfo from "../ProductInfo/ProductInfo.jsx";
import "../Components/Color.css";
import "./Search.css";
function Search() {
  const products = useContext(ProductContext);

  const [nameValue, setNameValue] = useState("");
  let changeNameFilter = (e) => {
    setNameValue(e.target.value);
  };
  // Tạo dữ liệu cho Search by Category
  let listCategory = ["Quần", "Áo Polo", "Áo", "Váy", "Ví", "Trẻ em", "Đồ bộ"];
  const [listCategoryCheck, setListCategoryCheck] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const changeCheckBoxCategory = (xxx) => {
    setListCategoryCheck((prevState) => {
      const newState = [...prevState];
      newState[xxx] = !newState[xxx];
      return newState;
    });
  };

  // Tạo dữ liệu cho Search by Color
  let listColor = [
    "Đen",
    "Trắng",
    "Đỏ",
    "Xanh Ngọc",
    "Be",
    "Xanh than",
    "Hồng",
  ];
  let listColorId = [
    "colorId532",
    "colorId531",
    "colorId530",
    "colorId537",
    "colorId509",
    "colorId523",
    "colorId525",
  ];
  const [listColorCheck, setListColorCheck] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const changeCheckBoxColor = (xxx) => {
    setListColorCheck((prevState) => {
      const newState = [...prevState];
      newState[xxx] = !newState[xxx];
      return newState;
    });
  };

  // Filter
  const [productRender, setProductRender] = useState(products);
  let newProduct = [...products]
    .sort((a, b) => b.volume - a.volume)
    .slice(0, 20);
  useEffect(() => {
    setProductRender(newProduct);
  }, [products]);
  function filterProduct() {
    //-------------------------------filter by name
    console.log(products);
    let xxx = products.filter((item) =>
      item.name.toLowerCase().includes(nameValue.toLowerCase())
    );

    //------------------------------filter by category
    let listToFilter = [""];
    listCategoryCheck.map((item, idx) => {
      if (item) {
        listToFilter.push(listCategory[idx]);
      }
    });
    let yyy = [];
    if (listToFilter.length > 1) {
      listToFilter = listToFilter.slice(1);
      console.log(listToFilter);
      yyy = xxx.filter((item) => {
        let check = false;
        for (let i = 0; i < listToFilter.length; i++) {
          if (
            item.category.toLowerCase().includes(listToFilter[i].toLowerCase())
          ) {
            check = true;
          }
        }
        return check;
      });
    } else {
      yyy = xxx;
    }
    console.log(yyy);
    //------------------------------filter by color
    let listColorToFilter = [""];
    listColorCheck.map((item, idx) => {
      if (item) {
        listColorToFilter.push(listColor[idx]);
      }
    });
    let zzz = [];
    if (listColorToFilter.length > 1) {
      listColorToFilter = listColorToFilter.slice(1);
      console.log(listColorToFilter);
      zzz = yyy.filter((item) => {
        let check = false;
        for (let i = 0; i < listColorToFilter.length; i++) {
          for (let j = 0; j < item.colors.length; j++) {
            if (
              item.colors[j]
                .toLowerCase()
                .includes(listToFilter[i].toLowerCase())
            ) {
              check = true;
            }
          }
        }
        return check;
      });
    } else {
      zzz = yyy;
    }
    if (zzz.length == 0) {
      alert("Không có sản phẩm nào được tìm thấy");
    } else {
      const aaa = [...zzz].sort((a, b) => b.volume - a.volume).slice(0, 20);
      setProductRender(aaa);
    }
  }

  return (
    <>
      <MainMenu />
      <div className="boxProductSearch">
        <div className="filterMenu">
          <div>
            <label htmlFor="name">Search by name</label>
            <input
              className="ip1"
              type="text"
              value={nameValue}
              onChange={changeNameFilter}
            />
          </div>
          <div className="boxSearchProductCategories">
            <p className="cl1">Product Categories</p>
            {listCategory.map((item, index) => (
              <div className="listCategory" key={index}>
                <input
                  type="checkbox"
                  checked={listCategoryCheck[index]}
                  onChange={() => changeCheckBoxCategory(index)}
                />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="boxSearchProductColor">
            <p className="cl1">Filter by color</p>
            {listColor.map((item, idx) => (
              <div className="listColor" key={idx}>
                <input
                  type="checkbox"
                  checked={listColorCheck[idx]}
                  onChange={() => changeCheckBoxColor(idx)}
                />
                <button className={listColorId[idx]}></button>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <button className="btnFilterSearch" onClick={filterProduct}>
            Search
          </button>
        </div>

        <div className="productFilter">
          {productRender.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
      <ServiceBox />
      <Footer />
    </>
  );
}
export default Search;
