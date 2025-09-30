const HeroSection = () => {
    return (
        // <div>
        //    <img className=" h-[600px] w-full" src="../../../public/hero-img.jpg" alt="Imagen de muestra"/>
        // </div>
        <div className="bg-black flex items-center justify-center"> {/* ocupa toda la pantalla */}
      <img
        src="https://i.ibb.co/9kRv40DF/hero-img.png"
        alt="Hero background"
        className="object-cover h-[300px] w-[300px]"
      />
    </div>
    );
}

export default HeroSection;