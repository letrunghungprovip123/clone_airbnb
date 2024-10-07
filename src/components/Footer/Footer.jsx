import React, { useState } from "react";
import Regular from "../FooterComponent/Regular";
import Cultural from "../FooterComponent/Cultural";
import Outside from "../FooterComponent/Outside";
import Mountain from "../FooterComponent/Mountain";
import { useParams, useSearchParams } from "react-router-dom";

const Footer = () => {
  const [searchParam] = useSearchParams();
  const content = [
    "Phổ biến",
    "Văn hóa và nghệ thuật",
    "Ngoài trời",
    "Dãy núi",
    "Bãi biển",
    "Danh mục",
    "Những điều nên trải nghiệm",
  ];
  const [isActive, setIsActive] = useState(0);
  const showActive = () => {
    if (isActive == 0) return <Regular />;
    if (isActive == 1) return <Cultural />;
    if (isActive == 2) return <Outside />;
    else return <Mountain />;
  };
  return (
    <footer
      className={`bg-[#F7F7F7] px-[40px] lg:px-[80px] ${
        searchParam.get("maPhong") ? "border-t" : ""
      }`}
    >
      <div
        className={`${
          searchParam.get("maPhong") ? "hidden" : "footer1"
        } mt-10  py-[48px] border-b`}
      >
        <div className={`footer1-content`}>
          <h3 className="text-xl lg:text-2xl font-medium">
            Nguồn cảm hứng cho những kỳ nghỉ sau này
          </h3>
          <div className="mt-5 flex items-center overflow-scroll scrollbar-hide">
            {content.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setIsActive(index)}
                  className={`${
                    isActive == index ? "border-black" : ""
                  } px-[10px] lg:px-[20px] pb-[15px] mb-[6px] border-b-2 `}
                >
                  <h3
                    className={`
                    text-sm font-medium text-gray-500 whitespace-nowrap`}
                  >
                    {item}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="mt-7">{showActive()}</div>
        </div>
      </div>
      <div className="footer1">
        <div className="footer1-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 border-b">
            <div className="py-[24px] lg:py-[48px] border-b lg:border-none">
              <h3 className="text-[15px] font-medium">Hỗ trợ</h3>
              <div className="text-sm text-gray-500 space-y-3 mt-3 cursor-pointer">
                <p className="hover:underline">Trung tâm trợ giúp</p>
                <p className="hover:underline">AirCover</p>
                <p className="hover:underline">Chống phân biệt đối xử</p>
                <p className="hover:underline">Hỗ trợ người khuyết tật</p>
                <p className="hover:underline">Các tùy chọn hủy</p>
                <p className="hover:underline">
                  Báo cáo lo ngại của khu dân cư
                </p>
              </div>
            </div>
            <div className="py-[24px] lg:py-[48px] border-b lg:border-none">
              <h3 className="text-[15px] font-medium">Đón tiếp khách</h3>
              <div className="text-sm text-gray-500 space-y-3 mt-3 cursor-pointer">
                <p className="hover:underline">Cho thuê nhà trên Airbnb</p>
                <p className="hover:underline">AirCover cho Chủ nhà</p>
                <p className="hover:underline">Tài nguyên về đón tiếp khách</p>
                <p className="hover:underline">Diễn đàn cộng đồng</p>
                <p className="hover:underline">Đón tiếp khách có trách nhiệm</p>
                <p className="whitespace-nowrap hover:underline">
                  Tham gia khóa học miễn phí về công việc Đón tiếp khách
                </p>
              </div>
            </div>
            <div className="py-[24px] lg:py-[48px] border-b lg:border-none">
              <h3 className="text-[15px] font-medium">Airbnb</h3>
              <div className="text-sm text-gray-500 space-y-3 mt-3 cursor-pointer">
                <p className="hover:underline">Trang tin tức</p>
                <p className="hover:underline">Tính năng mới</p>
                <p className="hover:underline">Cơ hội nghề nghiệp</p>
                <p className="hover:underline">Nhà đầu tư</p>
                <p className="hover:underline">Chỗ ở khẩn cấp Airbnb.org</p>
              </div>
            </div>
          </div>
          <div className="py-[24px] flex flex-col lg:flex-row gap-5 justify-between items-center cursor-pointer">
            <div className="space-y-4 md:space-y-0 md:flex items-center gap-2 text-sm text-gray-500">
              <div>
                <h3 className="hover:underline">© 2024 Airbnb, Inc.</h3>
              </div>
              <span className="hidden md:block">·</span>
              <div className="flex items-center gap-2">
                <h3 className="hover:underline">Quyền riêng tư</h3>
                <span className="hover:underline">·</span>
                <h3 className="hover:underline">Điều khoản</h3>
                <span>·</span>
                <h3 className="hover:underline">Sơ đồ trang web</h3>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: 16,
                      width: 16,
                      fill: "currentcolor",
                    }}
                    className="custom-cursor-on-hover"
                  >
                    <path
                      d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"
                      className="custom-cursor-on-hover"
                    />
                  </svg>
                </div>
                <h3 className="hover:underline">Tiếng Việt (VN)</h3>
              </div>
              <div className="flex items-center gap-1">
                <span>₫</span>
                <span className="hover:underline">VND</span>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="Chuyển tới Facebook"
                    role="img"
                    focusable="false"
                    style={{
                      display: "block",
                      height: 18,
                      width: 18,
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M30 0a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                    <path
                      fill="#fff"
                      d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.62h4.06V32h5V20.62h3.73z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="Chuyển tới Twitter"
                    role="img"
                    focusable="false"
                    style={{
                      display: "block",
                      height: 18,
                      width: 18,
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M32 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4z" />
                    <path
                      fill="#fff"
                      d="M18.66 7.99a4.5 4.5 0 0 0-2.28 4.88A12.31 12.31 0 0 1 7.3 8.25a4.25 4.25 0 0 0 1.38 5.88c-.69 0-1.38-.13-2-.44a4.54 4.54 0 0 0 3.5 4.31 4.3 4.3 0 0 1-2 .06 4.64 4.64 0 0 0 4.19 3.13A8.33 8.33 0 0 1 5.8 23a12.44 12.44 0 0 0 19.32-11.19A7.72 7.72 0 0 0 27.3 9.5a8.3 8.3 0 0 1-2.5.75 4.7 4.7 0 0 0 2-2.5c-.87.5-1.81.87-2.81 1.06a4.5 4.5 0 0 0-5.34-.83z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="Chuyển tới Instagram"
                    role="img"
                    focusable="false"
                    style={{
                      display: "block",
                      height: 18,
                      width: 18,
                      fill: "currentcolor",
                    }}
                  >
                    <path d="M30 0H2a2 2 0 0 0-2 2v28c0 1.1.9 2 2 2h28a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path
                      fill="#fff"
                      d="M15.71 4h1.25c2.4 0 2.85.02 3.99.07 1.28.06 2.15.26 2.91.56.79.3 1.46.72 2.13 1.38.6.6 1.08 1.33 1.38 2.13l.02.06c.28.74.48 1.58.54 2.8l.01.4c.05 1.02.06 1.63.06 4.4v.92c0 2.6-.02 3.05-.07 4.23a8.78 8.78 0 0 1-.56 2.91c-.3.8-.77 1.53-1.38 2.13a5.88 5.88 0 0 1-2.13 1.38l-.06.02c-.74.28-1.59.48-2.8.53l-.4.02c-1.02.05-1.63.06-4.4.06h-.92a73.1 73.1 0 0 1-4.23-.07 8.78 8.78 0 0 1-2.91-.56c-.8-.3-1.53-.77-2.13-1.38a5.88 5.88 0 0 1-1.38-2.13l-.02-.06a8.84 8.84 0 0 1-.54-2.8l-.01-.37A84.75 84.75 0 0 1 4 16.29v-1c0-2.62.02-3.06.07-4.24.06-1.26.26-2.13.55-2.88l.01-.03c.3-.8.77-1.53 1.38-2.13a5.88 5.88 0 0 1 2.13-1.38l.06-.02a8.84 8.84 0 0 1 2.8-.54l.37-.01C12.39 4 12.99 4 15.71 4zm.91 2.16h-1.24c-2.3 0-2.91.01-3.81.05l-.42.02c-1.17.05-1.8.25-2.23.41-.56.22-.96.48-1.38.9-.4.41-.67.8-.88 1.35l-.03.06a6.7 6.7 0 0 0-.4 2.2l-.02.45c-.04.9-.05 1.53-.05 3.94v1.08c0 2.64.02 3.05.07 4.23v.07c.06 1.13.25 1.74.42 2.16.21.56.47.96.9 1.38.4.4.8.67 1.34.88l.06.03a6.7 6.7 0 0 0 2.2.4l.45.02c.9.04 1.53.05 3.94.05h1.08c2.64 0 3.05-.02 4.23-.07h.07a6.51 6.51 0 0 0 2.16-.42c.52-.19.99-.5 1.38-.9.4-.4.67-.8.88-1.34l.03-.06a6.7 6.7 0 0 0 .4-2.2l.02-.45c.04-.9.05-1.53.05-3.94v-1.09c0-2.63-.02-3.04-.07-4.22v-.07a6.51 6.51 0 0 0-.42-2.16c-.19-.52-.5-.99-.9-1.38a3.7 3.7 0 0 0-1.34-.88l-.06-.03a6.63 6.63 0 0 0-2.16-.4l-.46-.02c-.9-.04-1.5-.05-3.8-.05zM16 9.84a6.16 6.16 0 1 1 0 12.32 6.16 6.16 0 0 1 0-12.32zM16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6.4-3.85a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
