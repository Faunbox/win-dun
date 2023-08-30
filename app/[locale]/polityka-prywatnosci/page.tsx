import WhyHeaders from "@/components/Home/WhyHeaders";
import SectionHeader from "@/components/Typography/SectionHeader";
import { ReactNode } from "react";

const PrivacyDiv = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col my-2 md:my-4 gap-2">{children}</div>;
};

const PrivacyHeader = ({ children }: { children: ReactNode }) => {
  return <h3 className="font-bold text-lg">{children}</h3>;
};

const PrivacyPolitics = () => {
  return (
    <div className="flex flex-col container my-24 mx-auto px-8 lg:px-60 items-center justify-center text-center w-full">
      <SectionHeader>Polityka prywatności</SectionHeader>
      <WhyHeaders margin="mb-8" weight="light">
        Polityka prywatności opisuje zasady przetwarzania przez nas informacji
        na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw.
        cookies.
      </WhyHeaders>
      <div className="flex flex-col items-start text-left justify-center gap-4">
        <PrivacyDiv>
          <PrivacyHeader>1. Informacje ogólne</PrivacyHeader>{" "}
          <p>
            Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem
            url:{" "}
            <a href="https://wit-dun.eu" target="_blank" className="font-bold">
              www.wit-dun.eu
            </a>
            . Operatorem serwisu oraz Administratorem danych osobowych jest:
            <ul className="py-2">
              <li className="inline-block">
                <p className="font-bold inline-block">
                  - WitDun Express WITOLD DUNAT,
                </p>
                <p>ul. Źródlana 2A, 34-321 Łękawica</p>
              </li>
              <li>
                - Adres kontaktowy poczty elektronicznej operatora:
                <a href="mailto:kontakt@wit-dun.eu" className="font-bold">
                  {" "}
                  kontakt@wit-dun.eu
                </a>
              </li>
            </ul>{" "}
            Operator jest Administratorem Twoich danych osobowych w odniesieniu
            do danych podanych dobrowolnie w Serwisie. Serwis wykorzystuje dane
            osobowe w następujących celach:{" "}
            <ul className="py-2">
              <li>- Obsługa zapytań przez formularz</li>
              <li>- Przygotowanie, pakowanie, wysyłka towarów</li>
              <li>- Realizacja zamówionych usług</li>
              <li>- Prezentacja oferty lub informacji</li>
            </ul>
            Serwis realizuje funkcje pozyskiwania informacji o użytkownikach
            poprzez dobrowolnie wprowadzone w formularzach dane, które zostają
            wprowadzone do systemów Operatora oraz Poprzez zapisywanie w
            urządzeniach końcowych plików cookie (tzw. „ciasteczka”).
          </p>
        </PrivacyDiv>
        <PrivacyDiv>
          <PrivacyHeader>
            2. Wybrane metody ochrony danych stosowane przez Operatora
          </PrivacyHeader>{" "}
          <p>
            Miejsca logowania i wprowadzania danych osobowych są chronione w
            warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i
            dane logowania, wprowadzone na stronie, zostają zaszyfrowane w
            komputerze użytkownika i mogą być odczytane jedynie na docelowym
            serwerze. Istotnym elementem ochrony danych jest regularna
            aktualizacja wszelkiego oprogramowania, wykorzystywanego przez
            Operatora do przetwarzania danych osobowych, co w szczególności
            oznacza regularne aktualizacje komponentów programistycznych.
          </p>
        </PrivacyDiv>{" "}
        <PrivacyDiv>
          <PrivacyHeader>3. Hosting</PrivacyHeader>{" "}
          <p>
            Serwis jest hostowany (technicznie utrzymywany) na serwerach
            operatora: www.cal.pl
          </p>
        </PrivacyDiv>{" "}
        <PrivacyDiv>
          <PrivacyHeader>
            4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania
            danych
          </PrivacyHeader>{" "}
          <p>
            W niektórych sytuacjach Administrator ma prawo przekazywać Twoje
            dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania
            zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
            Administratorze. Dotyczy to takich grup odbiorców jak upoważnieni
            pracownicy i współpracownicy, którzy korzystają z danych w celu
            realizacji celu działania strony Twoje dane osobowe przetwarzane
            przez Administratora nie dłużej, niż jest to konieczne do wykonania
            związanych z nimi czynności określonych osobnymi przepisami (np. o
            prowadzeniu rachunkowości). W odniesieniu do danych marketingowych
            dane nie będą przetwarzane dłużej niż przez 3 lata. Przysługuje Ci
            prawo żądania od Administratora:{" "}
            <ul className="py-2 px-4">
              <li>dostępu do danych osobowych Ciebie dotyczących,</li>
              <li>ich sprostowania,</li>
              <li>usunięcia,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>oraz przenoszenia danych.</li>
            </ul>{" "}
            Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania
            wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu
            wykonania prawnie uzasadnionych interesów realizowanych przez
            Administratora, w tym profilowania, przy czym prawo sprzeciwu nie
            będzie mogło być wykonane w przypadku istnienia ważnych prawnie
            uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie
            interesów, praw i wolności, w szczególności ustalenia, dochodzenia
            lub obrony roszczeń. Na działania Administratora przysługuje skarga
            do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193
            Warszawa. Podanie danych osobowych jest dobrowolne, lecz niezbędne
            do obsługi Serwisu. W stosunku do Ciebie mogą być podejmowane
            czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym
            profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w
            celu prowadzenia przez Administratora marketingu bezpośredniego.
            Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu
            przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy
            ich poza teren Unii Europejskiej.
          </p>
        </PrivacyDiv>{" "}
        <PrivacyDiv>
          <PrivacyHeader>5. Informacje w formularzach</PrivacyHeader>{" "}
          <p>
            Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym
            dane osobowe, o ile zostaną one podane. Serwis może zapisać
            informacje o parametrach połączenia (oznaczenie czasu, adres IP).
            Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą
            powiązanie danych w formularzu z adresem e-mail użytkownika
            wypełniającego formularz. W takim wypadku adres e-mail użytkownika
            pojawia się wewnątrz adresu url strony zawierającej formularz. Dane
            podane w formularzu są przetwarzane w celu wynikającym z funkcji
            konkretnego formularza, np. w celu dokonania procesu obsługi
            zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług
            itp. Każdorazowo kontekst i opis formularza w czytelny sposób
            informuje, do czego on służy.
          </p>
        </PrivacyDiv>{" "}
        <PrivacyDiv>
          <PrivacyHeader>6. Logi Administratora</PrivacyHeader>{" "}
          <p>
            Informacje zachowaniu użytkowników w serwisie mogą podlegać
            logowaniu. Dane te są wykorzystywane w celu administrowania
            serwisem.
          </p>
        </PrivacyDiv>{" "}
        <PrivacyDiv>
          <PrivacyHeader>7. Istotne techniki marketingowe</PrivacyHeader>{" "}
          <p>
            Operator stosuje analizę statystyczną ruchu na stronie, poprzez
            Google Analytics (Google Inc. z siedzibą w USA). Operator nie
            przekazuje do operatora tej usługi danych osobowych, a jedynie
            zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek
            w urządzeniu końcowym użytkownika. W zakresie informacji o
            preferencjach użytkownika gromadzonych przez sieć reklamową Google
            użytkownik może przeglądać i edytować informacje wynikające z plików
            cookies przy pomocy narzędzia:
            https://www.google.com/ads/preferences/ Operator stosuje korzysta z
            piksela Facebooka. Ta technologia powoduje, że serwis Facebook
            (Facebook Inc. z siedzibą w USA) wie, że dana osoba w nim
            zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych,
            wobec których sam jest administratorem, Operator nie przekazuje od
            siebie żadnych dodatkowych danych osobowych serwisowi Facebook.
            Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym
            użytkownika.
          </p>
        </PrivacyDiv>{" "}
        <PrivacyDiv>
          <PrivacyHeader>
            8. Informacja o plikach cookies Serwis korzysta z plików cookies.
          </PrivacyHeader>{" "}
          <p>
            Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w
            szczególności pliki tekstowe, które przechowywane są w urządzeniu
            końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze
            stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę
            strony internetowej, z której pochodzą, czas przechowywania ich na
            urządzeniu końcowym oraz unikalny numer. Podmiotem zamieszczającym
            na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz
            uzyskującym do nich dostęp jest operator Serwisu. Pliki cookies
            wykorzystywane są w następujących celach: utrzymanie sesji
            użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie
            musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;
            realizacji celów określonych powyżej w części &#39;Istotne techniki
            marketingowe&#39; W ramach Serwisu stosowane są dwa zasadnicze rodzaje
            plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent
            cookies). Cookies „sesyjne” są plikami tymczasowymi, które
            przechowywane są w urządzeniu końcowym Użytkownika do czasu
            wylogowania, opuszczenia strony internetowej lub wyłączenia
            oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies
            przechowywane są w urządzeniu końcowym Użytkownika przez czas
            określony w parametrach plików cookies lub do czasu ich usunięcia
            przez Użytkownika. Oprogramowanie do przeglądania stron
            internetowych (przeglądarka internetowa) zazwyczaj domyślnie
            dopuszcza przechowywanie plików cookies w urządzeniu końcowym
            Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym
            zakresie. Przeglądarka internetowa umożliwia usunięcie plików
            cookies. Możliwe jest także automatyczne blokowanie plików cookies
            Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja
            przeglądarki internetowej. Ograniczenia stosowania plików cookies
            mogą wpłynąć na niektóre funkcjonalności dostępne na stronach
            internetowych Serwisu. Pliki cookies zamieszczane w urządzeniu
            końcowym Użytkownika Serwisu wykorzystywane mogą być również przez
            współpracujące z operatorem Serwisu podmioty, w szczególności
            dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook
            (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w
            USA).
          </p>
        </PrivacyDiv>{" "}
        <PrivacyDiv>
          <PrivacyHeader>
            9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać
            zgodę?
          </PrivacyHeader>
          <p>
            Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić
            ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików
            cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
            utrzymania preferencji użytkownika może utrudnić, a w skrajnych
            przypadkach może uniemożliwić korzystanie ze stron www W celu
            zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę
            internetową, której używasz i postępuj zgodnie z instrukcjami:
            <ul className="py-2 gap-2">
              <li>
                <a
                  href="https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history"
                  target="_blank"
                >
                  Edge
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer"
                  target="_blank"
                >
                  Internet Explorer
                </a>
              </li>
              <li>
                <a
                  href="http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647"
                  target="_blank"
                >
                  Chrome
                </a>
              </li>
              <li>
                <a href="http://support.apple.com/kb/PH5042" target="_blank">
                  Safari
                </a>
              </li>
              <li>
                <a
                  href="http://support.mozilla.org/pl/kb/W%C5%82%C4%85czanie%20i%20wy%C5%82%C4%85czanie%20obs%C5%82ugi%20ciasteczek"
                  target="_blank"
                >
                  Firefox
                </a>
              </li>
              <li>
                <a
                  href="http://help.opera.com/Windows/12.10/pl/cookies.html"
                  target="_blank"
                >
                  Opera
                </a>
              </li>
            </ul>
            Urządzenia mobilne:
            <ul className="py-2">
              <li>
                <a
                  href="http://support.google.com/chrome/bin/answer.py?hl=pl&answer=95647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Android
                </a>
              </li>
              <li>
                <a
                  href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari (iOS)
                </a>
              </li>
              <li>
                <a
                  href="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Windows Phone
                </a>
              </li>
            </ul>
          </p>
        </PrivacyDiv>
      </div>
    </div>
  );
};

export default PrivacyPolitics;
