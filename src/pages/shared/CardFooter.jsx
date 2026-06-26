import img1 from "../../assets/428x573 (3).png"
import img2 from "../../assets/428x573 (4).png"
import img3 from "../../assets/428x573 (5).png"

export default function CardFooter() {
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-20!">
                <div className="relative group text-black w-fit">
                    <img src={img1} alt="" className="w-[350px] h-[352px]" />
                    <div className="absolute inset-0 bg-yellow-400 p-5 opacity-0 pt-20! group-hover:opacity-100 transition-all duration-300">
                        <h3 className="font-bold text-xl mb-10!">Mortgage Registration</h3>
                        <p className="text-xl">
                            A person applying for a mortgage in the United Arab Emirates must meet the following requirements
                        </p>
                        <button className="absolute bottom-5 left-5 font-bold"> See project →</button>
                    </div>
                </div>
                <div className="relative group text-black w-fit">
                    <img src={img2} alt="" className="w-[350px] h-[352px]" />
                    <div className="absolute inset-0 bg-yellow-400 p-5 opacity-0 pt-20! group-hover:opacity-100 transition-all duration-300">
                        <h3 className="font-bold text-xl mb-10!">Mortgage Registration</h3>
                        <p className="text-xl">
                            A person applying for a mortgage in the United Arab Emirates must meet the following requirements
                        </p>
                        <button className="absolute bottom-5 left-5 font-bold"> See project →</button>
                    </div>
                </div>
                <div className="relative group text-black w-fit">
                    <img src={img3} alt="" className="w-[350px] h-[352px]" />
                    <div className="absolute inset-0 bg-yellow-400 p-5 opacity-0 pt-20! group-hover:opacity-100 transition-all duration-300">
                        <h3 className="font-bold text-xl mb-10!">Mortgage Registration</h3>
                        <p className="text-xl">
                            A person applying for a mortgage in the United Arab Emirates must meet the following requirements
                        </p>
                        <button className="absolute bottom-5 left-5 font-bold"> See project →</button>
                    </div>
                </div>
            </div>
        </>
    )
}
