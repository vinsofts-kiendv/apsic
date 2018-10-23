var Sponsor = {
    TotalItem: 0,
    StartItem: 0,
    EndItem: 3,
    Timer: null,
    Init: function(intTotalItem, startItem, endItem, blAllowAuto) {
        this.TotalItem = intTotalItem;
        this.StartItem = startItem;
        this.EndItem = endItem;

        //Show default item
        for (var index = this.StartItem; index <= this.EndItem; index++) {
            var htmlItem = this.GetHtmlItem(index);
            $("#SponsorContainer").append(htmlItem);
        }

        //Auto
        if (blAllowAuto)
            this.AutoRun("Sponsor.Previous()");
    },
    Previous: function () {
        //Start
        $("#SponsorItem_" + this.StartItem).remove();
        this.StartItem++;
        if (this.StartItem >= this.TotalItem)
            this.StartItem = 0;
        //var firtItem = $("SponsorItem_" + this.StartItem);

        //End 
        this.EndItem++;
        if (this.EndItem >= this.TotalItem)
            this.EndItem = 0;
        var htmlItem = this.GetHtmlItem(this.EndItem);
        $("#SponsorContainer").append(htmlItem);

        //Auto
        clearTimeout(this.Timer);
        this.AutoRun("Sponsor.Previous()");
    },
    Next: function() {
        //End 
        $("#SponsorItem_" + this.EndItem).remove();
        this.EndItem--;
        if (this.EndItem < 0)
            this.EndItem = this.TotalItem  -1;

        //Start
        var firtItem = $("#SponsorItem_" + this.StartItem);
        this.StartItem--;
        if (this.StartItem < 0)
            this.StartItem = this.TotalItem - 1;
        var htmlItem = this.GetHtmlItem(this.StartItem);
        $(htmlItem).insertBefore(firtItem);

        //Auto
        clearTimeout(this.Timer);
        this.AutoRun("Sponsor.Next()");
    },
    AutoRun: function(action) {
        this.Timer = setTimeout(action, 5000);
    },
    GetHtmlItem: function (index) {
        var data = SponsorData[index];

        var html = "";
        html += "<li id='SponsorItem_" + index + "'>";
        html += " <a href='" + data.Url + "' target='_blank' title='" + data.Title + "'>";
        html += "   <img src='" + data.ImgSrc + "' alt='" + data.Title + "' style='border: none;' />";
        html += " </a>";
        html += "</li>";

        return html;
    }
};

var SponsorData = [{ 'Order': 0, 'ImgSrc': '/Images/sponsors/bayer_logo.png', 'Title': 'bayer logo', 'Type': 'Diamond', 'Url': '#' }
                  , { 'Order': 1, 'ImgSrc': '/Images/sponsors/biomin_logo.png', 'Title': 'biomin logo', 'Type': 'Diamond', 'Url': '#' }
                  , { 'Order': 2, 'ImgSrc': '/Images/sponsors/boehringer_logo.png', 'Title': 'boehringer ingelheim logo', 'Type': 'Diamond', 'Url': '#' }
                  , { 'Order': 3, 'ImgSrc': '/Images/sponsors/msd_animal_health_logo.png', 'Title': 'msd animal health logo', 'Type': 'Diamond', 'Url': '#' }
                  , { 'Order': 4, 'ImgSrc': '/Images/sponsors/diamondv_logo.png', 'Title': 'diamondv logo', 'Type': 'Gold', 'Url': '#' }
                  , { 'Order': 5, 'ImgSrc': '/Images/sponsors/vohun_logo.png', 'Title': 'vohun logo', 'Type': 'Gold', 'Url': '#' }
                  , { 'Order': 6, 'ImgSrc': '/Images/sponsors/menon_logo.png', 'Title': 'menon logo', 'Type': 'Gold', 'Url': '#' }
                  , { 'Order': 7, 'ImgSrc': '/Images/sponsors/deheus_logo.png', 'Title': 'deheus logo', 'Type': 'Gold', 'Url': '#' }
                  , { 'Order': 8, 'ImgSrc': '/Images/sponsors/cargill_logo.png', 'Title': 'cargill logo', 'Type': 'Gold', 'Url': '#' }
                  , { 'Order': 10, 'ImgSrc': '/Images/sponsors/worldanimal_logo.png', 'Title': 'world animal logo', 'Type': 'Silver', 'Url': '#' }
                  , { 'Order': 11, 'ImgSrc': '/Images/sponsors/asifac_logo.png', 'Title': 'asifac logo', 'Type': 'Silver', 'Url': '#' }
                  , { 'Order': 12, 'ImgSrc': '/Images/sponsors/phibro_logo.png', 'Title': 'phibro logo', 'Type': 'Silver', 'Url': '#' }
                  , { 'Order': 13, 'ImgSrc': '/Images/sponsors/ctcbioinc_logo.png', 'Title': 'ctcbioinc logo', 'Type': 'Other', 'Url': '#' }
                    ];