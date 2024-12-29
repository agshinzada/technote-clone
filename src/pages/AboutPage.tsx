import cover from "../assets/cover.webp";
const AboutPage = () => {
  return (
    <div className="text-lg flex flex-col gap-4 my-6">
      <p>
        &nbsp; &nbsp; "technote.az" informasiya portalı "Technote Media"
        şirkətinə məxsusdur. 2015-ci ildən Azərbaycanda fəaliyyət göstərən
        platformanın əsas məqsədi ölkədə və dünyada baş verən ən son texnoloji
        yenilikləri, hadisələri doğma dildə azərbaycanlı oxucuya çatdırmaqdır.
        Şirkətimizin əsas vizyonu ölkəmizdə və dünayda baş verən texnoloji
        hadisələri təmamilə tərəfsiz bir şəkildə işıqlandırmaq və texnoloji
        məlumatları ilk mənbəsindən oxucusuna çatdırmaqla, ölkənin ən
        güvənilinir texnologiya informasiya agentliyi olmaqdır.
      </p>
      <div className="flex justify-center">
        <img
          src={cover}
          alt="cover"
          className="rounded-md max-h-[512px] w-auto"
        />
      </div>
      <p>
        &nbsp; &nbsp; Bu istiqamətdə çalışan komandamız hər il sahənin ən böyük
        texnologiya konfrasnlarında iştirak etməklə, hadisə yerindən ən son
        məlumatları oxucularına çatdırmağı hədəf olaraq seçmişdir. Şirkət
        2015-ci ildə Fərid Pərdəşünasın təşəbbüsü əsasında startap olaraq
        fəaliyyətinə başlamışdır. 2016-2018-ci illərdə Barama İnnovasiya və
        Sahibkarlıq Mərkəzində inkubasiya proqramından keçən "Technote Media",
        müstəqil şirkət olaraq fəaliyyətini davam etdirir. "Technote" 2022-ci
        ildə Azərbaycan Rəqəmsal İnkişaf və İnnovasiya Agentliyi tərəfindən
        təsis edilən "IDDA Awards" müsabiqəsində ilin texnologiya mediası
        seçilmişdir.
      </p>
    </div>
  );
};

export default AboutPage;
