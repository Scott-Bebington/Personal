// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Card Rotate Animation                                                //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
    var CardContainer = document.getElementById("CardContainer");

    var LeftArrow = '<button class="Arrow" onclick="moveCards(1)">&lt;</button>';
    var RightArrow = '<button class="Arrow" onclick="moveCards(-1)">&gt;</button>';

    var CardList = [
        {
            contains: '<img src="../Img/Image1.jpg" alt="Investment"><button onclick="MarketsWeTrade()">The markets we trade</button>'
        },
        {
            contains: '<img src="../Img/Image2.jpg" alt="Investment"><button onclick="OurMethodology()">Our Methodology</button>'
        },
        {
            contains: '<img src="../Img/Image3.jpg" alt="Investment"><button onclick="InvestmentRules()">Investment Rules</button>'
        }
    ];

    var CardIndex = 0;

    function moveCards(direction) 
    {
        CardIndex += direction;
        if (CardIndex < 0) 
        {
            CardIndex = CardList.length - 1;
        }
        if (CardIndex >= CardList.length) 
        {
            CardIndex = 0;
        }
        updateCards();
    }

    function updateCards() 
    {
        var cardHTML = LeftArrow;

        for (var i = CardIndex - 1; i <= CardIndex + 1; i++) 
        {
            var index = (i + CardList.length) % CardList.length; // Handle wrapping around array indices
            cardHTML += '<div class="' + (i === CardIndex ? 'Card' : 'Card2') + '">';
            cardHTML += CardList[index].contains;
            cardHTML += '</div>';
        }

        cardHTML += RightArrow;
        CardContainer.innerHTML = cardHTML;
    }

    updateCards();
}

// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Event Listeners                                                      //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
    document.addEventListener('keydown', function(event) 
    {
        if (event.key === 'ArrowRight') 
        {
            moveCards(-1)
        }
        else if (event.key === 'ArrowLeft')
        {
            moveCards(1)
        }
    });
}

// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Go to Page                                                           //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
    function OurMethodology() 
    {
        window.location.href = "../HTML/OurMethodology.html";
    }

    function MarketsWeTrade()
    {
        window.location.href = "../HTML/MarketsWeTrade.html";
    }

    function InvestmentRules()
    {
        window.location.href = "../HTML/InvestmentRules.html";
    }
}

