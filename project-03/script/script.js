const btn = document.querySelector(".new-questions");

const questions = [
  "1. Proszę omówić jedną z wybranych strategii zarządzenia portfelem inwestycyjnym.",
  "2. Proszę omówić źródła finansowania korporacji i wskazać jakimi przesłankami kierują się zarządzający przy wyborze odpowiednich źródeł finansowania.",
  "3. Proszę omówić proces emisji papierów wartościowych.",
  "4. Proszę wskazać istotę i rodzaje innowacji w zarządzaniu przedsiębiorstwem.",
  "5. Proszę scharakteryzować system zarządzania innowacjami w przedsiębiorstwie.",
  "6. Proszę wymienić i krótko scharakteryzować typy ryzyka finansowego, jako nieodłącznego elementu zarządzania jednostką.",
  "7. Proszę scharakteryzować jedno z wybranych narzędzi ograniczających ryzyko finansowe – na podstawie jakich przesłanek podejmowana jest decyzja wyboru odpowiedniego narzędzia?",
  "8. Proszę zdefiniować podstawowe pojęcia odnoszące się do analizy CVP.",
  "9. Proszę scharakteryzować zagadnienie analizy sektora w kontekście 5-ciu sił Portera.",
  "10. Proszę wyjaśnić różnice między podejściem procesowym i funkcjonalnym w zarządzaniu przedsięwzięciami gospodarczymi.",
  "11. Proszę wskazać obszary zastosowania technologii informacyjno-komunikacyjnych w realizacji procesów biznesowych.",
  "12. Proszę wymienić i krótko scharakteryzować rozwiązania cloud computing z zakresu finansów i księgowości - na podstawie jakich przesłanek podejmowana jest decyzja wyboru odpowiedniego rozwiązania?",
  "13. Proszę omówić różnice między operacyjną i strategiczną rachunkowością zarządczą.",
  "14. Proszę omówić pojęcie systemu podatkowego.",
  "15. Proszę wymienić rodzaje i formy opodatkowania osób fizycznych prowadzących działalność gospodarczą.",
  "16. Proszę omówić funkcje stóp procentowych NBP.",
  "17. Proszę przedstawić istotę i znaczenie rynku międzybankowego.",
  "18. Proszę dokonać porównania ubezpieczenia osobowego z majątkowym.",
  "19. Proszę dokonać porównania kredytu z pożyczką.",
  "20. Proszę wskazać i omówić różnice między koncepcją outsourcingu i insourcingu.",
  "21. Proszę scharakteryzować koncepcję lean management.",
  "22. Proszę omówić istotę analizy harmonicznej.",
  "23. Proszę wymienić i krótko scharakteryzować współczesne odmiany rachunku kosztów.",
  "24. Proszę przedstawić zalety i wady podejścia procesowego w zarządzaniu.",
  "25. Proszę omówić zakres przedmiotowy podatku od towarów i usług.",
  "26. Proszę omówić czy rozwiązania cloud computing są porównywalne pod względem funkcjonalności do aplikacji instalowanych stacjonarnie na komputerach osobistych.",
  "27. Proszę przedstawić zalety i wady podejścia procesowego w zarządzaniu.",
  "28. Proszę wyjaśnić zależności między ryzykiem inwestycji kapitałowych a ich stopą zwrotu.",
  "29. Proszę wymienić i krótko scharakteryzować metody budżetowania.",
  "30. Proszę wskazać i krótko scharakteryzować typy papierów dłużnych.",
  "1. Przedstaw różnice między inwestycjami rzeczowymi produkcyjnymi i nieprodukcyjnymi oraz wskaż który podmiot dokona inwestycji rzeczowych produkcyjnych a który nieprodukcyjnych?",
  "2. Wyjaśnij znaczenie relacji zarządca nieruchomości - właściciel nieruchomości i omów ich wpływ na podejście do organizacji zarządzania nieruchomością wybranego typu.",
  "3. Wyjaśnij na czym polega analiza synoptyczna Hijmansa i omów jej przydatność dla projektowania systemu zarządzania nieruchomościami.",
  "4. Wyjaśnij co w rozumieniu ustawy o gospodarce nieruchomościami znaczy pojęcie 'stan nieruchomości' – omów jego przejawy.",
  "5. Wyjaśnij w jakim celu bada się stan prawny nieruchomości oraz wymień i scharakteryzuj źródła informacji w tym celu wykorzystywane.",
  "6. Omów różnice pomiędzy wartością rynkową a wartością indywidualną nieruchomości - podaj przykłady z rynku nieruchomości mieszkaniowych i komercyjnych.",
  "7. Omów założenia leżące u podstaw podejścia dochodowego w wycenie nieruchomości.",
  "8. Depopulacja w Polsce – gdzie i dlaczego ubywa mieszkańców? Jaki wpływ ma ten proces na rynek nieruchomości w Polsce?",
  "9. W jakim stopniu kryzys demograficzny może zmienić rynek nieruchomości w Polsce?",
  "10.	Jakich instrumentów finansowych użyje inwestor w celu zabezpieczenia się przed ryzykiem i dlaczego?",
  "11.	Scharakteryzuj rolę korelacji między instrumentami finansowymi w procesie budowy portfela inwestycyjnego.",
  "12.	Omów metody proste oceny opłacalności inwestycji rzeczowych, ich wady i zalety oraz przydatność tych metod w praktyce.",
  "13.	Wyjaśnij zasady ustalania stopy dyskontowej dla potrzeb oceny opłacalności inwestycji przedsiębiorstw.",
  "14.	Omów metody dyskontowe oceny opłacalności inwestycji. Wyjaśnij wady i zalety stosowania wartości zaktualizowanej netto (NPV).",
  "15.	Wyjaśnij różnice między zarządzaniem projektem inwestycyjnym a bieżącym zarządzaniem przedsiębiorstwa.",
  "16.	Omów cykl życia projektu na przykładzie budowlanego procesu inwestycyjnego.",
  "17.	Omów problemy związane z zarządzaniem czasem w projekcie inwestycyjnym i przydatność tworzenia wykresów Gantta.",
  "18.	Scharakteryzuj ryzyka inwestowania na rynku nieruchomości.",
  "19.	Wyjaśnij czym jest apetyt na ryzyko i dlaczego jest tak ważny w zarządzaniu ryzykiem organizacji?",
  "20.	Scharakteryzuj zarządzanie ryzykiem i przedstaw jego etapy na przykładzie wybranej inwestycji.",
];

function getRandomQuestions() {
  if (questions.length === 0) {
    displayNoQuestionsModal();
    return;
  }
  const selectedQuestions = [];

  while (selectedQuestions.length < 3 && questions.length > 0) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const selectedQuestion = questions[randomIndex];
    selectedQuestions.push(selectedQuestion);
    questions.splice(randomIndex, 1);
  }

  const questionDivs = document.querySelectorAll("div");

  for (let i = 0; i < questionDivs.length; i++) {
    const questionDiv = questionDivs[i];
    const p = questionDiv.querySelector("p");
    p.textContent = selectedQuestions[i];
  }
}

function displayNoQuestionsModal() {
  const modal = document.getElementById("noQuestionsModal");
  const modalText = document.querySelector(".end");
  modal.style.display = "block";
  modalText.textContent = "Koniec Pytań!";

  const span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };
}

getRandomQuestions();
btn.addEventListener("click", getRandomQuestions);
