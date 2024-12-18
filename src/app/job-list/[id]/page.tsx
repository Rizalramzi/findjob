import Text from "@/components/text/text";
import Button from "@/components/button/button";
import NavMenu from "@/components/navMenu/navMenu";


async function fetchServiceDetail(id: number) {
  try {
    const response = await fetch('https://tech-class.datacore.machinevision.global/items/Service_ramzi', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh',
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();

    const serviceData = data.data[id - 1];
    
    return {
      id: id,
      title: serviceData.title,
      description: serviceData.description,
      price: `${serviceData.price || 25.00} USD / hrs`,
      skills: ['HTML', 'CSS', 'Tailwind']
    };
  } catch (error) {
    console.error('Error fetching service data:', error);
    return null;
  }
}

export default async function JobDetail({ params }: { params: { id: string } }) {
  const service = await fetchServiceDetail(parseInt(params.id));

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <nav className="flex items-center justify-between py-[2vw] px-[4.167vw]">
        <div className="flex items-center space-x-[8vw]">
          <div className="flex items-center space-x-[0.7vw]">
            <img src="/logo.svg" alt="" className="w-[2.604vw] h-[2.604vw]" />
            <Text size={24} weight="medium" color="main" children="findjob." />
          </div>
          <NavMenu
            items={[
              { label: "Beranda", size: 20, weight: "regular", link: "/" },
              { label: "Eksplor Layanan", size: 20, weight: "regular", link: "/service" },
              { label: "Kategori", size: 20, weight: "regular", link: "category" },
              { label: "Tentang Kami", size: 20, weight: "regular", link: "about" },
              { label: "Kontak", size: 20, weight: "regular", link: "contact" },
            ]}
          />
        </div>
        <div className="flex items-center space-x-[1vw]">
          <Button type="button" size="desktop" variant="full" children="Masuk" />
          <Button type="button" size="desktop" variant="outline" children="Daftar" href="/register" />
        </div>
      </nav>

      <div className="px-[8vw] mt-[3vw] w-full flex justify-between">
        <div className="w-3/4">
          <Text size={36} weight="medium" color="dark" children={service.title} />
          <div className="flex items-center space-x-[1vw] mt-[0.5vw]">
            <Text size={16} weight="light" color="dark" children="Diunggah 4 hari lalu" />
            <div className="flex items-center space-x-[0.5vw]">
              <img src="/price.svg" alt="" className="w-auto h-[1.302vw]" />
              <Text size={14} weight="regular" color="dark" children={service.price} />
            </div>
            <div className="flex items-center space-x-[0.5vw]">
              <img src="/location.svg" alt="" className="w-auto h-[1.302vw]" />
              <Text size={14} weight="regular" color="dark" children="United State" />
            </div>
          </div>
          <Text size={20} weight="light" color="dark" className="mt-[2vw]">
            <span>{service.description}</span>
          </Text>
          <Text size={20} weight="regular" color="dark" children="Project Type : One time Project" className="mt-[3vw]" />
          <div className="mt-[3vw]">
            <Text size={20} weight="regular" color="dark">
              <span>Skills :</span>
            </Text>
            <ul className="list-disc ps-[2vw]">
              {service.skills?.map((skill, index) => (
                <li key={index}>
                  <Text size={20} weight="light" color="dark" children={skill} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-1/4 flex flex-col items-start space-y-[1vw]">
          <Button type="button" size="desktop" variant="full" children="Ajukan Sekarang" />
          <Button type="button" size="desktop" variant="outline" children="Simpan Pekerjaan" />
          <div>
            <Text size={24} weight="regular" color="dark">
              <span>About the client</span>
            </Text>
            <Text size={20} weight="light" color="dark">
              <span>
                Payment method verified
                <br /><br />
                Rating is 5 out of 5.
                <br />
                5.0
                <br />
                5.00 of 36 reviews
                <br /><br />
                United State
                <br />
                NYC 9:20 AM
                <br /><br />
                138 jobs posted
                <br />
                51% hire rate, 1 open job
                <br /><br />
                $54K total spent
                <br />
                80 hires, 3 active
                <br /><br />
                $18.63/hr avg hourly rate paid
                <br />
                1,963 hours
                <br /><br /><br />
                Member since Oct 25, 2003
              </span>
            </Text>
          </div>
        </div>
      </div>

      <footer className="w-full mt-[10vw] bg-main py-[2vw]">
        <div className="px-[8vw] flex justify-between items-center">
          <div className="w-1/3 space-y-[2vw]">
            <div className="flex items-center space-x-[1vw]">
              <svg className="w-[2.604vw] h-[2.604vw] stroke-white fill-transparent" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.41421" y="25" width="33.3553" height="33.3553" transform="rotate(-45 1.41421 25)" strokeWidth="2" />
                <rect x="7.92758" y="28.0103" width="24.5165" height="24.5165" transform="rotate(-55 7.92758 28.0103)" strokeWidth="2" />
                <rect x="14.5827" y="28.7916" width="15.6777" height="15.6777" transform="rotate(-65 14.5827 28.7916)" strokeWidth="2" />
                <rect x="21.5805" y="28.4194" width="6.83883" height="6.83883" transform="rotate(-90 21.5805 28.4194)" strokeWidth="2" />
              </svg>
              <Text size={24} weight="medium" color="white" children="findjob." />
            </div>
            <div className="max-w-[26.979vw]">
              <Text
                size={20}
                weight="regular"
                color="white"
                children="Sedikit lagi tentang finjob. FindJob adalah platform yang menghubungkan freelancer berbakat dengan perusahaan yang membutuhkan layanan profesional."
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}