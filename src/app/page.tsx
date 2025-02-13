"use client";

import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import TinderSlider from "@/components/TinderSlider";

export default function Home() {
  return (
    <div>
      {/* <div className=" ">
        <Header />
      </div> */}
      <div className=" ">{<TinderSlider />}</div>
      {/* <div className="bg-slate-400 border border-black rounded-md h-[200px] max-w-[95%] shadow mx-auto mt-5 py-1 px-3">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-start gap-1">
            <div>مسعود</div>
            <div>22 سال</div>
            <div>رشت</div>
            <div>مجرد</div>
          </div>

          <div className="flex items-center justify-start gap-1">
            <div>169cm</div>
            <div>74kg</div>
          </div>
        </div>

        <div className="mt-6">
          "☕️ عاشق قهوه‌های دست‌ساز، کوهنوردی در مه و نقاشی روی بوم خالی 📍|
          حتی با نقشه گم میشم! همصحبتی که آخر شب برام آواز بخونه 🎶"
        </div>
      </div> */}
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}
