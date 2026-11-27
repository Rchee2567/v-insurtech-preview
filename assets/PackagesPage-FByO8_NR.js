import{r as l,j as s}from"./main-dlsGu0IC.js";import{u,p as j}from"./useUI-CZXkweIr.js";const h={1:["✓","ควรมี"],2:["○","เสริมตามความจำเป็น"],0:["−","ไม่รวมในแพ็กเกจพื้นฐาน"]};function y(){u("V-InsurTech | เปรียบเทียบแพ็กเกจ");const[t,m]=l.useState(""),[a,p]=l.useState(""),[r,g]=l.useState(!1),x=l.useMemo(()=>Object.entries(j).filter(([e])=>!a||a===e).map(([e,n])=>[e,n.filter(([,c,d])=>c.toLowerCase().includes(t.trim().toLowerCase())&&(!r||new Set(d).size>1))]).filter(([,e])=>e.length),[t,a,r]),o=x.reduce((e,[,n])=>e+n.length,0);return s.jsxs(s.Fragment,{children:[`
  `,s.jsxs("div",{className:"page",children:[`
    `,s.jsxs("header",{className:"glass",children:[`
      `,s.jsxs("div",{className:"head-left",children:[`
        `,s.jsx("div",{className:"logo",children:"V"}),`
        `,s.jsxs("div",{className:"brand",children:[`
          `,s.jsx("div",{className:"name",children:"V-InsurTech"}),`
          `,s.jsx("div",{className:"sub",children:"INSURANCE MANAGEMENT SYSTEM"}),`
        `]}),`
      `]}),`
      `,s.jsxs("nav",{style:{display:"flex",gap:"18px",flexWrap:"wrap",fontWeight:"700"},children:[s.jsx("a",{style:{color:"#123f73",textDecoration:"none"},href:"index.html",children:"หน้าหลัก"}),s.jsx("a",{style:{color:"#123f73",textDecoration:"none"},href:"packages.html","aria-current":"page",children:"เปรียบเทียบแพ็กเกจ"})]}),`
    `]}),`

    `,s.jsxs("section",{className:"hero glass",children:[`
      `,s.jsx("div",{className:"eyebrow",children:"PACKAGE COMPARISON"}),`
      `,s.jsx("h1",{children:"เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ"}),`
      `,s.jsx("p",{children:"ระบบบริหารธุรกิจประกันภัยครบวงจร พร้อมตารางเปรียบเทียบ 57 ฟังก์ชัน สำหรับผู้ใช้งาน 3 ประเภท เพื่อช่วยให้เห็นความแตกต่างของแต่ละแพ็กเกจอย่างชัดเจน"}),`

      `,s.jsxs("div",{className:"toolbar",children:[`
        `,s.jsx("input",{id:"q",placeholder:"ค้นหาฟังก์ชัน เช่น ต่ออายุ, ภาษี, สิทธิ์การใช้งาน","aria-label":"ค้นหาฟังก์ชัน",value:t,onChange:e=>m(e.target.value)}),`
        `,s.jsxs("select",{id:"cat","aria-label":"หมวดหมู่",value:a,onChange:e=>p(e.target.value),children:[s.jsx("option",{value:"",children:"ทุกหมวดหมู่"}),Object.keys(j).map(e=>s.jsx("option",{value:e,children:e},e))]}),`
        `,s.jsx("button",{id:"diff",className:r?"active":"","aria-pressed":r,onClick:()=>g(e=>!e),children:"เฉพาะฟังก์ชันที่แตกต่าง"}),`
      `]}),`

      `,s.jsxs("div",{className:"legend",children:[`
        `,s.jsxs("span",{children:[s.jsx("i",{className:"mark s1",children:"✓"})," ควรมี"]}),`
        `,s.jsxs("span",{children:[s.jsx("i",{className:"mark s2",children:"○"})," เสริมตามความจำเป็น"]}),`
        `,s.jsxs("span",{children:[s.jsx("i",{className:"mark s0",children:"−"})," ไม่รวมในแพ็กเกจพื้นฐาน"]}),`
        `,s.jsxs("span",{id:"count",children:["แสดง ",o," / 57 ฟังก์ชัน"]}),`
      `]}),`
    `]}),`

    `,s.jsxs("section",{className:"table-shell glass",children:[`
      `,s.jsxs("div",{className:"wrap",children:[`
        `,s.jsxs("table",{children:[`
          `,s.jsxs("colgroup",{children:[s.jsx("col",{}),s.jsx("col",{}),s.jsx("col",{}),s.jsx("col",{})]}),`
          `,s.jsxs("thead",{children:[`
            `,s.jsxs("tr",{children:[`
              `,s.jsx("th",{children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:[s.jsx("span",{style:{fontSize:"12px",fontWeight:"700",letterSpacing:".8px",color:"#5d7489"},children:"หมวดหมู่ฟังก์ชันและรายการใช้งาน"}),s.jsx("span",{style:{fontSize:"19px",fontWeight:"800",color:"#112c45"},children:"รายการฟังก์ชัน"})]})}),`
              `,s.jsx("th",{children:s.jsxs("div",{className:"plan silver",children:[s.jsx("small",{children:"BASIC"}),s.jsx("strong",{children:"ตัวแทนทั่วไป"}),s.jsx("span",{children:"ค่าบริการ: ยังไม่ระบุ"})]})}),`
              `,s.jsx("th",{children:s.jsxs("div",{className:"plan gold",children:[s.jsx("small",{children:"PROFESSIONAL"}),s.jsx("strong",{children:"คนขายจด VAT"}),s.jsx("span",{children:"ค่าบริการ: ยังไม่ระบุ"})]})}),`
              `,s.jsx("th",{children:s.jsxs("div",{className:"plan diamond",children:[s.jsx("small",{children:"ENTERPRISE"}),s.jsx("strong",{children:"บริษัทโบรกเกอร์"}),s.jsx("span",{children:"ค่าบริการ: ยังไม่ระบุ"})]})}),`
            `]}),`
          `]}),`
          `,s.jsxs("tbody",{id:"rows",children:[x.map(([e,n])=>s.jsxs(l.Fragment,{children:[s.jsx("tr",{className:"group",children:s.jsx("td",{colSpan:4,children:e})}),n.map(([c,d,N])=>s.jsxs("tr",{className:"item",children:[s.jsxs("td",{children:[s.jsx("span",{className:"num",children:String(c).padStart(2,"0")}),d]}),[...N].map((i,f)=>s.jsx("td",{children:s.jsx("span",{className:`mark s${i}`,title:h[i][1],"aria-label":h[i][1],children:h[i][0]})},f))]},c))]},e)),o===0&&s.jsx("tr",{children:s.jsx("td",{colSpan:4,children:"ไม่พบฟังก์ชันที่ค้นหา"})})]}),`
        `]}),`
      `]}),`
    `]}),`

    `,s.jsx("footer",{children:"หมายเหตุ: ตารางนี้เป็นข้อเสนอการจัดฟังก์ชัน ไม่ใช่สิทธิ์ที่ตั้งค่าใช้งานจริง · แหล่งข้อมูล: V_InsurTech_A4_57_Functions_Resend.pdf หน้า 1–2"}),`
  `]}),`

`,`
`]})}export{y as default};
