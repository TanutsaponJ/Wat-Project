import React from "react";
import "./Staff.css";

// import Images

import user1 from "../../assets/Staff1.png";
import user2 from "../../assets/Staff2.png";
import user3 from "../../assets/Staff3.png";
import user4 from "../../assets/Staff4.png";
import user5 from "../../assets/Staff5.png";
import user6 from "../../assets/Staff6.png";
import user7 from "../../assets/Staff7.png";
import user8 from "../../assets/Staff8.png";
import user9 from "../../assets/Staff9.png";

function Staff() {
  return (
    <div className="staff container section">
      <div className="secContainer">
        <span className="secTitle">พระประจำพรรษา</span>

        <div className="staffContainer grid">
          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user1} alt="user-1" />
            </div>

            <span className="name">พระธรรมเสนาบดี</span>
            <span className="jobTitle">เจ้าอาวาสวัด รองเจ้าคณะภาค 7</span>
            <span className="contact">ประธานบริหารบอร์ดวัด</span>
          </div>

          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user2} alt="user-1" />
            </div>

            <span className="name">พระราชวัชรสารบัณทิต, รศ.ดร.</span>
            <span className="jobTitle">
              รองอธิการบดีฝ่ายวางแผนและพััณนา มจร.
            </span>
            <span className="contact">รองประธานบริหารบอร์ดวัด</span>
          </div>

          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user3} alt="user-1" />
            </div>

            <span className="name">พระครูวิเทศกัลยาณธรรม, ดร.</span>
            <span className="jobTitle">เจ้าอาวาสวัดพระแก้ว ยูเอสเอ</span>
            <span className="contact">
              กรรมการอำนวยการสมัชชาสงฆ์ไทยในสหรัฐอเมริกา
            </span>
          </div>

          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user4} alt="user-1" />
            </div>

            <span className="name">พระครูสังฆรักษ์อุดมศิลป์ พรหมสาโร</span>
            <span className="jobTitle">ผู้ช่วยเจ้าอาวาสวัดพระแก้ว ยูเอสเอ</span>
            <span className="contact">ฝ่ายสาธารณูปการ</span>
          </div>

          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user5} alt="user-1" />
            </div>

            <span className="name">พระธวัชชัย ชิโนรโส</span>
            <span className="jobTitle">ฝ่ายวิเทศสัมพันธ์</span>
            <span className="contact">วัดพระธาตุดอยสุเทพ ยูเอสเอ</span>
          </div>

          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user6} alt="user-1" />
            </div>

            <span className="name">พระมหาประทวน ธมมรกชิโต ป.ธ. 9</span>
            <span className="jobTitle">ผู้ช่วยเจ้าอาวาสวัดพระแก้ว ยูเอสเอ</span>
            <span className="contact">ฝ่ายการศึกษา</span>
          </div>

          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user7} alt="user-1" />
            </div>

            <span className="name">พระมหาดอนไชย สิริวฑฒโน</span>
            <span className="jobTitle">ฝ่ายสาธารณูปการ</span>
            <span className="contact">วัดพระธาตุดอยสุเทพ</span>
          </div>

          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user8} alt="user-1" />
            </div>

            <span className="name">พระครูเจติยธรรมวิเทศ</span>
            <span className="jobTitle">ผู้ช่วยเจ้าอาวาสวัดพระแก้ว</span>
            <span className="contact">ฝ่ายเลขานุการ</span>
          </div>

          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user9} alt="user-1" />
            </div>

            <span className="name">พระใบฎีกาจิรายุส วิเทสปุญโญ</span>
            <span className="jobTitle">ฝ่ายวิเทศสัมพันธ์</span>
            <span className="contact">วัดพระธาตุดอยสุเทพ ยูเอสเอ</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Staff;
