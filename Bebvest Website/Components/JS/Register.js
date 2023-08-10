// --------------------------------------------------------- //
//                                                           //
//                    General Variables                      //
//                                                           //
// --------------------------------------------------------- //

const InvestorTypeContainer = document.getElementById("1");

const TermsAndConditionsContainer = document.getElementById("Last");
const WelcomeCardContainer = document.getElementById("Welcome");

const InvestorType = document.getElementById("InvestorDropdown");
var InvestorTypeValue = "None";

// --------------------------------------------------------- //
//                                                           //
//                Private Investor Variables                 //
//                                                           //
// --------------------------------------------------------- //

const PrivateInvestorContainer = document.getElementById("2");
const PrivateInvestorDocsContainer = document.getElementById("3");

// --------------------------------------------------------- //
//                                                           //
//                Corporate Investor Variables               //
//                                                           //
// --------------------------------------------------------- //

const CorporateInvestorContainer = document.getElementById("4");
const CorporateInvestorDocsContainer = document.getElementById("5");

// --------------------------------------------------------- //
//                                                           //
//                     Broker Variables                      //
//                                                           //
// --------------------------------------------------------- //

const BrokerContainer = document.getElementById("6");
const BrokerDocsContainer = document.getElementById("7");

// --------------------------------------------------------- //
//                                                           //
//                     Hiding all pages                      //
//                                                           //
// --------------------------------------------------------- //

{
    // Select Investor Type Card
    InvestorTypeContainer.hidden = false;

    // Private Investor Cards
    PrivateInvestorContainer.hidden = true;
    PrivateInvestorDocsContainer.hidden = true;

    // Corporate Investor Cards
    CorporateInvestorContainer.hidden = true;
    CorporateInvestorDocsContainer.hidden = true;

    // Broker Cards
    BrokerContainer.hidden = true;
    BrokerDocsContainer.hidden = true;

    // Terms And Conditions Card & Welcome Card
    TermsAndConditionsContainer.hidden = true;
    WelcomeCardContainer.hidden = true;
}

// --------------------------------------------------------- //
//                                                           //
//                Private Investor Functions                 //
//                                                           //
// --------------------------------------------------------- //

{
    function GoToUploadDocsPrivate() {
        HideAll();
        PrivateInvestorDocsContainer.hidden = false;
    }

    function updateFileIDPrivate() {
        const fileInput = document.getElementById("fileID");
        const fileLabel = document.getElementById("fileLabelID");
        const fileList = fileInput.files;
        let fileNames = '';

        for (let i = 0; i < fileList.length; i++) {
            const fileName = fileList[i].name;
            fileNames += fileName;
            if (i < fileList.length - 1) {
                fileNames += ', ';
            }
        }

        fileLabel.innerText = fileNames || 'Click to upload image';
    }

    function updateFileAddressPrivate() {
        const fileInput = document.getElementById("fileAddress");
        const fileLabel = document.getElementById("fileLabelAddress");
        const fileList = fileInput.files;
        let fileNames = '';

        for (let i = 0; i < fileList.length; i++) {
            const fileName = fileList[i].name;
            fileNames += fileName;
            if (i < fileList.length - 1) {
                fileNames += ', ';
            }
        }

        fileLabel.innerText = fileNames || 'Click to upload image';
    }

    function updateFileBankPrivate() {
        const fileInput = document.getElementById("fileBank");
        const fileLabel = document.getElementById("fileLabelBank");
        const fileList = fileInput.files;
        let fileNames = '';

        for (let i = 0; i < fileList.length; i++) {
            const fileName = fileList[i].name;
            fileNames += fileName;
            if (i < fileList.length - 1) {
                fileNames += ', ';
            }
        }

        fileLabel.innerText = fileNames || 'Click to upload image';
    }
}

// --------------------------------------------------------- //
//                                                           //
//                Corporate Investor Functions               //
//                                                           //
// --------------------------------------------------------- //

{
    function GoToUploadDocsCorporate() {
        HideAll();
        CorporateInvestorDocsContainer.hidden = false;
    }
}

// --------------------------------------------------------- //
//                                                           //
//                Broker Functions                           //
//                                                           //
// --------------------------------------------------------- //

{
    function GoToUploadDocsBroker() {
        HideAll();
        BrokerDocsContainer.hidden = false;
    }
}

// --------------------------------------------------------- //
//                                                           //
//                General Functions                          //
//                                                           //
// --------------------------------------------------------- //

{
    function HideAll() {
        InvestorTypeContainer.hidden = true;
        PrivateInvestorContainer.hidden = true;
        PrivateInvestorDocsContainer.hidden = true;
        CorporateInvestorContainer.hidden = true;
        CorporateInvestorDocsContainer.hidden = true;
        BrokerContainer.hidden = true;
        BrokerDocsContainer.hidden = true;
        TermsAndConditionsContainer.hidden = true;
        WelcomeCardContainer.hidden = true;
    }

    function GoToFillInfo() {

        InvestorTypeValue = InvestorType.value;

        if (InvestorTypeValue == "None") {
            alert("Please select an investor type");
        }
        else {
            InvestorTypeContainer.hidden = true;
        }

        if (InvestorTypeValue == "Private") {
            HideAll();
            PrivateInvestorContainer.hidden = false;
        }

        if (InvestorTypeValue == "Corporate") {
            HideAll();
            CorporateInvestorContainer.hidden = false;
            
        }

        if (InvestorTypeValue == "Broker") {
            HideAll();
            BrokerContainer.hidden = false;
        }
    }

    function GoToTermsAndConditions() {
        HideAll();
        TermsAndConditionsContainer.hidden = false;
    }

    function GoToInvestorType() {
        HideAll();
        InvestorTypeContainer.hidden = false;
    }

    function GoToWelcome() {
        HideAll();
        WelcomeCardContainer.hidden = false;
    }
}
