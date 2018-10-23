/* ABU 2013 (50th) - Ha Noi - Viet Nam*/
var Abu = {
    CountriesArray: [{ "Name": "AFGHANISTAN" }, { "Name": "ALBANIA" }, { "Name": "ALGERIA" }, { "Name": "AMERICAN SAMOA" }, { "Name": "ANDORRA" }, { "Name": "ANGOLA" }, { "Name": "ANGUILLA" }, { "Name": "ANTARCTICA" }, { "Name": "ANTIGUA AND BARBUDA" }, { "Name": "ARGENTINA" }, { "Name": "ARMENIA" }, { "Name": "ARUBA" }, { "Name": "AUSTRALIA" }, { "Name": "AUSTRIA" }, { "Name": "AZERBAIJAN" }, { "Name": "BAHAMAS" }, { "Name": "BAHRAIN" }, { "Name": "BANGLADESH" }, { "Name": "BARBADOS" }, { "Name": "BELARUS" }, { "Name": "BELGIUM" }, { "Name": "BELIZE" }, { "Name": "BENIN" }, { "Name": "BERMUDA" }, { "Name": "BHUTAN" }, { "Name": "BOLIVIA" }, { "Name": "BOSNIA AND HERZEGOWINA" }, { "Name": "BOTSWANA" }, { "Name": "BRAZIL" }, { "Name": "BRUNEI DARUSSALAM" }, { "Name": "BULGARIA" }, { "Name": "BURKINA FASO" }, { "Name": "BURUNDI" }, { "Name": "CAMBODIA" }, { "Name": "CAMEROON" }, { "Name": "CANADA" }, { "Name": "CAPE VERDE" }, { "Name": "CAYMAN ISLANDS" }, { "Name": "CENTRAL AFRICAN REPUBLIC" }, { "Name": "CHAD" }, { "Name": "CHILE" }, { "Name": "CHINA" }, { "Name": "CHRISTMAS ISLAND" }, { "Name": "COCOS (KEELING) ISLANDS" }, { "Name": "COLOMBIA" }, { "Name": "COMOROS" }, { "Name": "CONGO" }, { "Name": "CONGO, THE DEMOCRATIC REPUBLIC OF THE" }, { "Name": "COOK ISLANDS" }, { "Name": "COSTA RICA" }, { "Name": "COTE D'IVOIRE" }, { "Name": "CROATIA (local name: Hrvatska)" }, { "Name": "CUBA" }, { "Name": "CYPRUS" }, { "Name": "CZECH REPUBLIC" }, { "Name": "DENMARK" }, { "Name": "DJIBOUTI" }, { "Name": "DOMINICA" }, { "Name": "DOMINICAN REPUBLIC" }, { "Name": "ECUADOR" }, { "Name": "EGYPT" }, { "Name": "EL SALVADOR" }, { "Name": "EQUATORIAL GUINEA" }, { "Name": "ERITREA" }, { "Name": "ESTONIA" }, { "Name": "ETHIOPIA" }, { "Name": "FALKLAND ISLANDS (MALVINAS)" }, { "Name": "FAROE ISLANDS" }, { "Name": "FIJI" }, { "Name": "FINLAND" }, { "Name": "FRANCE" }, { "Name": "FRENCH GUIANA" }, { "Name": "FRENCH POLYNESIA" }, { "Name": "GABON" }, { "Name": "GAMBIA" }, { "Name": "GEORGIA" }, { "Name": "GERMANY" }, { "Name": "GHANA" }, { "Name": "GIBRALTAR" }, { "Name": "GREECE" }, { "Name": "GREENLAND" }, { "Name": "GRENADA" }, { "Name": "GUADELOUPE" }, { "Name": "GUAM" }, { "Name": "GUATEMALA" }, { "Name": "GUINEA" }, { "Name": "GUINEA-BISSAU" }, { "Name": "GUYANA" }, { "Name": "HAITI" }, { "Name": "HONDURAS" }, { "Name": "HONG KONG" }, { "Name": "HUNGARY" }, { "Name": "ICELAND" }, { "Name": "INDIA" }, { "Name": "INDONESIA" }, { "Name": "IRAN (ISLAMIC REPUBLIC OF)" }, { "Name": "IRAQ" }, { "Name": "IRELAND" }, { "Name": "ISRAEL" }, { "Name": "ITALY" }, { "Name": "JAMAICA" }, { "Name": "JAPAN" }, { "Name": "JORDAN" }, { "Name": "KAZAKHSTAN" }, { "Name": "KENYA" }, { "Name": "KIRIBATI" }, { "Name": "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF" }, { "Name": "KOREA, REPUBLIC OF" }, { "Name": "KUWAIT" }, { "Name": "KYRGYZSTAN" }, { "Name": "LAO PEOPLE'S DEMOCRATIC REPUBLIC" }, { "Name": "LATVIA" }, { "Name": "LEBANON" }, { "Name": "LESOTHO" }, { "Name": "LIBERIA" }, { "Name": "LIBYAN ARAB JAMAHIRIYA" }, { "Name": "LIECHTENSTEIN" }, { "Name": "LITHUANIA" }, { "Name": "LUXEMBOURG" }, { "Name": "MACAU" }, { "Name": "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF" }, { "Name": "MADAGASCAR" }, { "Name": "MALAWI" }, { "Name": "MALAYSIA" }, { "Name": "MALDIVES" }, { "Name": "MALI" }, { "Name": "MALTA" }, { "Name": "MARSHALL ISLANDS" }, { "Name": "MARTINIQUE" }, { "Name": "MAURITANIA" }, { "Name": "MAURITIUS" }, { "Name": "MAYOTTE" }, { "Name": "MEXICO" }, { "Name": "MICRONESIA, FEDERATED STATES OF" }, { "Name": "MOLDOVA, REPUBLIC OF" }, { "Name": "MONACO" }, { "Name": "MONGOLIA" }, { "Name": "MONTSERRAT" }, { "Name": "MOROCCO" }, { "Name": "MOZAMBIQUE" }, { "Name": "MYANMAR" }, { "Name": "NAMIBIA" }, { "Name": "NAURU" }, { "Name": "NEPAL" }, { "Name": "NETHERLANDS" }, { "Name": "NETHERLANDS ANTILLES" }, { "Name": "NEW CALEDONIA" }, { "Name": "NEW ZEALAND" }, { "Name": "NICARAGUA" }, { "Name": "NIGER" }, { "Name": "NIGERIA" }, { "Name": "NIUE" }, { "Name": "NORFOLK ISLAND" }, { "Name": "NORWAY" }, { "Name": "OMAN" }, { "Name": "PAKISTAN" }, { "Name": "PALAU" }, { "Name": "Palestine" }, { "Name": "PANAMA" }, { "Name": "PAPUA NEW GUINEA" }, { "Name": "PARAGUAY" }, { "Name": "PERU" }, { "Name": "PHILIPPINES" }, { "Name": "PITCAIRN" }, { "Name": "POLAND" }, { "Name": "PORTUGAL" }, { "Name": "PUERTO RICO" }, { "Name": "QATAR" }, { "Name": "REUNION" }, { "Name": "ROMANIA" }, { "Name": "RUSSIAN FEDERATION" }, { "Name": "RWANDA" }, { "Name": "SAINT KITTS AND NEVIS" }, { "Name": "SAINT LUCIA" }, { "Name": "SAINT VINCENT AND THE GRENADINES" }, { "Name": "SAMOA" }, { "Name": "SAN MARINO" }, { "Name": "SAO TOME AND PRINCIPE" }, { "Name": "SAUDI ARABIA" }, { "Name": "SENEGAL" }, { "Name": "SEYCHELLES" }, { "Name": "SIERRA LEONE" }, { "Name": "SINGAPORE" }, { "Name": "SLOVAKIA (Slovak Republic)" }, { "Name": "SLOVENIA" }, { "Name": "SOLOMON ISLANDS" }, { "Name": "SOMALIA" }, { "Name": "SOUTH AFRICA" }, { "Name": "SPAIN" }, { "Name": "SRI LANKA" }, { "Name": "ST. HELENA" }, { "Name": "ST. PIERRE AND MIQUELON" }, { "Name": "SUDAN" }, { "Name": "SURINAME" }, { "Name": "SWAZILAND" }, { "Name": "SWEDEN" }, { "Name": "SWITZERLAND" }, { "Name": "SYRIAN ARAB REPUBLIC" }, { "Name": "TAIWAN (ROC)" }, { "Name": "TAJIKISTAN" }, { "Name": "TANZANIA, UNITED REPUBLIC OF" }, { "Name": "THAILAND" }, { "Name": "TOGO" }, { "Name": "TOKELAU" }, { "Name": "TONGA" }, { "Name": "TRINIDAD AND TOBAGO" }, { "Name": "TUNISIA" }, { "Name": "TURKEY" }, { "Name": "TURKMENISTAN" }, { "Name": "TURKS AND CAICOS ISLANDS" }, { "Name": "TUVALU" }, { "Name": "UGANDA" }, { "Name": "UKRAINE" }, { "Name": "UNITED ARAB EMIRATES" }, { "Name": "UNITED KINGDOM" }, { "Name": "UNITED STATES" }, { "Name": "URUGUAY" }, { "Name": "UZBEKISTAN" }, { "Name": "VANUATU" }, { "Name": "VENEZUELA" }, { "Name": "VIET NAM" }, { "Name": "VIRGIN ISLANDS (BRITISH)" }, { "Name": "VIRGIN ISLANDS (U.S.)" }, { "Name": "WALLIS AND FUTUNA ISLANDS" }, { "Name": "WESTERN SAHARA" }, { "Name": "YEMEN" }, { "Name": "YUGOSLAVIA" }, { "Name": "ZAMBIA" }, { "Name": "ZIMBABWE"}],
    CompanyListNonMember: [{ "Name": "Advanced Digital Broadcast SA" }, { "Name": "African Union of Broadcasting" }, { "Name": "Arab Advisors Group" }, { "Name": "Arab States Broadcasting Union" }, { "Name": "Asia-Europe Foundation" }, { "Name": "Asian Media Information and Communication Centre Ltd.," }, { "Name": "Asia-Pacific Institute for Broadcasting Development" }, { "Name": "Associated Press" }, { "Name": "Association of Radio Industries and Businesses " }, { "Name": "ATDI" }, { "Name": "Bang Singapore Pte Ltd." }, { "Name": "Canal France International" }, { "Name": "Caribbean Broadcasting Union" }, { "Name": "Channel One Russia" }, { "Name": "Commonwealth Broadcasting Association" }, { "Name": "Communications Regulatory Commission" }, { "Name": "Continental Electronics" }, { "Name": "Daejin University" }, { "Name": "Dompet Dhuafa Republika Foundation " }, { "Name": "Educational Radio and Television, Afghanistan " }, { "Name": "Electronics and Telecommunications Research Institute" }, { "Name": "European Broadcasting Union" }, { "Name": "European Radiocommunications Office" }, { "Name": "Fédération Internationale de Football Association" }, { "Name": "Friedrich-Ebert-Stiftung" }, { "Name": "Gencom Technology" }, { "Name": "Global Creative and Media Agency" }, { "Name": "GMA Network, Inc." }, { "Name": "Google Inc. " }, { "Name": "Great Sports Media" }, { "Name": "Harris Corporation" }, { "Name": "HFCC" }, { "Name": "Hitachi, Limited" }, { "Name": "Hoso Bunka Foundation" }, { "Name": "Host Broadcast Services" }, { "Name": "iBiquity Digital Corporation" }, { "Name": "IBM Global Business Services" }, { "Name": "Incheon Asian Games Organising Committee" }, { "Name": "Independent Television Service" }, { "Name": "Information, Communications Technology and Post Authority" }, { "Name": "Institut fur Rundfunktechnik" }, { "Name": "International Association Broadcasting" }, { "Name": "International Association of Broadcasting" }, { "Name": "International Olympic Committee" }, { "Name": "International Telecommunication Union" }, { "Name": "Japan Prizes Secretariat" }, { "Name": "KIT Digital, Inc." }, { "Name": "Korea Communications Commission" }, { "Name": "Korea E &amp; Ex Inc." }, { "Name": "Korea Electronics Technology Institute" }, { "Name": "Korea Foundation" }, { "Name": "Korean Broadcasting Commission" }, { "Name": "LG Corp." }, { "Name": "LG UPlus Corp" }, { "Name": "Macquarie University" }, { "Name": "Malaysian Communications and Multimedia Commission" }, { "Name": "Media Center Solutions Ltd" }, { "Name": "metaFrontier.jp, LLC" }, { "Name": "Ministry of Communication and Information Technology " }, { "Name": "Moving Picture Experts Group" }, { "Name": "National Film Development Corporation" }, { "Name": "Nautel Limited" }, { "Name": "New Delhi Television Limited" }, { "Name": "North American Broadcasters Association" }, { "Name": "North American Broadcasting Association" }, { "Name": "Organizacion de la Television Iberoamericana" }, { "Name": "Pacific Islands News Association" }, { "Name": "Pacific Telecommunications Council" }, { "Name": "Panasonic Systems Asia Pacific" }, { "Name": "Pulso Mundo" }, { "Name": "Radio France Internationale" }, { "Name": "Radio Televisao Portuguesa" }, { "Name": "Renegade Films" }, { "Name": "Rohde &amp; Schwarz" }, { "Name": "Samsung Electronics" }, { "Name": "Singapore Exhibition Services" }, { "Name": "Southern African Broadcasting Association" }, { "Name": "Telekom Malaysia" }, { "Name": "Teleport Consulting Group International, L.L.C." }, { "Name": "TeliaSonera AB" }, { "Name": "The International Amateur Radio Union Region 3" }, { "Name": "Thomson Foundation" }, { "Name": "Ubiquitous Media Contents Alliance and Future Broadcasting Research Group" }, { "Name": "UFA Sports Asia Pte Ltd" }, { "Name": "UNI Global Union – Asia &amp; Pacific" }, { "Name": "United Nations Children's Fund" }, { "Name": "United Nations Educational, Scientific and Cultural Organisation" }, { "Name": "United Nations Radio" }, { "Name": "Verimatrix" }, { "Name": "Voice of Russia " }, { "Name": "Waseda University" }, { "Name": "World  Broadcasting Unions" }, { "Name": "YG Entertainment, Inc." }, { "Name": "Yonsei University" }, { "Name": "YouTube Korea"}],
    CompanyListMember: [{ "Name": "ABC Development Corporation " }, { "Name": "Alternative Irkutsk Studio of TV" }, { "Name": "Amcara Broadcasting Network, Inc." }, { "Name": "American Broadcasting Company" }, { "Name": "AORA/ PT Karyamegah Adijaya" }, { "Name": "APT Satellite Company Limited" }, { "Name": "ARD" }, { "Name": "Ariana Radio &amp; Television Network " }, { "Name": "Asia Broadcast Satellite" }, { "Name": "Asia Satellite Telecommunications Company Ltd" }, { "Name": "Asia-Pacific Broadcasting Union" }, { "Name": "Asset Radio Broadcasting (Pvt) Ltd" }, { "Name": "Association for International Broadcasting" }, { "Name": "Association of Community Radio Broadcasters Nepal" }, { "Name": "ASTRO Holdings Sdn Bhd" }, { "Name": "ATEME" }, { "Name": "Audio Visual Global Joint Stock Company" }, { "Name": "Australian Broadcasting Corporation" }, { "Name": "Babcock International " }, { "Name": "Bangladesh Betar" }, { "Name": "Bangladesh Television" }, { "Name": "Benchmark Systems (S) Pte Ltd" }, { "Name": "Bhutan Broadcasting Service" }, { "Name": "Biz Broadcasting (Private) Limited " }, { "Name": "British Broadcasting Corporation" }, { "Name": "Broadcast Australia Pty. Limited" }, { "Name": "Broadcast Belgium" }, { "Name": "Broadcast Engineering Consultants India Ltd" }, { "Name": "Broadcast UK Ltd. (Radioscape)" }, { "Name": "Broadcasting &amp; Publications Authority" }, { "Name": "Broadcasting Satellite System Corporation" }, { "Name": "BTV Television" }, { "Name": "Business &amp; Professional Products Asia Pacific" }, { "Name": "Carlton Sports Network (Pvt) Ltd " }, { "Name": "CASBAA Limited" }, { "Name": "CELCOM (Malaysia) Sdn Bhd" }, { "Name": "Centennial Radio 101FM" }, { "Name": "CNN International" }, { "Name": "Commercial Radio Australia Limited" }, { "Name": "Conax AS" }, { "Name": "Contineo Media Pte. Ltd." }, { "Name": "DDishTV LLC" }, { "Name": "deltatre s.p.a." }, { "Name": "Deutsche Welle" }, { "Name": "Digital Radio Mondiale Consortium" }, { "Name": "Digital Video Broadcasting Project" }, { "Name": "Dim Sum Television Company Limited" }, { "Name": "Dolby Laboratories Inc." }, { "Name": "EAP Networks (Pvt) Ltd" }, { "Name": "Editec International Pte Ltd" }, { "Name": "Egyptian Radio and Television Union" }, { "Name": "Ekh Oron National Television" }, { "Name": "Encompass Digital Media (Asia) Pte. Ltd." }, { "Name": "ENENSYS Technologies SA" }, { "Name": "ETV HD Television, Emerge Media LLC" }, { "Name": "Eutelsat S.A." }, { "Name": "Federated States of Micronesia Broadcasting Association" }, { "Name": "Fiji Broadcasting Corporation " }, { "Name": "Fiji Television Limited" }, { "Name": "Forever Group Co., Ltd." }, { "Name": "Fraunhofer Institute for Integrated Circuits" }, { "Name": "Friends of Canadian Broadcasting" }, { "Name": "Geo-Independent Media Corporation (Pvt) Ltd." }, { "Name": "GlobeCast Asia Pte Ltd" }, { "Name": "Green Wave Telecommunication Sdn Bhd" }, { "Name": "HBS TV LLC Company" }, { "Name": "Hong Kong Commercial Broadcasting Company Ltd" }, { "Name": "Hong Kong Trade Development Council " }, { "Name": "HUM Network Limited" }, { "Name": "Ikegami Tsushinki Co., Ltd." }, { "Name": "Independent Television Network Limited" }, { "Name": "International Association of Broadcasting Manufacturers" }, { "Name": "International Association of Women in Radio and Television" }, { "Name": "International Media &amp; Broadcasting Academy" }, { "Name": "International News Safety Institute" }, { "Name": "Islamic International News Agency" }, { "Name": "Islamic Republic of Iran Broadcasting" }, { "Name": "Island Broadcasting Company Pvt. Ltd." }, { "Name": "Japan Electronics Show Association" }, { "Name": "Japan Media Communication Center" }, { "Name": "Joint-Stock Company ''Khabar Agency&quot;, Republic of Kazakhstan" }, { "Name": "JoongAng Broadcasting Corporation" }, { "Name": "Jordan Radio and Television Corporation" }, { "Name": "Kapisanan ng mga Brodkaster ng Pilipinas" }, { "Name": "Kathrein Indochina Co., Ltd." }, { "Name": "Kordia Solutions " }, { "Name": "Korea Educational Broadcasting System" }, { "Name": "Korean Broadcasting System" }, { "Name": "Kuzoo FM" }, { "Name": "Lao National Radio" }, { "Name": "Lao National Television" }, { "Name": "LPP Televisi Republik Indonesia " }, { "Name": "LS Telcom AG" }, { "Name": "Maldives Broadcasting Corporation" }, { "Name": "Mauritius Broadcasting Corporation" }, { "Name": "MBC Networks (Pvt) Limited" }, { "Name": "MEASAT Satellite Systems Sdn Bhd" }, { "Name": "Media Asset Capital" }, { "Name": "Media Development Authority of Singapore" }, { "Name": "Media Niugini Limited" }, { "Name": "MediaCorp Pte Ltd " }, { "Name": "MediaCorp TV Singapore Pte Ltd" }, { "Name": "Metro Broadcast Corporation Limited" }, { "Name": "MN 25 Television" }, { "Name": "Moby Group" }, { "Name": "Mongolian National Education Channel" }, { "Name": "Mongolian National Public Radio and Television " }, { "Name": "Mongolian Radio and Television Broadcasting Network " }, { "Name": "MTV Channel (Pvt) Limited" }, { "Name": "MultiCarrier (Mauritius) Limited" }, { "Name": "Multimedia Development &amp; Communication Centre, Ltd." }, { "Name": "Munhwa Broadcasting Corporation" }, { "Name": "Myanma Radio and Television" }, { "Name": "National Association of Broadcasters, USA" }, { "Name": "National Broadcasting Corporation of Papua New Guinea" }, { "Name": "National Broadcasting Services of Thailand" }, { "Name": "National Radio and Television of Afghanistan" }, { "Name": "National Television and Radio Company of Uzbekistan" }, { "Name": "National Television of Cambodia" }, { "Name": "Nepal Television Corporation" }, { "Name": "New Broadcasting System" }, { "Name": "Newtec Asia Pacific Pte Ltd" }, { "Name": "NHK Enterprises, Inc." }, { "Name": "NHK Global Media Services, Inc." }, { "Name": "NHK Integrated Technology Inc." }, { "Name": "NHK International, Inc." }, { "Name": "Nippon Hoso Kyokai" }, { "Name": "Noorin Radio Television Network" }, { "Name": "Norfolk Island Broadcasting Service" }, { "Name": "Norwegian Broadcasting Corporation " }, { "Name": "NTV Mongolia" }, { "Name": "OKNO-TV Kazakhstan Ltd" }, { "Name": "One News Limited" }, { "Name": "Organismes Francais de Radiodiffusion et Television" }, { "Name": "Outsourced Broadcast Networks Sdn Bhd" }, { "Name": "Pacific Satellite Connection" }, { "Name": "Pacific Television Center" }, { "Name": "Pakistan Broadcasting Corporation" }, { "Name": "Pakistan Electronic Media Regulatory Authority" }, { "Name": "Pakistan Television Corporation Limited" }, { "Name": "Palestine Public Broadcasting Commission " }, { "Name": "People's Television Network, Inc" }, { "Name": "Philippine Broadcasting Service" }, { "Name": "Phoenix Satellite Television Co. Ltd." }, { "Name": "Plisch Broadcast Asia Pacific Pte. Ltd." }, { "Name": "Prasar Bharati - All India Radio" }, { "Name": "Prasar Bharati - Doordarshan " }, { "Name": "PRIX JEUNESSE International" }, { "Name": "PT Indonusa Telemedia" }, { "Name": "PT Media Televisi Indonesia" }, { "Name": "PT Rajawali Citra Televisi Indonesia" }, { "Name": "Public Broadcasting Corporation of Kyrgyz Republic" }, { "Name": "Public Television and Radio Broadcasting Company of Azerbaijan Republic" }, { "Name": "Qatar Media Corporation" }, { "Name": "Radio and Television of the People's Republic of China" }, { "Name": "Radio Broadcasting FM (Bangladesh) Co., Ltd." }, { "Name": "Radio E Televisao De Timor-Leste " }, { "Name": "Radio Free Asia" }, { "Name": "Radio Frequency System" }, { "Name": "Radio Nepal" }, { "Name": "Radio Netherlands Worldwide" }, { "Name": "Radio New Zealand" }, { "Name": "Radio Plus Ltd" }, { "Name": "Radio Republik Indonesia" }, { "Name": "Radio Television Brunei" }, { "Name": "Radio Television Hong Kong" }, { "Name": "Radio Television Malaysia" }, { "Name": "Radiotelevisione Italiana SPA" }, { "Name": "RT Channel" }, { "Name": "Russian State Television and Radio Broadcasting Company" }, { "Name": "Saba Media Organization" }, { "Name": "Samoa Broadcasting Corporation" }, { "Name": "Saudi Arabian Radio and Television" }, { "Name": "Sawt Al Madenah Radio" }, { "Name": "S-Comm Technologies Pty Ltd" }, { "Name": "Sentia Media" }, { "Name": "Seoul Broadcasting System" }, { "Name": "Shalimar Television Network" }, { "Name": "Singapore Sports Council" }, { "Name": "Singapore Telecommunications Limited" }, { "Name": "Sistem Televisyen Malaysia Berhad " }, { "Name": "SKY Perfect JSAT Corporation" }, { "Name": "Snell Asia Pacific Ltd" }, { "Name": "Softbank Telecom Corporation" }, { "Name": "Soroush Multimedia Corporation" }, { "Name": "Special Broadcasting Service Corporation, Australia" }, { "Name": "Sports Media Services Ltd " }, { "Name": "Sri Lanka Broadcasting Corporation" }, { "Name": "Sri Lanka Rupavahini Corporation" }, { "Name": "Sudan National Public Radio Corporation" }, { "Name": "Supervision Broadcasting Network Television" }, { "Name": "Swiss Broadcasting Corporation" }, { "Name": "TBS Holdings, Inc." }, { "Name": "TeamCast" }, { "Name": "Technomedia Solutions Pvt. Limited" }, { "Name": "Teledifusao de Macau, S.A" }, { "Name": "Telekom Television Limited" }, { "Name": "Telesto Broadcast Solutions Pte Ltd" }, { "Name": "Television Broadcasts Limited" }, { "Name": "Television New Zealand Limited" }, { "Name": "Telstra Singapore Pte Ltd" }, { "Name": "Thai Public Broadcasting Service" }, { "Name": "The “Turkmenistan” Television and Radio Centre" }, { "Name": "The International Academy of Television Arts &amp; Science" }, { "Name": "The Japan Commercial Broadcasters Association" }, { "Name": "The Radio and Television Broadcasting Committee  of the Democratic People's Republic of Korea" }, { "Name": "The Voice of Vietnam" }, { "Name": "TM Net Sdn Bhd" }, { "Name": "Tonga Broadcasting Commission " }, { "Name": "Trans World Radio Pacific" }, { "Name": "TRANSRADIO SenderSysteme Berlin AG" }, { "Name": "Triton Digital Media Asia Pte Ltd" }, { "Name": "TTOC Media Pty Ltd" }, { "Name": "Turkish Radio Television Corporation" }, { "Name": "TV Pool of Thailand" }, { "Name": "TV5 Mongolia" }, { "Name": "TV9 Television" }, { "Name": "T-VIPS AS" }, { "Name": "Ulaanbaatar Broadcasting System" }, { "Name": "United Nations Department of Public Information" }, { "Name": "Vanuatu Broadcasting and Television Corporation" }, { "Name": "Venture Consulting Pty Ltd" }, { "Name": "Vietnam Television" }, { "Name": "Voice of America" }, { "Name": "VTC Digital Television" }, { "Name": "World DMB Forum" }, { "Name": "Young Asia Television" }, { "Name": "ZDF German Television"}],
    requestTimeout: 1000000,
    Init: function () {

    }
};
Abu.BindCountry = function (elm, isMulti) {
    if (isMulti == undefined || isMulti == null) isMulti = false;
    var optionText = "<option value=\"\"></option>";
    $.each(this.CountriesArray, function (idx, item) {
        optionText += "<option value=\"" + item.Name + "\">" + item.Name + "</option>";
    });
    $(elm).html(optionText);
    $(elm).chosen({ allow_single_deselect: isMulti });
};
Abu.BindCompany = function (elm, byMember) {
    //$(elm).empty();
    //$(elm + '_chzn').empty();
    if (byMember == undefined || byMember == null) byMember = false;
    var optionText = "<option value=\"\"></option>";
    var companyArr = byMember ? this.CompanyListMember : this.CompanyListNonMember;
    $.each(companyArr, function (idx, item) {
        optionText += "<option value=\"" + item.Name + "\">" + item.Name + "</option>";
    });
    $(elm).html(optionText);
    $(elm).chosen({ allow_single_deselect: false });
    $(elm).trigger("liszt:updated");
};

Abu.Login = function () {
    // username
    var ctl00_cphContent_txt_Username = $("#ctl00_cphContent_txt_Username");
    // password
    var ctl00_cphContent_txt_Password = $("#ctl00_cphContent_txt_Password");
    // Validate username
    if (IsNullOrEmpty(ctl00_cphContent_txt_Username.val())) {
        Abu.MessageBox("Invalid UserName");
        return false;
    }
    // validate password
    if (IsNullOrEmpty(ctl00_cphContent_txt_Password.val())) {
        Abu.MessageBox("Invalid Password");
        return false;
    }
    Abu.Post({
        module: "user",
        action: "login",
        params: $("#frmRegistrationLogin").serialize(),
        postObject: false,
        success: function (res) {
            if (res.Success) {
                return goTo('/registration.aspx?step=3');
            } else {
                Abu.MessageBox(res.Message);
            }
        }
    });
};
Abu.UpdateParticipantDetails = function () {
    var validate = false;
    // Validate form
    validate = Abu.ValidateInputTextMessage("#ctl00_cphContent_Company", "Invalid company");
    if (!validate) return false;
    validate = Abu.ValidateInputRadioMessage("#ctl00_cphContent_rbl_Title_0") ||
                Abu.ValidateInputRadioMessage("#ctl00_cphContent_rbl_Title_1") ||
                Abu.ValidateInputRadioMessage("#ctl00_cphContent_rbl_Title_2") ||
                Abu.ValidateInputRadioMessage("#ctl00_cphContent_rbl_Title_3") ||
                Abu.ValidateInputTextMessage("#ctl00_cphContent_txt_Other");
    if (!validate) {
        Abu.MessageBox("Invalid Title");
        return false;
    }
    validate = Abu.ValidateInputTextMessage("#ctl00_cphContent_radTxt_FullName_text", "Invalid Full Name As Shown in Passport");
    if (!validate) return false;
    validate = Abu.ValidateInputTextMessage("#ctl00_cphContent_radTxt_NameTag_text", "Invalid Name To Be Shown on Name Tag");
    if (!validate) return false;
    validate = Abu.ValidateInputRadioMessage("#ctl00_cphContent_rbtn_Male") ||
                Abu.ValidateInputRadioMessage("#ctl00_cphContent_rbtn_Female");
    if (!validate) {
        Abu.MessageBox("Invalid Gender");
        return false;
    }

    validate = Abu.ValidateInputTextMessage("#ctl00_cphContent_NationalityAtBirth", "Invalid Nationality at Birth");
    if (!validate) return false;
    validate = Abu.ValidateInputTextMessage("#ctl00_cphContent_NationalityAtPresent", "Invalid Nationality at Present");
    if (!validate) return false;
    validate = Abu.ValidateInputTextMessage("#datepicker_dateofbirth", "Invalid Date of Birth");
    if (!validate) return false;
    validate = Abu.ValidateInputTextMessage("#ctl00_cphContent_radtxt_PassportNo_text", "Invalid Passport Number");
    if (!validate) return false;
    validate = Abu.ValidateInputTextMessage("#ctl00_cphContent_radtxt_PlaceOfIssue_text", "Invalid Place of Issue");
    if (!validate) return false;
    validate = Abu.ValidateInputTextMessage("#datepicker_dateofissue", "Invalid Date of Issue");
    if (!validate) return false;
    validate = Abu.ValidateInputTextMessage("#datepicker_expirydate", "Invalid Expiry Date");
    if (!validate) return false;
    validate = Abu.ValidateInputRadioMessage("#ctl00_cphContent_rbtn_HeadDelegation") ||
                Abu.ValidateInputRadioMessage("#ctl00_cphContent_rbtn_Delegation");
    if (!validate) {
        Abu.MessageBox("Invalid Organisation's Status");
        return false;
    }
    validate = Abu.ValidateInputTextMessage("#ctl00_cphContent_radTxt_Position_text", "Invalid Position in Organisation");
    if (!validate) return false;
    validate = Abu.ValidateInputTextMessage("#ctl00_cphContent_radTxt_OfficeAddress", "Invalid Office Address");
    if (!validate) return false;
    validate = Abu.ValidateInputTextMessage("#ctl00_cphContent_OfficeCountry", "Invalid Office Country");
    if (!validate) return false;
    validate = Abu.ValidateInputTextMessage("#ctl00_cphContent_radTxt_ParticipantEmailAddress_text", "Invalid Email Address", true);
    if (!validate) return false;

    if (validate) {
        // to Post
        Abu.Post({
            module: "registration",
            action: "update_participant",
            params: $("#frmRegistrationParticipantDetails").serialize(),
            postObject: false,
            success: function (res) {
                if (res.Success) {
                    $("#tabs").tabs("select", 1);
                } else {
                    if (!IsNullOrEmpty(res.Message))
                        Abu.MessageBox(res.Message);
                }
            }
        });
    } else return false;
};
Abu.UpdateMeetings = function () {
    var validate = true;
    // Validate form



    if (validate) {
        // to Post
        Abu.Post({
            module: "registration",
            action: "update_meetings",
            params: $("#frmRegistrationMeetings").serialize(),
            postObject: false,
            success: function (res) {
                if (res.Success) {
                    $("#tabs").tabs("select", 2);
                } else {
                    if (!IsNullOrEmpty(res.Message))
                        Abu.MessageBox(res.Message);
                }
            }
        });
    } else return false;
};
Abu.UpdateTravel = function () {

    var validate = true;
    // Validate form

    if (validate) {
        // to Post
        Abu.Post({
            module: "registration",
            action: "update_travel",
            params: $("#frmRegistrationTravel").serialize(),
            postObject: false,
            success: function (res) {
                if (res.Success) {
                    $("#tabs").tabs("select", 3);
                } else {
                    if (!IsNullOrEmpty(res.Message))
                        Abu.MessageBox(res.Message);
                }
            }
        });
    } else return false
};
Abu.UpdateAccompanyingPerson = function () {
    var validate = false;
    // Validate form
    if (!$("#BoxAccompanyingIndividual").is(":visible")) {
        validate = true;
        $("#tabs").tabs("select", 4);
    }
    else {

        validate = Abu.ValidateInputRadioMessage("#ctl02_cphContent_rbl_Title_0") ||
                Abu.ValidateInputRadioMessage("#ctl02_cphContent_rbl_Title_1") ||
                Abu.ValidateInputRadioMessage("#ctl02_cphContent_rbl_Title_2") ||
                Abu.ValidateInputRadioMessage("#ctl02_cphContent_rbl_Title_3") ||
                Abu.ValidateInputTextMessage("#ctl02_cphContent_txt_Other");
        if (!validate) {
            Abu.MessageBox("Invalid Title");
            return false;
        }
        validate = Abu.ValidateInputTextMessage("#ctl02_cphContent_radTxt_FullName_text", "Invalid Full Name As Shown in Passport");
        if (!validate) return false;
        validate = Abu.ValidateInputTextMessage("#ctl02_cphContent_radTxt_NameTag_text", "Invalid Name To Be Shown on Name Tag");
        if (!validate) return false;
        validate = Abu.ValidateInputRadioMessage("#ctl02_cphContent_rbtn_Male") ||
                Abu.ValidateInputRadioMessage("#ctl02_cphContent_rbtn_Female");
        if (!validate) {
            Abu.MessageBox("Invalid Gender");
            return false;
        }

        validate = Abu.ValidateInputTextMessage("#ctl02_cphContent_NationalityAtBirth", "Invalid Nationality at Birth");
        if (!validate) return false;
        validate = Abu.ValidateInputTextMessage("#ctl02_cphContent_NationalityAtPresent", "Invalid Nationality at Present");
        if (!validate) return false;
        validate = Abu.ValidateInputTextMessage("#datepicker_dateofbirth2", "Invalid Date of Birth");
        if (!validate) return false;
        validate = Abu.ValidateInputTextMessage("#ctl02_cphContent_radtxt_PassportNo_text", "Invalid Passport Number");
        if (!validate) return false;
        validate = Abu.ValidateInputTextMessage("#ctl02_cphContent_radtxt_PlaceOfIssue_text", "Invalid Place of Issue");
        if (!validate) return false;
        validate = Abu.ValidateInputTextMessage("#datepicker_dateofissue2", "Invalid Date of Issue");
        if (!validate) return false;
        validate = Abu.ValidateInputTextMessage("#datepicker_expirydate2", "Invalid Expiry Date");
        if (!validate) return false;
        
        if (validate) {
            // to Post
            Abu.Post({
                module: "registration",
                action: "update_accompanying_person",
                params: $("#frmRegistrationPerson").serialize(),
                postObject: false,
                success: function (res) {
                    if (res.Success) {
                        $("#tabs").tabs("select", 4);
                    } else {
                        if (!IsNullOrEmpty(res.Message))
                            Abu.MessageBox(res.Message);
                    }
                }
            });
        } else return false
    }
};
Abu.Completed = function () {
    Abu.MessageBox("You have to completed your registration info.");
    setTimeout(function () {
        return goTo('/');
    }, 3000);
}
Abu.RegistrationOnline = function () {
    // username
    var ctl00_cphContent_radTxt_username_text = $("#ctl00_cphContent_radTxt_username_text");
    var ctl00_cphContent_rfv_Name = $("#ctl00_cphContent_rfv_Name");
    // email
    var ctl00_cphContent_txt_Email_text = $("#ctl00_cphContent_radTxt_EmailAddress_text");
    var ctl00_cphContent_rfv_Email = $("#ctl00_cphContent_rfv_EmailAddress");
    var ctl00_cphContent_rev_Enquiry = $("#ctl00_cphContent_rev_EmailAddress");
    // password
    var ctl00_cphContent_radTxt_Password = $("#ctl00_cphContent_radTxt_Password");
    var ctl00_cphContent_rfv_Password = $("#ctl00_cphContent_rfv_Password");
    var ctl00_cphContent_rev_Password = $("#ctl00_cphContent_rev_Password");
    // confirm password
    var ctl00_cphContent_radTxt_PasswordVerification = $("#ctl00_cphContent_radTxt_PasswordVerification");
    var ctl00_cphContent_rfv_PasswordVerification = $("#ctl00_cphContent_rfv_PasswordVerification");
    var ctl00_cphContent_cv_Password = $("#ctl00_cphContent_cv_Password");
    // Validate username
    if (IsNullOrEmpty(ctl00_cphContent_radTxt_username_text.val())) {
        ctl00_cphContent_rfv_Name.show();
        return false;
    } else ctl00_cphContent_rfv_Name.hide();
    // Validate mail
    if (IsNullOrEmpty(ctl00_cphContent_txt_Email_text.val())) {
        ctl00_cphContent_rfv_Email.show();
        return false;
    } else ctl00_cphContent_rfv_Email.hide();
    if (!IsValidEmail(ctl00_cphContent_txt_Email_text.val())) {
        ctl00_cphContent_rev_Enquiry.show();
        return false;
    } else ctl00_cphContent_rev_Enquiry.hide();
    // validate password
    if (IsNullOrEmpty(ctl00_cphContent_radTxt_Password.val())) {
        ctl00_cphContent_rfv_Password.show();
        return false;
    } else ctl00_cphContent_rfv_Password.hide();
    if (ctl00_cphContent_radTxt_Password.val().length < 6 || ctl00_cphContent_radTxt_Password.val().length > 20) {
        ctl00_cphContent_rev_Password.show();
        return false;
    } else ctl00_cphContent_rev_Password.hide();
    // validate confirm password
    if (IsNullOrEmpty(ctl00_cphContent_radTxt_PasswordVerification.val())) {
        ctl00_cphContent_rfv_PasswordVerification.show();
        return false;
    } else ctl00_cphContent_rfv_PasswordVerification.hide();
    if (ctl00_cphContent_radTxt_PasswordVerification.val() != ctl00_cphContent_radTxt_Password.val()) {
        ctl00_cphContent_cv_Password.show();
        return false;
    } else ctl00_cphContent_cv_Password.hide();

    // if ok then post form
    Abu.Post({
        module: "user",
        action: "reg",
        params: $("#frmRegistration").serialize(),
        postObject: false,
        success: function (res) {
            if (res.Success) {
                console.log(res);
                goTo('/registration.aspx?step=3');
            } else {
                Abu.MessageBox(res.Message);
            }
        },
        error: function (ex) {
            // console.log(ex);
        }
    });

};

Abu.Registry = function (e) {
    var ctl00_cphContent_txt_Name_text = $("#ctl00_cphContent_txt_Name_text");
    var ctl00_cphContent_rfv_Name = $("#ctl00_cphContent_rfv_Name");
    var ctl00_cphContent_txt_Designation_text = $("#ctl00_cphContent_txt_Designation_text");
    var ctl00_cphContent_rfv_Designation = $("#ctl00_cphContent_rfv_Designation");
    var ctl00_cphContent_txt_Company_text = $("#ctl00_cphContent_txt_Company_text");
    var ctl00_cphContent_rfv_Company = $("#ctl00_cphContent_rfv_Company");
    var ctl00_cphContent_txt_Address_text = $("#ctl00_cphContent_txt_Address_text");
    var ctl00_cphContent_rfv_Address = $("#ctl00_cphContent_rfv_Address");
    var ctl00_cphContent_Country = $("#ctl00_cphContent_Country");
    var ctl00_cphContent_rfv_Country = $("#ctl00_cphContent_rfv_Country");
    // email
    var ctl00_cphContent_txt_Email_text = $("#ctl00_cphContent_txt_Email_text");
    var ctl00_cphContent_rfv_Email = $("#ctl00_cphContent_rfv_Email");
    var ctl00_cphContent_rev_Enquiry = $("#ctl00_cphContent_rev_Enquiry");
    // contact no
    var ctl00_cphContent_txt_ContactNo_text = $("#ctl00_cphContent_txt_ContactNo_text");
    var ctl00_cphContent_rfv_ContactNo = $("#ctl00_cphContent_rfv_ContactNo");
    // Enquiry
    var ctl00_cphContent_txt_Enquiry_text = $("#ctl00_cphContent_txt_Enquiry_text");
    var ctl00_cphContent_rfv_EnquiryMessage = $("#ctl00_cphContent_rfv_EnquiryMessage");

    // Validate fullname
    if (IsNullOrEmpty(ctl00_cphContent_txt_Name_text.val())) {
        ctl00_cphContent_rfv_Name.show();
        return false;
    } else ctl00_cphContent_rfv_Name.hide();
    // Validate designation
    if (IsNullOrEmpty(ctl00_cphContent_txt_Designation_text.val())) {
        ctl00_cphContent_rfv_Designation.show();
        return false;
    } else ctl00_cphContent_rfv_Designation.hide();
    // Validate Company
    if (IsNullOrEmpty(ctl00_cphContent_txt_Company_text.val())) {
        ctl00_cphContent_rfv_Company.show();
        return false;
    } else ctl00_cphContent_rfv_Company.hide();
    // Validate address
    if (IsNullOrEmpty(ctl00_cphContent_txt_Address_text.val())) {
        ctl00_cphContent_rfv_Address.show();
        return false;
    } else ctl00_cphContent_rfv_Address.hide();
    // Validate Country
    if (IsNullOrEmpty(ctl00_cphContent_Country.val())) {
        ctl00_cphContent_rfv_Country.show();
        return false;
    } else ctl00_cphContent_rfv_Country.hide();
    // Validate mail
    if (IsNullOrEmpty(ctl00_cphContent_txt_Email_text.val())) {
        ctl00_cphContent_rfv_Email.show();
        return false;
    } else ctl00_cphContent_rfv_Email.hide();
    if (!IsValidEmail(ctl00_cphContent_txt_Email_text.val())) {
        ctl00_cphContent_rev_Enquiry.show();
        return false;
    } else ctl00_cphContent_rev_Enquiry.hide();
    // Contact no
    if (IsNullOrEmpty(ctl00_cphContent_txt_ContactNo_text.val())) {
        ctl00_cphContent_rfv_ContactNo.show();
        return false;
    } else ctl00_cphContent_rfv_ContactNo.hide();
    // Enquiry
    if (IsNullOrEmpty(ctl00_cphContent_txt_Enquiry_text.val())) {
        ctl00_cphContent_rfv_EnquiryMessage.show();
        return false;
    } else ctl00_cphContent_rfv_EnquiryMessage.hide();
    // if ok then post form
    Abu.Post({
        module: "registration",
        action: "reg_event",
        params: $("#frmRegistration").serialize(),
        postObject: false,
        success: function (res) {
            if (res.Success) {
                Abu.MessageBox('You have to registry ABU event success.');
                setTimeout(function () {
                    return goTo('/');
                }, 2000);
            } else {
                Abu.MessageBox(res.Message);
            }
        },
        error: function (ex) {
            //console.log(ex);
        }
    });

};
Abu.Post = function (op) {
    var dataPost = {
        "m": op.module,
        "fn": op.action
    };
    var isShowTimeoutMessage = op.isShowTimeoutMessage ? op.isShowTimeoutMessage : true;
    var isPostObject = op.postObject != undefined ? op.postObject : true;
    if (isPostObject) {
        if (op.params != undefined && typeof (op.params) === 'object')
            dataPost = $.extend(dataPost, op.params);
    }
    else {
        if (op.params != undefined)
            dataPost = $.param(dataPost) + "&" + op.params;
    }
    var url = op.url != undefined && op.url != '' ? op.url : abu_constants.abu_2013_host + "/PostRequest.ashx";
    var keyAbort = $.ajax({
        type: 'POST',
        url: url,
        data: dataPost,
        dataType: "json",
        success: function (res) {
            op.success(res);
        },
        error: function (x, t, m) {
            if (op.error != undefined && typeof (op.error) == 'function') {
                op.error(x);
            } else if (t === "timeout") {
                if (isShowTimeoutMessage) {
                    Abu.Confirm("Processing time is too long, do you want to try again?", function () {
                        Abu.Post(op);
                    });
                }
            }
        },
        timeout: op.timeout != undefined ? op.timeout : Abu.requestTimeout
    });
    return keyAbort;
};
Abu.BindData = function (elm, content, data, usingJTemplate) {
    if (typeof (elm) == 'string') elm = $(elm);
    if (usingJTemplate == undefined) usingJTemplate = true;
    if (usingJTemplate) {
        elm.setTemplate(content);

        if (typeof (data) == "string")
            data = data != "" ? JSON.parse(data) : null;
        elm.processTemplate(data);
    } else {
        elm.html(content);
    }
    $('.tipsy_handler').tipsy({ live: true, gravity: $.fn.tipsy.autoNS });
    $(".btn_restoreversion").tipsy({ live: true, gravity: "e" });
};
Abu.MessageBox = function (msg, title) {
    if (typeof (title) == "undefined") var title = "Message window";
    var elementBox = "#abu_2013_block_messagebox";
    if ($(elementBox).length <= 0) {
        $("body").append('<div id="' + elementBox.substr(1) + '" style="display:none;" title="' + title + '"></div>');
    }
    else {
        $(elementBox).removeAttr("title").attr("title", title);
    }
    $(elementBox).dialog({
        modal: true,
        resizable: false,
        zIndex: 99999999,
        buttons: {
            'OK': function () {
                $(this).dialog('close');
            }
        },
        close: function () {
            $(elementBox).empty();
            $(this).dialog("destroy");
        }
    });
    $(elementBox).dialog('open');
    $(elementBox).html(msg);
};

Abu.SpecialMessageBox = function (msg, title, inputwt, inputht, callBack) {
    if (typeof (title) == "undefined") title = "Message window";
    if (typeof (inputwt) == "undefined") inputwt = 500;
    if (typeof (inputht) == "undefined") inputht = 350;
    if (typeof (callBack) == "undefined") callBack = function (args) { return args; };

    var elementBox = "#abu_2013_block_messagebox";
    if ($(elementBox).length <= 0) {
        $("body").append('<div id="' + elementBox.substr(1) + '" style="display:none;" title="' + title + '"></div>');
    }
    else {
        $(elementBox).removeAttr("title").attr("title", title);
    }
    $(elementBox).dialog({
        width: inputwt,
        height: inputht,
        modal: true,
        resizable: false,
        zIndex: 99999999,
        buttons: {
            'OK': function () {
                $(this).dialog('close');

                callBack();
            }
        },
        close: function () {
            $(elementBox).empty();
            $(this).dialog("destroy");
        }
    });
    $(elementBox).dialog('open');
    $(elementBox).html(msg);
};

Abu.Confirm = function (msg, callBack, callBackOnClosing, close) {
    if (typeof (close) == "undefined") var close = true;
    var elementBox = "#abu_2013_block_messagebox";
    if ($(elementBox).length <= 0) {
        $("body").append('<div id="' + elementBox.substr(1) + '" style="display:none;" title="Confirm"></div>');
    } else
        $(elementBox).removeAttr("title").attr("title", "Confirm window");
    $(elementBox).dialog({
        modal: true,
        resizable: false,
        zIndex: 99999999,
        buttons: {
            'OK': function () {
                if (close) $(this).dialog('close');
                if (typeof (callBack) != "undefined") callBack();
            },
            'Cancel': function () {
                $(this).dialog('close');
                if (typeof (callBackOnClosing) != "undefined") callBackOnClosing();
            }
        },
        close: function () {
            $(elementBox).empty();
            $(this).dialog("destroy");
        }
    });
    $(elementBox).dialog('open');
    $(elementBox).html(msg);
};
Abu.AddToFaves_hp = function () {
    var is_4up = parseInt(navigator.appVersion);
    var is_mac = navigator.userAgent.toLowerCase().indexOf("mac") != -1;
    var is_ie = navigator.userAgent.toLowerCase().indexOf("msie") != -1;
    var thePage = location.href;
    if (thePage.lastIndexOf('#') != -1)
        thePage = thePage.substring(0, thePage.lastIndexOf('#'));
    if (is_ie && is_4up && !is_mac)
        window.external.AddFavorite(thePage, document.title);
    else if (is_ie || document.images)
        booker_hp = window.open(thePage, 'booker_', 'menubar,width=325,height=100,left=140,top=60');
};
Abu.addToFavorite = function (favTitle) {
    if ((navigator.appVersion.indexOf("MSIE") > 0) && (parseInt(navigator.appVersion) >= 4)) {
        window.external.AddFavorite(location.href, unescape(favTitle));
    }
}


Abu.ValidateInputText = function (input, label) {
    if (IsNullOrEmpty($(input).val())) {
        $(label).show();
        $(input).focus();
        return false;
    } else {
        $(label).hide();
        return true;
    }
}
Abu.ValidateInputTextMessage = function (input, message, validEmail) {
    if (validEmail == undefined) validEmail = false;
    if (IsNullOrEmpty($(input).val())) {
        if (message != undefined && !IsNullOrEmpty(message))
            Abu.MessageBox(message);
        $(input).focus();
        return false;
    } else if (validEmail && !IsValidEmail($(input).val())) {
            Abu.MessageBox("Wrong format of email");
        $(input).focus();
        return false;
    }else return true;
}
Abu.ValidateInputRadioMessage = function (input, message) {
    if (!$(input).is(':checked')) {
        if (message != undefined && !IsNullOrEmpty(message))
            Abu.MessageBox(message);
        $(input).focus();
        return false;
    } else return true;
}