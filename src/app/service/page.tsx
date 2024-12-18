import  Text  from "@/components/text/text";
import  Button  from "@/components/button/button";
import NavMenu from "@/components/navMenu/navMenu";

export default function Service() {
    return(
        <div>
            <nav className="flex items-center justify-between py-[2vw] px-[4.167vw]">
                <div className="flex items-center space-x-[8vw]">
                <div className="flex items-center space-x-[0.7vw]">
                    <img src="/logo.svg" alt="" className="w-[2.604vw] h-[2.604vw]"/>
                    <Text
                    size={24}
                    weight="medium"
                    color="main"
                    children="findjob."
                    />
                </div>
                <NavMenu
                    items={[
                    { label: "Beranda", size: 20, weight: "regular", link:"/"},
                    { label: "Eksplor Layanan", size: 20, weight: "regular", link:"/service" },
                    { label: "Kategori", size: 20, weight: "regular", link:"category" },
                    { label: "Tentang Kami", size: 20, weight: "regular", link:"about" },
                    { label: "Kontak", size: 20, weight: "regular", link:"contact" },
                    ]}/>
                </div>
                <div className="flex items-center space-x-[1vw]">
                <Button
                    type="button"
                    size="desktop"
                    variant="full"
                    children="Masuk"
                />
                <Button
                    type="button"
                    size="desktop"
                    variant="outline"
                    children="Daftar"
                    href="/register"
                />
                </div>
            </nav>

            <section className="px-[8vw] mt-[2vw]">
        <div className="w-full flex items-center">
          <div className="w-3/5 space-y-[2vw]">
            <div className="space-y-[1.406vw]">
              <div className="max-w-[43.75vw]">
                <Text size={64} weight="regular" color="dark">
                  Bantu bisnis tumbuh dengan{' '}
                  <span className="font-semibold text-main">Profesional Berpengalaman</span>
                </Text>
              </div>
              <div className="max-w-[39.063vw]">
                <Text size={20} weight="light" color="dark" children="Dukung pertumbuhan bisnis Anda dengan tenaga profesional berpengalaman dan layanan berkualitas. Kami siap membantu Anda mencapai target, mengatasi tantangan, dan meraih kesuksesan yang lebih tinggi."/>
              </div>
              <Button type="button" size="desktop" variant="full" children="Mulai Sekarang"/>
            </div>
            <div className="space-y-[1vw]">
              <Text size={20} weight="regular" color="light-dark" children="Didukung Oleh :"/>
              <div className="flex space-x-[1.5vw]">
                <img src="/sponsor-1.svg" alt=""  className="w-auto h-[1.563vw]"/>
                <img src="/sponsor-2.svg" alt=""  className="w-auto h-[1.563vw]"/>
                <img src="/sponsor-3.svg" alt=""  className="w-auto h-[1.563vw]"/>
                <img src="/sponsor-4.svg" alt=""  className="w-auto h-[1.563vw]"/>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex items-center justify-center">
            <img src="/hero-vector.svg" alt="" className="w-[31.25vw] h-[31.25vw]"/>
          </div>
        </div>
      </section>
        </div>
    )
}