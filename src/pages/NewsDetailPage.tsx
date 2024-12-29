import Button from "../components/Button/Button";
import WeeklyNewsList from "../components/News/WeeklyNewsList";
import ButtonWithImage from "../components/Button/ButtonWithImage";
import ButtonCustom from "../components/Button/ButtonCustom";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import whatsapp from "../assets/whatsapp.svg";
import linkedin from "../assets/linkedin.svg";
import NewsList from "../components/News/NewsList";
import news from "../assets/data/news.json";
import { useParams } from "react-router-dom";
import { NewsListItemProps } from "../types/news";

const NewsDetailPage = () => {
  const params = useParams();
  const data: NewsListItemProps[] = news.feed.filter(
    (item) => item.categoryUrl === params.category
  );
  return (
    <div className="my-7">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-8">
        <div className="col-span-2">
          <img
            src="https://static.technote.az/media/posts/thumbnail/unreal_engine_5.5.jpeg"
            alt="cover"
            className="rounded-xl"
          />
          <h2 className="text-4xl font-extrabold my-5">
            Oyunlar artıq belə görünəcək: Unreal Engine 5.5-dən yeni video
            yayımlanıb!
          </h2>
          <div className="flex justify-between gap-2">
            <div className="flex gap-3">
              <Button label={"Elm & Texnologiya"} link="" hover={true} />
              <Button label={"27.12.2024"} link="" hover={true} />
            </div>
            <ButtonWithImage label={"Farid Pardashunas"} link="" hover={true} />
          </div>

          {/* CONTENT */}
          <div>
            <h3 className="text-lg font-bold my-5">
              &nbsp; &nbsp; Unreal Engine 5-in MegaLights xüsusiyyətini nümayiş
              etdirən yeni bir video yayımlanıb.
            </h3>
            <p className="text-[16px]">
              &nbsp; &nbsp; MegaLights, Lumen texnologiyası ilə müqayisədə
              50%-dək performans artışı təmin etməklə yanaşı, daha yüksək təsvil
              ölçülərində heyrətamiz görüntü keyfiyyəti təklif edir.
              MxBenchmarkPC tərəfindən YouTube-da yayımlanan bir video,
              Quixel-in Dark Ruins texniki demosu vasitəsilə bu yeni
              texnologiyanın gücünü nümayiş etdirib.
            </p>
            <iframe
              width="874"
              height="360"
              src="https://www.youtube.com/embed/aXnhKix16UQ"
              title="Unreal Engine 5.5 MegaLights Demo - Massive Up to 50% Performance Boost and Better Image Quality"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="my-5 w-full"
            ></iframe>
            <p className="text-[16px]">
              &nbsp; &nbsp; MegaLights, tərtibatçılara eyni anda yüzlərlə
              dinamik kölgə yaradan işığı idarə etmək imkanı verən və "işıqların
              Nanite-i" kimi tanınan eksperimental bir xüsusiyyətdir. Bu
              yenilik, işıqlandırma dizaynında sərbəstlik təmin edərkən yüksək
              performansı qorumaq baxımından da olduqca effektivdir. Unreal
              Engine 5.5-in təqdim etdiyi yeniliklər bununla da məhdudlaşmır.
              Yeni versiya inkişaf etdirilmiş Sequencer vasitəsilə animasiya
              redaktəsində daha çox çeviklik təmin edir. Bununla yanaşı,
              MetaHuman Animator sayəsində yalnız səs performansları əsasında
              yüksək keyfiyyətli üz animasiyaları yaratmaq da mümkün olur.
            </p>
          </div>
          <div className="my-8 flex gap-3">
            <ButtonCustom>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  className="stroke-black group-hover:stroke-black dark:stroke-white dark:hover:stroke-black"
                ></path>
                <path
                  d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  className="stroke-black group-hover:stroke-black dark:stroke-white dark:hover:stroke-black"
                ></path>
              </svg>
              <span>Linki kopyala</span>
            </ButtonCustom>
            <ButtonCustom>
              <img src={facebook} alt="facebook" className="w-6" />
              <img src={twitter} alt="facebook" className="w-6" />
              <img src={whatsapp} alt="facebook" className="w-6" />
              <img src={linkedin} alt="facebook" className="w-6" />
            </ButtonCustom>
          </div>
          <div className="flex gap-3">
            <Button label="lumen" hover={true} link="" />
            <Button label="unreal engine" hover={true} link="" />
            <Button label="megalights" hover={true} link="" />
            <Button label="unreal engine 5.5" hover={true} link="" />
          </div>

          {/* SAME NEWS */}
          <div className="mt-10">
            <h2 className="text-2xl md:text-4xl font-bold">Bənzər xəbərlər</h2>
            <NewsList data={data} />
          </div>
        </div>
        <div className="col-span-1 md:block hidden">
          <Button label="Həftənin xəbərləri" link="" hover={true} />
          <WeeklyNewsList />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
