// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Event Listeners                                                      //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
    var PrivateCard = document.getElementById("Private");
    var CorporateCard = document.getElementById("Corporate");
    var BrokerCard = document.getElementById("Broker");
    var BigCard = document.getElementById("BigCard");
    var Table = document.getElementById("TableContainer");

    PrivateCard.addEventListener("click", function () {
        BigCard.classList.remove("Placeholder");
        PopulateValuesPrivate();
    });

    CorporateCard.addEventListener("click", function () {
        BigCard.classList.remove("Placeholder");
        PopulateValuesCorporate();
    });

    BrokerCard.addEventListener("click", function () {
        BigCard.classList.remove("Placeholder");
        PopulateValuesBroker();
    });

    Table.addEventListener("mouseleave", function () {
        BigCard.classList.add("Placeholder");
        BigCard.innerHTML = 
        `
        `;
        ;
    });
}

// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Private Investors                                                    //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
    var PrivateCardAmountInput = document.getElementById("PrivateAmountInput");
    var PrivateInvestment = 100000;

    var Tier = 1;
    var PrivateTableCols = [
        // 0% - 10%
        [0.0100, 0.0100, 0.0200, 0.0300], // Bebvest
        [0.0900, 0.0900, 0.0800, 0.0700], // Client

        // 11% - 25%
        [0.0475, 0.0550, 0.0725, 0.0900], // Bebvest
        [0.2025, 0.1950, 0.1775, 0.1600], // Client

        // 26% - 40%
        [0.0925, 0.1075, 0.1325, 0.1575], // Bebvest
        [0.3075, 0.2925, 0.2675, 0.2425], // Client

        // 41% - 50%
        [0.1275, 0.1475, 0.1775, 0.2025], // Bebvest
        [0.3725, 0.3525, 0.3225, 0.2975], // Client

        // 51% - 60%
        [0.1675, 0.1925, 0.2225, 0.2475], // Bebvest
        [0.4325, 0.4075, 0.3775, 0.3525], // Client

        // 61% - 70%
        [0.2075, 0.2375, 0.2675, 0.2925], // Bebvest
        [0.4925, 0.4625, 0.4325, 0.4075], // Client

        // 71% - 80%
        [0.2475, 0.2825, 0.3125, 0.3375], // Bebvest
        [0.5525, 0.5175, 0.4875, 0.4625], // Client

        // 81% - 90%
        [0.2875, 0.3275, 0.3575, 0.3825], // Bebvest
        [0.6125, 0.5725, 0.5425, 0.5175], // Client

        // 91% - 100%
        [0.3275, 0.3725, 0.4025, 0.4275], // Bebvest
        [0.6725, 0.6275, 0.5975, 0.5725], // Client
    ];

    var PrivateReturnPercentage = 
    [
        // 0% - 10%
        [0.1, 0.1, 0.2, 0.3], // Bebvest
        [0.9, 0.9, 0.8, 0.7], // Client

        // 11% - 25%
        [0.25, 0.3, 0.35, 0.4], // Bebvest
        [0.75, 0.7, 0.65, 0.6], // Client

        // 26% - 40%
        [0.3, 0.35, 0.4, 0.45], // Bebvest
        [0.7, 0.65, 0.6, 0.55], // Client

        // 41% - 50%
        [0.35, 0.4, 0.45, 0.45], // Bebvest
        [0.65, 0.6, 0.55, 0.55], // Client

        // 51% - 60%
        [0.4, 0.45, 0.45, 0.45], // Bebvest
        [0.6, 0.55, 0.55, 0.55], // Client

        // 61% - 70%
        [0.4, 0.45, 0.45, 0.45], // Bebvest
        [0.6, 0.55, 0.55, 0.55], // Client

        // 71% - 80%
        [0.4, 0.45, 0.45, 0.45], // Bebvest
        [0.6, 0.55, 0.55, 0.55], // Client

        // 81% - 100%
        [0.4, 0.45, 0.45, 0.45], // Bebvest
        [0.6, 0.55, 0.55, 0.55], // Client

        // 100%+
        [0.4, 0.45, 0.45, 0.45], // Bebvest
        [0.6, 0.55, 0.55, 0.55], // Client
    ]

    privateReturnRows = [0, 0.1, 0.25, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

    function PopulateValuesPrivate() {
        let count = 0;
        let privaterowsandcols = "";
        for (let i = 0; i < privateReturnRows.length - 1; i++) {
            privaterowsandcols +=
                `
            <tr>
                <td>${(privateReturnRows[i] * 100) + 1}% - ${(privateReturnRows[i + 1] * 100)}%</td>
                <td>
                    ${PrivateReturnPercentage[count][Tier - 1] * 100}% 
                    ($${Number((PrivateTableCols[count][Tier - 1]) * PrivateInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
                <td>
                    ${Number(PrivateReturnPercentage[count + 1][Tier - 1] * 100).toFixed(0)}% 
                    ($${Number((PrivateTableCols[count + 1][Tier - 1]) * PrivateInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
            </tr>
            `
            ;
            count += 2;
        }
        BigCard.innerHTML =
            `
            <h2 class="Heading">Private Investors</h2>
            <p>
                Tier 1: $100 000+ |
                Tier 2: $50 001 - $100 000 |
                Tier 3: $10 001 - $50 000 |
                Tier 4: $3 000 - $10 000
            </p>
            <div class="Calculate">
                <input 
                    type="text" 
                    class="InputValue" 
                    placeholder="Calculate return" 
                    id="PrivateAmountInput"
                >
                <button class="SubmitButton" onclick="privateSearch()"></button>
            </div>
            <p>$${Number(PrivateInvestment).toLocaleString('en-US', { useGrouping: true })} (Tier ${Tier})</p>
            <table>
                <th>Annual Return</th>
                <th>Bebvest Return</th>
                <th>Investor Return</th>
                ${privaterowsandcols}
            </table>
            <p class="info-container">
                <br>Any returns over 100% have the same split as 81% - 100%. (Totals in brackets are already cumulative)
                <span class="Info" data-bs-toggle="modal" data-bs-target="#SplitInfo"></span>
            </p>

            
            `;


        PrivateCardAmountInput = document.getElementById("PrivateAmountInput");
        PrivateCardAmountInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                if (PrivateCardAmountInput.value >= 100000) {
                    Tier = 1;
                    // console.log("Tier 1");
                } else if (PrivateCardAmountInput.value >= 50000) {
                    Tier = 2;
                    // console.log("Tier 2");
                } else if (PrivateCardAmountInput.value >= 10000) {
                    Tier = 3;
                    // console.log("Tier 3");
                } else if (PrivateCardAmountInput.value >= 3000) {
                    Tier = 4;
                    // console.log("Tier 4");
                }
                else {
                    alert("Minimum investment amount in $3000")
                    return;
                }
                PrivateInvestment = PrivateCardAmountInput.value;
                PopulateValuesPrivate();
            }
        });


    }
    function privateSearch() {
        if (PrivateCardAmountInput.value >= 100000) {
            Tier = 1;
            // console.log("Tier 1");
        } else if (PrivateCardAmountInput.value >= 50000) {
            Tier = 2;
            // console.log("Tier 2");
        } else if (PrivateCardAmountInput.value >= 10000) {
            Tier = 3;
            // console.log("Tier 3");
        } else if (PrivateCardAmountInput.value >= 3000) {
            Tier = 4;
            // console.log("Tier 4");
        }
        else {
            alert("Minimum investment amount in $3000")
            return;
        }
        PrivateInvestment = PrivateCardAmountInput.value;
        PopulateValuesPrivate();
    }
}

// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Corporate Investors                                                  //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
    var CorporateCardAmountInput = document.getElementById("CorporateAmountInput");
    var CorporateInvestment = 500000;

    var TierCorporate = 1;
    var CorporateTableCols =
    [
        [0.01, 0.0475, 0.0925, 0.1275, 0.1675, 0.2075, 0.2475, 0.2875, 0.3275], // Bebvest
        [0.09, 0.2025, 0.3075, 0.3725, 0.4325, 0.4925, 0.5525, 0.6125, 0.6725], // Client

        [0, 0.1, 0.25, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1],                        // Return %
    ];

    var CorporateTablePercentage = 
    [
        [0.1, 0.3, 0.4, 0.45, 0.45, 0.45, 0.45, 0.45, 0.45], // Bebvest
        [0.9, 0.7, 0.6, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55], // Client
    ]
    function PopulateValuesCorporate() {
        let rowsandcols = "";
        for (let i = 0; i < CorporateTableCols[2].length - 2; i++) {
            let count = i;
            rowsandcols +=
                `
            <tr>
                <td>${(CorporateTableCols[2][i] * 100) + 1}% - ${(CorporateTableCols[2][i + 1] * 100)}%</td>
                <td>
                    ${CorporateTablePercentage[0][count] * 100}% 
                    ($${Number((CorporateTableCols[0][count]) * CorporateInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
                <td>
                    ${Number(CorporateTablePercentage[1][count] * 100).toFixed(0)}% 
                    ($${Number((CorporateTableCols[1][count]) * CorporateInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
            </tr>
            `
                ;
        }

        BigCard.innerHTML =
            `
            <h2 class="Heading">Corporate Investors</h2>
            <div class="Calculate">
                <input 
                    type="text" 
                    class="InputValue" 
                    placeholder="Calculate return" 
                    id="PrivateAmountInput"
                >
                <button class="SubmitButton" onclick="privateSearch()"></button>
            </div>
            <p>$${Number(CorporateInvestment).toLocaleString('en-US', { useGrouping: true })}</p>
            <table>
                <th>Annual Return</th>
                <th>Bebvest Return</th>
                <th>Investor Return</th>
                ${rowsandcols}
            </table>
            <p class="info-container">
                <br>Any returns over 100% have the same split as 81% - 100%. (Totals in brackets are already cumulative)
                <span class="Info" data-bs-toggle="modal" data-bs-target="#SplitInfo"></span>
            </p>
            `
            ;

        CorporateCardAmountInput = document.getElementById("CorporateAmountInput");
        CorporateCardAmountInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                if (CorporateCardAmountInput.value >= 500000) {
                    CorporateInvestment = CorporateCardAmountInput.value;
                    PopulateValuesCorporate();
                }
                else {
                    alert("Minimum investment amount is $500,000");
                }
            }
        });
    }
}

// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Brokers                                                              //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
    var BrokerCardAmountInput = document.getElementById("BrokerAmountInput");
    var BrokerInvestment = 250000;

    var TierBroker = 1;
    var BrokerTableCols =
        [
            [0.0100, 0.0550, 0.1150, 0.1600, 0.2050, 0.2500, 0.2950, 0.3400, 0.3850], // Bebvest %
            [0.0900, 0.1950, 0.2850, 0.3400, 0.3950, 0.4500, 0.5050, 0.5600, 0.6150], // Client %

            [0, 0.1, 0.25, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1], // Return %
        ];

    var BrokerTablePercentage =
    [
        [0.1, 0.25, 0.3, 0.35, 0.4, 0.4, 0.4, 0.4, 0.4], // Bebvest %
        [0.9, 0.75, 0.7, 0.65, 0.6, 0.6, 0.6, 0.6, 0.6], // Client %
    ];

    function PopulateValuesBroker() {
        let rowsandcols = "";
        for (let i = 0; i < BrokerTableCols[2].length - 2; i++) {
            let count = i;
            rowsandcols +=
                `
            <tr>
                <td>${(BrokerTableCols[2][i] * 100) + 1}% - ${(BrokerTableCols[2][i + 1] * 100)}%</td>
                <td>
                    ${BrokerTablePercentage[0][count] * 100}% 
                    ($${Number((BrokerTableCols[0][count]) * BrokerInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
                <td>
                    ${Number(BrokerTablePercentage[1][count] * 100).toFixed(0)}% 
                    ($${Number((BrokerTableCols[1][count]) * BrokerInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
            `
                ;
        }

        BigCard.innerHTML =
            `
            <h2 class="Heading">Brokers</h2>
            <div class="Calculate">
                <input 
                    type="text" 
                    class="InputValue" 
                    placeholder="Calculate return" 
                    id="PrivateAmountInput"
                >
                <button class="SubmitButton" onclick="privateSearch()"></button>
            </div>
            <p>$${Number(BrokerInvestment).toLocaleString('en-US', { useGrouping: true })}</p>
            <table>
                <th>Annual Return</th>
                <th>Bebvest Return</th>
                <th>Investor Return</th>
                ${rowsandcols}
            </table>
            <p class="info-container">
                <br>Any returns over 100% have the same split as 81% - 100%. (Totals in brackets are already cumulative)
                <span class="Info" data-bs-toggle="modal" data-bs-target="#SplitInfo"></span>
            </p>
            `
            ;

        BrokerCardAmountInput = document.getElementById("BrokerAmountInput");
        BrokerCardAmountInput.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                if (BrokerCardAmountInput.value >= 250000) {
                    BrokerInvestment = BrokerCardAmountInput.value;
                    PopulateValuesBroker();
                }
                else {
                    alert("Minimum investment amount is $250,000");
                }
            }
        });
    }
}

