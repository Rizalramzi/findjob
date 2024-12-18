import  Text  from "@/components/text/text";
import  Input  from "@/components/input/input";

export default function Register(){
    return (
        <div className="flex items-center justify-center h-[100vh] px-[5vw]">
            <div className="w-1/2 flex items-center justify-center">
                <img src="/auth.svg" alt=""  className="w-[33.646vw] h-[32.396vw] object-contain"/>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <div className="space-y-[2vw]">
                        <div>
                            <Text size={64} weight="semibold" color="main" children="Masuk"/>
                            <Text size={22} weight="light" color="main" children="Masuk ke akunmu"/>
                        </div>
                        <form action="" className="w-[25vw] h-auto space-y-[1.5vw]">
                            <Input type="text" label="Email / Username" placeholder="Masukkan Email / Username"/>
                            <Input type="password" label="Password" placeholder="Masukkan Password"/>
                            <button type="submit" className="w-full py-[1.042vw] bg-main col-span-2 font-outfit text-white rounded-lg">Masuk Sekarang</button>
                        </form>
                        <Text size={16} weight="light" color="dark" className="col-span-2 text-center">
                            Belum punya akun?{' '}
                            <span className="font-light text-main"><a href="/register">Daftar disini</a></span>
                        </Text>
                </div>
            </div>
        </div>
    )
}