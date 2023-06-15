// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Event Listeners                                                      //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
    var PrivateCard   = document.getElementById("Private");
    var CorporateCard = document.getElementById("Corporate");
    var BrokerCard    = document.getElementById("Broker");
    var BigCard       = document.getElementById("BigCard");
    var Table         = document.getElementById("TableContainer");

    PrivateCard.addEventListener("mouseenter", function() 
    {
        PopulateValuesPrivate();
    });

    CorporateCard.addEventListener("mouseenter", function() 
    {
        PopulateValuesCorporate();
    });

    BrokerCard.addEventListener("mouseenter", function() 
    {
        PopulateValuesBroker();
    });

    BigCard.addEventListener("mouseleave", function() 
    {
        BigCard.innerHTML = 
        `
        Please hover over an investor type card to show info
        `
    ;
    });

    Table.addEventListener("mouseleave", function() 
    {
        BigCard.innerHTML = 
        `
        Please hover over an investor type card to show info
        `
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
        [0, 0.1, 0.2, 0.3],
        [1, 0.9, 0.8, 0.7],

        // 11% - 25%
        [0.25, 0.3, 0.35, 0.4],
        [0.75, 0.7, 0.65, 0.6],

        // 26% - 40%
        [0.3, 0.35, 0.4, 0.45],
        [0.7, 0.65, 0.6, 0.55],

        // 41% - 50%
        [0.35, 0.4, 0.45, 0.5],
        [0.65, 0.6, 0.55, 0.5],

        // 51% - 60%
        [0.4, 0.45, 0.5, 0.5],
        [0.6, 0.55, 0.5, 0.5],

        // 61% - 70%
        [0.45, 0.5, 0.5, 0.5],
        [0.55, 0.5, 0.5, 0.5],

        // 71% - 80%
        [0.45, 0.5, 0.5, 0.5],
        [0.55, 0.5, 0.5, 0.5],

        // 81% - 100%
        [0.45, 0.5, 0.5, 0.5],
        [0.55, 0.5, 0.5, 0.5],

        // 100%+
        [0.45, 0.5, 0.5, 0.5],
        [0.55, 0.5, 0.5, 0.5],
    ];

    privateReturnRows = [0, 0.1, 0.25, 0.4, 0.5, 0.6, 0.7, 0.8, 1];

    function PopulateValuesPrivate() 
    {
        let count = 0;
        let privaterowsandcols = "";
        for (let i = 0; i < privateReturnRows.length - 1; i++) 
        {
            privaterowsandcols += 
            `
            <tr>
                <td>${(privateReturnRows[i] * 100) + 1}% - ${(privateReturnRows[i + 1] * 100)}%</td>
                <td>
                    ${PrivateTableCols[count][Tier - 1]*100}% 
                    ($${Number((PrivateTableCols[count][Tier - 1]) * privateReturnRows[i + 1] * PrivateInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
                <td>
                    ${Number(PrivateTableCols[count + 1][Tier - 1]*100).toFixed(0)}% 
                    ($${Number((PrivateTableCols[count + 1][Tier - 1]) * privateReturnRows[i + 1] * PrivateInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
            </tr>
            `
            ;
            count += 2;
        }
        BigCard.innerHTML =
            `
            <h2>Private Investors</h2>
            <div class="Calculate">
                <select class="Dropdown" id="Dropdown">
                    <option value="0">---Tiers---</option>
                    <option value="1">Tier 1 ($100 000+)</option>
                    <option value="2">Tier 2 ($50 000 - $100 000)</option>
                    <option value="3">Tier 3 ($10 000 - $50 000)</option>
                    <option value="4">Tier 4 ($0 - $10 000)</option>
                </select>
                <input 
                    type="text" 
                    class="Dropdown" 
                    placeholder="Calculate return based of investment" 
                    id="PrivateAmountInput"
                >
            </div>
            Profit based on min investment value: $${Number(PrivateInvestment).toLocaleString('en-US', { useGrouping: true })} (Tier ${Tier})
            <table>
                <th>Annual Return</th>
                <th>Bebvest Return</th>
                <th>Investor Return</th>
                ${privaterowsandcols}
            </table>
            Any returns over 100% have the same split as 81% - 100%.
            `;

        
        PrivateCardAmountInput = document.getElementById("PrivateAmountInput");
        PrivateCardAmountInput.addEventListener("keyup", function(event) {
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
                } else if (PrivateCardAmountInput.value >= 0) {
                    Tier = 4;
                    // console.log("Tier 4");
                }
                PrivateInvestment = PrivateCardAmountInput.value;
                PopulateValuesPrivate();
            }
        });
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
        [0, 0.25, 0.3, 0.35, 0.45, 0.45, 0.45, 0.45, 0.45], // Investor Return
        [1, 0.75, 0.7, 0.65, 0.55, 0.55, 0.55, 0.55, 0.55], // Bebvest Return

        [0, 0.1, 0.25, 0.4, 0.5, 0.6, 0.7, 0.8 , 1, 1.1], // Return %
    ];
    function PopulateValuesCorporate() 
    {
        let rowsandcols = "";
        for (let i = 0; i < CorporateTableCols[2].length - 2; i++) 
        {
            let count = i;
            rowsandcols += 
            `
            <tr>
                <td>${(CorporateTableCols[2][i] * 100) + 1}% - ${(CorporateTableCols[2][i + 1] * 100)}%</td>
                <td>
                    ${CorporateTableCols[0][count]*100}% 
                    ($${Number((CorporateTableCols[0][count]*CorporateTableCols[2][i + 1])*CorporateInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
                <td>
                    ${Number(CorporateTableCols[1][count]*100).toFixed(0)}% 
                    ($${Number((CorporateTableCols[1][count]*CorporateTableCols[2][i + 1])*CorporateInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
            </tr>
            `
            ;
        }

        BigCard.innerHTML = 
            `
            <h2>Corporate Investors</h2>
            <div class="Calculate">
                <input 
                    type="text" 
                    class="Dropdown" 
                    placeholder="Calculate return based of investment" 
                    id="CorporateAmountInput"
                >
            </div>
            Profit based on min investment value: $${Number(CorporateInvestment).toLocaleString('en-US', { useGrouping: true })}
            <table>
                <th>Annual Return</th>
                <th>Bebvest Return</th>
                <th>Investor Return</th>
                ${rowsandcols}
            </table>
            Any returns over 100% have the same split as 81% - 100%.
            `
        ;
        
        CorporateCardAmountInput = document.getElementById("CorporateAmountInput");
        CorporateCardAmountInput.addEventListener("keyup", function(event) 
        {
            if (event.key === "Enter") 
            {
                if (CorporateCardAmountInput.value >= 500000) 
                {
                    CorporateInvestment = CorporateCardAmountInput.value;
                    PopulateValuesCorporate();
                }
                else
                {
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
        [0, 0.3, 0.4, 0.45, 0.5, 0.5, 0.5, 0.5, 0.5], // Investor Return
        [1, 0.7, 0.6, 0.55, 0.5, 0.5, 0.5, 0.5, 0.5], // Bebvest Return

        [0, 0.1, 0.25, 0.4, 0.5, 0.6, 0.7, 0.8 , 1, 1.1], // Return %
    ];
    function PopulateValuesBroker() 
    {
        let rowsandcols = "";
        for (let i = 0; i < BrokerTableCols[2].length - 2; i++) 
        {
            let count = i;
            rowsandcols += 
            `
            <tr>
                <td>${(BrokerTableCols[2][i] * 100) + 1}% - ${(BrokerTableCols[2][i + 1] * 100)}%</td>
                <td>
                    ${BrokerTableCols[0][count]*100}% 
                    ($${Number((BrokerTableCols[0][count]*BrokerTableCols[2][i + 1])*BrokerInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
                <td>
                    ${Number(BrokerTableCols[1][count]*100).toFixed(0)}% 
                    ($${Number((BrokerTableCols[1][count]*BrokerTableCols[2][i + 1])*BrokerInvestment).toLocaleString('en-US', { useGrouping: true })})
                </td>
            `
            ;
        }

        BigCard.innerHTML = 
            `
            <h2>Brokers</h2>
            <div class="Calculate">
                <input 
                    type="text" 
                    class="Dropdown" 
                    placeholder="Calculate return based of investment" 
                    id="BrokerAmountInput"
                >
            </div>
            Profit based on min investment value: $${Number(BrokerInvestment).toLocaleString('en-US', { useGrouping: true })}
            <table>
                <th>Annual Return</th>
                <th>Bebvest Return</th>
                <th>Investor Return</th>
                ${rowsandcols}
            </table>
            Any returns over 100% have the same split as 81% - 100%.
            `
        ;
        
        BrokerCardAmountInput = document.getElementById("BrokerAmountInput");
        BrokerCardAmountInput.addEventListener("keyup", function(event) 
        {
            if (event.key === "Enter") 
            {
                if (BrokerCardAmountInput.value >= 250000) 
                {
                    BrokerInvestment = BrokerCardAmountInput.value;
                    PopulateValuesBroker();
                }
                else
                {
                    alert("Minimum investment amount is $250,000");
                }
            }
        });
    }
}

