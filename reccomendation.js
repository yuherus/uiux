document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.status-dropdown');
    var congratsPopup = document.getElementById('congrats-popup');
    var newRecommendationPopup = document.getElementById('new-recommendation-popup');
    var closeCongratsPopup = congratsPopup.querySelector('.close');
    var closeNewRecommendationPopup = newRecommendationPopup.querySelector('.close');
    var yesButton = newRecommendationPopup.querySelector('.yes-button');
    var cardCount = dropdowns.length;
    var completedCards = 0;
    var congratsDisplayed = false;

    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('change', function () {
            var card = this.closest('.card');
            if (this.value === 'done') {
                this.classList.add('done');
                this.classList.remove('ongoing');
                card.style.backgroundColor = 'rgba(5, 193, 104, 0.2)';
                completedCards++;
                congratsPopup.style.display = 'block';
                congratsDisplayed = true;
            } else {
                this.classList.add('ongoing');
                this.classList.remove('done');
                card.style.backgroundColor = 'rgba(236, 72, 153, 0.1)';
                completedCards--;
            }

            if (completedCards === cardCount && !congratsDisplayed) {
                newRecommendationPopup.style.display = 'block';
            }
        });
    });

    closeCongratsPopup.addEventListener('click', function () {
        congratsPopup.style.display = 'none';
        congratsDisplayed = false;
        if (completedCards === cardCount) {
            newRecommendationPopup.style.display = 'block';
        }
    });

    closeNewRecommendationPopup.addEventListener('click', function () {
        newRecommendationPopup.style.display = 'none';
    });

    yesButton.addEventListener('click', function () {
        newRecommendationPopup.style.display = 'none';
        var newCards = [
            { title: "New Task 1", detail: "View detail", time: "3 hours", image: "image/new1.png" },
            { title: "New Task 2", detail: "View detail", time: "4 hours", image: "image/new2.png" },
            { title: "New Task 3", detail: "View detail", time: "5 hours", image: "image/new3.png" }
        ];
        var cardsContainer = document.querySelector('.cards-container');
        cardsContainer.innerHTML = '';
        newCards.forEach(function (newCard) {
            var card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-background"></div>
                <div class="card-status-icon">
                    <select class="status-dropdown">
                        <option value="ongoing">Ongoing</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <div class="card-text">
                    <div class="card-title">${newCard.title}</div>
                    <div class="card-detail">${newCard.detail}</div>
                    <div class="card-time">${newCard.time}</div>
                </div>
                <div class="card-image-container">
                    <div class="card-image-background"></div>
                    <img class="card-image" src="${newCard.image}" alt="Card Image">
                </div>
            `;
            cardsContainer.appendChild(card);
        });
        cardCount = newCards.length;
        completedCards = 0;
        dropdowns = document.querySelectorAll('.status-dropdown');
        dropdowns.forEach(function (dropdown) {
            dropdown.addEventListener('change', function () {
                var card = this.closest('.card');
                if (this.value === 'done') {
                    this.classList.add('done');
                    this.classList.remove('ongoing');
                    card.style.backgroundColor = 'rgba(5, 193, 104, 0.2)';
                    completedCards++;
                    congratsPopup.style.display = 'block';
                    congratsDisplayed = true;
                } else {
                    this.classList.add('ongoing');
                    this.classList.remove('done');
                    card.style.backgroundColor = 'rgba(236, 72, 153, 0.1)';
                    completedCards--;
                }

                if (completedCards === cardCount && !congratsDisplayed) {
                    newRecommendationPopup.style.display = 'block';
                }
            });
        });
    });

    window.onclick = function (event) {
        if (event.target == congratsPopup || event.target == newRecommendationPopup) {
            congratsPopup.style.display = 'none';
            newRecommendationPopup.style.display = 'none';
        }
    };
});

