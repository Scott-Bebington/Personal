// ------------------------------------------------------------------------------------------------------- //
//                                                                                                         //
//                                    Populate Footer                                                      //
//                                                                                                         //
// ------------------------------------------------------------------------------------------------------- //

{
    var Footer = document.getElementById("Footer");

    Footer.innerHTML =
        `
    <div class="row pt-3 Center">
        <div class="col-sm-2">
            <div class="container">
                <div class="col-sm-12 UnderneathFooter text-center">
                    <a href="InvestmentRules.html">Terms & Conditions</a>
                </div>
            </div>
        </div>
        <div class="col-sm-2">
            <div class="container">
                <div class="col-sm-12 UnderneathFooter text-center">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#Disclaimer">Disclaimer</a>
                </div>
            </div>
        </div>
        <div class="col-sm-2">
            <div class="container">
                <div class="col-sm-12 UnderneathFooter text-center">
                    <a href="Components/PDF/InvestorDetails.pdf" target="_blank">Application Form</a>
                </div>
            </div>
        </div>
        <div class="col-sm-2">
            <div class="Contact">
                <a class="SocialMediaButton" style="width : 100%;">
                    invest@bebvest.com
                </a>
            </div>
        </div>
        <div class="col-sm-2">
            <div class="Contact">
                <a href="index.html" class="SocialMediaButton" style="width : 100%;">
                    © 2023 bebvest.com
                </a>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="Disclaimer" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Bebvest Disclaimer!
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Our investing relates to Leveraged Financial Instruments which involves managed risk 
                    and can result in the loss of your invested capital, and thus are not appropriate for 
                    all investors. Under no circumstances shall bebvest or its management have any liability 
                    to any person or entity for any loss or damage in whole or part caused by, resulting 
                    from, or relating to any investing activity. You should not invest more than you can 
                    afford to lose and should ensure that you fully understand the risks involved.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    `;
}

