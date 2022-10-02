import styles from "../../components/customcode/customcode.module.css";
import iconstyle from "../../components/customcode/submission.module.css";

import { useState } from "react";

const content = [
  {
    title: "Reviewing",
    subtitle:
      "It may take up to 90 seconds to receive a decision. Hold on tight!",
    step: "1 / 3",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="140"
        viewBox="-10 -10 104 140"
        fill="none"
      >
        <g id="Application">
          <g className={iconstyle.Doc3}>
            <rect
              id="Rectangle 281"
              x="15.7767"
              y="1"
              width="52.4466"
              height="73"
              rx="5.6699"
              fill="white"
              stroke="#0047AC"
              stroke-width="1.41748"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></rect>
            <rect
              id="Rectangle 282"
              x="22.8641"
              y="38.563"
              width="38.2718"
              height="3.54369"
              rx="1.77184"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <path
              id="Star 1"
              d="M56.268 57.613C56.8024 56.5038 58.3821 56.5038 58.9165 57.613C59.2411 58.2868 60.02 58.6095 60.726 58.3625C61.8883 57.9561 63.0053 59.0731 62.5988 60.2353C62.3519 60.9414 62.6745 61.7202 63.3484 62.0449C64.4576 62.5793 64.4576 64.159 63.3484 64.6934C62.6745 65.018 62.3519 65.7969 62.5988 66.5029C63.0053 67.6651 61.8883 68.7822 60.726 68.3757C60.02 68.1288 59.2411 68.4514 58.9165 69.1252C58.3821 70.2345 56.8024 70.2345 56.268 69.1252C55.9434 68.4514 55.1645 68.1288 54.4585 68.3757C53.2962 68.7822 52.1792 67.6651 52.5857 66.5029C52.8326 65.7969 52.51 65.018 51.8362 64.6934C50.7269 64.159 50.7269 62.5793 51.8362 62.0449C52.51 61.7202 52.8326 60.9414 52.5857 60.2353C52.1792 59.0731 53.2962 57.9561 54.4585 58.3625C55.1645 58.6095 55.9434 58.2868 56.268 57.613Z"
              fill="#0047AC"
            ></path>
            <rect
              id="Rectangle 285"
              x="22.8641"
              y="29.3496"
              width="38.2718"
              height="3.54369"
              rx="1.77184"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 283"
              x="22.8641"
              y="47.7769"
              width="38.2718"
              height="3.54369"
              rx="1.77184"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 284"
              x="28.534"
              y="11.6309"
              width="26.932"
              height="3.54369"
              rx="1.77184"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 286"
              x="32.7864"
              y="18.7188"
              width="18.4272"
              height="3.54369"
              rx="1.77184"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <path
              id="Vector 53"
              d="M55.4661 63.3686L57.2379 65.1405L60.0729 61.9512"
              stroke="white"
              stroke-width="1.41748"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <g className={iconstyle.Doc2}>
            <rect
              id="Rectangle 281_2"
              x="10"
              y="7"
              width="63.9417"
              height="89"
              rx="6.91262"
              fill="white"
              stroke="#0047AC"
              stroke-width="1.72816"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></rect>
            <rect
              id="Rectangle 282_2"
              x="18.6408"
              y="52.7959"
              width="46.6602"
              height="4.32039"
              rx="2.16019"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <path
              id="Star 1_2"
              d="M59.3661 76.0211C60.0176 74.6688 61.9435 74.6688 62.5951 76.0211C62.9909 76.8427 63.9404 77.236 64.8012 76.935C66.2182 76.4394 67.58 77.8012 67.0845 79.2182C66.7834 80.079 67.1767 81.0286 67.9983 81.4243C69.3507 82.0759 69.3507 84.0018 67.9983 84.6534C67.1767 85.0491 66.7834 85.9987 67.0845 86.8595C67.58 88.2765 66.2182 89.6383 64.8012 89.1428C63.9404 88.8417 62.9909 89.235 62.5951 90.0566C61.9435 91.4089 60.0176 91.4089 59.3661 90.0566C58.9703 89.235 58.0207 88.8417 57.1599 89.1428C55.7429 89.6383 54.3811 88.2765 54.8767 86.8595C55.1777 85.9987 54.7844 85.0491 53.9629 84.6534C52.6105 84.0018 52.6105 82.0759 53.9629 81.4243C54.7844 81.0286 55.1777 80.079 54.8767 79.2182C54.3811 77.8012 55.7429 76.4394 57.1599 76.935C58.0207 77.236 58.9703 76.8427 59.3661 76.0211Z"
              fill="#0047AC"
            ></path>
            <rect
              id="Rectangle 285_2"
              x="18.6408"
              y="41.563"
              width="46.6602"
              height="4.32039"
              rx="2.16019"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 283_2"
              x="18.6408"
              y="64.0293"
              width="46.6602"
              height="4.32039"
              rx="2.16019"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 284_2"
              x="25.5534"
              y="19.9609"
              width="32.835"
              height="4.32039"
              rx="2.16019"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 286_2"
              x="30.7379"
              y="28.6021"
              width="22.466"
              height="4.32039"
              rx="2.16019"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <path
              id="Vector 53_2"
              d="M58.3883 83.0387L60.5485 85.1989L64.0048 81.3105"
              stroke="white"
              stroke-width="1.72816"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <g className={iconstyle.Doc1}>
            <rect
              id="Rectangle 281_3"
              x="5.00003"
              y="15"
              width="74"
              height="103"
              rx="8"
              fill="white"
              stroke="#0047AC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></rect>
            <rect
              id="Rectangle 282_3"
              x="15"
              y="68"
              width="54"
              height="5"
              rx="2.5"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <path
              id="Star 1_3"
              d="M62.1316 94.8784C62.8856 93.3133 65.1145 93.3133 65.8685 94.8784C66.3265 95.8291 67.4255 96.2843 68.4217 95.9359C70.0616 95.3624 71.6376 96.9385 71.0641 98.5784C70.7157 99.5745 71.1709 100.673 72.1217 101.132C73.6868 101.886 73.6868 104.114 72.1217 104.868C71.1709 105.327 70.7157 106.425 71.0641 107.422C71.6376 109.062 70.0616 110.638 68.4217 110.064C67.4255 109.716 66.3265 110.171 65.8685 111.122C65.1145 112.687 62.8856 112.687 62.1316 111.122C61.6735 110.171 60.5746 109.716 59.5784 110.064C57.9385 110.638 56.3624 109.062 56.936 107.422C57.2844 106.425 56.8292 105.327 55.8784 104.868C54.3133 104.114 54.3133 101.886 55.8784 101.132C56.8292 100.673 57.2844 99.5745 56.936 98.5784C56.3624 96.9385 57.9385 95.3624 59.5784 95.9359C60.5746 96.2843 61.6735 95.8291 62.1316 94.8784Z"
              fill="#0047AC"
            ></path>
            <rect
              id="Rectangle 285_3"
              x="15"
              y="55"
              width="54"
              height="5"
              rx="2.5"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 283_3"
              x="15"
              y="81"
              width="54"
              height="5"
              rx="2.5"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 284_3"
              x="23"
              y="30"
              width="38"
              height="5"
              rx="2.5"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 286_3"
              x="29"
              y="40"
              width="26"
              height="5"
              rx="2.5"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <path
              id="Vector 53_3"
              d="M61 103L63.5 105.5L67.5 101"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <g className={iconstyle.Doc0}>
            <rect
              id="Rectangle 281_4"
              x="1.76698"
              y="24"
              width="80.466"
              height="112"
              rx="8.69903"
              fill="white"
              stroke="#0047AC"
              stroke-width="2.17476"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></rect>
            <rect
              id="Rectangle 282_4"
              x="12.6408"
              y="81.6309"
              width="58.7184"
              height="5.43689"
              rx="2.71845"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <path
              id="Star 1_4"
              d="M63.8906 110.858C64.7105 109.156 67.1342 109.156 67.9541 110.858V110.858C68.4521 111.892 69.6471 112.387 70.7303 112.008V112.008C72.5135 111.384 74.2273 113.098 73.6036 114.881V114.881C73.2248 115.964 73.7198 117.159 74.7536 117.657V117.657C76.4555 118.477 76.4555 120.901 74.7536 121.721V121.721C73.7198 122.219 73.2248 123.414 73.6036 124.497V124.497C74.2273 126.28 72.5135 127.994 70.7303 127.37V127.37C69.6471 126.992 68.4521 127.487 67.9541 128.52V128.52C67.1342 130.222 64.7105 130.222 63.8906 128.52V128.52C63.3925 127.487 62.1975 126.992 61.1143 127.37V127.37C59.3312 127.994 57.6174 126.28 58.241 124.497V124.497C58.6199 123.414 58.1249 122.219 57.091 121.721V121.721C55.3892 120.901 55.3892 118.477 57.091 117.657V117.657C58.1249 117.159 58.6199 115.964 58.241 114.881V114.881C57.6174 113.098 59.3312 111.384 61.1143 112.008V112.008C62.1975 112.387 63.3925 111.892 63.8906 110.858V110.858Z"
              fill="#0047AC"
            ></path>
            <rect
              id="Rectangle 285_4"
              x="12.6408"
              y="67.4951"
              width="58.7184"
              height="5.43689"
              rx="2.71845"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 283_4"
              x="12.6408"
              y="95.7671"
              width="58.7184"
              height="5.43689"
              rx="2.71845"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 284_4"
              x="21.3398"
              y="40.3105"
              width="41.3204"
              height="5.43689"
              rx="2.71845"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <rect
              id="Rectangle 286_4"
              x="27.8641"
              y="51.1846"
              width="28.2718"
              height="5.43689"
              rx="2.71845"
              fill="#0047AC"
              fill-opacity="0.2"
            ></rect>
            <path
              id="Vector 53_4"
              d="M62.6602 119.689L65.3786 122.408L69.7281 117.515"
              stroke="white"
              stroke-width="2.17476"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Submitting",
    subtitle:
      "It may take up to 90 seconds to receive a decision. Hold on tight!",
    step: "2 / 3",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="-15 -30 120 120"
        fill="none"
      >
        <g>
          <g className={iconstyle.envelope}>
            <rect
              id="Rectangle 290"
              x="1"
              y="1"
              width="90"
              height="60"
              rx="8"
              fill="#0047AC"
              fill-opacity="0.1"
              stroke="#0047AC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></rect>
            <path
              id="Rectangle 291"
              d="M1 9C1 4.58172 4.58172 1 9 1H83C87.4183 1 91 4.58172 91 9V11L50.2264 36.3702C47.6388 37.9803 44.3612 37.9803 41.7736 36.3702L1 11V9Z"
              fill="white"
              stroke="#0047AC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              id="Vector 56"
              d="M1 53L37 33.5"
              stroke="#0047AC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              id="Vector 57"
              d="M91 53L55 33.5"
              stroke="#0047AC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
          <g className={iconstyle.shadow}>
            <ellipse
              id="Shadow_2"
              cx="46"
              cy="81.5"
              rx="45"
              ry="2.5"
              fill="#0047AC"
              fill-opacity="0.1"
            ></ellipse>
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Getting Offer",
    subtitle:
      "It may take up to 90 seconds to receive a decision. Hold on tight!",
    step: "3 / 3",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="86"
        height="128"
        viewBox="0 0 86 128"
        fill="none"
      >
        <g id="Inbox">
          <path
            id="Envelope"
            d="M85 103L75.1672 78.7458C74.2493 76.4815 72.05 75 69.6068 75H16.3932C13.95 75 11.7507 76.4815 10.8328 78.7458L1 103"
            stroke="#0047AC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <g className={iconstyle.docsmove}>
            <g id="Doc5">
              <path
                id="Rectangle 295"
                d="M17.7554 89.04C18.1672 87.8208 19.3107 87 20.5976 87H64.2153C65.4521 87 66.5622 87.759 67.0109 88.9116L74.4082 107.912C75.174 109.878 73.7232 112 71.6126 112H14.1799C12.1271 112 10.6807 109.985 11.3376 108.04L17.7554 89.04Z"
                fill="white"
                stroke="#0047AC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <rect
                id="Rectangle 296"
                x="26"
                y="91"
                width="34"
                height="2"
                rx="1"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 297"
                x="24"
                y="95"
                width="38"
                height="2"
                rx="1"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 298"
                x="22"
                y="99"
                width="42"
                height="3"
                rx="1.5"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 299"
                x="20"
                y="104"
                width="46"
                height="4"
                rx="2"
                fill="#C3D1E6"
              ></rect>
            </g>
            <g id="Doc4">
              <path
                id="Rectangle 295_2"
                d="M17.7554 81.04C18.1672 79.8208 19.3107 79 20.5976 79H64.2153C65.4521 79 66.5622 79.759 67.0109 80.9116L74.4082 99.9116C75.174 101.878 73.7232 104 71.6126 104H14.1799C12.1271 104 10.6807 101.985 11.3376 100.04L17.7554 81.04Z"
                fill="white"
                stroke="#0047AC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <rect
                id="Rectangle 296_2"
                x="26"
                y="83"
                width="34"
                height="2"
                rx="1"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 297_2"
                x="24"
                y="87"
                width="38"
                height="2"
                rx="1"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 298_2"
                x="22"
                y="91"
                width="42"
                height="3"
                rx="1.5"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 299_2"
                x="20"
                y="96"
                width="46"
                height="4"
                rx="2"
                fill="#C3D1E6"
              ></rect>
            </g>
            <g id="Doc3">
              <path
                id="Rectangle 295_3"
                d="M17.7554 73.04C18.1672 71.8208 19.3107 71 20.5976 71H64.2153C65.4521 71 66.5622 71.759 67.0109 72.9116L74.4082 91.9116C75.174 93.8784 73.7232 96 71.6126 96H14.1799C12.1271 96 10.6807 93.9847 11.3376 92.04L17.7554 73.04Z"
                fill="white"
                stroke="#0047AC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <rect
                id="Rectangle 296_3"
                x="26"
                y="75"
                width="34"
                height="2"
                rx="1"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 297_3"
                x="24"
                y="79"
                width="38"
                height="2"
                rx="1"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 298_3"
                x="22"
                y="83"
                width="42"
                height="3"
                rx="1.5"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 299_3"
                x="20"
                y="88"
                width="46"
                height="4"
                rx="2"
                fill="#C3D1E6"
              ></rect>
            </g>
            <g id="Doc2">
              <path
                id="Rectangle 295_4"
                d="M17.7554 65.04C18.1672 63.8208 19.3107 63 20.5976 63H64.2153C65.4521 63 66.5622 63.759 67.0109 64.9116L74.4082 83.9116C75.174 85.8784 73.7232 88 71.6126 88H14.1799C12.1271 88 10.6807 85.9847 11.3376 84.04L17.7554 65.04Z"
                fill="white"
                stroke="#0047AC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <rect
                id="Rectangle 296_4"
                x="26"
                y="67"
                width="34"
                height="2"
                rx="1"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 297_4"
                x="24"
                y="71"
                width="38"
                height="2"
                rx="1"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 298_4"
                x="22"
                y="75"
                width="42"
                height="3"
                rx="1.5"
                fill="#C3D1E6"
              ></rect>
              <rect
                id="Rectangle 299_4"
                x="20"
                y="80"
                width="46"
                height="4"
                rx="2"
                fill="#C3D1E6"
              ></rect>
            </g>
          </g>
          <g className={iconstyle.doc11}>
            <path
              id="Rectangle 295_5"
              d="M17.7554 3.03996C18.1672 1.82075 19.3107 1 20.5976 1H64.2153C65.4521 1 66.5622 1.75904 67.0109 2.91158L74.4082 21.9116C75.174 23.8784 73.7232 26 71.6126 26H14.1799C12.1271 26 10.6807 23.9847 11.3376 22.04L17.7554 3.03996Z"
              fill="white"
              stroke="#0047AC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <rect
              id="Rectangle 296_5"
              x="26"
              y="5"
              width="34"
              height="2"
              rx="1"
              fill="#C3D1E6"
            ></rect>
            <rect
              id="Rectangle 297_5"
              x="24"
              y="9"
              width="38"
              height="2"
              rx="1"
              fill="#C3D1E6"
            ></rect>
            <rect
              id="Rectangle 298_5"
              x="22"
              y="13"
              width="42"
              height="3"
              rx="1.5"
              fill="#C3D1E6"
            ></rect>
            <rect
              id="Rectangle 299_5"
              x="20"
              y="18"
              width="46"
              height="4"
              rx="2"
              fill="#C3D1E6"
            ></rect>
          </g>
          <g id="Inbox-front">
            <path
              id="Rectangle 294"
              d="M1 103H16.2609C18.2824 103 20.168 104.018 21.2772 105.708L22.9728 108.292C24.082 109.982 25.9676 111 27.9891 111H58.0109C60.0324 111 61.918 109.982 63.0272 108.292L64.7228 105.708C65.832 104.018 67.7176 103 69.7391 103H85V121C85 124.314 82.3137 127 79 127H7C3.68629 127 1 124.314 1 121V103Z"
              fill="#E6EDF7"
              stroke="#0047AC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              id="Vector 58"
              d="M49 117L37 117"
              stroke="#0047AC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </g>
      </svg>
    ),
  },
];

export default function Submission() {
  const [order, setOrder] = useState(0);

  return (
    <>
      <div className={styles.submission_bg}>
        <div className={styles.submission_svg}>{content[order].svg}</div>
        <div className={styles.submission_textcontainer}>
          <h3>{content[order].title}</h3>
          <p className={styles.submission_text}>{content[order].subtitle}</p>
          <p className={styles.submission_text}>{content[order].step}</p>
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.button} onClick={() => setOrder(0)}>
          <p className={order === 0 ? styles.num_select : styles.num}>1</p>
          <p>Submission</p>
        </button>
        <button className={styles.button} onClick={() => setOrder(1)}>
          <p className={order === 1 ? styles.num_select : styles.num}>2</p>
          <p>Reviewing</p>
        </button>
        <button className={styles.button} onClick={() => setOrder(2)}>
          <p className={order === 2 ? styles.num_select : styles.num}>3</p>
          <p>Submission</p>
        </button>
      </div>
    </>
  );
}
