import CoverSectionItem from "./CoverSectionItem";

const CoverSection = () => {
  return (
    <div className=" grid-cols-2 md:grid-cols-3 gap-6 mb-5 mt-2 md:my-8 grid">
      <div className="col-span-2">
        <CoverSectionItem
          data={{
            title:
              "Oyunlar artıq belə görünəcək: Unreal Engine 5.5-dən yeni video yayımlanıb!",
            image:
              "https://static.technote.az/media/posts/thumbnail/unreal_engine_5.5.jpeg",
            link: "/texnologiya-xeberleri/oyunlar-artiq-bele-gorunecek-unreal-engine-55-den-yeni-video-yayimlanib",
            size: true,
          }}
        />
      </div>
      <div className="col-span-1 md:block hidden">
        <CoverSectionItem
          data={{
            title: "GTA 6-nın yeni treyleri bu gün yayımlana bilər!",
            image:
              "https://static.technote.az/media/posts/thumbnail/gta6_-_27_december.jpeg",
            link: "/diger/gta-6-nin-yeni-treyleri-bu-gun-yayimlana-biler",
            size: false,
          }}
        />
      </div>
    </div>
  );
};

export default CoverSection;
