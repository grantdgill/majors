var fantasy = fantasy || {},
    RORY_MCILROY = '3470',
    JORDAN_SPIETH = '5467',
    JIMMY_WALKER = '446',
    RICKIE_FOWLER = '3702',
    JB_HOLMES = '1067',
    PHIL_MICKELSON = '308',
    BUBBA_WATSON = '780',
    DUSTIN_JOHNSON = '3448',
    JASON_DAY = '1680',
    TIGER_WOODS = '462',
    ADAM_SCOTT = '388',
    HENRIK_STENSON = '576',
    PATRICK_REED = '5579',
    MATT_KUCHAR = '257',
    BRANDT_SNEDEKER = '1222',
    JUSTIN_ROSE = '569',
    JASON_DUFNER = '110',
    SERGIO_GARCIA = '158',
    LEE_WESTWOOD = '455',
    LOUIS_OOSTHUIZEN = '1293',
    BILLY_HORSCHEL = '1651',
    HIDEKI_MATSUYAMA = '5860',
    ZACH_JOHNSON = '686',
    JIM_FURYK = '153',
    CHRIS_KIRK = '3449',
    COREY_CONNERS = '9126',
    CHARL_SHWARTZEL = '1097',
    DANNY_WILLET = '4304',
    BROOKS_KOEPKA = '6798',
    KEVIN_KISNER = '2552',
    JUSTIN_THOMAS = '4848',
    BILL_HAAS = '774',
    JON_RAHM = '9780',
    MARC_LEISHMAN = '3351',
    ALEX_NOREN = '3832',
    MARTIN_KAYMER = '3670',
    GARY_WOODLAND = '3550',
    NIEBRUGGE = '9402',
    THOMAS_PIETERS = '9031',
    BRYSON_DECHAMBEAU = '10046',
    FABRIZIO_ZANOTTI = '1770',
    TONY_FINAU = '2230',
    CHARLEY_HOFFMAN = '205',
    PAUL_CASEY = '72',
    DANIEL_BERGER = '9025',
    KEVIN_CHAPPELL = '3857',
    RUSSELL_HENLEY = '5409',
    TOMMY_FLEETWOOD = '5539',
    IAN_POULTER = '619',
    XANDER_SCHAUFFELE = '10140',
    KIRADECH_APHIBARNRAT = '5771',
    FRANCESCO_MOLINARI = '1483',
    PATRICK_CANTLAY = '6007',
    SUNGJAE_IM = '11382',
    COLLIN_MORIKAWA = '10592',
    MATTHEW_FITZPATRICK = '9037',
    WEBB_SIMPSON = '1614',
    MATTHEW_WOLFF = '4412121',
    CAMERON_SMITH = '9131',
    SHANE_LOWRY = '4587',
    CAMERON_CHAMP = '11098',
    SCOTTIE_SCHEFFLER = '9478',
    MAX_HOMA = '8973',
    CARLOS_ORTIZ = '5532',
    VIKTOR_HOVLAND = '4364873',
    KH_LEE = '7083',
    ABRAHAM_ANCER = '9261',
    SAM_BURNS = '9938',
    CHEZ_REAVIE = '769',
    WILL_ZALATORIS = '9877',
    TYRRELL_HATTON = '5553',
    CAMERON_YOUNG = '4425906',
    TOM_HOGE = '6086',
    MIN_WOO_LEE = '4410932',
    WYNDHAM_CLARK = '11119',
    LUDVIG_ABERG = '4375972',
    SAHITH_THEEGALA = '10980',
    AKSHAY_BHATIA = '4419142',
    JOAQUIN_NIEMANN = '11099',
    DENNY_MCCARTHY = '10054',
    JJ_SPAUN = '10166',
    KEEGAN_BRADLEY = '4513',
    PATRICK_RODGERS = '6825',
    MICHAEL_THORBJORNSEN = '4425904',
    JAKE_KNAPP = '9843',
    MAVERICK_MCNEALY = '9530',
    SEPP_STRAKA = '8961',
    SI_WOO_KIM = '7081';

fantasy.config = {
    tournamentName: '2025 US Open',
    tournamentId: 401703515,
    firstPlaceValue: 50,
    showCut: false,
    apiKey: '_____',
    teams: [
        {
            name: 'DaveG',
            golfers: [
                SCOTTIE_SCHEFFLER,
                BRYSON_DECHAMBEAU,
                JON_RAHM,
                TOMMY_FLEETWOOD,
                SAM_BURNS
            ]
        }, {
            name: 'MeaganG',
            golfers: [
                RORY_MCILROY,
                JON_RAHM,
                LUDVIG_ABERG,
                COLLIN_MORIKAWA,
                VIKTOR_HOVLAND
            ]
        }, {
            name: 'TedM',
            golfers: [
                SCOTTIE_SCHEFFLER,
                RORY_MCILROY,
                JON_RAHM,
                JUSTIN_THOMAS,
                TOMMY_FLEETWOOD
            ]
        }, {
            name: 'JackG',
            golfers: [
                SCOTTIE_SCHEFFLER,
                XANDER_SCHAUFFELE,
                TOMMY_FLEETWOOD,
                VIKTOR_HOVLAND,
                MAVERICK_MCNEALY
            ]
        }, {
            name: 'JettaG',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JON_RAHM,
                LUDVIG_ABERG,
                PATRICK_CANTLAY,
                JUSTIN_THOMAS
            ]
        }, {
            name: 'CarolM',
            golfers: [
                COREY_CONNERS,
                BRYSON_DECHAMBEAU,
                SCOTTIE_SCHEFFLER,
                HIDEKI_MATSUYAMA,
                JON_RAHM
            ]
        }, {
            name: 'JohnG',
            golfers: [
                SCOTTIE_SCHEFFLER,
                BRYSON_DECHAMBEAU,
                JON_RAHM,
                JOAQUIN_NIEMANN,
                JORDAN_SPIETH
            ]
        }, {
            name: 'BillT',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JON_RAHM,
                BRYSON_DECHAMBEAU,
                COLLIN_MORIKAWA,
                SEPP_STRAKA
            ]
        }, {
            name: 'ClayT',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JON_RAHM,
                XANDER_SCHAUFFELE,
                COLLIN_MORIKAWA,
                SI_WOO_KIM // 7081
            ]
        }, {
            name: 'SamT',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JON_RAHM,
                BRYSON_DECHAMBEAU,
                COLLIN_MORIKAWA,
                SHANE_LOWRY
            ]
        }, {
            name: 'ArchieT',
            golfers: [
                SCOTTIE_SCHEFFLER,
                JON_RAHM,
                BRYSON_DECHAMBEAU,
                KEEGAN_BRADLEY,
                SEPP_STRAKA
            ]
        }, {
            name: 'AdamP',
            golfers: [
                SCOTTIE_SCHEFFLER,
                BRYSON_DECHAMBEAU,
                JON_RAHM,
                SAM_BURNS,
                SHANE_LOWRY
            ]
        }, {
            name: 'JB',
            golfers: [
                SCOTTIE_SCHEFFLER,
                BRYSON_DECHAMBEAU,
                XANDER_SCHAUFFELE,
                COLLIN_MORIKAWA,
                JUSTIN_ROSE
            ]
        }, {
            name: 'GrantG',
            golfers: [
                SCOTTIE_SCHEFFLER,
                BRYSON_DECHAMBEAU,
                JON_RAHM,
                COLLIN_MORIKAWA,
                DENNY_MCCARTHY
            ]
        }
    ]
};