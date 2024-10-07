import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDateString } from "../../utils/utils";
import Signature from "../../components/NavComponent/Signature";
import SmallCard from "../../components/Card/IndexPageCard/SmallCard";
import MediumCard from "../../components/Card/IndexPageCard/MediumCard";
import { getLocationApi } from "../../redux/SliceUser/viTriSlice";
import SkeletionComponentIndex from "../../components/Skeleton/SkeletionIndexPage/SkeletionComponentIndex";
const lazyWithDelay = (importFunc) => {
  return lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(importFunc()), 2000); // Delay 2 giây
      })
  );
};
const Landmark = lazyWithDelay(() =>
  import("../../components/NavComponent/Landmark")
);
const Design = lazyWithDelay(() =>
  import("../../components/NavComponent/Design")
);
const Pool = lazyWithDelay(() => import("../../components/NavComponent/Pool"));
const Room = lazyWithDelay(() => import("../../components/NavComponent/Room"));
const Play = lazyWithDelay(() => import("../../components/NavComponent/Play"));
const Golf = lazyWithDelay(() => import("../../components/NavComponent/Golf"));
const Kitchen = lazyWithDelay(() =>
  import("../../components/NavComponent/Kitchen")
);
const North = lazyWithDelay(() =>
  import("../../components/NavComponent/North")
);
const IndexPage = () => {
  const dispatch = useDispatch();
  const { locationApi } = useSelector((state) => state.viTriSlice);
  const [isActive, setIsActive] = useState(0);
  const data = [
    {
      img: "https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png",
      desc: "Biểu tượng",
    },
    {
      img: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
      desc: "Khung cảnh tuyệt vời",
    },
    {
      img: "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
      desc: "Thiết kế",
    },
    {
      img: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
      desc: "Hồ bơi tuyệt vời",
    },
    {
      img: "https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg",
      desc: "Phòng",
    },
    {
      img: "https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg",
      desc: "Vui chơi",
    },
    {
      img: "https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg",
      desc: "Chơi golf",
    },
    {
      img: "https://a0.muscache.com/pictures/ddd13204-a5ae-4532-898c-2e595b1bb15f.jpg",
      desc: "Bếp của bếp trưởng",
    },
    {
      img: "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
      desc: "Bắc Cực",
    },
    {
      img: "https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg",
      desc: "Nhà nhỏ",
    },
    {
      img: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
      desc: "Nông trại",
    },
    {
      img: "https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg",
      desc: "Container",
    },
    {
      img: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
      desc: "Nông thôn",
    },
    {
      img: "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
      desc: "Bãi biển",
    },
    {
      img: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
      desc: "Ven hồ",
    },
    {
      img: "https://a0.muscache.com/pictures/48b55f09-f51c-4ff5-b2c6-7f6bd4d1e049.jpg",
      desc: "Minsu",
    },
    {
      img: "https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg",
      desc: "Hanok",
    },
    {
      img: "https://a0.muscache.com/pictures/c0fa9598-4e37-40f3-b734-4bd0e2377add.jpg",
      desc: "Mới",
    },
    {
      img: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
      desc: "Cabin",
    },
    {
      img: "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
      desc: "Đảo",
    },
    {
      img: "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg",
      desc: "Lâu đài",
    },
    {
      img: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
      desc: "Biệt thự",
    },
    {
      img: "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
      desc: "Nhà thuyền",
    },
    {
      img: "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg",
      desc: "Khu cắm trại",
    },
    {
      img: "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
      desc: "Hồ",
    },
    {
      img: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
      desc: "Hướng biển",
    },
    {
      img: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
      desc: "Nhiệt đới",
    },
    {
      img: "https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg",
      desc: "Xe cắm trại",
    },
    {
      img: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
      desc: "Lướt sóng",
    },
    {
      img: "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
      desc: "Hang động",
    },
    {
      img: "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
      desc: "Luxe",
    },
    {
      img: "https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg",
      desc: "Vườn nho",
    },
    {
      img: "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
      desc: "Trượt tuyết",
    },
    {
      img: "https://a0.muscache.com/pictures/248f85bf-e35e-4dc3-a9a1-e1dbff9a3db4.jpg",
      desc: "Nhà trên núi",
    },
    {
      img: "https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg",
      desc: "Nhà mái vòm",
    },
    {
      img: "https://a0.muscache.com/pictures/747b326c-cb8f-41cf-a7f9-809ab646e10c.jpg",
      desc: "Lều mục đồng",
    },
    {
      img: "https://a0.muscache.com/pictures/5cdb8451-8f75-4c5f-a17d-33ee228e3db8.jpg",
      desc: "Cối xay gió",
    },
    {
      img: "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg",
      desc: "Ryokan",
    },
    {
      img: "https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg",
      desc: "Grand piano",
    },
    {
      img: "https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg",
      desc: "Sa mạc",
    },
    {
      img: "https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg",
      desc: "Nhà nông trại",
    },
    {
      img: "https://a0.muscache.com/pictures/d721318f-4752-417d-b4fa-77da3cbc3269.jpg",
      desc: "Tháp",
    },
    {
      img: "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg",
      desc: "Lều yurt",
    },
    {
      img: "https://a0.muscache.com/pictures/4759a0a7-96a8-4dcd-9490-ed785af6df14.jpg",
      desc: "Thuyền",
    },
    {
      img: "https://a0.muscache.com/pictures/7ff6e4a1-51b4-4671-bc9a-6f523f196c61.jpg",
      desc: "Riad",
    },
    {
      img: "https://a0.muscache.com/pictures/c9157d0a-98fe-4516-af81-44022118fbc7.jpg",
      desc: "Dammuso",
    },
  ];
  const cardData = [
    {
      img: "https://links.papareact.com/2io",
      title: "Trang trại và thiên nhiên",
    },
    { img: "https://links.papareact.com/q7j", title: "Chỗ ở độc đáo" },
    { img: "https://links.papareact.com/s03", title: "Toàn bộ nhà" },
    {
      img: "https://links.papareact.com/8ix",
      title: "Cho phép mang theo thú cưng",
    },
  ];
  const containerRef = useRef(null);
  const itemWidth = 100; // Width of each item including padding and margin
  const itemsToScroll = 7; // Number of items to scroll each time
  const scrollAmount = itemWidth * itemsToScroll; // Calculate the scroll amount
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [shadowNav, setShadowNav] = useState(false);
  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsAtStart(scrollLeft <= 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollPosition, 300); // Thay đổi thời gian nếu cần
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollPosition, 300); // Thay đổi thời gian nếu cần
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      checkScrollPosition();
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const showActive = () => {
    if (isActive == 0) return <Signature />;
    if (isActive == 1) return <Landmark />;
    if (isActive == 2) return <Design />;
    if (isActive == 3) return <Pool />;
    if (isActive == 4) return <Room />;
    if (isActive == 5) return <Play />;
    if (isActive == 6) return <Golf />;
    if (isActive == 7) return <Kitchen />;
    else return <North />;
  };
  useEffect(() => {
    dispatch(getLocationApi());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY;
      setShadowNav(scrollPosition > 105);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="">
        {/* <section className="sticky top-[65px] z-20">
          <div className="">
            <div
              ref={containerRef}
              className="flex bg-[#ffffff] items-center gap-5 lg:gap-10 overflow-hidden w-[99%]"
            >
              {data.map((item, index) => (
                <div
                  onClick={() => {
                    setIsActive(index);
                  }}
                  key={index}
                  className={`cursor-pointer flex-shrink-0 flex flex-col gap-[7px] items-center justify-center border-b-2 ${
                    isActive == index
                      ? "border-black"
                      : "border-white hover:border-gray-200 opacity-70 hover:opacity-100 "
                  } py-3`}
                >
                  <div className="max-h-[48px]">
                    <img src={item.img} className="w-[24px]" alt="" />
                  </div>
                  <h3 className="font-medium text-[12px]">{item.desc}</h3>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        <section
          className={`sticky ${
            shadowNav ? "shadow-md" : ""
          }  md:mt-[250px] lg:mt-[184px] px-10 xl:px-20 top-[80px] bg-white z-20`}
        >
          {!isAtStart && (
            <div className="w-[70px] h-[70px] bgImg-arrow-right absolute left-[25px] xl:left-[70px] z-10 top-[35px] transform -translate-y-1/2">
              <button
                onClick={scrollLeft}
                className=" bg-[#FFFFFF] border_nav p-[9px] rounded-full absolute top-[22px] left-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: 12,
                    width: 12,
                    fill: "currentcolor",
                  }}
                >
                  <path d="m10.55.3 1.42 1.4L5.67 8l6.3 6.3-1.42 1.4-6.59-6.58a1.58 1.58 0 0 1-.1-2.13l.1-.11z" />
                </svg>
              </button>
            </div>
          )}
          <div className="">
            <div
              ref={containerRef}
              className="flex bg-[#ffffff] items-center gap-5 lg:gap-10 overflow-hidden w-[99%]"
            >
              {data.map((item, index) => (
                <div
                  onClick={() => {
                    setIsActive(index);
                  }}
                  key={index}
                  className={`cursor-pointer flex-shrink-0 flex flex-col gap-[7px] items-center justify-center border-b-2 ${
                    isActive == index
                      ? "border-black"
                      : "border-white hover:border-gray-200 opacity-70 hover:opacity-100 "
                  } py-3`}
                >
                  <div className="max-h-[48px]">
                    <img src={item.img} className="w-[24px]" alt="" />
                  </div>
                  <h3 className="font-medium text-[12px]">{item.desc}</h3>
                </div>
              ))}
            </div>
          </div>
          {!isAtEnd && (
            <div className="w-[70px] h-[70px] bgImg-arrow-left absolute right-[40px] xl:right-[85px] z-10 top-[35px] transform -translate-y-1/2">
              <button
                onClick={scrollRight}
                className=" absolute right-[-5px] top-1/2 transform -translate-y-1/2 bg-[#FFFFFF] p-[9px] border_nav rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  style={{
                    display: "block",
                    height: 12,
                    width: 12,
                    fill: "currentcolor",
                  }}
                >
                  <path d="M5.41.3 4 1.7 10.3 8 4 14.3l1.41 1.4 6.6-6.58c.57-.58.6-1.5.1-2.13l-.1-.11z" />
                </svg>
              </button>
            </div>
          )}
        </section>
        <div className="mt-4 px-10 xl:px-20">
          <section className="mt-5">
            {
              <Suspense fallback={<SkeletionComponentIndex />}>
                {showActive()}
              </Suspense>
            }
          </section>
          <section className="mt-10">
            <h2 className="text-3xl font-semibold mb-5">
              Khám phá điểm đến gần đây
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {locationApi.map((item, index) => {
                const { hinhAnh, tinhThanh, tenViTri, id } = item;
                return (
                  <SmallCard
                    id={id}
                    hinhAnh={hinhAnh}
                    tinhThanh={tinhThanh}
                    tenViTri={tenViTri}
                  />
                );
              })}
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-3xl font-semibold">Ở bất cứ đâu</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide justify-between">
              {cardData.map((item, index) => {
                return (
                  <MediumCard
                    key={item.img}
                    img={item.img}
                    title={item.title}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
