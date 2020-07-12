var dropDownValue = document.getElementById("language-switch");

function reloadPage() {
  setTimeout(function () {
    location.reload();
  }, 100);
}


dropDownValue.onchange = function() {
  if (this.selectedIndex !== 0) {
    window.location.href = this.value;
    reloadPage();
  }
};




var language = {
  eng: {
    welcome: "Welcome everyone"
  },
  es: {
    nvabout: "Acerca de",
    nvportfolio: "Portafolio",
    nvcontact: "Contacto",
    nvback: "Regresar",
    nvfurniture: "Muebles",
    nvhomeapp: "Electrodomésticos",
    nvclothing: "Ropa",
    nvfashionacc: "Moda",
    nvbags: "Bolsas",
    nvgadgets: "Gadgets & Tecnología",
    nvcars: "Autos",
    nvcons: "Construcción",
    nvZn: "Chino",
    nvEn: "Inglés",
    nvEs: "Español",
    nvKr: "Coreáno",
    nvLa: "Idioma",
    //Index
    nvvalue: "VALOR SIN SACRIFICAR CALIDAD",
    nvindfur: "MUEBLES",
    nvhomeint: "Casa & Interiores",
    nvhomeapl: "ELECTRODOMÉSTICOS",
    nvimprove: "Mejora tu calidad de vida",
    nvcloth: "ROPA",
    nvfashfo: "Moda para todos",
    nvfashacc: "ACCESORIOS DE MODA",
    nvbeyou: "Se tu mismo",
    nvbgs: "BOLSAS",
    nvwituev: "A dónde quiera que vayas",
    nvgadtech: "GADGETS & TECNOLOGÍA",
    nvpartof: "Parte de tí",
    nvcarx: "AUTOS",
    nvspare: "Refacciones & Accesorios",
    nvcontr: "CONSTRUCCIÓN",
    nvbuildmat: "Materiales para construcción",
    //About
    nvex1: "EXCELENCIA, PERFORMANCE & BUENA VOLUNTAD",
    nvex2: "son nuestros principales valores",
    nvex3: "LARME GROUP se ha establecido como un gran productor dentro de diferentes tipos de industria en China, asociado con los más altos estándares de calidad, diseños sofisticados enfocándonos en el detalle, comodidad he innovación.",
    nvex4: "Confiamos en:",
    nvex5: "- Encontraremos las mejores soluciones a tus necesidades",
    nvex7: "- Proveemos diseños de acuerdo a las tendencias actuales del mercado",
    nvex8: "- Proveemos un proceso de compra eficiente y sencillo",
    nvex9: "Estamos acreditados por la OEM como proveedor de distintas marcas",
    //Capability
    nvcap1: "NUESTRA CAPACIDAD",
    nvcap2: "LARMER GROUP está compuesto de un equipo profesional que incluye diseñadores creativos, sastres expertos y proveedores de telas de alta calidad, y profesionales de muchas industrias.",
    nvcap3: "todo esto nos permite tener una gran capacidad desde el diseño hasta la manufactura, y así proveer de una solución completa a las necesidades de tu negocio y de nuestros diferentes clientes.",
    nvcap4: "MODA",
    nvcap5: "TECNOLOGÍA",
    nvcap6: "CONSTRUCCIÓN",
    nvcap7: "PORTAFOLIO DE PRODUCTOS",
    nvcap8: "NUESTROS PRODUCTOS",
    nvcap9: "Nosotros ofrecemos una amplia variedad de soluciones para distintos tipos de productos para diferentes tipos de industrias para poder cumplir con los requerimientos de tu negocio, haciendo énfasis en las últimas tendencias del mercado.",
    nvcap10: "NUESTRA DISTRIBUCIÓN",
    nvcap11: "Nuestros productos están distribuidos dentro de una amplia y selecta red de proveedores para asegurar el posicionamiento de nuestra marca.",
    nvcap12: "Nuestros proveedores son un orgullo para garantizar la mejor calidad y satisfacción de nuestros clientes.",
    //Join
    nvjoin1: "ÚNETE A NUESTRA RED GLOBAL",
    nvjoin2: "DA CLIC EN EL BOTÓN CORRESPONDIENTE Y DINOS QUIÉN ERES",
    nvjoin3: "DISEÑADOR",
    nvjoin4: "Se nuestro diseñador para crear valor a nuestros clientes globales",
    nvjoin5: "PROVEEDOR",
    nvjoin6: "Se nuestro proveedor para ofrecer las mejores ¨Armas¨",
    nvjoin7: "DISTRIBUIDOR",
    nvjoin8: "Se nuestro distribuidor para seguir construyendo nuestra marca globalmente",
    //Contact
    nvfoot1: "SALUDANOS!",
    nvfoot2: "Tú Email",
    nvfoot3: "Tú mensaje",
    nvfoot4: "ENVIAR",
    nvfoot5: "VALOR SIN",
    nvfoot6: "SACRIFICAR CALIDAD",
    nvfoot7: "NUESTRA OFICINA",
    nvfoot8: "Radio City,15th Floor, No.505",
    nvfoot9: "Hennessy Road,Causeway Bay",
    nvfoot10: "Hong Kong",
    nvfoot11: "PREGUNTAS FRECUENTES",
    nvfoot12: "SERVICIO AL CLIENTE",
  },
  zh: {
    nvabout: "关于我们",
    nvportfolio: "产品文件夹",
    nvcontact: "联系我们",
    nvback: "返回",
    nvfurniture: "家具",
    nvhomeapp: "家用电器",
    nvclothing: "服装",
    nvfashionacc: "时尚配饰",
    nvbags: "包袋",
    nvgadgets: "设备与技术",
    nvcars: "汽车",
    nvcons: "建设",
    nvZn: "中文",
    nvEn: "英文",
    nvEs: "西语",
    nvKr: "韩语",
    nvLa: "语言",
    //Index
    nvvalue: "价廉物美",
    nvindfur: "家具",
    nvhomeint: "家装内饰",
    nvhomeapl: "家用电器",
    nvimprove: "改善你的生活质量",
    nvcloth: "服装",
    nvfashfo: "各人时尚",
    nvfashacc: "时尚饰品",
    nvbeyou: "做自己",
    nvbgs: "包袋",
    nvwituev: "随你到任何地方",
    nvgadtech: "设备与技术",
    nvpartof: "你的一部分",
    nvcarx: "汽车",
    nvspare: "备件及配件",
    nvcontr: "建筑物",
    nvbuildmat: "建筑材料",
    //about
    nvex1: "卓越，友善，绩效",
    nvex2: "我们的核心价值",
    nvex3: "在中国LARME集团已经在不同的产品行业中建立了出众的制造商形象，有着最高标准的质量、精巧的设计和错综复杂的细致和舒适度。",
    nvex4: "我们相信:",
    nvex5: "-为自己找到对你的要求,最好的解决方案",
    nvex7: "-提供时尚和新潮的设计",
    nvex8: "-提供一个顺畅有效的采购流程",
    nvex9: "众多品牌的OEM（代加工）供应商",
    //Capability
    nvcap1: "我们的能力",
    nvcap2: "LARME集团是由一个非常专业的团队组成，包括创意型的设计师，高技能的裁缝，以及高质量的面料供应商，还有其他各相关类型产业上的专业人士。",
    nvcap3: "因此，这也就使得我们能有超强的能力，从设计到制造，也正因为这样，我们足以提供一个全方位服务的解决方案来满足您的业务需求和不同目标的客户。",
    nvcap4: "时尚",
    nvcap5: "技术",
    nvcap6: "建筑物",
    nvcap7: "产品系列",
    nvcap8: "我们的产品",
    nvcap9: "我们对多个行业商品提供各种解决方案以匹配您的业务目标,重点是最新的市场倾向",
    nvcap10: "我们的分布",
    nvcap11: "我们的产品通过精心挑选的网络供应商去分销出去，以保证我们的理想品牌定位。",
    nvcap12: "对于我们的分销合作伙伴提供予客户最佳的满意，这点我们非常自豪。",
    //Join
    nvjoin1: "加入我们的网络",
    nvjoin2: "点击确定框下面告诉我们你是谁",
    nvjoin3: "设计师",
    nvjoin4: "成为我们的设计师为我们的全球客户创造巨大的价值",
    nvjoin5: "供应商",
    nvjoin6: "成为我们的合格供应商提供最优的“武器”",
    nvjoin7: "经销商",
    nvjoin8: "成为我们的分销商,共建我们的全球化品牌",

    nvfoot1: "和我们打招呼",
    nvfoot2: "你的电邮",
    nvfoot3: "你的消息",
    nvfoot4: "发送",
    nvfoot5: "价廉",
    nvfoot6: "物美",
    nvfoot7: "我们的办公室",
    nvfoot8: "Hong Kong",
    nvfoot9: "Radio City,15th Floor, No.505",
    nvfoot10: "Hennessy Road,Causeway Bay",
    nvfoot11: "普通询盘",
    nvfoot12: "客户服务",
  },
  kr: {
    nvabout: "우리에 대해",
    nvportfolio: "포트폴리오",
    nvcontact: "우리에게 연락하세요",
    nvback: "뒤로",
    nvfurniture: "가구",
    nvhomeapp: "가전제품",
    nvclothing: "의류",
    nvfashionacc: "패션 및 악세서리",
    nvbags: "가방",
    nvgadgets: "도구 및 기계",
    nvcars: "차량",
    nvcons: "건축",
    nvZn: "중국어",
    nvEn: "영어",
    nvEs: "스페인어",
    nvKr: "한국어",
    nvLa: "언어",
    //Index

    nvvalue: "안전성이 없는 가치",
    nvindfur: "가구",
    nvhomeint: "홈 인테리어",
    nvhomeapl: "가전제품",
    nvimprove: "삶의 질을 높이세요",
    nvcloth: "의류",
    nvfashfo: "모두를 위한 패션",
    nvfashacc: "패션 악세서리",
    nvbeyou: "자기 자신이 되세요",
    nvbgs: "가방",
    nvwituev: "어디든 당신과 함께",
    nvgadtech: "도구 및 기계",
    nvpartof: "당신의 일부",
    nvcarx: "차",
    nvspare: "예비 부품 및 악세서리",
    nvcontr: "건축",
    nvbuildmat: "건축 자재",
    //About
    nvex1: "우리의 핵심가치는 탁월함",
    nvex2: "호의 그리고 성과입니다",
    nvex3: "LARME GROUP은 최고 수준의 품질, 세련된 디자인, 디테일 및 편안함과 관련하여 중국의 다양한 제품 산업을 위한 우수한 제조업체로 자리매김하였다.",
    nvex4: "우리는 믿는다",
    nvex5: "- 당신의 필요에 가장 적합한 해결책을 찾으세요 필요",
    nvex7: "- 패셔너블하고 트렌디한 디자인 제공",
    nvex8: "- 매끄럽고 효율적인 구매 프로세스 제공",
    nvex9: "우리는 많은 브랜드에 대해 공인된 OEM 공급업체입니다.",
    //Capability
    nvcap1: "우리의 역량",
    nvcap2: "LARMER GROUP은 창의적인 디자이너, 숙련된 재단사 및 고품질 직물 공급자, 많은 종류의 산업의 전문가들을 포함하는 매우 전문적인 팀으로 구성되어 있습니다.",
    nvcap3: "따라서 설계에서 제조에 이르기까지 뛰어난 역량을 갖출 수 있으므로 귀사의 비즈니스 요구사항을 충족하고 다양한 고객을 대상으로 하는 전체 서비스 솔루션을 제공할 수 있습니다.",
    nvcap4: "패션",
    nvcap5: "기술",
    nvcap6: "건축",
    nvcap7: "제품 포트폴리오",
    nvcap8: "우리의 제품",
    nvcap9: "우리는 최근 시장 경향에 초점을 맞추어, 당신의 비즈니스 목표에 부합하는 다양한 산업용품을 위한 다양한 솔루션을 제공합니다.",
    nvcap10: "우리의 유통",
    nvcap11: "우리의 제품은 우리의 이상적인 브랜드 포지셔닝을 보장하기 위해 신중하게 선택된 공급업체 네트워크를 통해 배포되고 있습니다.",
    nvcap12: "우리는 고객 만족의 우수성을 제공하는 유통 파트너에 자부심을 갖고 있습니다.",
    //Join
    nvjoin1: "우리의 글로벌 네트워크에 가입하세요",
    nvjoin2: "아래 박스를 클릭하여 우리에게 당신이 누구인지를 알려주세요",
    nvjoin3: "디자이너",
    nvjoin4: "전세계 고객에게 큰 가치를 창출할 수 있는 디자이너가 되는 것",
    nvjoin5: "공급업체",
    nvjoin6: "T우수한 무기를 제공할 수 있는 자격을 갖춘 공급업체가 되기 위해",
    nvjoin7: "유통업자",
    nvjoin8: "세계적인 공동 브랜드를 구축하기 위해 우리의 유통업체가 되어주세요.",
    //Contact
    nvfoot1: "우리에게 연락하세요",
    nvfoot2: "이메일 주소",
    nvfoot3: "메세지",
    nvfoot4: "발송",
    nvfoot5: "가치 없이",
    nvfoot6: "안전성",
    nvfoot7: "우리 사무실",
    nvfoot8: "Hong Kong",
    nvfoot9: "Radio City,15th Floor, No.505",
    nvfoot10: "Hennessy Road,Causeway Bay",
    nvfoot11: "일반적인 문의사항",
    nvfoot12: "고객센터",

  },
};

if (window.location.hash) {
  if (window.location.hash === "#es") {
    nvabout.textContent = language.es.nvabout;
    nvportfolio.textContent = language.es.nvportfolio;
    nvcontact.textContent = language.es.nvcontact;
    nvback.textContent = language.es.nvback;
    nvfurniture.textContent = language.es.nvfurniture;
    nvhomeapp.textContent = language.es.nvhomeapp;
    nvclothing.textContent = language.es.nvclothing;
    nvfashionacc.textContent = language.es.nvfashionacc;
    nvbags.textContent = language.es.nvbags;
    nvgadgets.textContent = language.es.nvgadgets;
    nvcars.textContent = language.es.nvcars;
    nvcons.textContent = language.es.nvcons;
    nvZn.textContent = language.es.nvZn;
    nvEn.textContent = language.es.nvEn;
    nvEs.textContent = language.es.nvEs;
    nvKr.textContent = language.es.nvKr;
    nvLa.textContent = language.es.nvLa;
    //Index
    nvvalue.textContent = language.es.nvvalue;
    nvindfur.textContent = language.es.nvindfur;
    nvhomeint.textContent = language.es.nvhomeint;
    nvhomeapl.textContent = language.es.nvhomeapl;
    nvimprove.textContent = language.es.nvimprove;
    nvcloth.textContent = language.es.nvcloth;
    nvfashfo.textContent = language.es.nvfashfo;
    nvfashacc.textContent = language.es.nvfashacc;
    nvbeyou.textContent = language.es.nvbeyou;
    nvbgs.textContent = language.es.nvbgs;
    nvwituev.textContent = language.es.nvwituev;
    nvgadtech.textContent = language.es.nvgadtech;
    nvpartof.textContent = language.es.nvpartof;
    nvcarx.textContent = language.es.nvcarx;
    nvspare.textContent = language.es.nvspare;
    nvcontr.textContent = language.es.nvcontr;
    nvbuildmat.textContent = language.es.nvbuildmat;
    //About
    nvex1.textContent = language.es.nvex1;
    nvex2.textContent = language.es.nvex2;
    nvex3.textContent = language.es.nvex3;
    nvex4.textContent = language.es.nvex4;
    nvex5.textContent = language.es.nvex5;
    nvex7.textContent = language.es.nvex7;
    nvex8.textContent = language.es.nvex8;
    nvex9.textContent = language.es.nvex9;
    //Capability
    nvcap1.textContent = language.es.nvcap1;
    nvcap2.textContent = language.es.nvcap2;
    nvcap3.textContent = language.es.nvcap3;
    nvcap4.textContent = language.es.nvcap4;
    nvcap5.textContent = language.es.nvcap5;
    nvcap6.textContent = language.es.nvcap6;
    nvcap7.textContent = language.es.nvcap7;
    nvcap8.textContent = language.es.nvcap8;
    nvcap9.textContent = language.es.nvcap9;
    nvcap10.textContent = language.es.nvcap10;
    nvcap11.textContent = language.es.nvcap11;
    nvcap12.textContent = language.es.nvcap12;
    //Join
    nvjoin1.textContent = language.es.nvjoin1;
    nvjoin2.textContent = language.es.nvjoin2;
    nvjoin3.textContent = language.es.nvjoin3;
    nvjoin4.textContent = language.es.nvjoin4;
    nvjoin5.textContent = language.es.nvjoin5;
    nvjoin6.textContent = language.es.nvjoin6;
    nvjoin7.textContent = language.es.nvjoin7;
    nvjoin8.textContent = language.es.nvjoin8;
    //Contact
    nvfoot1.textContent = language.es.nvfoot1;
    nvfoot2.textContent = language.es.nvfoot2;
    nvfoot3.textContent = language.es.nvfoot3;
    nvfoot4.textContent = language.es.nvfoot4;
    nvfoot5.textContent = language.es.nvfoot5;
    nvfoot6.textContent = language.es.nvfoot6;
    nvfoot7.textContent = language.es.nvfoot7;
    nvfoot8.textContent = language.es.nvfoot8;
    nvfoot9.textContent = language.es.nvfoot9;
    nvfoot10.textContent = language.es.nvfoot10;
    nvfoot11.textContent = language.es.nvfoot11;
    nvfoot12.textContent = language.es.nvfoot12;

  } else if (window.location.hash === "#zh") {

    nvabout.textContent = language.zh.nvabout;
    nvportfolio.textContent = language.zh.nvportfolio;
    nvcontact.textContent = language.zh.nvcontact;
    nvback.textContent = language.zh.nvback;
    nvfurniture.textContent = language.zh.nvfurniture;
    nvhomeapp.textContent = language.zh.nvhomeapp;
    nvclothing.textContent = language.zh.nvclothing;
    nvfashionacc.textContent = language.zh.nvfashionacc;
    nvbags.textContent = language.zh.nvbags;
    nvgadgets.textContent = language.zh.nvgadgets;
    nvcars.textContent = language.zh.nvcars;
    nvcons.textContent = language.zh.nvcons;
    nvZn.textContent = language.zh.nvZn;
    nvEn.textContent = language.zh.nvEn;
    nvEs.textContent = language.zh.nvEs;
    nvKr.textContent = language.zh.nvKr;
    nvLa.textContent = language.zh.nvLa;
    //Index
    nvvalue.textContent = language.zh.nvvalue;
    nvindfur.textContent = language.zh.nvindfur;
    nvhomeint.textContent = language.zh.nvhomeint;
    nvhomeapl.textContent = language.zh.nvhomeapl;
    nvimprove.textContent = language.zh.nvimprove;
    nvcloth.textContent = language.zh.nvcloth;
    nvfashfo.textContent = language.zh.nvfashfo;
    nvfashacc.textContent = language.zh.nvfashacc;
    nvbeyou.textContent = language.zh.nvbeyou;
    nvbgs.textContent = language.zh.nvbgs;
    nvwituev.textContent = language.zh.nvwituev;
    nvgadtech.textContent = language.zh.nvgadtech;
    nvpartof.textContent = language.zh.nvpartof;
    nvcarx.textContent = language.zh.nvcarx;
    nvspare.textContent = language.zh.nvspare;
    nvcontr.textContent = language.zh.nvcontr;
    nvbuildmat.textContent = language.zh.nvbuildmat;
    //About
    nvex1.textContent = language.zh.nvex1;
    nvex2.textContent = language.zh.nvex2;
    nvex3.textContent = language.zh.nvex3;
    nvex4.textContent = language.zh.nvex4;
    nvex5.textContent = language.zh.nvex5;
    nvex7.textContent = language.zh.nvex7;
    nvex8.textContent = language.zh.nvex8;
    nvex9.textContent = language.zh.nvex9;
    //Capability
    nvcap1.textContent = language.zh.nvcap1;
    nvcap2.textContent = language.zh.nvcap2;
    nvcap3.textContent = language.zh.nvcap3;
    nvcap4.textContent = language.zh.nvcap4;
    nvcap5.textContent = language.zh.nvcap5;
    nvcap6.textContent = language.zh.nvcap6;
    nvcap7.textContent = language.zh.nvcap7;
    nvcap8.textContent = language.zh.nvcap8;
    nvcap9.textContent = language.zh.nvcap9;
    nvcap10.textContent = language.zh.nvcap10;
    nvcap11.textContent = language.zh.nvcap11;
    nvcap12.textContent = language.zh.nvcap12;
    //Join
    nvjoin1.textContent = language.zh.nvjoin1;
    nvjoin2.textContent = language.zh.nvjoin2;
    nvjoin3.textContent = language.zh.nvjoin3;
    nvjoin4.textContent = language.zh.nvjoin4;
    nvjoin5.textContent = language.zh.nvjoin5;
    nvjoin6.textContent = language.zh.nvjoin6;
    nvjoin7.textContent = language.zh.nvjoin7;
    nvjoin8.textContent = language.zh.nvjoin8;
    //Contact
    nvfoot1.textContent = language.zh.nvfoot1;
    nvfoot2.textContent = language.zh.nvfoot2;
    nvfoot3.textContent = language.zh.nvfoot3;
    nvfoot4.textContent = language.zh.nvfoot4;
    nvfoot5.textContent = language.zh.nvfoot5;
    nvfoot6.textContent = language.zh.nvfoot6;
    nvfoot7.textContent = language.zh.nvfoot7;
    nvfoot8.textContent = language.zh.nvfoot8;
    nvfoot9.textContent = language.zh.nvfoot9;
    nvfoot10.textContent = language.zh.nvfoot10;
    nvfoot11.textContent = language.zh.nvfoot11;
    nvfoot12.textContent = language.zh.nvfoot12;

  } else if (window.location.hash === "#kr") {

    nvabout.textContent = language.kr.nvabout;
    nvportfolio.textContent = language.kr.nvportfolio;
    nvcontact.textContent = language.kr.nvcontact;
    nvback.textContent = language.kr.nvback;
    nvfurniture.textContent = language.kr.nvfurniture;
    nvhomeapp.textContent = language.kr.nvhomeapp;
    nvclothing.textContent = language.kr.nvclothing;
    nvfashionacc.textContent = language.kr.nvfashionacc;
    nvbags.textContent = language.kr.nvbags;
    nvgadgets.textContent = language.kr.nvgadgets;
    nvcars.textContent = language.kr.nvcars;
    nvcons.textContent = language.kr.nvcons;
    nvZn.textContent = language.kr.nvZn;
    nvEn.textContent = language.kr.nvEn;
    nvEs.textContent = language.kr.nvEs;
    nvKr.textContent = language.kr.nvKr;
    nvLa.textContent = language.kr.nvLa;
    //Index
    nvvalue.textContent = language.kr.nvvalue;
    nvindfur.textContent = language.kr.nvindfur;
    nvhomeint.textContent = language.kr.nvhomeint;
    nvhomeapl.textContent = language.kr.nvhomeapl;
    nvimprove.textContent = language.kr.nvimprove;
    nvcloth.textContent = language.kr.nvcloth;
    nvfashfo.textContent = language.kr.nvfashfo;
    nvfashacc.textContent = language.kr.nvfashacc;
    nvbeyou.textContent = language.kr.nvbeyou;
    nvbgs.textContent = language.kr.nvbgs;
    nvwituev.textContent = language.kr.nvwituev;
    nvgadtech.textContent = language.kr.nvgadtech;
    nvpartof.textContent = language.kr.nvpartof;
    nvcarx.textContent = language.kr.nvcarx;
    nvspare.textContent = language.kr.nvspare;
    nvcontr.textContent = language.kr.nvcontr;
    nvbuildmat.textContent = language.kr.nvbuildmat;
    //About
    nvex1.textContent = language.kr.nvex1;
    nvex2.textContent = language.kr.nvex2;
    nvex3.textContent = language.kr.nvex3;
    nvex4.textContent = language.kr.nvex4;
    nvex5.textContent = language.kr.nvex5;
    nvex7.textContent = language.kr.nvex7;
    nvex8.textContent = language.kr.nvex8;
    nvex9.textContent = language.kr.nvex9;
    //Capability
    nvcap1.textContent = language.kr.nvcap1;
    nvcap2.textContent = language.kr.nvcap2;
    nvcap3.textContent = language.kr.nvcap3;
    nvcap4.textContent = language.kr.nvcap4;
    nvcap5.textContent = language.kr.nvcap5;
    nvcap6.textContent = language.kr.nvcap6;
    nvcap7.textContent = language.kr.nvcap7;
    nvcap8.textContent = language.kr.nvcap8;
    nvcap9.textContent = language.kr.nvcap9;
    nvcap10.textContent = language.kr.nvcap10;
    nvcap11.textContent = language.kr.nvcap11;
    nvcap12.textContent = language.kr.nvcap12;
    //Join
    nvjoin1.textContent = language.kr.nvjoin1;
    nvjoin2.textContent = language.kr.nvjoin2;
    nvjoin3.textContent = language.kr.nvjoin3;
    nvjoin4.textContent = language.kr.nvjoin4;
    nvjoin5.textContent = language.kr.nvjoin5;
    nvjoin6.textContent = language.kr.nvjoin6;
    nvjoin7.textContent = language.kr.nvjoin7;
    nvjoin8.textContent = language.kr.nvjoin8;
    //Contact
    nvfoot1.textContent = language.kr.nvfoot1;
    nvfoot2.textContent = language.kr.nvfoot2;
    nvfoot3.textContent = language.kr.nvfoot3;
    nvfoot4.textContent = language.kr.nvfoot4;
    nvfoot5.textContent = language.kr.nvfoot5;
    nvfoot6.textContent = language.kr.nvfoot6;
    nvfoot7.textContent = language.kr.nvfoot7;
    nvfoot8.textContent = language.kr.nvfoot8;
    nvfoot9.textContent = language.kr.nvfoot9;
    nvfoot10.textContent = language.kr.nvfoot10;
    nvfoot11.textContent = language.kr.nvfoot11;
    nvfoot12.textContent = language.kr.nvfoot12;
  }
}
