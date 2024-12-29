const CookiesPage = () => {
  return (
    <div className="mt-6 mb-3 text-lg">
      <strong>Çərəzlər barədə bəyanat</strong>
      <img
        src="https://s3.eu-central-1.amazonaws.com/technote-files/media/media/2023/12/01/what-are-cookies-ft-gettyimages3.jpg"
        alt="img"
        className="rounded-md mt-4"
      />
      <div>
        <p className="mt-5">
          Bu saytı və "Technote"un digər platformalarının istifadəsi haqqında
          daha çox məlumat üçün aşağıdakı şərtləri oxuyun.
        </p>

        <div className="my-3 max-w-[810px]">
          <strong className="mb-3 block">Tanımlamalar</strong>
          <p>
            "Technote MMC", biz: "Technote MMC", Məmməd Araz 20, AP Plaza -
            hüquqi ünvanına sahibdir Platforma: "Technote"un saytı,
            <a className="text-blue-400" href="https://technote.az">
              {" "}
              https://technote.az
            </a>
            , və digər (onlayn/rəqəmsal) platformalar. Siz, sizin: "Technote"
            tərəfindən təqdim olunan platformaların və ya digər xidmərlərin
            istifadəçisi.
          </p>
        </div>

        <div className="my-3">
          <strong className="mb-3 block">Çərəzlər nədir?</strong>
          <p>
            &nbsp; &nbsp;Platformamızda təklif olunan xidmətlərə görə biz və ya
            üçüncü tərəflər çərəz yerləşdirə bilərlər. Çərəz brauzerinizin
            kompüterinizə və ya mobil cihazınıza yerləşdirdiyi kiçik məlumat
            faylıdır. Çərəzlər “davamlı” və ya “sessiya” tipli ola bilərlər.
            Davamlı çərəzlər oflayn rejime keçdiyiniz təqdirdə belə
            kompüterinizdə qalmağa davam edir, sessiya çərəzləri isə veb
            brauzeri bağladıqdan sonra silinir. Üçüncü tərəflərin çərəzləri isə
            platformalarda üçüncü tərəflərə aid reklamlar yerləşdirildikə
            aktivləşir. Onlar sizin brauzer fəaliyyətiniz barədə məlumat
            toplayır və sizi müxtəlif saytlar arasında izləməyə imkan verir.
          </p>
        </div>

        <div className="my-3">
          <strong className="mb-3 block">
            Biz hansı çərəzləri istifadə edirik?
          </strong>
          <p>
            &nbsp; &nbsp;Platformamızdakı istifadəçi təcrübənizi
            optimallaşdırmaq və ya növbəti dəfə Platformamıza daxil olduqda
            cihazınızı tanımaq üçün istifadəçi seçimləriniz kimi şəxsi olmayan
            məlumatları yadda saxlamağımız üçün çərəzlərlərdən istifadə edirik.
            Bəzi çərəzlərdə şəxsi məlumatlarınız var: məsələn, platformaya daxil
            olduqda <strong>“məni yadda saxla”</strong> düyməsinə sıxdıqda,
            çərəzlər istifadəçi adınızı yaddaşında saxlayır. <br />
            <p className="my-4">
              Çərəzləri Platformamızda yerinə yetirdikləri rola görə aşağıdakı
              kimi təsnif etmək olar:
            </p>
            <ol className="list-disc ml-6 flex flex-col gap-3">
              <li>
                Funksional çərəzlər - Platformamızdan istifadə və hərəkət edən
                zaman, eləcə də Platformamızın düzgün işləməsini təmin etmək
                üçün vacibdir.
              </li>
              <li>
                Analitik çərəzlər - Platformanın istifadəsini optimallaşdırmaq
                üçün istifadəçilərin fəaliyyətləri (məsələn, ən çox baxdığınız
                səhifələr) barədə məlumat toplamaq üçün istifadə olunur.
              </li>
              <li>
                Reklam çərəzləri saytdakı uzun müddətli fəaliyyətinizi müxtəlif
                saytlar arasından izləmək üçün istifadə olunur. Bu çərəzlər öz
                maraqlarına uyğun olaraq fərdi istifadəçi profilləri yaradırlar.
                Bu maraqlara əsaslanaraq veb saytımızdakı reklamların məzmunu
                fərqli istifadəçi qrupları üçün uyğunlaşdırılacaqdır.
              </li>
              <li>
                Sosial çərəzlər seçilmiş sosial media saytlarının istifadəçiləri
                tərəfindən platformadan birbaşa məzmun paylaşmaq üçün istifadə
                olunur.
              </li>
            </ol>
          </p>
        </div>

        <div className="my-3">
          <strong className="mb-3 block">Gözlənilməz çərəzlər</strong>
          <p>
            &nbsp; &nbsp;İnternetin və veb saytların işləmə mexanizmlərinə görə,
            Platformamızda üçüncü tərəf tərəfindən yerləşdirilən bir çərəzi
            gözdən qaçırmış ola bilərik. Əgər yuxarıda göstərilən çərəzlər
            siyahısında olmayan çərəz tapsanız, bizə bildirin.
          </p>
        </div>

        <div className="my-3">
          <strong className="mb-3 block">Razılaşma</strong>
          <p>
            &nbsp; &nbsp;Çərəz bildirişlərindəki <strong>"razıyam"</strong>{" "}
            düyməsini sıxmaqla və ya Platformadan istifadə etməyə davam etməklə
            Platformamız tərəfindən çərəzlərin yerləşdirilməsinə və məlumatları
            oxumasına razılığınızı verirsiniz.
          </p>
        </div>

        <div className="my-3">
          <strong className="mb-3 block">Çərəzlərdən imtina edilmə</strong>
          <p>
            &nbsp; &nbsp;Kompüterinizdə və ya mobil cihazınızda qurulan
            çərəzləri idarə etmək üçün brauzerinizdəki parametrlərdən istifadə
            edə bilərsiniz. Daha çox məlumat əldə etmək üçün istifadə etdiyiniz
            veb brauzerinizdə mövcud olan çərəz parametrlərinə baxın. Aşağıdakı
            bağlantılar sizi birbaşa brauzerinizin tənzimləmələrinə daxil
            olmağınıza yönləndirəcəkdir.
          </p>
          <ol className="list-disc ml-6 flex flex-col gap-3 my-5">
            <li>
              <a
                className="text-blue-400"
                href="https://support.google.com/chrome/#topic=7438008"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                className="text-blue-400"
                href="https://support.mozilla.org/en-US/products/firefox"
              >
                Firefox
              </a>
            </li>
            <li>
              <a className="text-blue-400" href="">
                Microsoft EDGE
              </a>
            </li>
            <li>
              <a
                className="text-blue-400"
                href="https://support.apple.com/safari"
              >
                Safari
              </a>
            </li>
          </ol>
          <p>
            &nbsp; &nbsp;Əlavə olaraq, tərəflərin yerləşdirdikləri çərəzləri
            silmək və ümumiyyətlə çərəzlər haqqında daha çox məlumat əldə etmək
            üçün
            <a href="www.youronlinechoices.eu" className="text-blue-400">
              {" "}
              www.youronlinechoices.eu{" "}
            </a>{" "}
            saytına daxil ola bilərsiniz. Ancaq xahiş edirik unutmayın ki,
            çərəzlər Platformanın fasiləsiz fəaliyyət göstərməsi üçün vacibdir.
            Əgər brauzerinizdəki çərəzlərdən istifadədən imtina etsəniz,
            Platformanın bəzi xüsusiyyətlərindən istifadə edə bilməyəcəksiniz.
          </p>
        </div>
        <div className="my-3">
          <strong className="mb-3 block">Google Analytics</strong>
          <p>
            &nbsp; &nbsp;"Google Analytics" və "Google Remarketing Analytics"
            "Google" şirkətinin ("Amfiteatr Parkway, Mountain View, CA 94043",
            ABŞ) xidmətidir. "Google Analytics" veb saytımızın "Google"
            tərəfindən istifadəsini təhlil etməyə imkan verən çərəzlərdən
            istifadə edir. Veb saytımızın istifadəsi (IP adresiniz daxil
            olmaqla) barədə anonim olaraq çərəz tərəfindən toplanmış məlumatlar
            ABŞ-dəkı "Google" serverinə ötürülür və orada saxlanılır. Daha çox
            məlumat üçün "Google"un məxfilik siyasəti barədə ətraflı məlumat
            əldə etmək üçün aşağıdakı bağlantıdan oxuyun:{" "}
            {/* <a
              href="https://support.google.com/analytics/answer/6004245?hl=en"
              className="text-blue-400 text-wrap"
            >
              https://support.google.com/analytics/answer/6004245?hl=en
            </a> */}
            <span className="my-2 block">
              &nbsp; &nbsp;Siz "Google"un və Saytımızın Çərəzlər vasitəsilə
              topladığı məlumatları (IP adresiniz daxil olmaqla) istifadə
              etməsini əngəlləyə bilərsiniz. "Google Analytics" və məxfilik
              haqqında daha çox məlumat üçün{" "}
              <a
                href="http://tools.google.com/dlpage/gaoptout?hl=en"
                className="text-blue-400 text-wrap "
              >
                {" "}
                http://tools.google.com/dlpage/gaoptout?hl=en
              </a>{" "}
              ünvanına müraciət edin.
            </span>
          </p>
        </div>

        <div className="my-3">
          <strong className="mb-3 block">Sosial şəbəkə plaqinləri</strong>
          <p>
            <span className="block my-2">
              &nbsp; &nbsp; Platformamızda "Facebook", "X", "LinkedIn",
              "Instagram" və "Pinterest" də daxil olmaqla müxtəlif sosial
              şəbəkələrdən sosial plaqinlərdən ("plugins") istifadə olunur. Bu
              plaqinlərin köməyi ilə məzmun paylaşa və ya məhsul təklif edə
              bilərsiniz. Plaqinlər standart olaraq deaktiv edilir və buna görə
              heç bir məlumat göndərmir.
            </span>
            <span className="block my-2">
              &nbsp; &nbsp; "Sosial Medianı Aktivləşdir" düyməsini sıxaraq
              plaqinləri aktivləşdirə bilərsiniz. Bu plaqinlər həmçinin eyni
              əməliyyatı yerinə yetirməklə deaktiv edilə bilər. Bu plaqinlər
              aktiv olduqda, sizin brauzeriniz Platformamızın hər hansı
              xidmətinə daxil olduqda birbaşa sosial şəbəkələrin serverləri ilə
              əlaqə yaradır. Plaqinlərin məzmunları birbaşa sosial şəbəkədən
              brauzerinizə ötürülür və Platforma tərəfindən inteqrasiya olunur.
              Sosial şəbəkələrin aktiv plaqinlər vasitəsilə sizin haqqınızda
              məlumat toplamağını istəmirsinizsə, sosial şəbəkələrin
              plaqinlərini silə və ya brauzerinizin parametrlərində "Üçüncü
              tərəf çərəzlərini bloklayın" bölməsini seçə bilərsiniz.
            </span>
          </p>
        </div>
        <div className="my-3">
          <strong className="mb-3 block">Çərəz Bəyanatına dəyişikliklər</strong>
          <p>
            &nbsp; &nbsp;Bu bəyanat zaman-zaman dəyişdirilə bilər. Yeni bəyanat
            dərc edildikdən dərhal sonra qüvvəyə minəcəkdir. Çərəzlərdən necə
            istifadə etdiyimiz barədə məlumatlı olmaq üçün bəyanatlarımızı
            tez-tez yoxlayın.
          </p>
        </div>
        <p className="my-2 italic">
          Bu bəyanat sonuncu dəfə 23 avqust 2023-cü il tarixində yenilənmişdir.
        </p>
        <p className="font-bold">
          Bu bəyanat yalnız Azərbaycan Respublikası qanunları ilə tənzimlənir.
          Bu bəyanat ilə əlaqədar yarana biləcək hər hansı mübahisə yalnız
          Azərbaycan Respublikasındakı səlahiyyətli məhkəmələrə göndəriləcəkdir.
        </p>
      </div>
    </div>
  );
};

export default CookiesPage;
