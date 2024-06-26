import homeLogo from '../../assets/home.png'

function Home() {
    return (
        <>
        <div className="bg-white flex justify-center">
        <div className='container grid grid-cols-1 text-black mt-6' >
            <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>Farmácia Generation</h2>
            <p className='text-xl'> Inovação em saúde para toda a família.</p>

            <div className="flex justify-around gap-4">
            
                <button className='rounded bg-[#5a7cac]  text-white py-2 px-4'>Ver produtos</button>
            </div>
            </div>

            <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-50' />
    
            </div>
        </div>
        </div>
    
    </>
    );
}

export default Home;