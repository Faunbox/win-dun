import { Button, Modal, Spacer, Text, useModal } from "@nextui-org/react";
import { useRouter } from "next/router";
import {
  PrivacyPoliticsEn,
  PrivacyPoliticsNl,
  PrivacyPoliticsPl,
} from "../header/navbar";

const PrivacyPolicyModal = () => {
  const { setVisible, bindings } = useModal();
  const { locale } = useRouter();

  return (
    <Button light size={"@xs"} onClick={() => setVisible(true)}>
      {locale === "pl" && PrivacyPoliticsPl}
      {locale === "en" && PrivacyPoliticsEn}
      {locale === "nl" && PrivacyPoliticsNl}
      <Modal
        scroll
        width="700px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        css={{ background: "#333" }}
        {...bindings}
      >
        <Modal.Header css={{ textAlign: "center" }}>
          <Text id="modal-title" h2 css={{ color: "White" }}>
            Polityka prywatności
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description" css={{ color: "White" }}>
            Serwis nie zbiera w sposób automatyczny żadnych informacji, z
            wyjątkiem informacji zawartych w plikach cookies. Pliki cookies
            (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności
            pliki tekstowe, które przechowywane są w urządzeniu końcowym
            Użytkownika Serwisu i przeznaczone są do korzystania ze stron
            internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony
            internetowej, z której pochodzą, czas przechowywania ich na
            urządzeniu końcowym oraz unikalny numer. Podmiotem zamieszczającym
            na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz
            uzyskującym do nich dostęp jest operator Serwisu, firma WIT DUN z
            siedzibą pod adresem Źródlana 2A, 34-321 Łękawica.
          </Text>
          <Spacer y={1} />
          <Text id="modal-description" b css={{ color: "White" }}>
            Pliki cookies wykorzystywane są w celu:
          </Text>
          <Text id="modal-description" css={{ color: "White" }}>
            -Dostosowania zawartości stron internetowych Serwisu do preferencji
            Użytkownika oraz optymalizacji korzystania ze stron internetowych; w
            szczególności pliki te pozwalają rozpoznać urządzenie Użytkownika
            Serwisu i odpowiednio wyświetlić stronę internetową, dostosowaną do
            jego indywidualnych potrzeb;
          </Text>
          <Text css={{ color: "White" }}>
            -Tworzenia statystyk, które pomagają zrozumieć, w jaki sposób
            Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia
            ulepszanie ich struktury i zawartości;
          </Text>
          <Spacer y={1} />
          <Text css={{ color: "White" }}>
            W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies:
            „sesyjne” (session cookies) oraz „stałe” (persistent cookies).
            Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w
            urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia
            strony internetowej lub wyłączenia oprogramowania (przeglądarki
            internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu
            końcowym Użytkownika przez czas określony w parametrach plików
            cookies lub do czasu ich usunięcia przez Użytkownika. W ramach
            Serwisu stosowane są następujące rodzaje plików cookies:
          </Text>
          <Text b css={{ color: "White" }}>
            W ramach Serwisu stosowane są następujące rodzaje plików cookies:
          </Text>
          <Text css={{ color: "White" }}>
            „Niezbędne” pliki cookies, umożliwiające korzystanie z usług
            dostępnych w ramach Serwisu, np. uwierzytelniające pliki cookies
            wykorzystywane do usług wymagających uwierzytelniania w ramach
            Serwisu;
          </Text>
          <Text css={{ color: "White" }}>
            Pliki cookies służące do zapewnienia bezpieczeństwa, np.
            wykorzystywane do wykrywania nadużyć w zakresie uwierzytelniania w
            ramach Serwisu;
          </Text>
          <Text css={{ color: "White" }}>
            „Wydajnościowe” pliki cookies, umożliwiające zbieranie informacji o
            sposobie korzystania ze stron internetowych Serwisu;
          </Text>
          <Spacer y={1} />
          <Text css={{ color: "white" }}>
            W wielu przypadkach oprogramowanie służące do przeglądania stron
            internetowych (przeglądarka internetowa) domyślnie dopuszcza
            przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
            Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień
            dotyczących plików cookies. Ustawienia te mogą zostać zmienione w
            szczególności w taki sposób, aby blokować automatyczną obsługę
            plików cookies w ustawieniach przeglądarki internetowej bądź
            informować o ich każdorazowym zamieszczeniu w urządzeniu Użytkownika
            Serwisu. Szczegółowe informacje o możliwości i sposobach obsługi
            plików cookies dostępne są w ustawieniach oprogramowania
            (przeglądarki internetowej). Operator Serwisu informuje, że
            ograniczenia stosowania plików cookies mogą wpłynąć na niektóre
            funkcjonalności dostępne na stronach internetowych Serwisu. Pliki
            cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu i
            wykorzystywane mogą być również przez współpracujących z operatorem
            Serwisu reklamodawców oraz partnerów. Więcej informacji na temat
            plików cookies dostępnych jest pod{" "}
            <a
              href="https://wszystkoociasteczkach.pl/po-co-sa-ciasteczka/"
              style={{ color: "white" }}
            >
              {" "}
              tym LINKIEM
            </a>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto bordered color="error" onClick={() => setVisible(false)}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </Button>
  );
};

export default PrivacyPolicyModal;
